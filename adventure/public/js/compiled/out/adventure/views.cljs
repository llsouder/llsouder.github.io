(ns adventure.views
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [reagent.core :as reagent]
            [adventure.subs :as subs]
            [adventure.guess :as guess]
            [adventure.events :as events]
            [adventure.routes :as routes]
            [adventure.game :as game]
            [adventure.tiles :as tile]))

(defn initialize-game
  []
  (re-frame/dispatch [::events/initialize-db])
  (re-frame/dispatch [::events/set-active-panel :home-panel]))

(defn action
  [event]
  (let [key-code (.-keyCode event)]
    ;;sends the whole database to game
      (re-frame/dispatch [:location key-code])))

(defn title []
  (let [name (re-frame/subscribe [::subs/name])]
    [re-com/title
     :label @name
     :level :level1]))

(def bump (js/Audio. "bump.wav"))
(def gold (js/Audio. "gold.wav"))

(defn error-panel [panel-name]
  [:div [:h1 "error! error! panel not found"]
        [:h1 (str "\"" panel-name "\"")]
   [re-com/hyperlink
    :label            "restart"
    :tooltip-position :left-center
    :on-click #(re-frame/dispatch [::events/set-active-panel :home-panel])]])

(defn about-panel []
  (routes/set-hash! "/about")
  [:div [:h1 "About"]
  [re-com/hyperlink
          :label            "Home"
          :tooltip-position :left-center
          :on-click #(re-frame/dispatch [::events/set-active-panel :home-panel])]])

(defn home-panel []
  (let [board @(re-frame/subscribe [::subs/update-board])]
  (if (= (:action @(re-frame/subscribe [::subs/location])) "bump")
    (.play bump))
  (if (= (:action @(re-frame/subscribe [::subs/location])) "gold")
    (.play gold))
   [re-com/v-box
    :height "100%"
    :children [(title)
      [:svg {:width "800"
             :height "600"
             :viewBox "0 0 800 600"
             :xmlns "http://www.w3.org/2000/svg"}
     (tile/draw-board board)
     (tile/drawPlayer @(re-frame/subscribe [::subs/location]))]
   [re-com/button
    :label "Restart"
    :on-click initialize-game]]]))

(defn escape-panel []
  [:div [:h1 "You have escaped."]
   [re-com/hyperlink
    :label            "continue"
    :tooltip-position :left-center
    :on-click         #(re-frame/dispatch [::events/set-active-panel :home-panel])]])

(defn die-panel []
  [:div [:h1 "You are DEAD!"]
   [re-com/hyperlink
    :label            "Start Over"
    :tooltip-position :left-center
    :on-click initialize-game]])

(defn- panels [panel-name]
    (println "panel name" panel-name)
  (case panel-name
    :home-panel [home-panel]
    :about-panel [about-panel]
    :puzzle-1 [guess/page]
    :escape-panel [escape-panel]
    :die-panel [die-panel]
    [error-panel panel-name]))

(defn main-panel []
  (.addEventListener js/document "keydown"  action)
  (let [active-panel-db (re-frame/subscribe [::subs/active-panel])]
    [re-com/v-box
     :height "100%"
     :children [[panels @active-panel-db]]]))
