// Compiled by ClojureScript 1.9.908 {}
goog.provide('adventure.game');
goog.require('cljs.core');
goog.require('adventure.routes');
goog.require('adventure.events');
goog.require('adventure.tiles');
goog.require('re_frame.core');
adventure.game.special_action = (function adventure$game$special_action(panel){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.events","set-active-panel","adventure.events/set-active-panel",-527792093),panel], null));

return true;
});
adventure.game.check_board = (function adventure$game$check_board(x,y,board){
var tiles = new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(board);
var tilerow = tiles.call(null,y);
var tile = tilerow.call(null,x);
var G__41945 = tile;
switch (G__41945) {
case "t":
return adventure.game.special_action.call(null,new cljs.core.Keyword(null,"puzzle-1","puzzle-1",1702517013));

break;
case "p":
return "gold";

break;
default:
return cljs.core._EQ_.call(null,tile,"g");

}
});
/**
 * Return true if new position is on the board, i.e. coords are >= 0.
 */
adventure.game.valid_move_QMARK_ = (function adventure$game$valid_move_QMARK_(location,axis,f,board){
var updatedmap = cljs.core.update_in.call(null,location,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [axis], null),f);
var newvals = cljs.core.vals.call(null,cljs.core.dissoc.call(null,updatedmap,new cljs.core.Keyword(null,"action","action",-811238024)));
var positive = cljs.core.every_QMARK_.call(null,((function (updatedmap,newvals){
return (function (p1__41947_SHARP_){
return (p1__41947_SHARP_ >= (0));
});})(updatedmap,newvals))
,newvals);
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(updatedmap);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(updatedmap);
var withingrid = ((x < new cljs.core.Keyword(null,"x-size","x-size",1349040639).cljs$core$IFn$_invoke$arity$1(board))) && ((y < new cljs.core.Keyword(null,"y-size","y-size",691338523).cljs$core$IFn$_invoke$arity$1(board)));
return (positive) && (withingrid);
});
adventure.game.found_gold = (function adventure$game$found_gold(old_db,new_db){
var tile_loc = new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(new_db);
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(old_db);
var tiles = new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(board);
var updated_tiles = adventure.tiles.reset_tile.call(null,tiles,tile_loc);
var updated_board = cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"tiles","tiles",178505240),updated_tiles);
var return_db = cljs.core.update_in.call(null,new_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"action","action",-811238024)], null),((function (tile_loc,board,tiles,updated_tiles,updated_board){
return (function (){
return ["gold"].join('');
});})(tile_loc,board,tiles,updated_tiles,updated_board))
);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("adventure.events","update-board","adventure.events/update-board",2055294701),updated_board], null));

return return_db;
});
/**
 * the db from the event, the axis is :x or :y, and f is inc or dec.
 */
adventure.game.checkandupdate = (function adventure$game$checkandupdate(db,axis,f){
if(cljs.core.truth_(adventure.game.valid_move_QMARK_.call(null,new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(db),axis,f,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db)))){
var newdb = cljs.core.update_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),axis], null),f),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"action","action",-811238024)], null),(function (){
return ["none"].join('');
}));
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db);
var check = adventure.game.check_board.call(null,cljs.core.get_in.call(null,newdb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"x","x",2099068185)], null)),cljs.core.get_in.call(null,newdb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"y","y",-1757859776)], null)),board);
var G__41948 = check;
if(cljs.core._EQ_.call(null,"gold",G__41948)){
return adventure.game.found_gold.call(null,db,newdb);
} else {
if(cljs.core._EQ_.call(null,false,G__41948)){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"action","action",-811238024)], null),((function (G__41948,newdb,board,check){
return (function (){
return ["bump"].join('');
});})(G__41948,newdb,board,check))
);
} else {
if(cljs.core._EQ_.call(null,true,G__41948)){
return newdb;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41948)].join('')));

}
}
}
} else {
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"action","action",-811238024)], null),(function (){
return ["error"].join('');
}));
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"location","location",1815599388),(function (db,p__41949){
var vec__41950 = p__41949;
var _ = cljs.core.nth.call(null,vec__41950,(0),null);
var keycode = cljs.core.nth.call(null,vec__41950,(1),null);
var G__41953 = keycode;
switch (G__41953) {
case (87):
case (75):
return adventure.game.checkandupdate.call(null,db,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.dec);

break;
case (83):
case (74):
return adventure.game.checkandupdate.call(null,db,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.inc);

break;
case (68):
case (76):
return adventure.game.checkandupdate.call(null,db,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.inc);

break;
case (65):
case (72):
return adventure.game.checkandupdate.call(null,db,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.dec);

break;
default:
cljs.core.println.call(null,["unsupported ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keycode)].join(''));

return db;

}
}));

//# sourceMappingURL=game.js.map?rel=1522530136684
