// Compiled by ClojureScript 1.10.238 {}
goog.provide('data_project.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('data_project.scene');
goog.require('data_project.page');
cljs.core.enable_console_print_BANG_.call(null);
data_project.core.on_js_reload = (function data_project$core$on_js_reload(){
return null;
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data_project.page.home_page], null),document.getElementById("app"));
data_project.scene.add_scene.call(null,document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1533908786120
