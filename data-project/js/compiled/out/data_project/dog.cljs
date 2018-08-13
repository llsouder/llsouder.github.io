(ns data-project.dog
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
             [reagent.core :as r]
             [cljs.core.async :refer [<!]]))

(def image (r/atom ""))

(defn update!
  []
  (go (let [response (<! (http/get "https://api.thedogapi.com/v1/images/search"
                                   {:with-credentials? false}))]
        (reset! image (first (map :url (:body response)))))))

(defn update-gif!
  []
  (go (let [response (<! (http/get "https://api.thedogapi.com/v1/images/search"
                                   {:with-credentials? false
                                    :query-params {"mime_types" "gif"}}))]
        (reset! image (first (map :url (:body response)))))))
