// Compiled by ClojureScript 1.10.238 {}
goog.provide('data_project.dog');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('reagent.core');
goog.require('cljs.core.async');
data_project.dog.image = reagent.core.atom.call(null,"");
data_project.dog.update_BANG_ = (function data_project$dog$update_BANG_(){
var c__24527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24527__auto__){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (c__24527__auto__){
return (function (state_27372){
var state_val_27373 = (state_27372[(1)]);
if((state_val_27373 === (1))){
var inst_27361 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_27362 = [false];
var inst_27363 = cljs.core.PersistentHashMap.fromArrays(inst_27361,inst_27362);
var inst_27364 = cljs_http.client.get.call(null,"https://api.thedogapi.com/v1/images/search",inst_27363);
var state_27372__$1 = state_27372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27372__$1,(2),inst_27364);
} else {
if((state_val_27373 === (2))){
var inst_27366 = (state_27372[(2)]);
var inst_27367 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27366);
var inst_27368 = cljs.core.map.call(null,new cljs.core.Keyword(null,"url","url",276297046),inst_27367);
var inst_27369 = cljs.core.first.call(null,inst_27368);
var inst_27370 = cljs.core.reset_BANG_.call(null,data_project.dog.image,inst_27369);
var state_27372__$1 = state_27372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27372__$1,inst_27370);
} else {
return null;
}
}
});})(c__24527__auto__))
;
return ((function (switch__24437__auto__,c__24527__auto__){
return (function() {
var data_project$dog$update_BANG__$_state_machine__24438__auto__ = null;
var data_project$dog$update_BANG__$_state_machine__24438__auto____0 = (function (){
var statearr_27374 = [null,null,null,null,null,null,null];
(statearr_27374[(0)] = data_project$dog$update_BANG__$_state_machine__24438__auto__);

(statearr_27374[(1)] = (1));

return statearr_27374;
});
var data_project$dog$update_BANG__$_state_machine__24438__auto____1 = (function (state_27372){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_27372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e27375){if((e27375 instanceof Object)){
var ex__24441__auto__ = e27375;
var statearr_27376_27378 = state_27372;
(statearr_27376_27378[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27379 = state_27372;
state_27372 = G__27379;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
data_project$dog$update_BANG__$_state_machine__24438__auto__ = function(state_27372){
switch(arguments.length){
case 0:
return data_project$dog$update_BANG__$_state_machine__24438__auto____0.call(this);
case 1:
return data_project$dog$update_BANG__$_state_machine__24438__auto____1.call(this,state_27372);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
data_project$dog$update_BANG__$_state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = data_project$dog$update_BANG__$_state_machine__24438__auto____0;
data_project$dog$update_BANG__$_state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = data_project$dog$update_BANG__$_state_machine__24438__auto____1;
return data_project$dog$update_BANG__$_state_machine__24438__auto__;
})()
;})(switch__24437__auto__,c__24527__auto__))
})();
var state__24529__auto__ = (function (){var statearr_27377 = f__24528__auto__.call(null);
(statearr_27377[(6)] = c__24527__auto__);

return statearr_27377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(c__24527__auto__))
);

return c__24527__auto__;
});
data_project.dog.update_gif_BANG_ = (function data_project$dog$update_gif_BANG_(){
var c__24527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24527__auto__){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (c__24527__auto__){
return (function (state_27394){
var state_val_27395 = (state_27394[(1)]);
if((state_val_27395 === (1))){
var inst_27380 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_27381 = ["mime_types"];
var inst_27382 = ["gif"];
var inst_27383 = cljs.core.PersistentHashMap.fromArrays(inst_27381,inst_27382);
var inst_27384 = [false,inst_27383];
var inst_27385 = cljs.core.PersistentHashMap.fromArrays(inst_27380,inst_27384);
var inst_27386 = cljs_http.client.get.call(null,"https://api.thedogapi.com/v1/images/search",inst_27385);
var state_27394__$1 = state_27394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27394__$1,(2),inst_27386);
} else {
if((state_val_27395 === (2))){
var inst_27388 = (state_27394[(2)]);
var inst_27389 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27388);
var inst_27390 = cljs.core.map.call(null,new cljs.core.Keyword(null,"url","url",276297046),inst_27389);
var inst_27391 = cljs.core.first.call(null,inst_27390);
var inst_27392 = cljs.core.reset_BANG_.call(null,data_project.dog.image,inst_27391);
var state_27394__$1 = state_27394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27394__$1,inst_27392);
} else {
return null;
}
}
});})(c__24527__auto__))
;
return ((function (switch__24437__auto__,c__24527__auto__){
return (function() {
var data_project$dog$update_gif_BANG__$_state_machine__24438__auto__ = null;
var data_project$dog$update_gif_BANG__$_state_machine__24438__auto____0 = (function (){
var statearr_27396 = [null,null,null,null,null,null,null];
(statearr_27396[(0)] = data_project$dog$update_gif_BANG__$_state_machine__24438__auto__);

(statearr_27396[(1)] = (1));

return statearr_27396;
});
var data_project$dog$update_gif_BANG__$_state_machine__24438__auto____1 = (function (state_27394){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_27394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e27397){if((e27397 instanceof Object)){
var ex__24441__auto__ = e27397;
var statearr_27398_27400 = state_27394;
(statearr_27398_27400[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27401 = state_27394;
state_27394 = G__27401;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
data_project$dog$update_gif_BANG__$_state_machine__24438__auto__ = function(state_27394){
switch(arguments.length){
case 0:
return data_project$dog$update_gif_BANG__$_state_machine__24438__auto____0.call(this);
case 1:
return data_project$dog$update_gif_BANG__$_state_machine__24438__auto____1.call(this,state_27394);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
data_project$dog$update_gif_BANG__$_state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = data_project$dog$update_gif_BANG__$_state_machine__24438__auto____0;
data_project$dog$update_gif_BANG__$_state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = data_project$dog$update_gif_BANG__$_state_machine__24438__auto____1;
return data_project$dog$update_gif_BANG__$_state_machine__24438__auto__;
})()
;})(switch__24437__auto__,c__24527__auto__))
})();
var state__24529__auto__ = (function (){var statearr_27399 = f__24528__auto__.call(null);
(statearr_27399[(6)] = c__24527__auto__);

return statearr_27399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(c__24527__auto__))
);

return c__24527__auto__;
});

//# sourceMappingURL=dog.js.map?rel=1534123151484
