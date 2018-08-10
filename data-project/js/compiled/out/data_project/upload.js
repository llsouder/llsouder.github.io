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
data_project.upload.extract_result = cljs.core.map.call(null,(function (p1__26413_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__26413_SHARP_.target.result);
}));
data_project.upload.upload_reqs = cljs.core.async.chan.call(null,(1),data_project.upload.first_file);
data_project.upload.file_reads = cljs.core.async.chan.call(null,(1),data_project.upload.extract_result);
data_project.upload.put_upload = (function data_project$upload$put_upload(e){
return cljs.core.async.put_BANG_.call(null,data_project.upload.upload_reqs,e);
});
var c__24471__auto___26436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24471__auto___26436){
return (function (){
var f__24472__auto__ = (function (){var switch__24381__auto__ = ((function (c__24471__auto___26436){
return (function (state_26426){
var state_val_26427 = (state_26426[(1)]);
if((state_val_26427 === (1))){
var state_26426__$1 = state_26426;
var statearr_26428_26437 = state_26426__$1;
(statearr_26428_26437[(2)] = null);

(statearr_26428_26437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26427 === (2))){
var inst_26416 = (new FileReader());
var state_26426__$1 = (function (){var statearr_26429 = state_26426;
(statearr_26429[(7)] = inst_26416);

return statearr_26429;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26426__$1,(4),data_project.upload.upload_reqs);
} else {
if((state_val_26427 === (3))){
var inst_26424 = (state_26426[(2)]);
var state_26426__$1 = state_26426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26426__$1,inst_26424);
} else {
if((state_val_26427 === (4))){
var inst_26416 = (state_26426[(7)]);
var inst_26418 = (state_26426[(2)]);
var inst_26419 = (function (){var reader = inst_26416;
var file = inst_26418;
return ((function (reader,file,inst_26416,inst_26418,state_val_26427,c__24471__auto___26436){
return (function (p1__26414_SHARP_){
return cljs.core.async.put_BANG_.call(null,data_project.upload.file_reads,p1__26414_SHARP_);
});
;})(reader,file,inst_26416,inst_26418,state_val_26427,c__24471__auto___26436))
})();
var inst_26420 = inst_26416.onload = inst_26419;
var inst_26421 = inst_26416.readAsText(inst_26418);
var state_26426__$1 = (function (){var statearr_26430 = state_26426;
(statearr_26430[(8)] = inst_26420);

(statearr_26430[(9)] = inst_26421);

return statearr_26430;
})();
var statearr_26431_26438 = state_26426__$1;
(statearr_26431_26438[(2)] = null);

(statearr_26431_26438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__24471__auto___26436))
;
return ((function (switch__24381__auto__,c__24471__auto___26436){
return (function() {
var data_project$upload$state_machine__24382__auto__ = null;
var data_project$upload$state_machine__24382__auto____0 = (function (){
var statearr_26432 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26432[(0)] = data_project$upload$state_machine__24382__auto__);

(statearr_26432[(1)] = (1));

return statearr_26432;
});
var data_project$upload$state_machine__24382__auto____1 = (function (state_26426){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__.call(null,state_26426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e26433){if((e26433 instanceof Object)){
var ex__24385__auto__ = e26433;
var statearr_26434_26439 = state_26426;
(statearr_26434_26439[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26440 = state_26426;
state_26426 = G__26440;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
data_project$upload$state_machine__24382__auto__ = function(state_26426){
switch(arguments.length){
case 0:
return data_project$upload$state_machine__24382__auto____0.call(this);
case 1:
return data_project$upload$state_machine__24382__auto____1.call(this,state_26426);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
data_project$upload$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = data_project$upload$state_machine__24382__auto____0;
data_project$upload$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = data_project$upload$state_machine__24382__auto____1;
return data_project$upload$state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24471__auto___26436))
})();
var state__24473__auto__ = (function (){var statearr_26435 = f__24472__auto__.call(null);
(statearr_26435[(6)] = c__24471__auto___26436);

return statearr_26435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24473__auto__);
});})(c__24471__auto___26436))
);

var c__24471__auto___26458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24471__auto___26458){
return (function (){
var f__24472__auto__ = (function (){var switch__24381__auto__ = ((function (c__24471__auto___26458){
return (function (state_26449){
var state_val_26450 = (state_26449[(1)]);
if((state_val_26450 === (1))){
var state_26449__$1 = state_26449;
var statearr_26451_26459 = state_26449__$1;
(statearr_26451_26459[(2)] = null);

(statearr_26451_26459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (2))){
var state_26449__$1 = state_26449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26449__$1,(4),data_project.upload.file_reads);
} else {
if((state_val_26450 === (3))){
var inst_26447 = (state_26449[(2)]);
var state_26449__$1 = state_26449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26449__$1,inst_26447);
} else {
if((state_val_26450 === (4))){
var inst_26443 = (state_26449[(2)]);
var inst_26444 = cljs.core.reset_BANG_.call(null,data_project.upload.file_data,inst_26443);
var state_26449__$1 = (function (){var statearr_26452 = state_26449;
(statearr_26452[(7)] = inst_26444);

return statearr_26452;
})();
var statearr_26453_26460 = state_26449__$1;
(statearr_26453_26460[(2)] = null);

(statearr_26453_26460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__24471__auto___26458))
;
return ((function (switch__24381__auto__,c__24471__auto___26458){
return (function() {
var data_project$upload$state_machine__24382__auto__ = null;
var data_project$upload$state_machine__24382__auto____0 = (function (){
var statearr_26454 = [null,null,null,null,null,null,null,null];
(statearr_26454[(0)] = data_project$upload$state_machine__24382__auto__);

(statearr_26454[(1)] = (1));

return statearr_26454;
});
var data_project$upload$state_machine__24382__auto____1 = (function (state_26449){
while(true){
var ret_value__24383__auto__ = (function (){try{while(true){
var result__24384__auto__ = switch__24381__auto__.call(null,state_26449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24384__auto__;
}
break;
}
}catch (e26455){if((e26455 instanceof Object)){
var ex__24385__auto__ = e26455;
var statearr_26456_26461 = state_26449;
(statearr_26456_26461[(5)] = ex__24385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26462 = state_26449;
state_26449 = G__26462;
continue;
} else {
return ret_value__24383__auto__;
}
break;
}
});
data_project$upload$state_machine__24382__auto__ = function(state_26449){
switch(arguments.length){
case 0:
return data_project$upload$state_machine__24382__auto____0.call(this);
case 1:
return data_project$upload$state_machine__24382__auto____1.call(this,state_26449);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
data_project$upload$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$0 = data_project$upload$state_machine__24382__auto____0;
data_project$upload$state_machine__24382__auto__.cljs$core$IFn$_invoke$arity$1 = data_project$upload$state_machine__24382__auto____1;
return data_project$upload$state_machine__24382__auto__;
})()
;})(switch__24381__auto__,c__24471__auto___26458))
})();
var state__24473__auto__ = (function (){var statearr_26457 = f__24472__auto__.call(null);
(statearr_26457[(6)] = c__24471__auto___26458);

return statearr_26457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24473__auto__);
});})(c__24471__auto___26458))
);

data_project.upload.input_component = (function data_project$upload$input_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"id","id",-1388402092),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),".txt",new cljs.core.Keyword(null,"name","name",1843675177),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),data_project.upload.put_upload], null)], null);
});

//# sourceMappingURL=upload.js.map?rel=1533908786061
