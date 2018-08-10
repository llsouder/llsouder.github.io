(ns data-project.scene
  (:require [reagent.core :refer [render atom]]))

(enable-console-print!)

(defonce scene (js/THREE.Scene.))
(defonce renderer
         (let [renderer (js/THREE.WebGLRenderer.)]
           (.setSize renderer 700 700)
           renderer))

(defonce p-camera (js/THREE.PerspectiveCamera.
                    75 1 0.1 1000))

(defn init []

  ;;First initiate the basic elements of a THREE scene
  (let [controls (js/THREE.OrbitControls. p-camera (aget renderer "domElement"))]

    ;;Change the starting position of cube and camera
    (aset p-camera "name" "p-camera")
    (aset p-camera "position" "z" 100)
    (aset controls "target" (THREE.Vector3. 0 0 0))

    ;;Add camera, mesh and box to scene and then that to DOM node.
    (.add scene p-camera)
    ;Kick off the animation loop updating
    (defn render-3d []
      (.render renderer scene p-camera))

    (defn animate []
      (.requestAnimationFrame js/window animate)
      (render-3d))
    (animate)))

(defn setup
  []
  (js/addTheFloor scene)
  (js/addLights scene))

(def text-template {:text   "test"
                    :name   "test"
                    :size   10
                    :height 3
                    :color  0xaa00aa
                    :x      0
                    :y      10
                    :z      10})

(defn display-text
  [text color y z]
  (js/add3dText (clj->js
    (assoc text-template :name text
                         :text text
                         :y y
                         :z z
                         :color color)) scene))
(defn remove-text
  [name]
  (js/remove (clj->js {:name name}) scene))

;; define your app data so that it doesn't get over-written on reload
(defonce startup-state
         (do
           (init)
           (setup)
           :done))
(defn add-scene
  "element is a js element, e.g. js/document.body"
  [element]
  (.appendChild element (.-domElement renderer)) )
