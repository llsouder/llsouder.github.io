(ns adventure.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:import goog.History)
  (:require [secretary.core :as secretary]
            [goog.events :as gevents]
            [goog.history.EventType :as EventType]
            [adventure.events :as events]
            [re-frame.core :as re-frame]))

(defn hook-browser-navigation! []
  (doto (History.)
    (gevents/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn app-routes []
  (secretary/set-config! :prefix "#")
  ;; --------------------
  ;; define routes here
  (defroute "/" []
    (re-frame/dispatch [::events/set-active-panel :home-panel]))

  (defroute "/about" []
    (re-frame/dispatch [::events/set-active-panel :about-panel]))

  (defroute "/puzzle/:id" {:as params}
    (println "help" (keyword (str "puzzle-" (:id params))))
    (re-frame/dispatch [::events/set-active-panel (keyword (str "puzzle-" (:id params)))])))

(defroute "/escape" []
  (re-frame/dispatch [::events/set-active-panel :escape-panel]))

(defroute "/die" []
  (re-frame/dispatch [::events/set-active-panel :die-panel]))

(hook-browser-navigation!)

(defn set-hash! [loc]
  (set! (.-hash js/window.location) loc))
