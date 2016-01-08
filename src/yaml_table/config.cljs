(defn chan-matching-yaml-object->chan-columns-object [c1]
  (let [c2 (chan 1)]
    (go 
     (>! c2 (.-columns (<! c1))))
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
            (if (= returned-yaml-object.file_extesion ext)
              (>! c returned-yaml-object)
              (close! c)))))) 
   c))

(defn yaml-table-config->chan-array-header-columns [ext])
  (get-yaml-config string synchronously)
  (determine how many documents n are in the config string)
  (fill channel of size 1 with first yaml document that matches ext)
  (suck document from channel and convert it into js array columns object)
  (construct js columns object from matching object; stick it in channel))

  -> (.readFileSync (node/require "fs") ".yaml-table" "utf8") ; make this a function
     (yaml-config-string->chan-matching-yaml-object)
     (chan-matching-yaml-object->chan-columns-object)
     
