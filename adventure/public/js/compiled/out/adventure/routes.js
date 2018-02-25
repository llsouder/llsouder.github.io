// Compiled by ClojureScript 1.9.908 {}
goog.provide('adventure.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('adventure.events');
goog.require('re_frame.core');
adventure.routes.hook_browser_navigation_BANG_ = (function adventure$routes$hook_browser_navigation_BANG_(){
var G__41904 = (new goog.History());
goog.events.listen(G__41904,goog.history.EventType.NAVIGATE,((function (G__41904){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__41904))
);

G__41904.setEnabled(true);

return G__41904;
});
adventure.routes.app_routes = (function adventure$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__37102__auto___41919 = (function (params__37103__auto__){
if(cljs.core.map_QMARK_.call(null,params__37103__auto__)){
var map__41905 = params__37103__auto__;
var map__41905__$1 = ((((!((map__41905 == null)))?((((map__41905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41905):map__41905);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.events","set-active-panel","adventure.events/set-active-panel",-527792093),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__37103__auto__)){
var vec__41907 = params__37103__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.events","set-active-panel","adventure.events/set-active-panel",-527792093),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__37102__auto___41919);


var action__37102__auto___41920 = (function (params__37103__auto__){
if(cljs.core.map_QMARK_.call(null,params__37103__auto__)){
var map__41910 = params__37103__auto__;
var map__41910__$1 = ((((!((map__41910 == null)))?((((map__41910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41910):map__41910);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.events","set-active-panel","adventure.events/set-active-panel",-527792093),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__37103__auto__)){
var vec__41912 = params__37103__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.events","set-active-panel","adventure.events/set-active-panel",-527792093),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__37102__auto___41920);


var action__37102__auto__ = (function (params__37103__auto__){
if(cljs.core.map_QMARK_.call(null,params__37103__auto__)){
var map__41915 = params__37103__auto__;
var map__41915__$1 = ((((!((map__41915 == null)))?((((map__41915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41915):map__41915);
var params = map__41915__$1;
cljs.core.println.call(null,"help",cljs.core.keyword.call(null,["puzzle-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params))].join('')));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.events","set-active-panel","adventure.events/set-active-panel",-527792093),cljs.core.keyword.call(null,["puzzle-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params))].join(''))], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__37103__auto__)){
var map__41917 = params__37103__auto__;
var map__41917__$1 = ((((!((map__41917 == null)))?((((map__41917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41917.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41917):map__41917);
var params = map__41917__$1;
cljs.core.println.call(null,"help",cljs.core.keyword.call(null,["puzzle-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params))].join('')));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.events","set-active-panel","adventure.events/set-active-panel",-527792093),cljs.core.keyword.call(null,["puzzle-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params))].join(''))], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/puzzle/:id",action__37102__auto__);

return ((function (action__37102__auto__){
return (function() { 
var G__41921__delegate = function (args__37101__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/puzzle/:id",args__37101__auto__);
};
var G__41921 = function (var_args){
var args__37101__auto__ = null;
if (arguments.length > 0) {
var G__41922__i = 0, G__41922__a = new Array(arguments.length -  0);
while (G__41922__i < G__41922__a.length) {G__41922__a[G__41922__i] = arguments[G__41922__i + 0]; ++G__41922__i;}
  args__37101__auto__ = new cljs.core.IndexedSeq(G__41922__a,0,null);
} 
return G__41921__delegate.call(this,args__37101__auto__);};
G__41921.cljs$lang$maxFixedArity = 0;
G__41921.cljs$lang$applyTo = (function (arglist__41923){
var args__37101__auto__ = cljs.core.seq(arglist__41923);
return G__41921__delegate(args__37101__auto__);
});
G__41921.cljs$core$IFn$_invoke$arity$variadic = G__41921__delegate;
return G__41921;
})()
;
;})(action__37102__auto__))
});
var action__37102__auto___41929 = (function (params__37103__auto__){
if(cljs.core.map_QMARK_.call(null,params__37103__auto__)){
var map__41924 = params__37103__auto__;
var map__41924__$1 = ((((!((map__41924 == null)))?((((map__41924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41924):map__41924);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.events","set-active-panel","adventure.events/set-active-panel",-527792093),new cljs.core.Keyword(null,"escape-panel","escape-panel",-1095231672)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__37103__auto__)){
var vec__41926 = params__37103__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.events","set-active-panel","adventure.events/set-active-panel",-527792093),new cljs.core.Keyword(null,"escape-panel","escape-panel",-1095231672)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/escape",action__37102__auto___41929);

var action__37102__auto___41935 = (function (params__37103__auto__){
if(cljs.core.map_QMARK_.call(null,params__37103__auto__)){
var map__41930 = params__37103__auto__;
var map__41930__$1 = ((((!((map__41930 == null)))?((((map__41930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41930):map__41930);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.events","set-active-panel","adventure.events/set-active-panel",-527792093),new cljs.core.Keyword(null,"die-panel","die-panel",1998247486)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__37103__auto__)){
var vec__41932 = params__37103__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.events","set-active-panel","adventure.events/set-active-panel",-527792093),new cljs.core.Keyword(null,"die-panel","die-panel",1998247486)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/die",action__37102__auto___41935);

adventure.routes.hook_browser_navigation_BANG_.call(null);
adventure.routes.set_hash_BANG_ = (function adventure$routes$set_hash_BANG_(loc){
return window.location.hash = loc;
});

//# sourceMappingURL=routes.js.map?rel=1522530135031
