// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__34600 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__34601 = null;
var count__34602 = (0);
var i__34603 = (0);
while(true){
if((i__34603 < count__34602)){
var vec__34604 = cljs.core._nth.call(null,chunk__34601,i__34603);
var effect_key = cljs.core.nth.call(null,vec__34604,(0),null);
var effect_value = cljs.core.nth.call(null,vec__34604,(1),null);
var temp__4655__auto___34610 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___34610)){
var effect_fn_34611 = temp__4655__auto___34610;
effect_fn_34611.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__34612 = seq__34600;
var G__34613 = chunk__34601;
var G__34614 = count__34602;
var G__34615 = (i__34603 + (1));
seq__34600 = G__34612;
chunk__34601 = G__34613;
count__34602 = G__34614;
i__34603 = G__34615;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34600);
if(temp__4657__auto__){
var seq__34600__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34600__$1)){
var c__28604__auto__ = cljs.core.chunk_first.call(null,seq__34600__$1);
var G__34616 = cljs.core.chunk_rest.call(null,seq__34600__$1);
var G__34617 = c__28604__auto__;
var G__34618 = cljs.core.count.call(null,c__28604__auto__);
var G__34619 = (0);
seq__34600 = G__34616;
chunk__34601 = G__34617;
count__34602 = G__34618;
i__34603 = G__34619;
continue;
} else {
var vec__34607 = cljs.core.first.call(null,seq__34600__$1);
var effect_key = cljs.core.nth.call(null,vec__34607,(0),null);
var effect_value = cljs.core.nth.call(null,vec__34607,(1),null);
var temp__4655__auto___34620 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___34620)){
var effect_fn_34621 = temp__4655__auto___34620;
effect_fn_34621.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__34622 = cljs.core.next.call(null,seq__34600__$1);
var G__34623 = null;
var G__34624 = (0);
var G__34625 = (0);
seq__34600 = G__34622;
chunk__34601 = G__34623;
count__34602 = G__34624;
i__34603 = G__34625;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__34626 = cljs.core.seq.call(null,value);
var chunk__34627 = null;
var count__34628 = (0);
var i__34629 = (0);
while(true){
if((i__34629 < count__34628)){
var map__34630 = cljs.core._nth.call(null,chunk__34627,i__34629);
var map__34630__$1 = ((((!((map__34630 == null)))?((((map__34630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34630.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34630):map__34630);
var effect = map__34630__$1;
var ms = cljs.core.get.call(null,map__34630__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__34630__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__34626,chunk__34627,count__34628,i__34629,map__34630,map__34630__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__34626,chunk__34627,count__34628,i__34629,map__34630,map__34630__$1,effect,ms,dispatch))
,ms);
}

var G__34634 = seq__34626;
var G__34635 = chunk__34627;
var G__34636 = count__34628;
var G__34637 = (i__34629 + (1));
seq__34626 = G__34634;
chunk__34627 = G__34635;
count__34628 = G__34636;
i__34629 = G__34637;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34626);
if(temp__4657__auto__){
var seq__34626__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34626__$1)){
var c__28604__auto__ = cljs.core.chunk_first.call(null,seq__34626__$1);
var G__34638 = cljs.core.chunk_rest.call(null,seq__34626__$1);
var G__34639 = c__28604__auto__;
var G__34640 = cljs.core.count.call(null,c__28604__auto__);
var G__34641 = (0);
seq__34626 = G__34638;
chunk__34627 = G__34639;
count__34628 = G__34640;
i__34629 = G__34641;
continue;
} else {
var map__34632 = cljs.core.first.call(null,seq__34626__$1);
var map__34632__$1 = ((((!((map__34632 == null)))?((((map__34632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34632):map__34632);
var effect = map__34632__$1;
var ms = cljs.core.get.call(null,map__34632__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__34632__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__34626,chunk__34627,count__34628,i__34629,map__34632,map__34632__$1,effect,ms,dispatch,seq__34626__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__34626,chunk__34627,count__34628,i__34629,map__34632,map__34632__$1,effect,ms,dispatch,seq__34626__$1,temp__4657__auto__))
,ms);
}

var G__34642 = cljs.core.next.call(null,seq__34626__$1);
var G__34643 = null;
var G__34644 = (0);
var G__34645 = (0);
seq__34626 = G__34642;
chunk__34627 = G__34643;
count__34628 = G__34644;
i__34629 = G__34645;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__34646 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__34647 = null;
var count__34648 = (0);
var i__34649 = (0);
while(true){
if((i__34649 < count__34648)){
var event = cljs.core._nth.call(null,chunk__34647,i__34649);
re_frame.router.dispatch.call(null,event);

var G__34650 = seq__34646;
var G__34651 = chunk__34647;
var G__34652 = count__34648;
var G__34653 = (i__34649 + (1));
seq__34646 = G__34650;
chunk__34647 = G__34651;
count__34648 = G__34652;
i__34649 = G__34653;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34646);
if(temp__4657__auto__){
var seq__34646__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34646__$1)){
var c__28604__auto__ = cljs.core.chunk_first.call(null,seq__34646__$1);
var G__34654 = cljs.core.chunk_rest.call(null,seq__34646__$1);
var G__34655 = c__28604__auto__;
var G__34656 = cljs.core.count.call(null,c__28604__auto__);
var G__34657 = (0);
seq__34646 = G__34654;
chunk__34647 = G__34655;
count__34648 = G__34656;
i__34649 = G__34657;
continue;
} else {
var event = cljs.core.first.call(null,seq__34646__$1);
re_frame.router.dispatch.call(null,event);

var G__34658 = cljs.core.next.call(null,seq__34646__$1);
var G__34659 = null;
var G__34660 = (0);
var G__34661 = (0);
seq__34646 = G__34658;
chunk__34647 = G__34659;
count__34648 = G__34660;
i__34649 = G__34661;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__34662 = cljs.core.seq.call(null,value);
var chunk__34663 = null;
var count__34664 = (0);
var i__34665 = (0);
while(true){
if((i__34665 < count__34664)){
var event = cljs.core._nth.call(null,chunk__34663,i__34665);
clear_event.call(null,event);

var G__34666 = seq__34662;
var G__34667 = chunk__34663;
var G__34668 = count__34664;
var G__34669 = (i__34665 + (1));
seq__34662 = G__34666;
chunk__34663 = G__34667;
count__34664 = G__34668;
i__34665 = G__34669;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34662);
if(temp__4657__auto__){
var seq__34662__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34662__$1)){
var c__28604__auto__ = cljs.core.chunk_first.call(null,seq__34662__$1);
var G__34670 = cljs.core.chunk_rest.call(null,seq__34662__$1);
var G__34671 = c__28604__auto__;
var G__34672 = cljs.core.count.call(null,c__28604__auto__);
var G__34673 = (0);
seq__34662 = G__34670;
chunk__34663 = G__34671;
count__34664 = G__34672;
i__34665 = G__34673;
continue;
} else {
var event = cljs.core.first.call(null,seq__34662__$1);
clear_event.call(null,event);

var G__34674 = cljs.core.next.call(null,seq__34662__$1);
var G__34675 = null;
var G__34676 = (0);
var G__34677 = (0);
seq__34662 = G__34674;
chunk__34663 = G__34675;
count__34664 = G__34676;
i__34665 = G__34677;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1522528347229
