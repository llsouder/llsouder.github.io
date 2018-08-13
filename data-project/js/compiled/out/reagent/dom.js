// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
reagent.dom.global$module$react_dom = goog.global.ReactDOM;
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_27200 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR_27200){
return (function (){
var _STAR_always_update_STAR_27201 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_27201;
}});})(_STAR_always_update_STAR_27200))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_27200;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__27203 = arguments.length;
switch (G__27203) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode.call(null,this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__27205_27209 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__27206_27210 = null;
var count__27207_27211 = (0);
var i__27208_27212 = (0);
while(true){
if((i__27208_27212 < count__27207_27211)){
var v_27213 = cljs.core._nth.call(null,chunk__27206_27210,i__27208_27212);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_27213);


var G__27214 = seq__27205_27209;
var G__27215 = chunk__27206_27210;
var G__27216 = count__27207_27211;
var G__27217 = (i__27208_27212 + (1));
seq__27205_27209 = G__27214;
chunk__27206_27210 = G__27215;
count__27207_27211 = G__27216;
i__27208_27212 = G__27217;
continue;
} else {
var temp__5457__auto___27218 = cljs.core.seq.call(null,seq__27205_27209);
if(temp__5457__auto___27218){
var seq__27205_27219__$1 = temp__5457__auto___27218;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27205_27219__$1)){
var c__4319__auto___27220 = cljs.core.chunk_first.call(null,seq__27205_27219__$1);
var G__27221 = cljs.core.chunk_rest.call(null,seq__27205_27219__$1);
var G__27222 = c__4319__auto___27220;
var G__27223 = cljs.core.count.call(null,c__4319__auto___27220);
var G__27224 = (0);
seq__27205_27209 = G__27221;
chunk__27206_27210 = G__27222;
count__27207_27211 = G__27223;
i__27208_27212 = G__27224;
continue;
} else {
var v_27225 = cljs.core.first.call(null,seq__27205_27219__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_27225);


var G__27226 = cljs.core.next.call(null,seq__27205_27219__$1);
var G__27227 = null;
var G__27228 = (0);
var G__27229 = (0);
seq__27205_27209 = G__27226;
chunk__27206_27210 = G__27227;
count__27207_27211 = G__27228;
i__27208_27212 = G__27229;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1534123150972
