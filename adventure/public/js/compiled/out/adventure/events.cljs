(ns adventure.events
  (:require [re-frame.core :as re-frame]
            [adventure.db :as db]))

(re-frame/reg-event-db
 ::initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/reg-event-db
 :keypress
 (fn  [db [_ keycode]]
   (assoc db :keypress keycode)))

(re-frame/reg-event-db
 ::set-active-panel
 (fn [db [_ active-panel]]
   (assoc db :active-panel active-panel)))

(re-frame/reg-event-db
 ::update-board
 (fn [db [_ board]]
   (assoc db :board board)))
