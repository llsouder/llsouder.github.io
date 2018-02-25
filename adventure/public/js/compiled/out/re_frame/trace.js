// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__34462){
var map__34463 = p__34462;
var map__34463__$1 = ((((!((map__34463 == null)))?((((map__34463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34463):map__34463);
var operation = cljs.core.get.call(null,map__34463__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__34463__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__34463__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__34463__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__27765__auto__ = child_of;
if(cljs.core.truth_(or__27765__auto__)){
return or__27765__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__34465_34477 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__34466_34478 = null;
var count__34467_34479 = (0);
var i__34468_34480 = (0);
while(true){
if((i__34468_34480 < count__34467_34479)){
var vec__34469_34481 = cljs.core._nth.call(null,chunk__34466_34478,i__34468_34480);
var k_34482 = cljs.core.nth.call(null,vec__34469_34481,(0),null);
var cb_34483 = cljs.core.nth.call(null,vec__34469_34481,(1),null);
try{cb_34483.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e34472){var e_34484 = e34472;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_34482,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_34484);
}
var G__34485 = seq__34465_34477;
var G__34486 = chunk__34466_34478;
var G__34487 = count__34467_34479;
var G__34488 = (i__34468_34480 + (1));
seq__34465_34477 = G__34485;
chunk__34466_34478 = G__34486;
count__34467_34479 = G__34487;
i__34468_34480 = G__34488;
continue;
} else {
var temp__4657__auto___34489 = cljs.core.seq.call(null,seq__34465_34477);
if(temp__4657__auto___34489){
var seq__34465_34490__$1 = temp__4657__auto___34489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34465_34490__$1)){
var c__28604__auto___34491 = cljs.core.chunk_first.call(null,seq__34465_34490__$1);
var G__34492 = cljs.core.chunk_rest.call(null,seq__34465_34490__$1);
var G__34493 = c__28604__auto___34491;
var G__34494 = cljs.core.count.call(null,c__28604__auto___34491);
var G__34495 = (0);
seq__34465_34477 = G__34492;
chunk__34466_34478 = G__34493;
count__34467_34479 = G__34494;
i__34468_34480 = G__34495;
continue;
} else {
var vec__34473_34496 = cljs.core.first.call(null,seq__34465_34490__$1);
var k_34497 = cljs.core.nth.call(null,vec__34473_34496,(0),null);
var cb_34498 = cljs.core.nth.call(null,vec__34473_34496,(1),null);
try{cb_34498.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e34476){var e_34499 = e34476;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_34497,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_34499);
}
var G__34500 = cljs.core.next.call(null,seq__34465_34490__$1);
var G__34501 = null;
var G__34502 = (0);
var G__34503 = (0);
seq__34465_34477 = G__34500;
chunk__34466_34478 = G__34501;
count__34467_34479 = G__34502;
i__34468_34480 = G__34503;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1522528346493
