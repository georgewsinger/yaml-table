(ns yaml-table.core
  (:require [cljs.nodejs :as node]
            [cljs.core.async :refer [close! take! put! chan <! >! alts!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(node/enable-util-print!)

(defn file-path->string-with-contents [path]
  (let [fs (node/require "fs")]
    (.readFileSync fs path "utf8")
    ))

(defn string->yaml-object-chan [string]
  (let
    [yaml (node/require "js-yaml") 
      fs (node/require "fs") 
      c (chan 1)]
    (go 
      (.safeLoadAll 
        yaml
        string 
        (fn [returned-yaml-object] 
          (go 
            (>! c returned-yaml-object)
            (close! c))))) 
    c))

(defn fill-vector-from-chan [c]
  (into [] [(go <! c)]))

(def not-nil? (complement nil?))

(defn vector-with-channels->channel-with-array [vwc]
  (let [c (chan 1)]
    (go-loop [ov vwc tv []]
      (if (empty? ov)
        (>! c (clj->js tv))
        (let [[v p] (alts! ov)]
          (recur (vec (remove #{p} ov)) (conj tv v))))
    ) c ))


(defn chan-array-of-objects-yaml->table [oc arg2]
  (let 
    [res (node/require "../resources/print-overview-table-from-array.js")]
    (go (.printOverviewTableFromArray res (<! oc) arg2))))

(defn path->chan-vec-dec-strings [input-path]
  (let [c (chan 1) dir (node/require "node-dir")]
    (.files dir input-path (fn [err files] 
                               (go (>! c (js->clj (.filter files (fn [file] (.endsWith file ".dec")))))))
    ) 
    c ))

(defn -main [& heh]
  (let [ path (str (first heh))
        days (js/parseInt (second heh))
        cv (-> path path->chan-vec-dec-strings)
        mf (comp string->yaml-object-chan file-path->string-with-contents)]

    (go 
      (let [one (mapv mf (<! cv))]
        (chan-array-of-objects-yaml->table 
          (vector-with-channels->channel-with-array one) days)))))

(set! *main-cli-fn* -main)
