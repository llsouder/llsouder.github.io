// Compiled by ClojureScript 1.9.908 {}
goog.provide('adventure.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('reagent.core');
goog.require('adventure.subs');
goog.require('adventure.guess');
goog.require('adventure.events');
goog.require('adventure.routes');
goog.require('adventure.game');
goog.require('adventure.tiles');
adventure.views.initialize_game = (function adventure$views$initialize_game(){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.events","initialize-db","adventure.events/initialize-db",-1747037419)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.events","set-active-panel","adventure.events/set-active-panel",-527792093),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
});
adventure.views.action = (function adventure$views$action(event){
var key_code = event.keyCode;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),key_code], null));
});
adventure.views.title = (function adventure$views$title(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.subs","name","adventure.subs/name",-2059860352)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.deref.call(null,name),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null);
});
adventure.views.bump = (new Audio("bump.wav"));
adventure.views.gold = (new Audio("gold.wav"));
adventure.views.error_panel = (function adventure$views$error_panel(panel_name){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"error! error! panel not found"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(panel_name),"\""].join('')], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"label","label",1718410804),"restart",new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"left-center","left-center",374119202),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.events","set-active-panel","adventure.events/set-active-panel",-527792093),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
})], null)], null);
});
adventure.views.about_panel = (function adventure$views$about_panel(){
adventure.routes.set_hash_BANG_.call(null,"/about");

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"About"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"label","label",1718410804),"Home",new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"left-center","left-center",374119202),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.events","set-active-panel","adventure.events/set-active-panel",-527792093),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
})], null)], null);
});
adventure.views.home_panel = (function adventure$views$home_panel(){
var board = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.subs","update-board","adventure.subs/update-board",4757323)], null)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.subs","location","adventure.subs/location",1160023913)], null)))),"bump")){
adventure.views.bump.play();
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.subs","location","adventure.subs/location",1160023913)], null)))),"gold")){
adventure.views.gold.play();
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [adventure.views.title.call(null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"800",new cljs.core.Keyword(null,"height","height",1025178622),"600",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 800 600",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg"], null),adventure.tiles.draw_board.call(null,board),adventure.tiles.drawPlayer.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.subs","location","adventure.subs/location",1160023913)], null))))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Restart",new cljs.core.Keyword(null,"on-click","on-click",1632826543),adventure.views.initialize_game], null)], null)], null);
});
adventure.views.escape_panel = (function adventure$views$escape_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"You have escaped."], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"label","label",1718410804),"continue",new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"left-center","left-center",374119202),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.events","set-active-panel","adventure.events/set-active-panel",-527792093),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
})], null)], null);
});
adventure.views.die_panel = (function adventure$views$die_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"You are DEAD!"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"label","label",1718410804),"Start Over",new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"left-center","left-center",374119202),new cljs.core.Keyword(null,"on-click","on-click",1632826543),adventure.views.initialize_game], null)], null);
});
adventure.views.panels = (function adventure$views$panels(panel_name){
cljs.core.println.call(null,"panel name",panel_name);

var G__42002 = panel_name;
var G__42002__$1 = (((G__42002 instanceof cljs.core.Keyword))?G__42002.fqn:null);
switch (G__42002__$1) {
case "home-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [adventure.views.home_panel], null);

break;
case "about-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [adventure.views.about_panel], null);

break;
case "puzzle-1":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [adventure.guess.page], null);

break;
case "escape-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [adventure.views.escape_panel], null);

break;
case "die-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [adventure.views.die_panel], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [adventure.views.error_panel,panel_name], null);

}
});
adventure.views.main_panel = (function adventure$views$main_panel(){
document.addEventListener("keydown",adventure.views.action);

var active_panel_db = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.subs","active-panel","adventure.subs/active-panel",-1929643547)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [adventure.views.panels,cljs.core.deref.call(null,active_panel_db)], null)], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1522530793608
