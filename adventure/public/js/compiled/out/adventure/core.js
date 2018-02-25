// Compiled by ClojureScript 1.9.908 {}
goog.provide('adventure.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('adventure.events');
goog.require('adventure.views');
goog.require('adventure.routes');
goog.require('adventure.config');
adventure.core.dev_setup = (function adventure$core$dev_setup(){
if(adventure.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
adventure.core.mount_root = (function adventure$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [adventure.views.main_panel], null),document.getElementById("app"));
});
adventure.core.init = (function adventure$core$init(){
adventure.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.events","initialize-db","adventure.events/initialize-db",-1747037419)], null));

adventure.core.dev_setup.call(null);

return adventure.core.mount_root.call(null);
});
goog.exportSymbol('adventure.core.init', adventure.core.init);

//# sourceMappingURL=core.js.map?rel=1522530793641
