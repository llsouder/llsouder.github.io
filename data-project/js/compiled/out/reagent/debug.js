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
var G__22565__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22565 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22566__i = 0, G__22566__a = new Array(arguments.length -  0);
while (G__22566__i < G__22566__a.length) {G__22566__a[G__22566__i] = arguments[G__22566__i + 0]; ++G__22566__i;}
  args = new cljs.core.IndexedSeq(G__22566__a,0,null);
} 
return G__22565__delegate.call(this,args);};
G__22565.cljs$lang$maxFixedArity = 0;
G__22565.cljs$lang$applyTo = (function (arglist__22567){
var args = cljs.core.seq(arglist__22567);
return G__22565__delegate(args);
});
G__22565.cljs$core$IFn$_invoke$arity$variadic = G__22565__delegate;
return G__22565;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__22568__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22568 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22569__i = 0, G__22569__a = new Array(arguments.length -  0);
while (G__22569__i < G__22569__a.length) {G__22569__a[G__22569__i] = arguments[G__22569__i + 0]; ++G__22569__i;}
  args = new cljs.core.IndexedSeq(G__22569__a,0,null);
} 
return G__22568__delegate.call(this,args);};
G__22568.cljs$lang$maxFixedArity = 0;
G__22568.cljs$lang$applyTo = (function (arglist__22570){
var args = cljs.core.seq(arglist__22570);
return G__22568__delegate(args);
});
G__22568.cljs$core$IFn$_invoke$arity$variadic = G__22568__delegate;
return G__22568;
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

//# sourceMappingURL=debug.js.map?rel=1533908782361
