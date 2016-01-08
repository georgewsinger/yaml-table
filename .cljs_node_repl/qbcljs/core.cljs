;; TO GET vim-fireplace running:
;;
  ;$ lein repl
  ;user=> (require '[cljs.repl.node :as node])
  ;:Piggieback (cljs.repl.node/repl-env)

(ns qbcljs.core
  (:require [cljs.nodejs :as node]
            [cljs.core.async :refer [put! chan <! >!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

;(require-macros '[cljs.core.async :refer [go]])

(node/enable-util-print!) ; seems to work for this version of clojurescript

(defn -main []
  (.log js/console "console.log")
  (println "println test")
  
  (let [c (chan)]
      (go (>! c "hello!"))
      (go (.log js/console (<! c))))

  (let [c (chan)]
      (go (.log js/console (<! c)))
      (go (>! c "later")))
  
  )

(set! *main-cli-fn* -main)

;(.log js/console "hi")

;ClojureScript Node.js REPL server listening on 58526

;; CORRECT SEQUENCE OF EVENTS IN BASH REPL:

;; lein repl
;(require '[cljs.repl :as repl] '[cljs.repl.node :as node])
;(repl/repl (node/repl-env)) ;necessary?
;; (ns qbcljs.core
;;  (:require [cljs.nodejs :as node]))
; (in-ns qbcljs.core (:require '[cljs.nodejs :as node]))
; (require '[cljs.nodejs :as node])
;(def fs (node/require "fs"))
;(.readFile fs "/home/george/Dropbox/briefcase/tonight.dec" "utf8" (fn [err data] (data)))
