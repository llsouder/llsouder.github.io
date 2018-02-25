// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__33163){
var map__33164 = p__33163;
var map__33164__$1 = ((((!((map__33164 == null)))?((((map__33164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33164.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33164):map__33164);
var args = map__33164__$1;
var on_change = cljs.core.get.call(null,map__33164__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__33164__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__33164__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__33164__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__33164__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__33164__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__33164__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__33166 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__27765__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__27765__auto__)){
return or__27765__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__33166,external_model_value);
} else {
return G__33166;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__33167,event){
var map__33168 = p__33167;
var map__33168__$1 = ((((!((map__33168 == null)))?((((map__33168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33168.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33168):map__33168);
var state = map__33168__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__33170 = event;
var G__33170__$1 = (((G__33170 instanceof cljs.core.Keyword))?G__33170.fqn:null);
switch (G__33170__$1) {
case "input-text-blurred":
var and__27753__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__27753__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__27753__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__27765__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__27765__auto__)){
return or__27765__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33170__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__33172,event){
var map__33173 = p__33172;
var map__33173__$1 = ((((!((map__33173 == null)))?((((map__33173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33173.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33173):map__33173);
var state = map__33173__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__33173__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__33175 = event;
var G__33175__$1 = (((G__33175 instanceof cljs.core.Keyword))?G__33175.fqn:null);
switch (G__33175__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__33177,new_value){
var map__33178 = p__33177;
var map__33178__$1 = ((((!((map__33178 == null)))?((((map__33178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33178.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33178):map__33178);
var state = map__33178__$1;
var on_change = cljs.core.get.call(null,map__33178__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__33180,suggestion){
var map__33181 = p__33180;
var map__33181__$1 = ((((!((map__33181 == null)))?((((map__33181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33181.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33181):map__33181);
var state = map__33181__$1;
var suggestion_to_string = cljs.core.get.call(null,map__33181__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__33183 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__33183,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__33183;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__33184,index){
var map__33185 = p__33184;
var map__33185__$1 = ((((!((map__33185 == null)))?((((map__33185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33185.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33185):map__33185);
var state = map__33185__$1;
var suggestions = cljs.core.get.call(null,map__33185__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__33187 = state;
var G__33187__$1 = cljs.core.assoc.call(null,G__33187,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__33187__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__33187__$1,suggestion):G__33187__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__33187__$2,suggestion);
} else {
return G__33187__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__33188,index){
var map__33189 = p__33188;
var map__33189__$1 = ((((!((map__33189 == null)))?((((map__33189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33189):map__33189);
var state = map__33189__$1;
var suggestions = cljs.core.get.call(null,map__33189__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__33191){
var map__33192 = p__33191;
var map__33192__$1 = ((((!((map__33192 == null)))?((((map__33192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33192.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33192):map__33192);
var state = map__33192__$1;
var suggestion_active_index = cljs.core.get.call(null,map__33192__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__33194 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__33194,suggestion_active_index);
} else {
return G__33194;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__33195){
var map__33196 = p__33195;
var map__33196__$1 = ((((!((map__33196 == null)))?((((map__33196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33196):map__33196);
var state = map__33196__$1;
var suggestions = cljs.core.get.call(null,map__33196__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__33196__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__33198 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__33198,re_com.typeahead.wrap.call(null,((function (){var or__27765__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__27765__auto__)){
return or__27765__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__33198;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__33199){
var map__33200 = p__33199;
var map__33200__$1 = ((((!((map__33200 == null)))?((((map__33200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33200.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33200):map__33200);
var state = map__33200__$1;
var suggestions = cljs.core.get.call(null,map__33200__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__33200__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__33202 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__33202,re_com.typeahead.wrap.call(null,((function (){var or__27765__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__27765__auto__)){
return or__27765__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__33202;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__33203 = state;
var G__33203__$1 = re_com.typeahead.clear_suggestions.call(null,G__33203)
;
var G__33203__$2 = cljs.core.assoc.call(null,G__33203__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__33203__$2,null);
} else {
return G__33203__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__33204){
var map__33205 = p__33204;
var map__33205__$1 = ((((!((map__33205 == null)))?((((map__33205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33205):map__33205);
var state = map__33205__$1;
var input_text = cljs.core.get.call(null,map__33205__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__33205__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__33207 = state;
if(cljs.core.truth_((function (){var and__27753__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__27753__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__27753__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__33207,input_text);
} else {
return G__33207;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__4655__auto__ = data_source.call(null,text,(function (p1__33208_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__33208_SHARP_);
}));
if(cljs.core.truth_(temp__4655__auto__)){
var return_value = temp__4655__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__31193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto__){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto__){
return (function (state_33225){
var state_val_33226 = (state_33225[(1)]);
if((state_val_33226 === (1))){
var state_33225__$1 = state_33225;
var statearr_33227_33239 = state_33225__$1;
(statearr_33227_33239[(2)] = null);

(statearr_33227_33239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (2))){
var state_33225__$1 = state_33225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33225__$1,(4),c_search);
} else {
if((state_val_33226 === (3))){
var inst_33223 = (state_33225[(2)]);
var state_33225__$1 = state_33225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33225__$1,inst_33223);
} else {
if((state_val_33226 === (4))){
var inst_33211 = (state_33225[(7)]);
var inst_33211__$1 = (state_33225[(2)]);
var inst_33212 = cljs.core.deref.call(null,state_atom);
var inst_33213 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_33212);
var inst_33214 = cljs.core._EQ_.call(null,"",inst_33211__$1);
var state_33225__$1 = (function (){var statearr_33228 = state_33225;
(statearr_33228[(7)] = inst_33211__$1);

(statearr_33228[(8)] = inst_33213);

return statearr_33228;
})();
if(inst_33214){
var statearr_33229_33240 = state_33225__$1;
(statearr_33229_33240[(1)] = (5));

} else {
var statearr_33230_33241 = state_33225__$1;
(statearr_33230_33241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (5))){
var inst_33216 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_33225__$1 = state_33225;
var statearr_33231_33242 = state_33225__$1;
(statearr_33231_33242[(2)] = inst_33216);

(statearr_33231_33242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (6))){
var inst_33211 = (state_33225[(7)]);
var inst_33213 = (state_33225[(8)]);
var inst_33218 = re_com.typeahead.search_data_source_BANG_.call(null,inst_33213,state_atom,inst_33211);
var state_33225__$1 = state_33225;
var statearr_33232_33243 = state_33225__$1;
(statearr_33232_33243[(2)] = inst_33218);

(statearr_33232_33243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33226 === (7))){
var inst_33220 = (state_33225[(2)]);
var state_33225__$1 = (function (){var statearr_33233 = state_33225;
(statearr_33233[(9)] = inst_33220);

return statearr_33233;
})();
var statearr_33234_33244 = state_33225__$1;
(statearr_33234_33244[(2)] = null);

(statearr_33234_33244[(1)] = (2));


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
});})(c__31193__auto__))
;
return ((function (switch__31105__auto__,c__31193__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31106__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31106__auto____0 = (function (){
var statearr_33235 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33235[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31106__auto__);

(statearr_33235[(1)] = (1));

return statearr_33235;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31106__auto____1 = (function (state_33225){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_33225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e33236){if((e33236 instanceof Object)){
var ex__31109__auto__ = e33236;
var statearr_33237_33245 = state_33225;
(statearr_33237_33245[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33246 = state_33225;
state_33225 = G__33246;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31106__auto__ = function(state_33225){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31106__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31106__auto____1.call(this,state_33225);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31106__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31106__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto__))
})();
var state__31195__auto__ = (function (){var statearr_33238 = f__31194__auto__.call(null);
(statearr_33238[(6)] = c__31193__auto__);

return statearr_33238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto__))
);

return c__31193__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__33248 = cljs.core.deref.call(null,state_atom);
var map__33248__$1 = ((((!((map__33248 == null)))?((((map__33248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33248.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33248):map__33248);
var state = map__33248__$1;
var input_text = cljs.core.get.call(null,map__33248__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__33248__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__33248,map__33248__$1,state,input_text,c_input){
return (function (p1__33247_SHARP_){
var G__33250 = p1__33247_SHARP_;
var G__33250__$1 = cljs.core.assoc.call(null,G__33250,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__33250__$1,new_text);
} else {
return G__33250__$1;
}
});})(map__33248,map__33248__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__33251 = cljs.core._EQ_;
var expr__33252 = event.which;
if(cljs.core.truth_(pred__33251.call(null,goog.events.KeyCodes.UP,expr__33252))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__33251.call(null,goog.events.KeyCodes.DOWN,expr__33252))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__33251.call(null,goog.events.KeyCodes.ENTER,expr__33252))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__33251.call(null,goog.events.KeyCodes.ESC,expr__33252))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__33251.call(null,goog.events.KeyCodes.TAB,expr__33252))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__28941__auto__ = [];
var len__28934__auto___33276 = arguments.length;
var i__28935__auto___33277 = (0);
while(true){
if((i__28935__auto___33277 < len__28934__auto___33276)){
args__28941__auto__.push((arguments[i__28935__auto___33277]));

var G__33278 = (i__28935__auto___33277 + (1));
i__28935__auto___33277 = G__33278;
continue;
} else {
}
break;
}

var argseq__28942__auto__ = ((((0) < args__28941__auto__.length))?(new cljs.core.IndexedSeq(args__28941__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__28942__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__33256){
var map__33257 = p__33256;
var map__33257__$1 = ((((!((map__33257 == null)))?((((map__33257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33257.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33257):map__33257);
var args = map__33257__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__33259 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__33259__$1 = ((((!((map__33259 == null)))?((((map__33259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33259):map__33259);
var state = map__33259__$1;
var c_search = cljs.core.get.call(null,map__33259__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__33259__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__33259,map__33259__$1,state,c_search,c_input,state_atom,input_text_model,map__33257,map__33257__$1,args){
return (function() { 
var G__33279__delegate = function (p__33261){
var map__33262 = p__33261;
var map__33262__$1 = ((((!((map__33262 == null)))?((((map__33262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33262.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33262):map__33262);
var args__$1 = map__33262__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__33262__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__33262__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__33262__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__33262__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__33262__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__33262__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__33262__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__33262__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__33262__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__33262__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__33262__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__33262__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__33262__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__33262__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__33262__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__33262__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__33262__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__33262__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__33264 = cljs.core.deref.call(null,state_atom);
var map__33264__$1 = ((((!((map__33264 == null)))?((((map__33264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33264):map__33264);
var state__$1 = map__33264__$1;
var suggestions = cljs.core.get.call(null,map__33264__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__33264__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__33264__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__33264__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__27765__auto__ = width;
if(cljs.core.truth_(or__27765__auto__)){
return or__27765__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__27765__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__27765__auto__)){
return or__27765__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__28573__auto__ = ((function (map__33264,map__33264__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33262,map__33262__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33259,map__33259__$1,state,c_search,c_input,state_atom,input_text_model,map__33257,map__33257__$1,args){
return (function re_com$typeahead$iter__33266(s__33267){
return (new cljs.core.LazySeq(null,((function (map__33264,map__33264__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33262,map__33262__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33259,map__33259__$1,state,c_search,c_input,state_atom,input_text_model,map__33257,map__33257__$1,args){
return (function (){
var s__33267__$1 = s__33267;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33267__$1);
if(temp__4657__auto__){
var s__33267__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33267__$2)){
var c__28571__auto__ = cljs.core.chunk_first.call(null,s__33267__$2);
var size__28572__auto__ = cljs.core.count.call(null,c__28571__auto__);
var b__33269 = cljs.core.chunk_buffer.call(null,size__28572__auto__);
if((function (){var i__33268 = (0);
while(true){
if((i__33268 < size__28572__auto__)){
var vec__33270 = cljs.core._nth.call(null,c__28571__auto__,i__33268);
var i = cljs.core.nth.call(null,vec__33270,(0),null);
var s = cljs.core.nth.call(null,vec__33270,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__33269,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__33268,selected_QMARK_,vec__33270,i,s,c__28571__auto__,size__28572__auto__,b__33269,s__33267__$2,temp__4657__auto__,map__33264,map__33264__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33262,map__33262__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33259,map__33259__$1,state,c_search,c_input,state_atom,input_text_model,map__33257,map__33257__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__33268,selected_QMARK_,vec__33270,i,s,c__28571__auto__,size__28572__auto__,b__33269,s__33267__$2,temp__4657__auto__,map__33264,map__33264__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33262,map__33262__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33259,map__33259__$1,state,c_search,c_input,state_atom,input_text_model,map__33257,map__33257__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__33268,selected_QMARK_,vec__33270,i,s,c__28571__auto__,size__28572__auto__,b__33269,s__33267__$2,temp__4657__auto__,map__33264,map__33264__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33262,map__33262__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33259,map__33259__$1,state,c_search,c_input,state_atom,input_text_model,map__33257,map__33257__$1,args){
return (function (p1__33254_SHARP_){
p1__33254_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__33268,selected_QMARK_,vec__33270,i,s,c__28571__auto__,size__28572__auto__,b__33269,s__33267__$2,temp__4657__auto__,map__33264,map__33264__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33262,map__33262__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33259,map__33259__$1,state,c_search,c_input,state_atom,input_text_model,map__33257,map__33257__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__33280 = (i__33268 + (1));
i__33268 = G__33280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33269),re_com$typeahead$iter__33266.call(null,cljs.core.chunk_rest.call(null,s__33267__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33269),null);
}
} else {
var vec__33273 = cljs.core.first.call(null,s__33267__$2);
var i = cljs.core.nth.call(null,vec__33273,(0),null);
var s = cljs.core.nth.call(null,vec__33273,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__33273,i,s,s__33267__$2,temp__4657__auto__,map__33264,map__33264__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33262,map__33262__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33259,map__33259__$1,state,c_search,c_input,state_atom,input_text_model,map__33257,map__33257__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__33273,i,s,s__33267__$2,temp__4657__auto__,map__33264,map__33264__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33262,map__33262__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33259,map__33259__$1,state,c_search,c_input,state_atom,input_text_model,map__33257,map__33257__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__33273,i,s,s__33267__$2,temp__4657__auto__,map__33264,map__33264__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33262,map__33262__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33259,map__33259__$1,state,c_search,c_input,state_atom,input_text_model,map__33257,map__33257__$1,args){
return (function (p1__33254_SHARP_){
p1__33254_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__33273,i,s,s__33267__$2,temp__4657__auto__,map__33264,map__33264__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33262,map__33262__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33259,map__33259__$1,state,c_search,c_input,state_atom,input_text_model,map__33257,map__33257__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__33266.call(null,cljs.core.rest.call(null,s__33267__$2)));
}
} else {
return null;
}
break;
}
});})(map__33264,map__33264__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33262,map__33262__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33259,map__33259__$1,state,c_search,c_input,state_atom,input_text_model,map__33257,map__33257__$1,args))
,null,null));
});})(map__33264,map__33264__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33262,map__33262__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33259,map__33259__$1,state,c_search,c_input,state_atom,input_text_model,map__33257,map__33257__$1,args))
;
return iter__28573__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__33279 = function (var_args){
var p__33261 = null;
if (arguments.length > 0) {
var G__33281__i = 0, G__33281__a = new Array(arguments.length -  0);
while (G__33281__i < G__33281__a.length) {G__33281__a[G__33281__i] = arguments[G__33281__i + 0]; ++G__33281__i;}
  p__33261 = new cljs.core.IndexedSeq(G__33281__a,0,null);
} 
return G__33279__delegate.call(this,p__33261);};
G__33279.cljs$lang$maxFixedArity = 0;
G__33279.cljs$lang$applyTo = (function (arglist__33282){
var p__33261 = cljs.core.seq(arglist__33282);
return G__33279__delegate(p__33261);
});
G__33279.cljs$core$IFn$_invoke$arity$variadic = G__33279__delegate;
return G__33279;
})()
;
;})(map__33259,map__33259__$1,state,c_search,c_input,state_atom,input_text_model,map__33257,map__33257__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq33255){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33255));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__31193__auto___33363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto___33363,out){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto___33363,out){
return (function (state_33333){
var state_val_33334 = (state_33333[(1)]);
if((state_val_33334 === (7))){
var inst_33288 = (state_33333[(2)]);
var state_33333__$1 = state_33333;
var statearr_33335_33364 = state_33333__$1;
(statearr_33335_33364[(2)] = inst_33288);

(statearr_33335_33364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (1))){
var inst_33283 = null;
var state_33333__$1 = (function (){var statearr_33336 = state_33333;
(statearr_33336[(7)] = inst_33283);

return statearr_33336;
})();
var statearr_33337_33365 = state_33333__$1;
(statearr_33337_33365[(2)] = null);

(statearr_33337_33365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (4))){
var state_33333__$1 = state_33333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33333__$1,(7),in$);
} else {
if((state_val_33334 === (15))){
var inst_33318 = (state_33333[(2)]);
var state_33333__$1 = (function (){var statearr_33338 = state_33333;
(statearr_33338[(8)] = inst_33318);

return statearr_33338;
})();
var statearr_33339_33366 = state_33333__$1;
(statearr_33339_33366[(2)] = null);

(statearr_33339_33366[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (13))){
var inst_33306 = (state_33333[(9)]);
var inst_33320 = cljs.core._EQ_.call(null,inst_33306,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_33333__$1 = state_33333;
if(inst_33320){
var statearr_33340_33367 = state_33333__$1;
(statearr_33340_33367[(1)] = (16));

} else {
var statearr_33341_33368 = state_33333__$1;
(statearr_33341_33368[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (6))){
var inst_33292 = (state_33333[(10)]);
var inst_33291 = (state_33333[(2)]);
var inst_33292__$1 = cljs.core.async.timeout.call(null,ms);
var inst_33300 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33301 = [in$,inst_33292__$1];
var inst_33302 = (new cljs.core.PersistentVector(null,2,(5),inst_33300,inst_33301,null));
var state_33333__$1 = (function (){var statearr_33342 = state_33333;
(statearr_33342[(10)] = inst_33292__$1);

(statearr_33342[(11)] = inst_33291);

return statearr_33342;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33333__$1,(8),inst_33302);
} else {
if((state_val_33334 === (17))){
var state_33333__$1 = state_33333;
var statearr_33343_33369 = state_33333__$1;
(statearr_33343_33369[(2)] = null);

(statearr_33343_33369[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (3))){
var inst_33331 = (state_33333[(2)]);
var state_33333__$1 = state_33333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33333__$1,inst_33331);
} else {
if((state_val_33334 === (12))){
var inst_33291 = (state_33333[(11)]);
var state_33333__$1 = state_33333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33333__$1,(15),out,inst_33291);
} else {
if((state_val_33334 === (2))){
var inst_33283 = (state_33333[(7)]);
var inst_33285 = (inst_33283 == null);
var state_33333__$1 = state_33333;
if(cljs.core.truth_(inst_33285)){
var statearr_33344_33370 = state_33333__$1;
(statearr_33344_33370[(1)] = (4));

} else {
var statearr_33345_33371 = state_33333__$1;
(statearr_33345_33371[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (11))){
var inst_33328 = (state_33333[(2)]);
var inst_33283 = inst_33328;
var state_33333__$1 = (function (){var statearr_33346 = state_33333;
(statearr_33346[(7)] = inst_33283);

return statearr_33346;
})();
var statearr_33347_33372 = state_33333__$1;
(statearr_33347_33372[(2)] = null);

(statearr_33347_33372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (9))){
var inst_33304 = (state_33333[(12)]);
var inst_33312 = cljs.core.nth.call(null,inst_33304,(0),null);
var inst_33313 = cljs.core.nth.call(null,inst_33304,(1),null);
var state_33333__$1 = (function (){var statearr_33348 = state_33333;
(statearr_33348[(13)] = inst_33313);

return statearr_33348;
})();
var statearr_33349_33373 = state_33333__$1;
(statearr_33349_33373[(2)] = inst_33312);

(statearr_33349_33373[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (5))){
var inst_33283 = (state_33333[(7)]);
var state_33333__$1 = state_33333;
var statearr_33350_33374 = state_33333__$1;
(statearr_33350_33374[(2)] = inst_33283);

(statearr_33350_33374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (14))){
var inst_33326 = (state_33333[(2)]);
var state_33333__$1 = state_33333;
var statearr_33351_33375 = state_33333__$1;
(statearr_33351_33375[(2)] = inst_33326);

(statearr_33351_33375[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (16))){
var inst_33305 = (state_33333[(14)]);
var state_33333__$1 = state_33333;
var statearr_33352_33376 = state_33333__$1;
(statearr_33352_33376[(2)] = inst_33305);

(statearr_33352_33376[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (10))){
var inst_33292 = (state_33333[(10)]);
var inst_33306 = (state_33333[(9)]);
var inst_33315 = cljs.core._EQ_.call(null,inst_33306,inst_33292);
var state_33333__$1 = state_33333;
if(inst_33315){
var statearr_33353_33377 = state_33333__$1;
(statearr_33353_33377[(1)] = (12));

} else {
var statearr_33354_33378 = state_33333__$1;
(statearr_33354_33378[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (18))){
var inst_33324 = (state_33333[(2)]);
var state_33333__$1 = state_33333;
var statearr_33355_33379 = state_33333__$1;
(statearr_33355_33379[(2)] = inst_33324);

(statearr_33355_33379[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (8))){
var inst_33306 = (state_33333[(9)]);
var inst_33304 = (state_33333[(12)]);
var inst_33304__$1 = (state_33333[(2)]);
var inst_33305 = cljs.core.nth.call(null,inst_33304__$1,(0),null);
var inst_33306__$1 = cljs.core.nth.call(null,inst_33304__$1,(1),null);
var inst_33307 = cljs.core._EQ_.call(null,inst_33306__$1,in$);
var state_33333__$1 = (function (){var statearr_33356 = state_33333;
(statearr_33356[(9)] = inst_33306__$1);

(statearr_33356[(14)] = inst_33305);

(statearr_33356[(12)] = inst_33304__$1);

return statearr_33356;
})();
if(inst_33307){
var statearr_33357_33380 = state_33333__$1;
(statearr_33357_33380[(1)] = (9));

} else {
var statearr_33358_33381 = state_33333__$1;
(statearr_33358_33381[(1)] = (10));

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
}
});})(c__31193__auto___33363,out))
;
return ((function (switch__31105__auto__,c__31193__auto___33363,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__31106__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__31106__auto____0 = (function (){
var statearr_33359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33359[(0)] = re_com$typeahead$debounce_$_state_machine__31106__auto__);

(statearr_33359[(1)] = (1));

return statearr_33359;
});
var re_com$typeahead$debounce_$_state_machine__31106__auto____1 = (function (state_33333){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_33333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e33360){if((e33360 instanceof Object)){
var ex__31109__auto__ = e33360;
var statearr_33361_33382 = state_33333;
(statearr_33361_33382[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33383 = state_33333;
state_33333 = G__33383;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__31106__auto__ = function(state_33333){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__31106__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__31106__auto____1.call(this,state_33333);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__31106__auto____0;
re_com$typeahead$debounce_$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__31106__auto____1;
return re_com$typeahead$debounce_$_state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto___33363,out))
})();
var state__31195__auto__ = (function (){var statearr_33362 = f__31194__auto__.call(null);
(statearr_33362[(6)] = c__31193__auto___33363);

return statearr_33362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto___33363,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1522528340700
