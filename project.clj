(defproject yaml-table "0.1.0-SNAPSHOT"
  :description "FIXME: write this"
  :url         "http://fix.me"

  :license {:name "MIT"
            :url  "http://opensource.org/licenses/MIT"}
  :dependencies [[org.clojure/clojure       "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [com.cemerick/piggieback "0.2.1"]
                 [org.clojure/tools.nrepl "0.2.10"]
                 [org.clojure/core.async "0.2.374"]]

  :npm {:dependencies [[js-yaml "3.4.6"]
                       [asciitable "0.0.7"]
                       [node-dir "0.1.11"]]}

  :plugins [[org.bodil/lein-noderepl "0.1.11"]
            [lein-cljsbuild          "1.1.2"]
            [lein-npm                "0.6.1"]
            [lein-repls "1.9.5"]]

  :profiles {
    :dev {
      :dependencies [[com.cemerick/piggieback "0.2.1"]
                     [org.clojure/tools.nrepl "0.2.10"]]

      :repl-options {
        :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}}

  :cljsbuild {
    :builds {
      :main {
        :source-paths ["src"]
        :compiler {
        :optimizations :advanced
        :target        :nodejs
        :output-dir    "out"
        :output-to     "lib/yaml-table.js"
        :externs       ["externs.js"]
        :verbose       true
        :pretty-print  true}}}})
