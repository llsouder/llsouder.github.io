// Compiled by ClojureScript 1.10.238 {}
goog.provide('data_project.upload');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
if(typeof data_project.upload.file_data !== 'undefined'){
} else {
data_project.upload.file_data = reagent.core.atom.call(null," ");
}
data_project.upload.first_file = cljs.core.map.call(null,(function (e){
var target = e.currentTarget;
var file = (target.files[(0)]);
target.value = "";

return file;
}));
data_project.upload.extract_result = cljs.core.map.call(null,(function (p1__27304_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__27304_SHARP_.target.result);
}));
data_project.upload.upload_reqs = cljs.core.async.chan.call(null,(1),data_project.upload.first_file);
data_project.upload.file_reads = cljs.core.async.chan.call(null,(1),data_project.upload.extract_result);
data_project.upload.put_upload = (function data_project$upload$put_upload(e){
return cljs.core.async.put_BANG_.call(null,data_project.upload.upload_reqs,e);
});
var c__24527__auto___27327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24527__auto___27327){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (c__24527__auto___27327){
return (function (state_27317){
var state_val_27318 = (state_27317[(1)]);
if((state_val_27318 === (1))){
var state_27317__$1 = state_27317;
var statearr_27319_27328 = state_27317__$1;
(statearr_27319_27328[(2)] = null);

(statearr_27319_27328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27318 === (2))){
var inst_27307 = (new FileReader());
var state_27317__$1 = (function (){var statearr_27320 = state_27317;
(statearr_27320[(7)] = inst_27307);

return statearr_27320;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27317__$1,(4),data_project.upload.upload_reqs);
} else {
if((state_val_27318 === (3))){
var inst_27315 = (state_27317[(2)]);
var state_27317__$1 = state_27317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27317__$1,inst_27315);
} else {
if((state_val_27318 === (4))){
var inst_27307 = (state_27317[(7)]);
var inst_27309 = (state_27317[(2)]);
var inst_27310 = (function (){var reader = inst_27307;
var file = inst_27309;
return ((function (reader,file,inst_27307,inst_27309,state_val_27318,c__24527__auto___27327){
return (function (p1__27305_SHARP_){
return cljs.core.async.put_BANG_.call(null,data_project.upload.file_reads,p1__27305_SHARP_);
});
;})(reader,file,inst_27307,inst_27309,state_val_27318,c__24527__auto___27327))
})();
var inst_27311 = inst_27307.onload = inst_27310;
var inst_27312 = inst_27307.readAsText(inst_27309);
var state_27317__$1 = (function (){var statearr_27321 = state_27317;
(statearr_27321[(8)] = inst_27311);

(statearr_27321[(9)] = inst_27312);

return statearr_27321;
})();
var statearr_27322_27329 = state_27317__$1;
(statearr_27322_27329[(2)] = null);

(statearr_27322_27329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__24527__auto___27327))
;
return ((function (switch__24437__auto__,c__24527__auto___27327){
return (function() {
var data_project$upload$state_machine__24438__auto__ = null;
var data_project$upload$state_machine__24438__auto____0 = (function (){
var statearr_27323 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27323[(0)] = data_project$upload$state_machine__24438__auto__);

(statearr_27323[(1)] = (1));

return statearr_27323;
});
var data_project$upload$state_machine__24438__auto____1 = (function (state_27317){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_27317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e27324){if((e27324 instanceof Object)){
var ex__24441__auto__ = e27324;
var statearr_27325_27330 = state_27317;
(statearr_27325_27330[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27331 = state_27317;
state_27317 = G__27331;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
data_project$upload$state_machine__24438__auto__ = function(state_27317){
switch(arguments.length){
case 0:
return data_project$upload$state_machine__24438__auto____0.call(this);
case 1:
return data_project$upload$state_machine__24438__auto____1.call(this,state_27317);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
data_project$upload$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = data_project$upload$state_machine__24438__auto____0;
data_project$upload$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = data_project$upload$state_machine__24438__auto____1;
return data_project$upload$state_machine__24438__auto__;
})()
;})(switch__24437__auto__,c__24527__auto___27327))
})();
var state__24529__auto__ = (function (){var statearr_27326 = f__24528__auto__.call(null);
(statearr_27326[(6)] = c__24527__auto___27327);

return statearr_27326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(c__24527__auto___27327))
);

var c__24527__auto___27349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24527__auto___27349){
return (function (){
var f__24528__auto__ = (function (){var switch__24437__auto__ = ((function (c__24527__auto___27349){
return (function (state_27340){
var state_val_27341 = (state_27340[(1)]);
if((state_val_27341 === (1))){
var state_27340__$1 = state_27340;
var statearr_27342_27350 = state_27340__$1;
(statearr_27342_27350[(2)] = null);

(statearr_27342_27350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (2))){
var state_27340__$1 = state_27340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27340__$1,(4),data_project.upload.file_reads);
} else {
if((state_val_27341 === (3))){
var inst_27338 = (state_27340[(2)]);
var state_27340__$1 = state_27340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27340__$1,inst_27338);
} else {
if((state_val_27341 === (4))){
var inst_27334 = (state_27340[(2)]);
var inst_27335 = cljs.core.reset_BANG_.call(null,data_project.upload.file_data,inst_27334);
var state_27340__$1 = (function (){var statearr_27343 = state_27340;
(statearr_27343[(7)] = inst_27335);

return statearr_27343;
})();
var statearr_27344_27351 = state_27340__$1;
(statearr_27344_27351[(2)] = null);

(statearr_27344_27351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__24527__auto___27349))
;
return ((function (switch__24437__auto__,c__24527__auto___27349){
return (function() {
var data_project$upload$state_machine__24438__auto__ = null;
var data_project$upload$state_machine__24438__auto____0 = (function (){
var statearr_27345 = [null,null,null,null,null,null,null,null];
(statearr_27345[(0)] = data_project$upload$state_machine__24438__auto__);

(statearr_27345[(1)] = (1));

return statearr_27345;
});
var data_project$upload$state_machine__24438__auto____1 = (function (state_27340){
while(true){
var ret_value__24439__auto__ = (function (){try{while(true){
var result__24440__auto__ = switch__24437__auto__.call(null,state_27340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24440__auto__;
}
break;
}
}catch (e27346){if((e27346 instanceof Object)){
var ex__24441__auto__ = e27346;
var statearr_27347_27352 = state_27340;
(statearr_27347_27352[(5)] = ex__24441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27353 = state_27340;
state_27340 = G__27353;
continue;
} else {
return ret_value__24439__auto__;
}
break;
}
});
data_project$upload$state_machine__24438__auto__ = function(state_27340){
switch(arguments.length){
case 0:
return data_project$upload$state_machine__24438__auto____0.call(this);
case 1:
return data_project$upload$state_machine__24438__auto____1.call(this,state_27340);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
data_project$upload$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$0 = data_project$upload$state_machine__24438__auto____0;
data_project$upload$state_machine__24438__auto__.cljs$core$IFn$_invoke$arity$1 = data_project$upload$state_machine__24438__auto____1;
return data_project$upload$state_machine__24438__auto__;
})()
;})(switch__24437__auto__,c__24527__auto___27349))
})();
var state__24529__auto__ = (function (){var statearr_27348 = f__24528__auto__.call(null);
(statearr_27348[(6)] = c__24527__auto___27349);

return statearr_27348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24529__auto__);
});})(c__24527__auto___27349))
);

data_project.upload.input_component = (function data_project$upload$input_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"id","id",-1388402092),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),".txt",new cljs.core.Keyword(null,"name","name",1843675177),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),data_project.upload.put_upload], null)], null);
});

//# sourceMappingURL=upload.js.map?rel=1534123151353
