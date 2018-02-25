// Compiled by ClojureScript 1.9.908 {}
goog.provide('adventure.tiles');
goog.require('cljs.core');
adventure.tiles.W = (50);
adventure.tiles.WSTR = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(adventure.tiles.W)].join('');
adventure.tiles.H = (50);
adventure.tiles.HSTR = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(adventure.tiles.H)].join('');
adventure.tiles.tiles = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x","x","x","x","x","p","g"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["g","p","g","x","x","g","x"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["g","x","g","x","x","g","x"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["g","x","g","x","x","g","x"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["g","x","g","x","x","g","x"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["g","x","g","g","t","g","x"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["g","x","x","x","x","x","x"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["g","g","g","g","x","x","x"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["g","g","g","g","x","x","x"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["g","g","g","g","x","x","x"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["g","g","g","g","x","x","x"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["g","g","g","g","x","x","x"], null)], null);
adventure.tiles.make_board = (function adventure$tiles$make_board(tiles){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x-size","x-size",1349040639),cljs.core.count.call(null,tiles.call(null,(1))),new cljs.core.Keyword(null,"y-size","y-size",691338523),cljs.core.count.call(null,tiles),new cljs.core.Keyword(null,"tiles","tiles",178505240),tiles], null);
});
/**
 * Pick color using a single character.  This makes the board data more readable.
 */
adventure.tiles.pick = (function adventure$tiles$pick(abbr){
var G__41894 = abbr;
switch (G__41894) {
case "r":
return "red";

break;
case "g":
case "t":
return "gray";

break;
case "p":
return "yellow";

break;
case "x":
return "green";

break;
default:
return abbr;

}
});
/**
 * Create svg rectangle vector at location xy with the color string specified by the arg.
 */
adventure.tiles.colorBlock = (function adventure$tiles$colorBlock(color,x,y){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''),new cljs.core.Keyword(null,"width","width",-384071477),adventure.tiles.WSTR,new cljs.core.Keyword(null,"height","height",1025178622),adventure.tiles.HSTR,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),color,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"rgb(0,0,0)"], null)], null),"Sorry, your browser does not support inline SVG."], null);
});
adventure.tiles.draw_row = (function adventure$tiles$draw_row(row,row_idx){
var y = (row_idx * adventure.tiles.H);
return cljs.core.map_indexed.call(null,((function (y){
return (function (idx,color){
return adventure.tiles.colorBlock.call(null,adventure.tiles.pick.call(null,color),(adventure.tiles.W * idx),y);
});})(y))
,row);
});
/**
 * see map above
 */
adventure.tiles.draw_board = (function adventure$tiles$draw_board(board){
var tiles = new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(board);
return cljs.core.map_indexed.call(null,((function (tiles){
return (function (idx,row){
return adventure.tiles.draw_row.call(null,row,idx);
});})(tiles))
,tiles);
});
adventure.tiles.test_board = (function adventure$tiles$test_board(){
return adventure.tiles.draw_board.call(null,adventure.tiles.make_board.call(null,adventure.tiles.tiles));
});
/**
 * return the player svg on the board
 */
adventure.tiles.drawPlayerAt = (function adventure$tiles$drawPlayerAt(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y,new cljs.core.Keyword(null,"r","r",-471384190),(adventure.tiles.W / (2)),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3",new cljs.core.Keyword(null,"fill","fill",883462889),"red"], null)], null);
});
adventure.tiles.drawPlayer = (function adventure$tiles$drawPlayer(location){
var x = ((adventure.tiles.W * new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(location)) + (adventure.tiles.W / (2)));
var y = ((adventure.tiles.H * new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(location)) + (adventure.tiles.H / (2)));
return adventure.tiles.drawPlayerAt.call(null,x,y);
});
/**
 * return tiles with xy set to g for empty.
 */
adventure.tiles.reset_tile = (function adventure$tiles$reset_tile(tiles,tile_loc){
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tile_loc);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(tile_loc);
return cljs.core.assoc.call(null,tiles,y,cljs.core.assoc.call(null,tiles.call(null,y),x,"g"));
});

//# sourceMappingURL=tiles.js.map?rel=1522530134840
