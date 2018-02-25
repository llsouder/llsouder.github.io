(ns adventure.guess
  (:require [re-com.core :as re-com]
            [re-frame.core :as re-frame] ;;need re-frame for :ontouchstart to work.
            [reagent.core :as reagent]
            [adventure.events :as event]))

(defn check-value [answer value]
  (if (= (str answer) @value)
    (do
      (println "you win"))
    (println "nope" answer @value)))

(defn flip-tags
  "text on the front and back of the panel and the location where
  onclick will send the user."
  [front-text back-text onclick]
  [:div {:class "flip-container" :onClick onclick}
   [:div {:class "flipper"}
   [:div {:class "front"}
    [:h1 front-text]]
   [:div {:class "back"}/
    [:h1 back-text]]]])

(defn escape
  [num]
  (flip-tags num "?" #(re-frame/dispatch [::event/set-active-panel :escape-panel])))

(defn die
  [num]
  (flip-tags num "?" #(re-frame/dispatch [::event/set-active-panel :die:w
                                          -panel])))
  

(defn nothing
  "neither death nor escape."
  [num]
  (flip-tags num "?" ""))

(defn page []
  (let [answer (rand-int 10)
        text-val (reagent/atom "")]
    [:div [:h1 "Find your way out."]
   [re-com/throbber
    :size :large]
     [re-com/h-box
      :children [(escape 1)
                 (die 2)
                 (nothing 3)]]

   [re-com/input-text
    :on-change #(reset! text-val %)
    :model text-val
    :placeholder "1-10"]
   [re-com/button
    :label "Done"
    :on-click #(check-value answer text-val)]]))
