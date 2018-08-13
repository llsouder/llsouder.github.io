(ns data-project.page
  (:require [reagent.core :as r]
            [data-project.color :as color]
            [data-project.dog :as dog]
            [data-project.parse :as parse]
            [data-project.scene :as scene]
            [data-project.upload :as upload]
            [data-project.online :as online]
            [clojure.string :as str]))

(enable-console-print!)

(defonce selected-color (r/atom #{}))
(defonce data-choice (r/atom :file))
(defonce bg-color (r/atom #{"0xCCC"}))

(defn get-names
  [color]
  (if (= :file @data-choice)
    (parse/get-names color (parse/parse-data @upload/file-data))
    (parse/get-names color online/data)))

(defn list-colors
  []
  (if (= :file @data-choice)
    (do
      (println (first (parse/parse-data @upload/file-data)))
      (parse/list-colors (parse/parse-data @upload/file-data)))
    (do
      (println (first online/data))
      (parse/list-colors online/data))))

(defn show-text
  [color]
  (let [names (get-names color)]
    (doall
     (map
       #(scene/display-text % (color/name-to-hex color) (rand-int 100) (- (rand-int 100) 70)) names)))
  (reset! bg-color #{color})
  (swap! selected-color conj color))

(defn remove-text
  [color]
  (let [names (get-names color)]
    (doall (map #(scene/remove-text % ) names)))
  (reset! bg-color #{"gray"})
  (swap! selected-color disj color))

(defn toggle
  [color]
  (if (contains? @selected-color color)
    (remove-text color)
    (show-text color)))

(defn local-component []
  [:input {:type "button" :value "Use local data" :onClick #(reset! data-choice :local)}])

(defn button
  "Make a colorful button that will show the all the names which are in this
  color group."
  [color]
  [:input {:key color :type "button" :value "show" :onClick #(toggle color) :style {:background color}}])

(defn dog-button
  []
  [:input {:key "dog" :type "button" :value "dog?" :onClick dog/update!}])

(defn button-panel
  []
  [:div {:id "button-panel"}
   [upload/input-component]
   [local-component]
   [:div (map button
              (list-colors))]])

(defn dog-panel
  []
  [:div {:id "dog-panel"}
   [:div {:id "dog-button"}
   [dog-button]]
   (when (not-empty @dog/image)
     [:img {:src @dog/image :height "300px" :width "300px"}])])

;; -------------------------
;; Views
(defn home-page []
  [:div {:style {:height 300 :background-color @bg-color}}
   [:h2 "Data-Project GL"]
   [button-panel]
   [dog-panel]])
