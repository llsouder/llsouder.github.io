// Compiled by ClojureScript 1.9.908 {}
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
var G__29419__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29419 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29420__i = 0, G__29420__a = new Array(arguments.length -  0);
while (G__29420__i < G__29420__a.length) {G__29420__a[G__29420__i] = arguments[G__29420__i + 0]; ++G__29420__i;}
  args = new cljs.core.IndexedSeq(G__29420__a,0,null);
} 
return G__29419__delegate.call(this,args);};
G__29419.cljs$lang$maxFixedArity = 0;
G__29419.cljs$lang$applyTo = (function (arglist__29421){
var args = cljs.core.seq(arglist__29421);
return G__29419__delegate(args);
});
G__29419.cljs$core$IFn$_invoke$arity$variadic = G__29419__delegate;
return G__29419;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__29422__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29422 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29423__i = 0, G__29423__a = new Array(arguments.length -  0);
while (G__29423__i < G__29423__a.length) {G__29423__a[G__29423__i] = arguments[G__29423__i + 0]; ++G__29423__i;}
  args = new cljs.core.IndexedSeq(G__29423__a,0,null);
} 
return G__29422__delegate.call(this,args);};
G__29422.cljs$lang$maxFixedArity = 0;
G__29422.cljs$lang$applyTo = (function (arglist__29424){
var args = cljs.core.seq(arglist__29424);
return G__29422__delegate(args);
});
G__29422.cljs$core$IFn$_invoke$arity$variadic = G__29422__delegate;
return G__29422;
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

//# sourceMappingURL=debug.js.map?rel=1522528329346
