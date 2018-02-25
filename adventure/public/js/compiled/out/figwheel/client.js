// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e38365){if((e38365 instanceof Error)){
var e = e38365;
return "Error: Unable to stringify";
} else {
throw e38365;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38368 = arguments.length;
switch (G__38368) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38366_SHARP_){
if(typeof p1__38366_SHARP_ === 'string'){
return p1__38366_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38366_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__28941__auto__ = [];
var len__28934__auto___38371 = arguments.length;
var i__28935__auto___38372 = (0);
while(true){
if((i__28935__auto___38372 < len__28934__auto___38371)){
args__28941__auto__.push((arguments[i__28935__auto___38372]));

var G__38373 = (i__28935__auto___38372 + (1));
i__28935__auto___38372 = G__38373;
continue;
} else {
}
break;
}

var argseq__28942__auto__ = ((((0) < args__28941__auto__.length))?(new cljs.core.IndexedSeq(args__28941__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28942__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38370){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38370));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28941__auto__ = [];
var len__28934__auto___38375 = arguments.length;
var i__28935__auto___38376 = (0);
while(true){
if((i__28935__auto___38376 < len__28934__auto___38375)){
args__28941__auto__.push((arguments[i__28935__auto___38376]));

var G__38377 = (i__28935__auto___38376 + (1));
i__28935__auto___38376 = G__38377;
continue;
} else {
}
break;
}

var argseq__28942__auto__ = ((((0) < args__28941__auto__.length))?(new cljs.core.IndexedSeq(args__28941__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28942__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38374){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38374));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38378){
var map__38379 = p__38378;
var map__38379__$1 = ((((!((map__38379 == null)))?((((map__38379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38379.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38379):map__38379);
var message = cljs.core.get.call(null,map__38379__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38379__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27765__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27765__auto__)){
return or__27765__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27753__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27753__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27753__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__31193__auto___38458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto___38458,ch){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto___38458,ch){
return (function (state_38430){
var state_val_38431 = (state_38430[(1)]);
if((state_val_38431 === (7))){
var inst_38426 = (state_38430[(2)]);
var state_38430__$1 = state_38430;
var statearr_38432_38459 = state_38430__$1;
(statearr_38432_38459[(2)] = inst_38426);

(statearr_38432_38459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (1))){
var state_38430__$1 = state_38430;
var statearr_38433_38460 = state_38430__$1;
(statearr_38433_38460[(2)] = null);

(statearr_38433_38460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (4))){
var inst_38383 = (state_38430[(7)]);
var inst_38383__$1 = (state_38430[(2)]);
var state_38430__$1 = (function (){var statearr_38434 = state_38430;
(statearr_38434[(7)] = inst_38383__$1);

return statearr_38434;
})();
if(cljs.core.truth_(inst_38383__$1)){
var statearr_38435_38461 = state_38430__$1;
(statearr_38435_38461[(1)] = (5));

} else {
var statearr_38436_38462 = state_38430__$1;
(statearr_38436_38462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (15))){
var inst_38390 = (state_38430[(8)]);
var inst_38405 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38390);
var inst_38406 = cljs.core.first.call(null,inst_38405);
var inst_38407 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38406);
var inst_38408 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38407)].join('');
var inst_38409 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38408);
var state_38430__$1 = state_38430;
var statearr_38437_38463 = state_38430__$1;
(statearr_38437_38463[(2)] = inst_38409);

(statearr_38437_38463[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (13))){
var inst_38414 = (state_38430[(2)]);
var state_38430__$1 = state_38430;
var statearr_38438_38464 = state_38430__$1;
(statearr_38438_38464[(2)] = inst_38414);

(statearr_38438_38464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (6))){
var state_38430__$1 = state_38430;
var statearr_38439_38465 = state_38430__$1;
(statearr_38439_38465[(2)] = null);

(statearr_38439_38465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (17))){
var inst_38412 = (state_38430[(2)]);
var state_38430__$1 = state_38430;
var statearr_38440_38466 = state_38430__$1;
(statearr_38440_38466[(2)] = inst_38412);

(statearr_38440_38466[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (3))){
var inst_38428 = (state_38430[(2)]);
var state_38430__$1 = state_38430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38430__$1,inst_38428);
} else {
if((state_val_38431 === (12))){
var inst_38389 = (state_38430[(9)]);
var inst_38403 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38389,opts);
var state_38430__$1 = state_38430;
if(cljs.core.truth_(inst_38403)){
var statearr_38441_38467 = state_38430__$1;
(statearr_38441_38467[(1)] = (15));

} else {
var statearr_38442_38468 = state_38430__$1;
(statearr_38442_38468[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (2))){
var state_38430__$1 = state_38430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38430__$1,(4),ch);
} else {
if((state_val_38431 === (11))){
var inst_38390 = (state_38430[(8)]);
var inst_38395 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38396 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38390);
var inst_38397 = cljs.core.async.timeout.call(null,(1000));
var inst_38398 = [inst_38396,inst_38397];
var inst_38399 = (new cljs.core.PersistentVector(null,2,(5),inst_38395,inst_38398,null));
var state_38430__$1 = state_38430;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38430__$1,(14),inst_38399);
} else {
if((state_val_38431 === (9))){
var inst_38390 = (state_38430[(8)]);
var inst_38416 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38417 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38390);
var inst_38418 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38417);
var inst_38419 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38418)].join('');
var inst_38420 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38419);
var state_38430__$1 = (function (){var statearr_38443 = state_38430;
(statearr_38443[(10)] = inst_38416);

return statearr_38443;
})();
var statearr_38444_38469 = state_38430__$1;
(statearr_38444_38469[(2)] = inst_38420);

(statearr_38444_38469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (5))){
var inst_38383 = (state_38430[(7)]);
var inst_38385 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38386 = (new cljs.core.PersistentArrayMap(null,2,inst_38385,null));
var inst_38387 = (new cljs.core.PersistentHashSet(null,inst_38386,null));
var inst_38388 = figwheel.client.focus_msgs.call(null,inst_38387,inst_38383);
var inst_38389 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38388);
var inst_38390 = cljs.core.first.call(null,inst_38388);
var inst_38391 = figwheel.client.autoload_QMARK_.call(null);
var state_38430__$1 = (function (){var statearr_38445 = state_38430;
(statearr_38445[(9)] = inst_38389);

(statearr_38445[(8)] = inst_38390);

return statearr_38445;
})();
if(cljs.core.truth_(inst_38391)){
var statearr_38446_38470 = state_38430__$1;
(statearr_38446_38470[(1)] = (8));

} else {
var statearr_38447_38471 = state_38430__$1;
(statearr_38447_38471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (14))){
var inst_38401 = (state_38430[(2)]);
var state_38430__$1 = state_38430;
var statearr_38448_38472 = state_38430__$1;
(statearr_38448_38472[(2)] = inst_38401);

(statearr_38448_38472[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (16))){
var state_38430__$1 = state_38430;
var statearr_38449_38473 = state_38430__$1;
(statearr_38449_38473[(2)] = null);

(statearr_38449_38473[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (10))){
var inst_38422 = (state_38430[(2)]);
var state_38430__$1 = (function (){var statearr_38450 = state_38430;
(statearr_38450[(11)] = inst_38422);

return statearr_38450;
})();
var statearr_38451_38474 = state_38430__$1;
(statearr_38451_38474[(2)] = null);

(statearr_38451_38474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (8))){
var inst_38389 = (state_38430[(9)]);
var inst_38393 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38389,opts);
var state_38430__$1 = state_38430;
if(cljs.core.truth_(inst_38393)){
var statearr_38452_38475 = state_38430__$1;
(statearr_38452_38475[(1)] = (11));

} else {
var statearr_38453_38476 = state_38430__$1;
(statearr_38453_38476[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31193__auto___38458,ch))
;
return ((function (switch__31105__auto__,c__31193__auto___38458,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31106__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31106__auto____0 = (function (){
var statearr_38454 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38454[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31106__auto__);

(statearr_38454[(1)] = (1));

return statearr_38454;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31106__auto____1 = (function (state_38430){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_38430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e38455){if((e38455 instanceof Object)){
var ex__31109__auto__ = e38455;
var statearr_38456_38477 = state_38430;
(statearr_38456_38477[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38478 = state_38430;
state_38430 = G__38478;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31106__auto__ = function(state_38430){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31106__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31106__auto____1.call(this,state_38430);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31106__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31106__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto___38458,ch))
})();
var state__31195__auto__ = (function (){var statearr_38457 = f__31194__auto__.call(null);
(statearr_38457[(6)] = c__31193__auto___38458);

return statearr_38457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto___38458,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38479_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38479_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38481 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38481){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38480){if((e38480 instanceof Error)){
var e = e38480;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38481], null));
} else {
var e = e38480;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38481))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38482){
var map__38483 = p__38482;
var map__38483__$1 = ((((!((map__38483 == null)))?((((map__38483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38483):map__38483);
var opts = map__38483__$1;
var build_id = cljs.core.get.call(null,map__38483__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38483,map__38483__$1,opts,build_id){
return (function (p__38485){
var vec__38486 = p__38485;
var seq__38487 = cljs.core.seq.call(null,vec__38486);
var first__38488 = cljs.core.first.call(null,seq__38487);
var seq__38487__$1 = cljs.core.next.call(null,seq__38487);
var map__38489 = first__38488;
var map__38489__$1 = ((((!((map__38489 == null)))?((((map__38489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38489):map__38489);
var msg = map__38489__$1;
var msg_name = cljs.core.get.call(null,map__38489__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38487__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38486,seq__38487,first__38488,seq__38487__$1,map__38489,map__38489__$1,msg,msg_name,_,map__38483,map__38483__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38486,seq__38487,first__38488,seq__38487__$1,map__38489,map__38489__$1,msg,msg_name,_,map__38483,map__38483__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38483,map__38483__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38491){
var vec__38492 = p__38491;
var seq__38493 = cljs.core.seq.call(null,vec__38492);
var first__38494 = cljs.core.first.call(null,seq__38493);
var seq__38493__$1 = cljs.core.next.call(null,seq__38493);
var map__38495 = first__38494;
var map__38495__$1 = ((((!((map__38495 == null)))?((((map__38495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38495.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38495):map__38495);
var msg = map__38495__$1;
var msg_name = cljs.core.get.call(null,map__38495__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38493__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38497){
var map__38498 = p__38497;
var map__38498__$1 = ((((!((map__38498 == null)))?((((map__38498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38498.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38498):map__38498);
var on_compile_warning = cljs.core.get.call(null,map__38498__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38498__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38498,map__38498__$1,on_compile_warning,on_compile_fail){
return (function (p__38500){
var vec__38501 = p__38500;
var seq__38502 = cljs.core.seq.call(null,vec__38501);
var first__38503 = cljs.core.first.call(null,seq__38502);
var seq__38502__$1 = cljs.core.next.call(null,seq__38502);
var map__38504 = first__38503;
var map__38504__$1 = ((((!((map__38504 == null)))?((((map__38504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38504):map__38504);
var msg = map__38504__$1;
var msg_name = cljs.core.get.call(null,map__38504__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38502__$1;
var pred__38506 = cljs.core._EQ_;
var expr__38507 = msg_name;
if(cljs.core.truth_(pred__38506.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38507))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38506.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38507))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38498,map__38498__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto__,msg_hist,msg_names,msg){
return (function (state_38596){
var state_val_38597 = (state_38596[(1)]);
if((state_val_38597 === (7))){
var inst_38516 = (state_38596[(2)]);
var state_38596__$1 = state_38596;
if(cljs.core.truth_(inst_38516)){
var statearr_38598_38645 = state_38596__$1;
(statearr_38598_38645[(1)] = (8));

} else {
var statearr_38599_38646 = state_38596__$1;
(statearr_38599_38646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (20))){
var inst_38590 = (state_38596[(2)]);
var state_38596__$1 = state_38596;
var statearr_38600_38647 = state_38596__$1;
(statearr_38600_38647[(2)] = inst_38590);

(statearr_38600_38647[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (27))){
var inst_38586 = (state_38596[(2)]);
var state_38596__$1 = state_38596;
var statearr_38601_38648 = state_38596__$1;
(statearr_38601_38648[(2)] = inst_38586);

(statearr_38601_38648[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (1))){
var inst_38509 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38596__$1 = state_38596;
if(cljs.core.truth_(inst_38509)){
var statearr_38602_38649 = state_38596__$1;
(statearr_38602_38649[(1)] = (2));

} else {
var statearr_38603_38650 = state_38596__$1;
(statearr_38603_38650[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (24))){
var inst_38588 = (state_38596[(2)]);
var state_38596__$1 = state_38596;
var statearr_38604_38651 = state_38596__$1;
(statearr_38604_38651[(2)] = inst_38588);

(statearr_38604_38651[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (4))){
var inst_38594 = (state_38596[(2)]);
var state_38596__$1 = state_38596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38596__$1,inst_38594);
} else {
if((state_val_38597 === (15))){
var inst_38592 = (state_38596[(2)]);
var state_38596__$1 = state_38596;
var statearr_38605_38652 = state_38596__$1;
(statearr_38605_38652[(2)] = inst_38592);

(statearr_38605_38652[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (21))){
var inst_38545 = (state_38596[(2)]);
var inst_38546 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38547 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38546);
var state_38596__$1 = (function (){var statearr_38606 = state_38596;
(statearr_38606[(7)] = inst_38545);

return statearr_38606;
})();
var statearr_38607_38653 = state_38596__$1;
(statearr_38607_38653[(2)] = inst_38547);

(statearr_38607_38653[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (31))){
var inst_38575 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38596__$1 = state_38596;
if(cljs.core.truth_(inst_38575)){
var statearr_38608_38654 = state_38596__$1;
(statearr_38608_38654[(1)] = (34));

} else {
var statearr_38609_38655 = state_38596__$1;
(statearr_38609_38655[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (32))){
var inst_38584 = (state_38596[(2)]);
var state_38596__$1 = state_38596;
var statearr_38610_38656 = state_38596__$1;
(statearr_38610_38656[(2)] = inst_38584);

(statearr_38610_38656[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (33))){
var inst_38571 = (state_38596[(2)]);
var inst_38572 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38573 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38572);
var state_38596__$1 = (function (){var statearr_38611 = state_38596;
(statearr_38611[(8)] = inst_38571);

return statearr_38611;
})();
var statearr_38612_38657 = state_38596__$1;
(statearr_38612_38657[(2)] = inst_38573);

(statearr_38612_38657[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (13))){
var inst_38530 = figwheel.client.heads_up.clear.call(null);
var state_38596__$1 = state_38596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38596__$1,(16),inst_38530);
} else {
if((state_val_38597 === (22))){
var inst_38551 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38552 = figwheel.client.heads_up.append_warning_message.call(null,inst_38551);
var state_38596__$1 = state_38596;
var statearr_38613_38658 = state_38596__$1;
(statearr_38613_38658[(2)] = inst_38552);

(statearr_38613_38658[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (36))){
var inst_38582 = (state_38596[(2)]);
var state_38596__$1 = state_38596;
var statearr_38614_38659 = state_38596__$1;
(statearr_38614_38659[(2)] = inst_38582);

(statearr_38614_38659[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (29))){
var inst_38562 = (state_38596[(2)]);
var inst_38563 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38564 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38563);
var state_38596__$1 = (function (){var statearr_38615 = state_38596;
(statearr_38615[(9)] = inst_38562);

return statearr_38615;
})();
var statearr_38616_38660 = state_38596__$1;
(statearr_38616_38660[(2)] = inst_38564);

(statearr_38616_38660[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (6))){
var inst_38511 = (state_38596[(10)]);
var state_38596__$1 = state_38596;
var statearr_38617_38661 = state_38596__$1;
(statearr_38617_38661[(2)] = inst_38511);

(statearr_38617_38661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (28))){
var inst_38558 = (state_38596[(2)]);
var inst_38559 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38560 = figwheel.client.heads_up.display_warning.call(null,inst_38559);
var state_38596__$1 = (function (){var statearr_38618 = state_38596;
(statearr_38618[(11)] = inst_38558);

return statearr_38618;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38596__$1,(29),inst_38560);
} else {
if((state_val_38597 === (25))){
var inst_38556 = figwheel.client.heads_up.clear.call(null);
var state_38596__$1 = state_38596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38596__$1,(28),inst_38556);
} else {
if((state_val_38597 === (34))){
var inst_38577 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38596__$1 = state_38596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38596__$1,(37),inst_38577);
} else {
if((state_val_38597 === (17))){
var inst_38536 = (state_38596[(2)]);
var inst_38537 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38538 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38537);
var state_38596__$1 = (function (){var statearr_38619 = state_38596;
(statearr_38619[(12)] = inst_38536);

return statearr_38619;
})();
var statearr_38620_38662 = state_38596__$1;
(statearr_38620_38662[(2)] = inst_38538);

(statearr_38620_38662[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (3))){
var inst_38528 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38596__$1 = state_38596;
if(cljs.core.truth_(inst_38528)){
var statearr_38621_38663 = state_38596__$1;
(statearr_38621_38663[(1)] = (13));

} else {
var statearr_38622_38664 = state_38596__$1;
(statearr_38622_38664[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (12))){
var inst_38524 = (state_38596[(2)]);
var state_38596__$1 = state_38596;
var statearr_38623_38665 = state_38596__$1;
(statearr_38623_38665[(2)] = inst_38524);

(statearr_38623_38665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (2))){
var inst_38511 = (state_38596[(10)]);
var inst_38511__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38596__$1 = (function (){var statearr_38624 = state_38596;
(statearr_38624[(10)] = inst_38511__$1);

return statearr_38624;
})();
if(cljs.core.truth_(inst_38511__$1)){
var statearr_38625_38666 = state_38596__$1;
(statearr_38625_38666[(1)] = (5));

} else {
var statearr_38626_38667 = state_38596__$1;
(statearr_38626_38667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (23))){
var inst_38554 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38596__$1 = state_38596;
if(cljs.core.truth_(inst_38554)){
var statearr_38627_38668 = state_38596__$1;
(statearr_38627_38668[(1)] = (25));

} else {
var statearr_38628_38669 = state_38596__$1;
(statearr_38628_38669[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (35))){
var state_38596__$1 = state_38596;
var statearr_38629_38670 = state_38596__$1;
(statearr_38629_38670[(2)] = null);

(statearr_38629_38670[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (19))){
var inst_38549 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38596__$1 = state_38596;
if(cljs.core.truth_(inst_38549)){
var statearr_38630_38671 = state_38596__$1;
(statearr_38630_38671[(1)] = (22));

} else {
var statearr_38631_38672 = state_38596__$1;
(statearr_38631_38672[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (11))){
var inst_38520 = (state_38596[(2)]);
var state_38596__$1 = state_38596;
var statearr_38632_38673 = state_38596__$1;
(statearr_38632_38673[(2)] = inst_38520);

(statearr_38632_38673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (9))){
var inst_38522 = figwheel.client.heads_up.clear.call(null);
var state_38596__$1 = state_38596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38596__$1,(12),inst_38522);
} else {
if((state_val_38597 === (5))){
var inst_38513 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38596__$1 = state_38596;
var statearr_38633_38674 = state_38596__$1;
(statearr_38633_38674[(2)] = inst_38513);

(statearr_38633_38674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (14))){
var inst_38540 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38596__$1 = state_38596;
if(cljs.core.truth_(inst_38540)){
var statearr_38634_38675 = state_38596__$1;
(statearr_38634_38675[(1)] = (18));

} else {
var statearr_38635_38676 = state_38596__$1;
(statearr_38635_38676[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (26))){
var inst_38566 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38596__$1 = state_38596;
if(cljs.core.truth_(inst_38566)){
var statearr_38636_38677 = state_38596__$1;
(statearr_38636_38677[(1)] = (30));

} else {
var statearr_38637_38678 = state_38596__$1;
(statearr_38637_38678[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (16))){
var inst_38532 = (state_38596[(2)]);
var inst_38533 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38534 = figwheel.client.heads_up.display_exception.call(null,inst_38533);
var state_38596__$1 = (function (){var statearr_38638 = state_38596;
(statearr_38638[(13)] = inst_38532);

return statearr_38638;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38596__$1,(17),inst_38534);
} else {
if((state_val_38597 === (30))){
var inst_38568 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38569 = figwheel.client.heads_up.display_warning.call(null,inst_38568);
var state_38596__$1 = state_38596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38596__$1,(33),inst_38569);
} else {
if((state_val_38597 === (10))){
var inst_38526 = (state_38596[(2)]);
var state_38596__$1 = state_38596;
var statearr_38639_38679 = state_38596__$1;
(statearr_38639_38679[(2)] = inst_38526);

(statearr_38639_38679[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (18))){
var inst_38542 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38543 = figwheel.client.heads_up.display_exception.call(null,inst_38542);
var state_38596__$1 = state_38596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38596__$1,(21),inst_38543);
} else {
if((state_val_38597 === (37))){
var inst_38579 = (state_38596[(2)]);
var state_38596__$1 = state_38596;
var statearr_38640_38680 = state_38596__$1;
(statearr_38640_38680[(2)] = inst_38579);

(statearr_38640_38680[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (8))){
var inst_38518 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38596__$1 = state_38596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38596__$1,(11),inst_38518);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31193__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31105__auto__,c__31193__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31106__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31106__auto____0 = (function (){
var statearr_38641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38641[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31106__auto__);

(statearr_38641[(1)] = (1));

return statearr_38641;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31106__auto____1 = (function (state_38596){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_38596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e38642){if((e38642 instanceof Object)){
var ex__31109__auto__ = e38642;
var statearr_38643_38681 = state_38596;
(statearr_38643_38681[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38682 = state_38596;
state_38596 = G__38682;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31106__auto__ = function(state_38596){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31106__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31106__auto____1.call(this,state_38596);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31106__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31106__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto__,msg_hist,msg_names,msg))
})();
var state__31195__auto__ = (function (){var statearr_38644 = f__31194__auto__.call(null);
(statearr_38644[(6)] = c__31193__auto__);

return statearr_38644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto__,msg_hist,msg_names,msg))
);

return c__31193__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31193__auto___38711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto___38711,ch){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto___38711,ch){
return (function (state_38697){
var state_val_38698 = (state_38697[(1)]);
if((state_val_38698 === (1))){
var state_38697__$1 = state_38697;
var statearr_38699_38712 = state_38697__$1;
(statearr_38699_38712[(2)] = null);

(statearr_38699_38712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (2))){
var state_38697__$1 = state_38697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38697__$1,(4),ch);
} else {
if((state_val_38698 === (3))){
var inst_38695 = (state_38697[(2)]);
var state_38697__$1 = state_38697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38697__$1,inst_38695);
} else {
if((state_val_38698 === (4))){
var inst_38685 = (state_38697[(7)]);
var inst_38685__$1 = (state_38697[(2)]);
var state_38697__$1 = (function (){var statearr_38700 = state_38697;
(statearr_38700[(7)] = inst_38685__$1);

return statearr_38700;
})();
if(cljs.core.truth_(inst_38685__$1)){
var statearr_38701_38713 = state_38697__$1;
(statearr_38701_38713[(1)] = (5));

} else {
var statearr_38702_38714 = state_38697__$1;
(statearr_38702_38714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (5))){
var inst_38685 = (state_38697[(7)]);
var inst_38687 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38685);
var state_38697__$1 = state_38697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38697__$1,(8),inst_38687);
} else {
if((state_val_38698 === (6))){
var state_38697__$1 = state_38697;
var statearr_38703_38715 = state_38697__$1;
(statearr_38703_38715[(2)] = null);

(statearr_38703_38715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (7))){
var inst_38693 = (state_38697[(2)]);
var state_38697__$1 = state_38697;
var statearr_38704_38716 = state_38697__$1;
(statearr_38704_38716[(2)] = inst_38693);

(statearr_38704_38716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (8))){
var inst_38689 = (state_38697[(2)]);
var state_38697__$1 = (function (){var statearr_38705 = state_38697;
(statearr_38705[(8)] = inst_38689);

return statearr_38705;
})();
var statearr_38706_38717 = state_38697__$1;
(statearr_38706_38717[(2)] = null);

(statearr_38706_38717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__31193__auto___38711,ch))
;
return ((function (switch__31105__auto__,c__31193__auto___38711,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31106__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31106__auto____0 = (function (){
var statearr_38707 = [null,null,null,null,null,null,null,null,null];
(statearr_38707[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31106__auto__);

(statearr_38707[(1)] = (1));

return statearr_38707;
});
var figwheel$client$heads_up_plugin_$_state_machine__31106__auto____1 = (function (state_38697){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_38697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e38708){if((e38708 instanceof Object)){
var ex__31109__auto__ = e38708;
var statearr_38709_38718 = state_38697;
(statearr_38709_38718[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38719 = state_38697;
state_38697 = G__38719;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31106__auto__ = function(state_38697){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31106__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31106__auto____1.call(this,state_38697);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31106__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31106__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto___38711,ch))
})();
var state__31195__auto__ = (function (){var statearr_38710 = f__31194__auto__.call(null);
(statearr_38710[(6)] = c__31193__auto___38711);

return statearr_38710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto___38711,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto__){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto__){
return (function (state_38725){
var state_val_38726 = (state_38725[(1)]);
if((state_val_38726 === (1))){
var inst_38720 = cljs.core.async.timeout.call(null,(3000));
var state_38725__$1 = state_38725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38725__$1,(2),inst_38720);
} else {
if((state_val_38726 === (2))){
var inst_38722 = (state_38725[(2)]);
var inst_38723 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38725__$1 = (function (){var statearr_38727 = state_38725;
(statearr_38727[(7)] = inst_38722);

return statearr_38727;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38725__$1,inst_38723);
} else {
return null;
}
}
});})(c__31193__auto__))
;
return ((function (switch__31105__auto__,c__31193__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31106__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31106__auto____0 = (function (){
var statearr_38728 = [null,null,null,null,null,null,null,null];
(statearr_38728[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31106__auto__);

(statearr_38728[(1)] = (1));

return statearr_38728;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31106__auto____1 = (function (state_38725){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_38725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e38729){if((e38729 instanceof Object)){
var ex__31109__auto__ = e38729;
var statearr_38730_38732 = state_38725;
(statearr_38730_38732[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38733 = state_38725;
state_38725 = G__38733;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31106__auto__ = function(state_38725){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31106__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31106__auto____1.call(this,state_38725);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31106__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31106__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto__))
})();
var state__31195__auto__ = (function (){var statearr_38731 = f__31194__auto__.call(null);
(statearr_38731[(6)] = c__31193__auto__);

return statearr_38731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto__))
);

return c__31193__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38740){
var state_val_38741 = (state_38740[(1)]);
if((state_val_38741 === (1))){
var inst_38734 = cljs.core.async.timeout.call(null,(2000));
var state_38740__$1 = state_38740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38740__$1,(2),inst_38734);
} else {
if((state_val_38741 === (2))){
var inst_38736 = (state_38740[(2)]);
var inst_38737 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38738 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38737);
var state_38740__$1 = (function (){var statearr_38742 = state_38740;
(statearr_38742[(7)] = inst_38736);

return statearr_38742;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38740__$1,inst_38738);
} else {
return null;
}
}
});})(c__31193__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__31105__auto__,c__31193__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31106__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31106__auto____0 = (function (){
var statearr_38743 = [null,null,null,null,null,null,null,null];
(statearr_38743[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31106__auto__);

(statearr_38743[(1)] = (1));

return statearr_38743;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31106__auto____1 = (function (state_38740){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_38740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e38744){if((e38744 instanceof Object)){
var ex__31109__auto__ = e38744;
var statearr_38745_38747 = state_38740;
(statearr_38745_38747[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38748 = state_38740;
state_38740 = G__38748;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31106__auto__ = function(state_38740){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31106__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31106__auto____1.call(this,state_38740);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31106__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31106__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto__,figwheel_version,temp__4657__auto__))
})();
var state__31195__auto__ = (function (){var statearr_38746 = f__31194__auto__.call(null);
(statearr_38746[(6)] = c__31193__auto__);

return statearr_38746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto__,figwheel_version,temp__4657__auto__))
);

return c__31193__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38749){
var map__38750 = p__38749;
var map__38750__$1 = ((((!((map__38750 == null)))?((((map__38750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38750):map__38750);
var file = cljs.core.get.call(null,map__38750__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38750__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38750__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38752 = "";
var G__38752__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38752),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38752);
var G__38752__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38752__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38752__$1);
if(cljs.core.truth_((function (){var and__27753__auto__ = line;
if(cljs.core.truth_(and__27753__auto__)){
return column;
} else {
return and__27753__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38752__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38752__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38753){
var map__38754 = p__38753;
var map__38754__$1 = ((((!((map__38754 == null)))?((((map__38754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38754):map__38754);
var ed = map__38754__$1;
var formatted_exception = cljs.core.get.call(null,map__38754__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38754__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38754__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38756_38760 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38757_38761 = null;
var count__38758_38762 = (0);
var i__38759_38763 = (0);
while(true){
if((i__38759_38763 < count__38758_38762)){
var msg_38764 = cljs.core._nth.call(null,chunk__38757_38761,i__38759_38763);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38764);

var G__38765 = seq__38756_38760;
var G__38766 = chunk__38757_38761;
var G__38767 = count__38758_38762;
var G__38768 = (i__38759_38763 + (1));
seq__38756_38760 = G__38765;
chunk__38757_38761 = G__38766;
count__38758_38762 = G__38767;
i__38759_38763 = G__38768;
continue;
} else {
var temp__4657__auto___38769 = cljs.core.seq.call(null,seq__38756_38760);
if(temp__4657__auto___38769){
var seq__38756_38770__$1 = temp__4657__auto___38769;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38756_38770__$1)){
var c__28604__auto___38771 = cljs.core.chunk_first.call(null,seq__38756_38770__$1);
var G__38772 = cljs.core.chunk_rest.call(null,seq__38756_38770__$1);
var G__38773 = c__28604__auto___38771;
var G__38774 = cljs.core.count.call(null,c__28604__auto___38771);
var G__38775 = (0);
seq__38756_38760 = G__38772;
chunk__38757_38761 = G__38773;
count__38758_38762 = G__38774;
i__38759_38763 = G__38775;
continue;
} else {
var msg_38776 = cljs.core.first.call(null,seq__38756_38770__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38776);

var G__38777 = cljs.core.next.call(null,seq__38756_38770__$1);
var G__38778 = null;
var G__38779 = (0);
var G__38780 = (0);
seq__38756_38760 = G__38777;
chunk__38757_38761 = G__38778;
count__38758_38762 = G__38779;
i__38759_38763 = G__38780;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38781){
var map__38782 = p__38781;
var map__38782__$1 = ((((!((map__38782 == null)))?((((map__38782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38782):map__38782);
var w = map__38782__$1;
var message = cljs.core.get.call(null,map__38782__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__27753__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27753__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27753__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38784 = cljs.core.seq.call(null,plugins);
var chunk__38785 = null;
var count__38786 = (0);
var i__38787 = (0);
while(true){
if((i__38787 < count__38786)){
var vec__38788 = cljs.core._nth.call(null,chunk__38785,i__38787);
var k = cljs.core.nth.call(null,vec__38788,(0),null);
var plugin = cljs.core.nth.call(null,vec__38788,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38794 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38784,chunk__38785,count__38786,i__38787,pl_38794,vec__38788,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38794.call(null,msg_hist);
});})(seq__38784,chunk__38785,count__38786,i__38787,pl_38794,vec__38788,k,plugin))
);
} else {
}

var G__38795 = seq__38784;
var G__38796 = chunk__38785;
var G__38797 = count__38786;
var G__38798 = (i__38787 + (1));
seq__38784 = G__38795;
chunk__38785 = G__38796;
count__38786 = G__38797;
i__38787 = G__38798;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38784);
if(temp__4657__auto__){
var seq__38784__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38784__$1)){
var c__28604__auto__ = cljs.core.chunk_first.call(null,seq__38784__$1);
var G__38799 = cljs.core.chunk_rest.call(null,seq__38784__$1);
var G__38800 = c__28604__auto__;
var G__38801 = cljs.core.count.call(null,c__28604__auto__);
var G__38802 = (0);
seq__38784 = G__38799;
chunk__38785 = G__38800;
count__38786 = G__38801;
i__38787 = G__38802;
continue;
} else {
var vec__38791 = cljs.core.first.call(null,seq__38784__$1);
var k = cljs.core.nth.call(null,vec__38791,(0),null);
var plugin = cljs.core.nth.call(null,vec__38791,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38803 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38784,chunk__38785,count__38786,i__38787,pl_38803,vec__38791,k,plugin,seq__38784__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38803.call(null,msg_hist);
});})(seq__38784,chunk__38785,count__38786,i__38787,pl_38803,vec__38791,k,plugin,seq__38784__$1,temp__4657__auto__))
);
} else {
}

var G__38804 = cljs.core.next.call(null,seq__38784__$1);
var G__38805 = null;
var G__38806 = (0);
var G__38807 = (0);
seq__38784 = G__38804;
chunk__38785 = G__38805;
count__38786 = G__38806;
i__38787 = G__38807;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__38809 = arguments.length;
switch (G__38809) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38810_38815 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38811_38816 = null;
var count__38812_38817 = (0);
var i__38813_38818 = (0);
while(true){
if((i__38813_38818 < count__38812_38817)){
var msg_38819 = cljs.core._nth.call(null,chunk__38811_38816,i__38813_38818);
figwheel.client.socket.handle_incoming_message.call(null,msg_38819);

var G__38820 = seq__38810_38815;
var G__38821 = chunk__38811_38816;
var G__38822 = count__38812_38817;
var G__38823 = (i__38813_38818 + (1));
seq__38810_38815 = G__38820;
chunk__38811_38816 = G__38821;
count__38812_38817 = G__38822;
i__38813_38818 = G__38823;
continue;
} else {
var temp__4657__auto___38824 = cljs.core.seq.call(null,seq__38810_38815);
if(temp__4657__auto___38824){
var seq__38810_38825__$1 = temp__4657__auto___38824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38810_38825__$1)){
var c__28604__auto___38826 = cljs.core.chunk_first.call(null,seq__38810_38825__$1);
var G__38827 = cljs.core.chunk_rest.call(null,seq__38810_38825__$1);
var G__38828 = c__28604__auto___38826;
var G__38829 = cljs.core.count.call(null,c__28604__auto___38826);
var G__38830 = (0);
seq__38810_38815 = G__38827;
chunk__38811_38816 = G__38828;
count__38812_38817 = G__38829;
i__38813_38818 = G__38830;
continue;
} else {
var msg_38831 = cljs.core.first.call(null,seq__38810_38825__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38831);

var G__38832 = cljs.core.next.call(null,seq__38810_38825__$1);
var G__38833 = null;
var G__38834 = (0);
var G__38835 = (0);
seq__38810_38815 = G__38832;
chunk__38811_38816 = G__38833;
count__38812_38817 = G__38834;
i__38813_38818 = G__38835;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__28941__auto__ = [];
var len__28934__auto___38840 = arguments.length;
var i__28935__auto___38841 = (0);
while(true){
if((i__28935__auto___38841 < len__28934__auto___38840)){
args__28941__auto__.push((arguments[i__28935__auto___38841]));

var G__38842 = (i__28935__auto___38841 + (1));
i__28935__auto___38841 = G__38842;
continue;
} else {
}
break;
}

var argseq__28942__auto__ = ((((0) < args__28941__auto__.length))?(new cljs.core.IndexedSeq(args__28941__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28942__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38837){
var map__38838 = p__38837;
var map__38838__$1 = ((((!((map__38838 == null)))?((((map__38838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38838):map__38838);
var opts = map__38838__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38836){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38836));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38843){if((e38843 instanceof Error)){
var e = e38843;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38843;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38844){
var map__38845 = p__38844;
var map__38845__$1 = ((((!((map__38845 == null)))?((((map__38845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38845):map__38845);
var msg_name = cljs.core.get.call(null,map__38845__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1522528361216
