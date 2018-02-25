(ns adventure.game
  (:require [adventure.routes :as routes]
            [adventure.events :as events]
            [adventure.tiles :as tile]
            [re-frame.core :as re-frame]))


(defn special-action [panel]
  (re-frame/dispatch [::events/set-active-panel panel])
  true)

(defn check-board
  [x y board]
  (let [tiles (:tiles board)
        tilerow  (tiles y)
        tile (tilerow x)]
    (case tile
      "t" (special-action :puzzle-1)
      "p" "gold"
      (= tile "g"))))

(defn valid-move?
  "Return true if new position is on the board, i.e. coords are >= 0."
  [location axis f board]
  (let [updatedmap (update-in location [axis] f)
        newvals (vals (dissoc updatedmap :action))
        positive (every? #(>= % 0) newvals)
        x (:x updatedmap)
        y (:y updatedmap)
        withingrid (and (< x (:x-size board)) (< y (:y-size board)))]
    (and positive withingrid)))

(defn found-gold
  [old-db new-db]
  (let [tile-loc (:location new-db)
        board (:board old-db)
        tiles (:tiles board)
        updated-tiles (tile/reset-tile tiles tile-loc)
        updated-board (assoc board :tiles updated-tiles)
        return-db (update-in new-db
                             [:location :action]
                             #(str "gold"))]
    (re-frame/dispatch [::events/update-board updated-board])
    return-db))

(defn checkandupdate
  "the db from the event, the axis is :x or :y, and f is inc or dec."
  [db axis f]
  (if (valid-move? (:location db) axis f (:board db))
    (let [newdb (update-in
                 (update-in db [:location axis] f)
                 [:location :action] #(str "none"))
          board (:board db)
          check (check-board (get-in newdb [:location :x])
                       (get-in newdb [:location :y])
                       board)]
      (case check
        "gold" (found-gold db newdb) 
        false (update-in db [:location :action] #(str "bump"))
        true newdb))
    (update-in db [:location :action] #(str "error"))))

;;gets the whole database
;;FIXME I don't think I need the whole database, but I
;;should subscribe for the things I am interested in using.
(re-frame/reg-event-db
 :location
 (fn  [db [_ keycode]]
   (case keycode
     (87 75) (checkandupdate db :y dec) ;;up w k
     (83 74) (checkandupdate db :y inc) ;;down s j
     (68 76) (checkandupdate db :x inc) ;;right d l
     (65 72) (checkandupdate db :x dec) ;;left a h
     (do (println (str "unsupported " keycode))
         db))))
