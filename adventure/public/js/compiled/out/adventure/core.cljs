(ns adventure.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [adventure.events :as events]
            [adventure.views :as views]
            [adventure.routes :as routes]
            [adventure.config :as config]))

(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (routes/app-routes)
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))

;;(defn reset-game
;;  []
;;  (re-frame/dispatch-sync [::events/initialize-db])
;;  (re-frame/dispatch-sync [::events/set-active-panel :home-panel]))
