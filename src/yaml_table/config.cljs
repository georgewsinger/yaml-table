(ns config.core
  (:require [cljs.nodejs :as node]
            [cljs.core.async :refer [close! take! put! chan <! >! alts!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(defn chan-matching-yaml-object->chan-array-columns [c1]
  (let [c2 (chan 1)]
    (go 
     ;(println "fastest coder ever:" (<! c1))
     (>! c2 (.-columns (.-options (<! c1))))
    )
  c2))

(defn string->num-yaml-docs [s]
  (min
   ;(.match s /^---$/gm)
   ;(.match s /^...$/gm) 
   (count (re-seq #"^---\n" s))
   (count (re-seq #"\n...$" s))))

(defn yaml-config-string->chan-matching-yaml-object [s, ext]
  (let
   [yaml (node/require "js-yaml") 
    fs   (node/require "fs") 
    c    (chan 1)]
   (go (.safeLoadAll yaml s
         (fn [returned-yaml-object] 
	   (def heh returned-yaml-object)
           (go 
            (if (= (.-file_extesion returned-yaml-object) ext)
	      (println "inside if: " returned-yaml-object)
              (>! c returned-yaml-object)
              (close! c)))))) 
   c))

(defn yaml-table-config->chan-array-columns [ext]
  (chan-matching-yaml-object->chan-array-columns
    (yaml-config-string->chan-matching-yaml-object 
      (.readFileSync (node/require "fs") "/home/george/Dropbox/yaml-table/.yaml-table" "utf8") ext)))

(go (println (<! (yaml-table-config->chan-array-columns ".dec"))))
