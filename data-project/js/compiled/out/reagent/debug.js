// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__26838__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26838 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26839__i = 0, G__26839__a = new Array(arguments.length -  0);
while (G__26839__i < G__26839__a.length) {G__26839__a[G__26839__i] = arguments[G__26839__i + 0]; ++G__26839__i;}
  args = new cljs.core.IndexedSeq(G__26839__a,0,null);
} 
return G__26838__delegate.call(this,args);};
G__26838.cljs$lang$maxFixedArity = 0;
G__26838.cljs$lang$applyTo = (function (arglist__26840){
var args = cljs.core.seq(arglist__26840);
return G__26838__delegate(args);
});
G__26838.cljs$core$IFn$_invoke$arity$variadic = G__26838__delegate;
return G__26838;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26841__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26841 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26842__i = 0, G__26842__a = new Array(arguments.length -  0);
while (G__26842__i < G__26842__a.length) {G__26842__a[G__26842__i] = arguments[G__26842__i + 0]; ++G__26842__i;}
  args = new cljs.core.IndexedSeq(G__26842__a,0,null);
} 
return G__26841__delegate.call(this,args);};
G__26841.cljs$lang$maxFixedArity = 0;
G__26841.cljs$lang$applyTo = (function (arglist__26843){
var args = cljs.core.seq(arglist__26843);
return G__26841__delegate(args);
});
G__26841.cljs$core$IFn$_invoke$arity$variadic = G__26841__delegate;
return G__26841;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1534123148918
