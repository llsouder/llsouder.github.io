// Compiled by ClojureScript 1.9.908 {}
goog.provide('adventure.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('adventure.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("adventure.events","initialize-db","adventure.events/initialize-db",-1747037419),(function (_,___$1){
return adventure.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"keypress","keypress",1625181642),(function (db,p__41880){
var vec__41881 = p__41880;
var _ = cljs.core.nth.call(null,vec__41881,(0),null);
var keycode = cljs.core.nth.call(null,vec__41881,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"keypress","keypress",1625181642),keycode);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("adventure.events","set-active-panel","adventure.events/set-active-panel",-527792093),(function (db,p__41884){
var vec__41885 = p__41884;
var _ = cljs.core.nth.call(null,vec__41885,(0),null);
var active_panel = cljs.core.nth.call(null,vec__41885,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("adventure.events","update-board","adventure.events/update-board",2055294701),(function (db,p__41888){
var vec__41889 = p__41888;
var _ = cljs.core.nth.call(null,vec__41889,(0),null);
var board = cljs.core.nth.call(null,vec__41889,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"board","board",-1907017633),board);
}));

//# sourceMappingURL=events.js.map?rel=1522530134780
