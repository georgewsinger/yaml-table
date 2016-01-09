(ns yaml_table.config
  (:require [cljs.nodejs :as node]
            [cljs.core.async :refer [close! take! put! chan <! >! alts!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

#_(defn chan-matching-yaml-object->chan-array-columns [c1]
    (let [c2 (chan 1)]
      (go 
       (>! c2 (.-options (<! c1))))
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
           (go 
            (if (= (.-file_extension returned-yaml-object) ext)
              (do 
		  (>! c returned-yaml-object)
                  (close! c))))))) 
   c))

; test:
; (go (println (<! (yaml-table-config->chan-matching-yaml-object ".dec"))))
; todo: set default location of .yaml-table to $HOME
(defn yaml-table-config->chan-matching-yaml-object [ext]
  (yaml-config-string->chan-matching-yaml-object 
    (.readFileSync (node/require "fs") "/home/george/Dropbox/yaml-table/.yaml-table" "utf8") ext))
