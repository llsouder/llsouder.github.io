(ns adventure.db
  (:require [adventure.tiles :as tiles]))

(def default-db
  {:name "Adventure"
   :board (tiles/make-board tiles/tiles)
   :active-panel :home-panel
   :location {:x 6 :y 0 :action "none"}})
