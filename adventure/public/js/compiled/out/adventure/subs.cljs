(ns adventure.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 ::keypress
 (fn [db]
   (:keypress db)))

(re-frame/reg-sub
 ::location
 (fn [db]
   (:location db)))

(re-frame/reg-sub
 ::active-panel
 (fn [db _]
   (:active-panel db)))

(re-frame/reg-sub
 ::update-board
 (fn [db _]
   (:board db)))
