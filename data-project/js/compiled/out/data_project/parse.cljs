(ns data-project.parse
  (:require [clojure.string :as str]))

(defn makekvpair
  "makes a key value pair from a : delimited string where the 1st value is the key and the second is the value"
  [line]
  (let [splitline(str/split line #":")]
    {(keyword (nth splitline 0)) (nth splitline 1)}))

(defn makerecord
  "makes a record from a list of strings.  Each string is a : delimited kv pair."
  [thedata]
  (if (> (count thedata) 1)
    (reduce merge {} (map makekvpair thedata))))

(defn parse-data
  "parse data into a list of records."
  [text]
  (keep makerecord (partition-by empty? (str/split-lines text))))

(defn list-colors
  [p-data]
  (keys (group-by :Color p-data)))

(defn get-names
  [color p-data]
  (map :Name (filter #(= (:Color %) color) p-data)))

;;(defn group-by-color
  ;;[data]
    ;;;;list the names of the people in color group
    ;;(for [g (group-by :Color data)]
      ;;(let [color (first g) values (second g) ]
        ;;(into [:div {:id color :style "display:none"} ] [[:font {:color color} (list-items values)]])))):w

