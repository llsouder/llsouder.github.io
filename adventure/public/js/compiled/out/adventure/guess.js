// Compiled by ClojureScript 1.9.908 {}
goog.provide('adventure.guess');
goog.require('cljs.core');
goog.require('re_com.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('adventure.events');
adventure.guess.check_value = (function adventure$guess$check_value(answer,value){
if(cljs.core._EQ_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(answer)].join(''),cljs.core.deref.call(null,value))){
return cljs.core.println.call(null,"you win");
} else {
return cljs.core.println.call(null,"nope",answer,cljs.core.deref.call(null,value));
}
});
/**
 * text on the front and back of the panel and the location where
 *   onclick will send the user.
 */
adventure.guess.flip_tags = (function adventure$guess$flip_tags(front_text,back_text,onclick){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flip-container",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),onclick], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flipper"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"front"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),front_text], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"back"], null),cljs.core._SLASH_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),back_text], null)], null)], null)], null);
});
adventure.guess.escape = (function adventure$guess$escape(num){
return adventure.guess.flip_tags.call(null,num,"?",(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.events","set-active-panel","adventure.events/set-active-panel",-527792093),new cljs.core.Keyword(null,"escape-panel","escape-panel",-1095231672)], null));
}));
});
adventure.guess.die = (function adventure$guess$die(num){
return adventure.guess.flip_tags.call(null,num,"?",(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.events","set-active-panel","adventure.events/set-active-panel",-527792093),new cljs.core.Keyword(null,"die:w","die:w",1396759438),adventure.guess._panel], null));
}));
});
/**
 * neither death nor escape.
 */
adventure.guess.nothing = (function adventure$guess$nothing(num){
return adventure.guess.flip_tags.call(null,num,"?","");
});
adventure.guess.page = (function adventure$guess$page(){
var answer = cljs.core.rand_int.call(null,(10));
var text_val = reagent.core.atom.call(null,"");
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Find your way out."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"large","large",-196820544)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [adventure.guess.escape.call(null,(1)),adventure.guess.die.call(null,(2)),adventure.guess.nothing.call(null,(3))], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (answer,text_val){
return (function (p1__41969_SHARP_){
return cljs.core.reset_BANG_.call(null,text_val,p1__41969_SHARP_);
});})(answer,text_val))
,new cljs.core.Keyword(null,"model","model",331153215),text_val,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"1-10"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Done",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (answer,text_val){
return (function (){
return adventure.guess.check_value.call(null,answer,text_val);
});})(answer,text_val))
], null)], null);
});

//# sourceMappingURL=guess.js.map?rel=1522530453201
