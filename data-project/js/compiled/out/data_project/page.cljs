(ns data-project.page
  (:require [reagent.core :as r]
            [data-project.color :as color]
            [data-project.parse :as parse]
            [data-project.scene :as scene]
            [data-project.upload :as upload]
            [clojure.string :as str]))

(enable-console-print!)

(def app-state (r/atom #{}))

(defn show-text
  [color]
  (let [names (parse/get-names color (parse/parse-data @upload/file-data))]
    (doall
     (map
       #(scene/display-text % (color/name-to-hex color) (rand-int 100) (- (rand-int 100) 70)) names)))
  (swap! app-state conj color))

(defn remove-text
  [color]
  (let [names (parse/get-names color (parse/parse-data @upload/file-data))]
    (doall (map #(scene/remove-text % ) names)))
  (swap! app-state disj color))

(defn toggle
  [color]
  (if (contains? @app-state color)
    (remove-text color)
    (show-text color)))

(defn button
  "Make a colorful button that will show the all the names which are in this
  color group."
  [color]
  [:input {:key color :type "button" :value "show" :onClick #(toggle color) :style {:background color}}])

;; -------------------------
;; Views
(defn home-page []
  [:div
   [:h2 "Data-Project GL"]
   [upload/input-component]
   [:div (map button
              (parse/list-colors (parse/parse-data @upload/file-data)))]])
