(ns figwheel.connect.build-dev (:require [adventure.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/adventure.core.mount-root (apply js/adventure.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'adventure.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

