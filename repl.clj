; from project root directory:
; java -cp cljs.jar:src clojure.main repl.clj

(require '[cljs.repl])
(require '[cljs.repl.node])
;(require '[core.async])

(cljs.repl/repl 
  (cljs.repl.node/repl-env)
  :watch "src"
  :output-dir "out"
  :repl-requires '[[cljs.nodejs :as node]
                   [cljs.core.async :refer [put! chan <! >!]]
                   ]) 
