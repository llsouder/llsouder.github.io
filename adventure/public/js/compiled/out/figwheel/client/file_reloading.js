// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__27765__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27765__auto__){
return or__27765__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__27765__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__27765__auto__)){
return or__27765__auto__;
} else {
var or__27765__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__27765__auto____$1)){
return or__27765__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36465_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36465_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__36466 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36467 = null;
var count__36468 = (0);
var i__36469 = (0);
while(true){
if((i__36469 < count__36468)){
var n = cljs.core._nth.call(null,chunk__36467,i__36469);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36470 = seq__36466;
var G__36471 = chunk__36467;
var G__36472 = count__36468;
var G__36473 = (i__36469 + (1));
seq__36466 = G__36470;
chunk__36467 = G__36471;
count__36468 = G__36472;
i__36469 = G__36473;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36466);
if(temp__4657__auto__){
var seq__36466__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36466__$1)){
var c__28604__auto__ = cljs.core.chunk_first.call(null,seq__36466__$1);
var G__36474 = cljs.core.chunk_rest.call(null,seq__36466__$1);
var G__36475 = c__28604__auto__;
var G__36476 = cljs.core.count.call(null,c__28604__auto__);
var G__36477 = (0);
seq__36466 = G__36474;
chunk__36467 = G__36475;
count__36468 = G__36476;
i__36469 = G__36477;
continue;
} else {
var n = cljs.core.first.call(null,seq__36466__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36478 = cljs.core.next.call(null,seq__36466__$1);
var G__36479 = null;
var G__36480 = (0);
var G__36481 = (0);
seq__36466 = G__36478;
chunk__36467 = G__36479;
count__36468 = G__36480;
i__36469 = G__36481;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__36491_36499 = cljs.core.seq.call(null,deps);
var chunk__36492_36500 = null;
var count__36493_36501 = (0);
var i__36494_36502 = (0);
while(true){
if((i__36494_36502 < count__36493_36501)){
var dep_36503 = cljs.core._nth.call(null,chunk__36492_36500,i__36494_36502);
topo_sort_helper_STAR_.call(null,dep_36503,(depth + (1)),state);

var G__36504 = seq__36491_36499;
var G__36505 = chunk__36492_36500;
var G__36506 = count__36493_36501;
var G__36507 = (i__36494_36502 + (1));
seq__36491_36499 = G__36504;
chunk__36492_36500 = G__36505;
count__36493_36501 = G__36506;
i__36494_36502 = G__36507;
continue;
} else {
var temp__4657__auto___36508 = cljs.core.seq.call(null,seq__36491_36499);
if(temp__4657__auto___36508){
var seq__36491_36509__$1 = temp__4657__auto___36508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36491_36509__$1)){
var c__28604__auto___36510 = cljs.core.chunk_first.call(null,seq__36491_36509__$1);
var G__36511 = cljs.core.chunk_rest.call(null,seq__36491_36509__$1);
var G__36512 = c__28604__auto___36510;
var G__36513 = cljs.core.count.call(null,c__28604__auto___36510);
var G__36514 = (0);
seq__36491_36499 = G__36511;
chunk__36492_36500 = G__36512;
count__36493_36501 = G__36513;
i__36494_36502 = G__36514;
continue;
} else {
var dep_36515 = cljs.core.first.call(null,seq__36491_36509__$1);
topo_sort_helper_STAR_.call(null,dep_36515,(depth + (1)),state);

var G__36516 = cljs.core.next.call(null,seq__36491_36509__$1);
var G__36517 = null;
var G__36518 = (0);
var G__36519 = (0);
seq__36491_36499 = G__36516;
chunk__36492_36500 = G__36517;
count__36493_36501 = G__36518;
i__36494_36502 = G__36519;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36495){
var vec__36496 = p__36495;
var seq__36497 = cljs.core.seq.call(null,vec__36496);
var first__36498 = cljs.core.first.call(null,seq__36497);
var seq__36497__$1 = cljs.core.next.call(null,seq__36497);
var x = first__36498;
var xs = seq__36497__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36496,seq__36497,first__36498,seq__36497__$1,x,xs,get_deps__$1){
return (function (p1__36482_SHARP_){
return clojure.set.difference.call(null,p1__36482_SHARP_,x);
});})(vec__36496,seq__36497,first__36498,seq__36497__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__36520 = cljs.core.seq.call(null,provides);
var chunk__36521 = null;
var count__36522 = (0);
var i__36523 = (0);
while(true){
if((i__36523 < count__36522)){
var prov = cljs.core._nth.call(null,chunk__36521,i__36523);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36524_36532 = cljs.core.seq.call(null,requires);
var chunk__36525_36533 = null;
var count__36526_36534 = (0);
var i__36527_36535 = (0);
while(true){
if((i__36527_36535 < count__36526_36534)){
var req_36536 = cljs.core._nth.call(null,chunk__36525_36533,i__36527_36535);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36536,prov);

var G__36537 = seq__36524_36532;
var G__36538 = chunk__36525_36533;
var G__36539 = count__36526_36534;
var G__36540 = (i__36527_36535 + (1));
seq__36524_36532 = G__36537;
chunk__36525_36533 = G__36538;
count__36526_36534 = G__36539;
i__36527_36535 = G__36540;
continue;
} else {
var temp__4657__auto___36541 = cljs.core.seq.call(null,seq__36524_36532);
if(temp__4657__auto___36541){
var seq__36524_36542__$1 = temp__4657__auto___36541;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36524_36542__$1)){
var c__28604__auto___36543 = cljs.core.chunk_first.call(null,seq__36524_36542__$1);
var G__36544 = cljs.core.chunk_rest.call(null,seq__36524_36542__$1);
var G__36545 = c__28604__auto___36543;
var G__36546 = cljs.core.count.call(null,c__28604__auto___36543);
var G__36547 = (0);
seq__36524_36532 = G__36544;
chunk__36525_36533 = G__36545;
count__36526_36534 = G__36546;
i__36527_36535 = G__36547;
continue;
} else {
var req_36548 = cljs.core.first.call(null,seq__36524_36542__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36548,prov);

var G__36549 = cljs.core.next.call(null,seq__36524_36542__$1);
var G__36550 = null;
var G__36551 = (0);
var G__36552 = (0);
seq__36524_36532 = G__36549;
chunk__36525_36533 = G__36550;
count__36526_36534 = G__36551;
i__36527_36535 = G__36552;
continue;
}
} else {
}
}
break;
}

var G__36553 = seq__36520;
var G__36554 = chunk__36521;
var G__36555 = count__36522;
var G__36556 = (i__36523 + (1));
seq__36520 = G__36553;
chunk__36521 = G__36554;
count__36522 = G__36555;
i__36523 = G__36556;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36520);
if(temp__4657__auto__){
var seq__36520__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36520__$1)){
var c__28604__auto__ = cljs.core.chunk_first.call(null,seq__36520__$1);
var G__36557 = cljs.core.chunk_rest.call(null,seq__36520__$1);
var G__36558 = c__28604__auto__;
var G__36559 = cljs.core.count.call(null,c__28604__auto__);
var G__36560 = (0);
seq__36520 = G__36557;
chunk__36521 = G__36558;
count__36522 = G__36559;
i__36523 = G__36560;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36520__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36528_36561 = cljs.core.seq.call(null,requires);
var chunk__36529_36562 = null;
var count__36530_36563 = (0);
var i__36531_36564 = (0);
while(true){
if((i__36531_36564 < count__36530_36563)){
var req_36565 = cljs.core._nth.call(null,chunk__36529_36562,i__36531_36564);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36565,prov);

var G__36566 = seq__36528_36561;
var G__36567 = chunk__36529_36562;
var G__36568 = count__36530_36563;
var G__36569 = (i__36531_36564 + (1));
seq__36528_36561 = G__36566;
chunk__36529_36562 = G__36567;
count__36530_36563 = G__36568;
i__36531_36564 = G__36569;
continue;
} else {
var temp__4657__auto___36570__$1 = cljs.core.seq.call(null,seq__36528_36561);
if(temp__4657__auto___36570__$1){
var seq__36528_36571__$1 = temp__4657__auto___36570__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36528_36571__$1)){
var c__28604__auto___36572 = cljs.core.chunk_first.call(null,seq__36528_36571__$1);
var G__36573 = cljs.core.chunk_rest.call(null,seq__36528_36571__$1);
var G__36574 = c__28604__auto___36572;
var G__36575 = cljs.core.count.call(null,c__28604__auto___36572);
var G__36576 = (0);
seq__36528_36561 = G__36573;
chunk__36529_36562 = G__36574;
count__36530_36563 = G__36575;
i__36531_36564 = G__36576;
continue;
} else {
var req_36577 = cljs.core.first.call(null,seq__36528_36571__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36577,prov);

var G__36578 = cljs.core.next.call(null,seq__36528_36571__$1);
var G__36579 = null;
var G__36580 = (0);
var G__36581 = (0);
seq__36528_36561 = G__36578;
chunk__36529_36562 = G__36579;
count__36530_36563 = G__36580;
i__36531_36564 = G__36581;
continue;
}
} else {
}
}
break;
}

var G__36582 = cljs.core.next.call(null,seq__36520__$1);
var G__36583 = null;
var G__36584 = (0);
var G__36585 = (0);
seq__36520 = G__36582;
chunk__36521 = G__36583;
count__36522 = G__36584;
i__36523 = G__36585;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__36586_36590 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36587_36591 = null;
var count__36588_36592 = (0);
var i__36589_36593 = (0);
while(true){
if((i__36589_36593 < count__36588_36592)){
var ns_36594 = cljs.core._nth.call(null,chunk__36587_36591,i__36589_36593);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36594);

var G__36595 = seq__36586_36590;
var G__36596 = chunk__36587_36591;
var G__36597 = count__36588_36592;
var G__36598 = (i__36589_36593 + (1));
seq__36586_36590 = G__36595;
chunk__36587_36591 = G__36596;
count__36588_36592 = G__36597;
i__36589_36593 = G__36598;
continue;
} else {
var temp__4657__auto___36599 = cljs.core.seq.call(null,seq__36586_36590);
if(temp__4657__auto___36599){
var seq__36586_36600__$1 = temp__4657__auto___36599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36586_36600__$1)){
var c__28604__auto___36601 = cljs.core.chunk_first.call(null,seq__36586_36600__$1);
var G__36602 = cljs.core.chunk_rest.call(null,seq__36586_36600__$1);
var G__36603 = c__28604__auto___36601;
var G__36604 = cljs.core.count.call(null,c__28604__auto___36601);
var G__36605 = (0);
seq__36586_36590 = G__36602;
chunk__36587_36591 = G__36603;
count__36588_36592 = G__36604;
i__36589_36593 = G__36605;
continue;
} else {
var ns_36606 = cljs.core.first.call(null,seq__36586_36600__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36606);

var G__36607 = cljs.core.next.call(null,seq__36586_36600__$1);
var G__36608 = null;
var G__36609 = (0);
var G__36610 = (0);
seq__36586_36590 = G__36607;
chunk__36587_36591 = G__36608;
count__36588_36592 = G__36609;
i__36589_36593 = G__36610;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__27765__auto__ = goog.require__;
if(cljs.core.truth_(or__27765__auto__)){
return or__27765__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__36611__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36611 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36612__i = 0, G__36612__a = new Array(arguments.length -  0);
while (G__36612__i < G__36612__a.length) {G__36612__a[G__36612__i] = arguments[G__36612__i + 0]; ++G__36612__i;}
  args = new cljs.core.IndexedSeq(G__36612__a,0,null);
} 
return G__36611__delegate.call(this,args);};
G__36611.cljs$lang$maxFixedArity = 0;
G__36611.cljs$lang$applyTo = (function (arglist__36613){
var args = cljs.core.seq(arglist__36613);
return G__36611__delegate(args);
});
G__36611.cljs$core$IFn$_invoke$arity$variadic = G__36611__delegate;
return G__36611;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__36614_SHARP_,p2__36615_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36614_SHARP_)].join('')),p2__36615_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__36616_SHARP_,p2__36617_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36616_SHARP_)].join(''),p2__36617_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36618 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36618.addCallback(((function (G__36618){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36618))
);

G__36618.addErrback(((function (G__36618){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36618))
);

return G__36618;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36619 = cljs.core._EQ_;
var expr__36620 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36619.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36620))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__36619,expr__36620){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__36619,expr__36620))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__36619,expr__36620){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36622){if((e36622 instanceof Error)){
var e = e36622;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36622;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__36619,expr__36620))
} else {
if(cljs.core.truth_(pred__36619.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36620))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36619.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__36620))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36619.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36620))){
return ((function (pred__36619,expr__36620){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36623){if((e36623 instanceof Error)){
var e = e36623;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36623;

}
}})());
});
;})(pred__36619,expr__36620))
} else {
return ((function (pred__36619,expr__36620){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36619,expr__36620))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36624,callback){
var map__36625 = p__36624;
var map__36625__$1 = ((((!((map__36625 == null)))?((((map__36625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36625.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36625):map__36625);
var file_msg = map__36625__$1;
var request_url = cljs.core.get.call(null,map__36625__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36625,map__36625__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36625,map__36625__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__31193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto__){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto__){
return (function (state_36649){
var state_val_36650 = (state_36649[(1)]);
if((state_val_36650 === (7))){
var inst_36645 = (state_36649[(2)]);
var state_36649__$1 = state_36649;
var statearr_36651_36668 = state_36649__$1;
(statearr_36651_36668[(2)] = inst_36645);

(statearr_36651_36668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36650 === (1))){
var state_36649__$1 = state_36649;
var statearr_36652_36669 = state_36649__$1;
(statearr_36652_36669[(2)] = null);

(statearr_36652_36669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36650 === (4))){
var inst_36629 = (state_36649[(7)]);
var inst_36629__$1 = (state_36649[(2)]);
var state_36649__$1 = (function (){var statearr_36653 = state_36649;
(statearr_36653[(7)] = inst_36629__$1);

return statearr_36653;
})();
if(cljs.core.truth_(inst_36629__$1)){
var statearr_36654_36670 = state_36649__$1;
(statearr_36654_36670[(1)] = (5));

} else {
var statearr_36655_36671 = state_36649__$1;
(statearr_36655_36671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36650 === (6))){
var state_36649__$1 = state_36649;
var statearr_36656_36672 = state_36649__$1;
(statearr_36656_36672[(2)] = null);

(statearr_36656_36672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36650 === (3))){
var inst_36647 = (state_36649[(2)]);
var state_36649__$1 = state_36649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36649__$1,inst_36647);
} else {
if((state_val_36650 === (2))){
var state_36649__$1 = state_36649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36649__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36650 === (11))){
var inst_36641 = (state_36649[(2)]);
var state_36649__$1 = (function (){var statearr_36657 = state_36649;
(statearr_36657[(8)] = inst_36641);

return statearr_36657;
})();
var statearr_36658_36673 = state_36649__$1;
(statearr_36658_36673[(2)] = null);

(statearr_36658_36673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36650 === (9))){
var inst_36635 = (state_36649[(9)]);
var inst_36633 = (state_36649[(10)]);
var inst_36637 = inst_36635.call(null,inst_36633);
var state_36649__$1 = state_36649;
var statearr_36659_36674 = state_36649__$1;
(statearr_36659_36674[(2)] = inst_36637);

(statearr_36659_36674[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36650 === (5))){
var inst_36629 = (state_36649[(7)]);
var inst_36631 = figwheel.client.file_reloading.blocking_load.call(null,inst_36629);
var state_36649__$1 = state_36649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36649__$1,(8),inst_36631);
} else {
if((state_val_36650 === (10))){
var inst_36633 = (state_36649[(10)]);
var inst_36639 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36633);
var state_36649__$1 = state_36649;
var statearr_36660_36675 = state_36649__$1;
(statearr_36660_36675[(2)] = inst_36639);

(statearr_36660_36675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36650 === (8))){
var inst_36635 = (state_36649[(9)]);
var inst_36629 = (state_36649[(7)]);
var inst_36633 = (state_36649[(2)]);
var inst_36634 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36635__$1 = cljs.core.get.call(null,inst_36634,inst_36629);
var state_36649__$1 = (function (){var statearr_36661 = state_36649;
(statearr_36661[(9)] = inst_36635__$1);

(statearr_36661[(10)] = inst_36633);

return statearr_36661;
})();
if(cljs.core.truth_(inst_36635__$1)){
var statearr_36662_36676 = state_36649__$1;
(statearr_36662_36676[(1)] = (9));

} else {
var statearr_36663_36677 = state_36649__$1;
(statearr_36663_36677[(1)] = (10));

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
});})(c__31193__auto__))
;
return ((function (switch__31105__auto__,c__31193__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31106__auto__ = null;
var figwheel$client$file_reloading$state_machine__31106__auto____0 = (function (){
var statearr_36664 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36664[(0)] = figwheel$client$file_reloading$state_machine__31106__auto__);

(statearr_36664[(1)] = (1));

return statearr_36664;
});
var figwheel$client$file_reloading$state_machine__31106__auto____1 = (function (state_36649){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_36649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e36665){if((e36665 instanceof Object)){
var ex__31109__auto__ = e36665;
var statearr_36666_36678 = state_36649;
(statearr_36666_36678[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36679 = state_36649;
state_36649 = G__36679;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31106__auto__ = function(state_36649){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31106__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31106__auto____1.call(this,state_36649);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31106__auto____0;
figwheel$client$file_reloading$state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31106__auto____1;
return figwheel$client$file_reloading$state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto__))
})();
var state__31195__auto__ = (function (){var statearr_36667 = f__31194__auto__.call(null);
(statearr_36667[(6)] = c__31193__auto__);

return statearr_36667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto__))
);

return c__31193__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36680,callback){
var map__36681 = p__36680;
var map__36681__$1 = ((((!((map__36681 == null)))?((((map__36681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36681):map__36681);
var file_msg = map__36681__$1;
var namespace = cljs.core.get.call(null,map__36681__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36681,map__36681__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36681,map__36681__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36683){
var map__36684 = p__36683;
var map__36684__$1 = ((((!((map__36684 == null)))?((((map__36684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36684):map__36684);
var file_msg = map__36684__$1;
var namespace = cljs.core.get.call(null,map__36684__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36686){
var map__36687 = p__36686;
var map__36687__$1 = ((((!((map__36687 == null)))?((((map__36687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36687.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36687):map__36687);
var file_msg = map__36687__$1;
var namespace = cljs.core.get.call(null,map__36687__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27753__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__27753__auto__){
var or__27765__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27765__auto__)){
return or__27765__auto__;
} else {
var or__27765__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27765__auto____$1)){
return or__27765__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27753__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36689,callback){
var map__36690 = p__36689;
var map__36690__$1 = ((((!((map__36690 == null)))?((((map__36690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36690.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36690):map__36690);
var file_msg = map__36690__$1;
var request_url = cljs.core.get.call(null,map__36690__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36690__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__31193__auto___36740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto___36740,out){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto___36740,out){
return (function (state_36725){
var state_val_36726 = (state_36725[(1)]);
if((state_val_36726 === (1))){
var inst_36699 = cljs.core.seq.call(null,files);
var inst_36700 = cljs.core.first.call(null,inst_36699);
var inst_36701 = cljs.core.next.call(null,inst_36699);
var inst_36702 = files;
var state_36725__$1 = (function (){var statearr_36727 = state_36725;
(statearr_36727[(7)] = inst_36700);

(statearr_36727[(8)] = inst_36701);

(statearr_36727[(9)] = inst_36702);

return statearr_36727;
})();
var statearr_36728_36741 = state_36725__$1;
(statearr_36728_36741[(2)] = null);

(statearr_36728_36741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (2))){
var inst_36708 = (state_36725[(10)]);
var inst_36702 = (state_36725[(9)]);
var inst_36707 = cljs.core.seq.call(null,inst_36702);
var inst_36708__$1 = cljs.core.first.call(null,inst_36707);
var inst_36709 = cljs.core.next.call(null,inst_36707);
var inst_36710 = (inst_36708__$1 == null);
var inst_36711 = cljs.core.not.call(null,inst_36710);
var state_36725__$1 = (function (){var statearr_36729 = state_36725;
(statearr_36729[(11)] = inst_36709);

(statearr_36729[(10)] = inst_36708__$1);

return statearr_36729;
})();
if(inst_36711){
var statearr_36730_36742 = state_36725__$1;
(statearr_36730_36742[(1)] = (4));

} else {
var statearr_36731_36743 = state_36725__$1;
(statearr_36731_36743[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (3))){
var inst_36723 = (state_36725[(2)]);
var state_36725__$1 = state_36725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36725__$1,inst_36723);
} else {
if((state_val_36726 === (4))){
var inst_36708 = (state_36725[(10)]);
var inst_36713 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36708);
var state_36725__$1 = state_36725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36725__$1,(7),inst_36713);
} else {
if((state_val_36726 === (5))){
var inst_36719 = cljs.core.async.close_BANG_.call(null,out);
var state_36725__$1 = state_36725;
var statearr_36732_36744 = state_36725__$1;
(statearr_36732_36744[(2)] = inst_36719);

(statearr_36732_36744[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (6))){
var inst_36721 = (state_36725[(2)]);
var state_36725__$1 = state_36725;
var statearr_36733_36745 = state_36725__$1;
(statearr_36733_36745[(2)] = inst_36721);

(statearr_36733_36745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (7))){
var inst_36709 = (state_36725[(11)]);
var inst_36715 = (state_36725[(2)]);
var inst_36716 = cljs.core.async.put_BANG_.call(null,out,inst_36715);
var inst_36702 = inst_36709;
var state_36725__$1 = (function (){var statearr_36734 = state_36725;
(statearr_36734[(9)] = inst_36702);

(statearr_36734[(12)] = inst_36716);

return statearr_36734;
})();
var statearr_36735_36746 = state_36725__$1;
(statearr_36735_36746[(2)] = null);

(statearr_36735_36746[(1)] = (2));


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
});})(c__31193__auto___36740,out))
;
return ((function (switch__31105__auto__,c__31193__auto___36740,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31106__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31106__auto____0 = (function (){
var statearr_36736 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36736[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31106__auto__);

(statearr_36736[(1)] = (1));

return statearr_36736;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31106__auto____1 = (function (state_36725){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_36725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e36737){if((e36737 instanceof Object)){
var ex__31109__auto__ = e36737;
var statearr_36738_36747 = state_36725;
(statearr_36738_36747[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36748 = state_36725;
state_36725 = G__36748;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31106__auto__ = function(state_36725){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31106__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31106__auto____1.call(this,state_36725);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31106__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31106__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto___36740,out))
})();
var state__31195__auto__ = (function (){var statearr_36739 = f__31194__auto__.call(null);
(statearr_36739[(6)] = c__31193__auto___36740);

return statearr_36739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto___36740,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36749,opts){
var map__36750 = p__36749;
var map__36750__$1 = ((((!((map__36750 == null)))?((((map__36750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36750):map__36750);
var eval_body = cljs.core.get.call(null,map__36750__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36750__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27753__auto__ = eval_body;
if(cljs.core.truth_(and__27753__auto__)){
return typeof eval_body === 'string';
} else {
return and__27753__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36752){var e = e36752;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__36753_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36753_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__36754){
var vec__36755 = p__36754;
var k = cljs.core.nth.call(null,vec__36755,(0),null);
var v = cljs.core.nth.call(null,vec__36755,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36758){
var vec__36759 = p__36758;
var k = cljs.core.nth.call(null,vec__36759,(0),null);
var v = cljs.core.nth.call(null,vec__36759,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36765,p__36766){
var map__36767 = p__36765;
var map__36767__$1 = ((((!((map__36767 == null)))?((((map__36767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36767):map__36767);
var opts = map__36767__$1;
var before_jsload = cljs.core.get.call(null,map__36767__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36767__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36767__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36768 = p__36766;
var map__36768__$1 = ((((!((map__36768 == null)))?((((map__36768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36768.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36768):map__36768);
var msg = map__36768__$1;
var files = cljs.core.get.call(null,map__36768__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36768__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36768__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31193__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31193__auto__,map__36767,map__36767__$1,opts,before_jsload,on_jsload,reload_dependents,map__36768,map__36768__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31194__auto__ = (function (){var switch__31105__auto__ = ((function (c__31193__auto__,map__36767,map__36767__$1,opts,before_jsload,on_jsload,reload_dependents,map__36768,map__36768__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36922){
var state_val_36923 = (state_36922[(1)]);
if((state_val_36923 === (7))){
var inst_36782 = (state_36922[(7)]);
var inst_36784 = (state_36922[(8)]);
var inst_36783 = (state_36922[(9)]);
var inst_36785 = (state_36922[(10)]);
var inst_36790 = cljs.core._nth.call(null,inst_36783,inst_36785);
var inst_36791 = figwheel.client.file_reloading.eval_body.call(null,inst_36790,opts);
var inst_36792 = (inst_36785 + (1));
var tmp36924 = inst_36782;
var tmp36925 = inst_36784;
var tmp36926 = inst_36783;
var inst_36782__$1 = tmp36924;
var inst_36783__$1 = tmp36926;
var inst_36784__$1 = tmp36925;
var inst_36785__$1 = inst_36792;
var state_36922__$1 = (function (){var statearr_36927 = state_36922;
(statearr_36927[(7)] = inst_36782__$1);

(statearr_36927[(11)] = inst_36791);

(statearr_36927[(8)] = inst_36784__$1);

(statearr_36927[(9)] = inst_36783__$1);

(statearr_36927[(10)] = inst_36785__$1);

return statearr_36927;
})();
var statearr_36928_37011 = state_36922__$1;
(statearr_36928_37011[(2)] = null);

(statearr_36928_37011[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (20))){
var inst_36825 = (state_36922[(12)]);
var inst_36833 = figwheel.client.file_reloading.sort_files.call(null,inst_36825);
var state_36922__$1 = state_36922;
var statearr_36929_37012 = state_36922__$1;
(statearr_36929_37012[(2)] = inst_36833);

(statearr_36929_37012[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (27))){
var state_36922__$1 = state_36922;
var statearr_36930_37013 = state_36922__$1;
(statearr_36930_37013[(2)] = null);

(statearr_36930_37013[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (1))){
var inst_36774 = (state_36922[(13)]);
var inst_36771 = before_jsload.call(null,files);
var inst_36772 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36773 = (function (){return ((function (inst_36774,inst_36771,inst_36772,state_val_36923,c__31193__auto__,map__36767,map__36767__$1,opts,before_jsload,on_jsload,reload_dependents,map__36768,map__36768__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36762_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36762_SHARP_);
});
;})(inst_36774,inst_36771,inst_36772,state_val_36923,c__31193__auto__,map__36767,map__36767__$1,opts,before_jsload,on_jsload,reload_dependents,map__36768,map__36768__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36774__$1 = cljs.core.filter.call(null,inst_36773,files);
var inst_36775 = cljs.core.not_empty.call(null,inst_36774__$1);
var state_36922__$1 = (function (){var statearr_36931 = state_36922;
(statearr_36931[(14)] = inst_36772);

(statearr_36931[(15)] = inst_36771);

(statearr_36931[(13)] = inst_36774__$1);

return statearr_36931;
})();
if(cljs.core.truth_(inst_36775)){
var statearr_36932_37014 = state_36922__$1;
(statearr_36932_37014[(1)] = (2));

} else {
var statearr_36933_37015 = state_36922__$1;
(statearr_36933_37015[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (24))){
var state_36922__$1 = state_36922;
var statearr_36934_37016 = state_36922__$1;
(statearr_36934_37016[(2)] = null);

(statearr_36934_37016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (39))){
var inst_36875 = (state_36922[(16)]);
var state_36922__$1 = state_36922;
var statearr_36935_37017 = state_36922__$1;
(statearr_36935_37017[(2)] = inst_36875);

(statearr_36935_37017[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (46))){
var inst_36917 = (state_36922[(2)]);
var state_36922__$1 = state_36922;
var statearr_36936_37018 = state_36922__$1;
(statearr_36936_37018[(2)] = inst_36917);

(statearr_36936_37018[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (4))){
var inst_36819 = (state_36922[(2)]);
var inst_36820 = cljs.core.List.EMPTY;
var inst_36821 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36820);
var inst_36822 = (function (){return ((function (inst_36819,inst_36820,inst_36821,state_val_36923,c__31193__auto__,map__36767,map__36767__$1,opts,before_jsload,on_jsload,reload_dependents,map__36768,map__36768__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36763_SHARP_){
var and__27753__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36763_SHARP_);
if(cljs.core.truth_(and__27753__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36763_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36763_SHARP_)));
} else {
return and__27753__auto__;
}
});
;})(inst_36819,inst_36820,inst_36821,state_val_36923,c__31193__auto__,map__36767,map__36767__$1,opts,before_jsload,on_jsload,reload_dependents,map__36768,map__36768__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36823 = cljs.core.filter.call(null,inst_36822,files);
var inst_36824 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36825 = cljs.core.concat.call(null,inst_36823,inst_36824);
var state_36922__$1 = (function (){var statearr_36937 = state_36922;
(statearr_36937[(17)] = inst_36821);

(statearr_36937[(12)] = inst_36825);

(statearr_36937[(18)] = inst_36819);

return statearr_36937;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36938_37019 = state_36922__$1;
(statearr_36938_37019[(1)] = (16));

} else {
var statearr_36939_37020 = state_36922__$1;
(statearr_36939_37020[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (15))){
var inst_36809 = (state_36922[(2)]);
var state_36922__$1 = state_36922;
var statearr_36940_37021 = state_36922__$1;
(statearr_36940_37021[(2)] = inst_36809);

(statearr_36940_37021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (21))){
var inst_36835 = (state_36922[(19)]);
var inst_36835__$1 = (state_36922[(2)]);
var inst_36836 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36835__$1);
var state_36922__$1 = (function (){var statearr_36941 = state_36922;
(statearr_36941[(19)] = inst_36835__$1);

return statearr_36941;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36922__$1,(22),inst_36836);
} else {
if((state_val_36923 === (31))){
var inst_36920 = (state_36922[(2)]);
var state_36922__$1 = state_36922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36922__$1,inst_36920);
} else {
if((state_val_36923 === (32))){
var inst_36875 = (state_36922[(16)]);
var inst_36880 = inst_36875.cljs$lang$protocol_mask$partition0$;
var inst_36881 = (inst_36880 & (64));
var inst_36882 = inst_36875.cljs$core$ISeq$;
var inst_36883 = (cljs.core.PROTOCOL_SENTINEL === inst_36882);
var inst_36884 = (inst_36881) || (inst_36883);
var state_36922__$1 = state_36922;
if(cljs.core.truth_(inst_36884)){
var statearr_36942_37022 = state_36922__$1;
(statearr_36942_37022[(1)] = (35));

} else {
var statearr_36943_37023 = state_36922__$1;
(statearr_36943_37023[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (40))){
var inst_36897 = (state_36922[(20)]);
var inst_36896 = (state_36922[(2)]);
var inst_36897__$1 = cljs.core.get.call(null,inst_36896,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36898 = cljs.core.get.call(null,inst_36896,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36899 = cljs.core.not_empty.call(null,inst_36897__$1);
var state_36922__$1 = (function (){var statearr_36944 = state_36922;
(statearr_36944[(21)] = inst_36898);

(statearr_36944[(20)] = inst_36897__$1);

return statearr_36944;
})();
if(cljs.core.truth_(inst_36899)){
var statearr_36945_37024 = state_36922__$1;
(statearr_36945_37024[(1)] = (41));

} else {
var statearr_36946_37025 = state_36922__$1;
(statearr_36946_37025[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (33))){
var state_36922__$1 = state_36922;
var statearr_36947_37026 = state_36922__$1;
(statearr_36947_37026[(2)] = false);

(statearr_36947_37026[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (13))){
var inst_36795 = (state_36922[(22)]);
var inst_36799 = cljs.core.chunk_first.call(null,inst_36795);
var inst_36800 = cljs.core.chunk_rest.call(null,inst_36795);
var inst_36801 = cljs.core.count.call(null,inst_36799);
var inst_36782 = inst_36800;
var inst_36783 = inst_36799;
var inst_36784 = inst_36801;
var inst_36785 = (0);
var state_36922__$1 = (function (){var statearr_36948 = state_36922;
(statearr_36948[(7)] = inst_36782);

(statearr_36948[(8)] = inst_36784);

(statearr_36948[(9)] = inst_36783);

(statearr_36948[(10)] = inst_36785);

return statearr_36948;
})();
var statearr_36949_37027 = state_36922__$1;
(statearr_36949_37027[(2)] = null);

(statearr_36949_37027[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (22))){
var inst_36843 = (state_36922[(23)]);
var inst_36835 = (state_36922[(19)]);
var inst_36839 = (state_36922[(24)]);
var inst_36838 = (state_36922[(25)]);
var inst_36838__$1 = (state_36922[(2)]);
var inst_36839__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36838__$1);
var inst_36840 = (function (){var all_files = inst_36835;
var res_SINGLEQUOTE_ = inst_36838__$1;
var res = inst_36839__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36843,inst_36835,inst_36839,inst_36838,inst_36838__$1,inst_36839__$1,state_val_36923,c__31193__auto__,map__36767,map__36767__$1,opts,before_jsload,on_jsload,reload_dependents,map__36768,map__36768__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36764_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36764_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36843,inst_36835,inst_36839,inst_36838,inst_36838__$1,inst_36839__$1,state_val_36923,c__31193__auto__,map__36767,map__36767__$1,opts,before_jsload,on_jsload,reload_dependents,map__36768,map__36768__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36841 = cljs.core.filter.call(null,inst_36840,inst_36838__$1);
var inst_36842 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36843__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36842);
var inst_36844 = cljs.core.not_empty.call(null,inst_36843__$1);
var state_36922__$1 = (function (){var statearr_36950 = state_36922;
(statearr_36950[(23)] = inst_36843__$1);

(statearr_36950[(24)] = inst_36839__$1);

(statearr_36950[(26)] = inst_36841);

(statearr_36950[(25)] = inst_36838__$1);

return statearr_36950;
})();
if(cljs.core.truth_(inst_36844)){
var statearr_36951_37028 = state_36922__$1;
(statearr_36951_37028[(1)] = (23));

} else {
var statearr_36952_37029 = state_36922__$1;
(statearr_36952_37029[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (36))){
var state_36922__$1 = state_36922;
var statearr_36953_37030 = state_36922__$1;
(statearr_36953_37030[(2)] = false);

(statearr_36953_37030[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (41))){
var inst_36897 = (state_36922[(20)]);
var inst_36901 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36902 = cljs.core.map.call(null,inst_36901,inst_36897);
var inst_36903 = cljs.core.pr_str.call(null,inst_36902);
var inst_36904 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36903)].join('');
var inst_36905 = figwheel.client.utils.log.call(null,inst_36904);
var state_36922__$1 = state_36922;
var statearr_36954_37031 = state_36922__$1;
(statearr_36954_37031[(2)] = inst_36905);

(statearr_36954_37031[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (43))){
var inst_36898 = (state_36922[(21)]);
var inst_36908 = (state_36922[(2)]);
var inst_36909 = cljs.core.not_empty.call(null,inst_36898);
var state_36922__$1 = (function (){var statearr_36955 = state_36922;
(statearr_36955[(27)] = inst_36908);

return statearr_36955;
})();
if(cljs.core.truth_(inst_36909)){
var statearr_36956_37032 = state_36922__$1;
(statearr_36956_37032[(1)] = (44));

} else {
var statearr_36957_37033 = state_36922__$1;
(statearr_36957_37033[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (29))){
var inst_36875 = (state_36922[(16)]);
var inst_36843 = (state_36922[(23)]);
var inst_36835 = (state_36922[(19)]);
var inst_36839 = (state_36922[(24)]);
var inst_36841 = (state_36922[(26)]);
var inst_36838 = (state_36922[(25)]);
var inst_36871 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36874 = (function (){var all_files = inst_36835;
var res_SINGLEQUOTE_ = inst_36838;
var res = inst_36839;
var files_not_loaded = inst_36841;
var dependencies_that_loaded = inst_36843;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36875,inst_36843,inst_36835,inst_36839,inst_36841,inst_36838,inst_36871,state_val_36923,c__31193__auto__,map__36767,map__36767__$1,opts,before_jsload,on_jsload,reload_dependents,map__36768,map__36768__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36873){
var map__36958 = p__36873;
var map__36958__$1 = ((((!((map__36958 == null)))?((((map__36958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36958):map__36958);
var namespace = cljs.core.get.call(null,map__36958__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36875,inst_36843,inst_36835,inst_36839,inst_36841,inst_36838,inst_36871,state_val_36923,c__31193__auto__,map__36767,map__36767__$1,opts,before_jsload,on_jsload,reload_dependents,map__36768,map__36768__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36875__$1 = cljs.core.group_by.call(null,inst_36874,inst_36841);
var inst_36877 = (inst_36875__$1 == null);
var inst_36878 = cljs.core.not.call(null,inst_36877);
var state_36922__$1 = (function (){var statearr_36960 = state_36922;
(statearr_36960[(16)] = inst_36875__$1);

(statearr_36960[(28)] = inst_36871);

return statearr_36960;
})();
if(inst_36878){
var statearr_36961_37034 = state_36922__$1;
(statearr_36961_37034[(1)] = (32));

} else {
var statearr_36962_37035 = state_36922__$1;
(statearr_36962_37035[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (44))){
var inst_36898 = (state_36922[(21)]);
var inst_36911 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36898);
var inst_36912 = cljs.core.pr_str.call(null,inst_36911);
var inst_36913 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36912)].join('');
var inst_36914 = figwheel.client.utils.log.call(null,inst_36913);
var state_36922__$1 = state_36922;
var statearr_36963_37036 = state_36922__$1;
(statearr_36963_37036[(2)] = inst_36914);

(statearr_36963_37036[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (6))){
var inst_36816 = (state_36922[(2)]);
var state_36922__$1 = state_36922;
var statearr_36964_37037 = state_36922__$1;
(statearr_36964_37037[(2)] = inst_36816);

(statearr_36964_37037[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (28))){
var inst_36841 = (state_36922[(26)]);
var inst_36868 = (state_36922[(2)]);
var inst_36869 = cljs.core.not_empty.call(null,inst_36841);
var state_36922__$1 = (function (){var statearr_36965 = state_36922;
(statearr_36965[(29)] = inst_36868);

return statearr_36965;
})();
if(cljs.core.truth_(inst_36869)){
var statearr_36966_37038 = state_36922__$1;
(statearr_36966_37038[(1)] = (29));

} else {
var statearr_36967_37039 = state_36922__$1;
(statearr_36967_37039[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (25))){
var inst_36839 = (state_36922[(24)]);
var inst_36855 = (state_36922[(2)]);
var inst_36856 = cljs.core.not_empty.call(null,inst_36839);
var state_36922__$1 = (function (){var statearr_36968 = state_36922;
(statearr_36968[(30)] = inst_36855);

return statearr_36968;
})();
if(cljs.core.truth_(inst_36856)){
var statearr_36969_37040 = state_36922__$1;
(statearr_36969_37040[(1)] = (26));

} else {
var statearr_36970_37041 = state_36922__$1;
(statearr_36970_37041[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (34))){
var inst_36891 = (state_36922[(2)]);
var state_36922__$1 = state_36922;
if(cljs.core.truth_(inst_36891)){
var statearr_36971_37042 = state_36922__$1;
(statearr_36971_37042[(1)] = (38));

} else {
var statearr_36972_37043 = state_36922__$1;
(statearr_36972_37043[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (17))){
var state_36922__$1 = state_36922;
var statearr_36973_37044 = state_36922__$1;
(statearr_36973_37044[(2)] = recompile_dependents);

(statearr_36973_37044[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (3))){
var state_36922__$1 = state_36922;
var statearr_36974_37045 = state_36922__$1;
(statearr_36974_37045[(2)] = null);

(statearr_36974_37045[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (12))){
var inst_36812 = (state_36922[(2)]);
var state_36922__$1 = state_36922;
var statearr_36975_37046 = state_36922__$1;
(statearr_36975_37046[(2)] = inst_36812);

(statearr_36975_37046[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (2))){
var inst_36774 = (state_36922[(13)]);
var inst_36781 = cljs.core.seq.call(null,inst_36774);
var inst_36782 = inst_36781;
var inst_36783 = null;
var inst_36784 = (0);
var inst_36785 = (0);
var state_36922__$1 = (function (){var statearr_36976 = state_36922;
(statearr_36976[(7)] = inst_36782);

(statearr_36976[(8)] = inst_36784);

(statearr_36976[(9)] = inst_36783);

(statearr_36976[(10)] = inst_36785);

return statearr_36976;
})();
var statearr_36977_37047 = state_36922__$1;
(statearr_36977_37047[(2)] = null);

(statearr_36977_37047[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (23))){
var inst_36843 = (state_36922[(23)]);
var inst_36835 = (state_36922[(19)]);
var inst_36839 = (state_36922[(24)]);
var inst_36841 = (state_36922[(26)]);
var inst_36838 = (state_36922[(25)]);
var inst_36846 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36848 = (function (){var all_files = inst_36835;
var res_SINGLEQUOTE_ = inst_36838;
var res = inst_36839;
var files_not_loaded = inst_36841;
var dependencies_that_loaded = inst_36843;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36843,inst_36835,inst_36839,inst_36841,inst_36838,inst_36846,state_val_36923,c__31193__auto__,map__36767,map__36767__$1,opts,before_jsload,on_jsload,reload_dependents,map__36768,map__36768__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36847){
var map__36978 = p__36847;
var map__36978__$1 = ((((!((map__36978 == null)))?((((map__36978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36978):map__36978);
var request_url = cljs.core.get.call(null,map__36978__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36843,inst_36835,inst_36839,inst_36841,inst_36838,inst_36846,state_val_36923,c__31193__auto__,map__36767,map__36767__$1,opts,before_jsload,on_jsload,reload_dependents,map__36768,map__36768__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36849 = cljs.core.reverse.call(null,inst_36843);
var inst_36850 = cljs.core.map.call(null,inst_36848,inst_36849);
var inst_36851 = cljs.core.pr_str.call(null,inst_36850);
var inst_36852 = figwheel.client.utils.log.call(null,inst_36851);
var state_36922__$1 = (function (){var statearr_36980 = state_36922;
(statearr_36980[(31)] = inst_36846);

return statearr_36980;
})();
var statearr_36981_37048 = state_36922__$1;
(statearr_36981_37048[(2)] = inst_36852);

(statearr_36981_37048[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (35))){
var state_36922__$1 = state_36922;
var statearr_36982_37049 = state_36922__$1;
(statearr_36982_37049[(2)] = true);

(statearr_36982_37049[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (19))){
var inst_36825 = (state_36922[(12)]);
var inst_36831 = figwheel.client.file_reloading.expand_files.call(null,inst_36825);
var state_36922__$1 = state_36922;
var statearr_36983_37050 = state_36922__$1;
(statearr_36983_37050[(2)] = inst_36831);

(statearr_36983_37050[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (11))){
var state_36922__$1 = state_36922;
var statearr_36984_37051 = state_36922__$1;
(statearr_36984_37051[(2)] = null);

(statearr_36984_37051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (9))){
var inst_36814 = (state_36922[(2)]);
var state_36922__$1 = state_36922;
var statearr_36985_37052 = state_36922__$1;
(statearr_36985_37052[(2)] = inst_36814);

(statearr_36985_37052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (5))){
var inst_36784 = (state_36922[(8)]);
var inst_36785 = (state_36922[(10)]);
var inst_36787 = (inst_36785 < inst_36784);
var inst_36788 = inst_36787;
var state_36922__$1 = state_36922;
if(cljs.core.truth_(inst_36788)){
var statearr_36986_37053 = state_36922__$1;
(statearr_36986_37053[(1)] = (7));

} else {
var statearr_36987_37054 = state_36922__$1;
(statearr_36987_37054[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (14))){
var inst_36795 = (state_36922[(22)]);
var inst_36804 = cljs.core.first.call(null,inst_36795);
var inst_36805 = figwheel.client.file_reloading.eval_body.call(null,inst_36804,opts);
var inst_36806 = cljs.core.next.call(null,inst_36795);
var inst_36782 = inst_36806;
var inst_36783 = null;
var inst_36784 = (0);
var inst_36785 = (0);
var state_36922__$1 = (function (){var statearr_36988 = state_36922;
(statearr_36988[(7)] = inst_36782);

(statearr_36988[(8)] = inst_36784);

(statearr_36988[(32)] = inst_36805);

(statearr_36988[(9)] = inst_36783);

(statearr_36988[(10)] = inst_36785);

return statearr_36988;
})();
var statearr_36989_37055 = state_36922__$1;
(statearr_36989_37055[(2)] = null);

(statearr_36989_37055[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (45))){
var state_36922__$1 = state_36922;
var statearr_36990_37056 = state_36922__$1;
(statearr_36990_37056[(2)] = null);

(statearr_36990_37056[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (26))){
var inst_36843 = (state_36922[(23)]);
var inst_36835 = (state_36922[(19)]);
var inst_36839 = (state_36922[(24)]);
var inst_36841 = (state_36922[(26)]);
var inst_36838 = (state_36922[(25)]);
var inst_36858 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36860 = (function (){var all_files = inst_36835;
var res_SINGLEQUOTE_ = inst_36838;
var res = inst_36839;
var files_not_loaded = inst_36841;
var dependencies_that_loaded = inst_36843;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36843,inst_36835,inst_36839,inst_36841,inst_36838,inst_36858,state_val_36923,c__31193__auto__,map__36767,map__36767__$1,opts,before_jsload,on_jsload,reload_dependents,map__36768,map__36768__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36859){
var map__36991 = p__36859;
var map__36991__$1 = ((((!((map__36991 == null)))?((((map__36991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36991):map__36991);
var namespace = cljs.core.get.call(null,map__36991__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36991__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36843,inst_36835,inst_36839,inst_36841,inst_36838,inst_36858,state_val_36923,c__31193__auto__,map__36767,map__36767__$1,opts,before_jsload,on_jsload,reload_dependents,map__36768,map__36768__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36861 = cljs.core.map.call(null,inst_36860,inst_36839);
var inst_36862 = cljs.core.pr_str.call(null,inst_36861);
var inst_36863 = figwheel.client.utils.log.call(null,inst_36862);
var inst_36864 = (function (){var all_files = inst_36835;
var res_SINGLEQUOTE_ = inst_36838;
var res = inst_36839;
var files_not_loaded = inst_36841;
var dependencies_that_loaded = inst_36843;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36843,inst_36835,inst_36839,inst_36841,inst_36838,inst_36858,inst_36860,inst_36861,inst_36862,inst_36863,state_val_36923,c__31193__auto__,map__36767,map__36767__$1,opts,before_jsload,on_jsload,reload_dependents,map__36768,map__36768__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36843,inst_36835,inst_36839,inst_36841,inst_36838,inst_36858,inst_36860,inst_36861,inst_36862,inst_36863,state_val_36923,c__31193__auto__,map__36767,map__36767__$1,opts,before_jsload,on_jsload,reload_dependents,map__36768,map__36768__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36865 = setTimeout(inst_36864,(10));
var state_36922__$1 = (function (){var statearr_36993 = state_36922;
(statearr_36993[(33)] = inst_36863);

(statearr_36993[(34)] = inst_36858);

return statearr_36993;
})();
var statearr_36994_37057 = state_36922__$1;
(statearr_36994_37057[(2)] = inst_36865);

(statearr_36994_37057[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (16))){
var state_36922__$1 = state_36922;
var statearr_36995_37058 = state_36922__$1;
(statearr_36995_37058[(2)] = reload_dependents);

(statearr_36995_37058[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (38))){
var inst_36875 = (state_36922[(16)]);
var inst_36893 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36875);
var state_36922__$1 = state_36922;
var statearr_36996_37059 = state_36922__$1;
(statearr_36996_37059[(2)] = inst_36893);

(statearr_36996_37059[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (30))){
var state_36922__$1 = state_36922;
var statearr_36997_37060 = state_36922__$1;
(statearr_36997_37060[(2)] = null);

(statearr_36997_37060[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (10))){
var inst_36795 = (state_36922[(22)]);
var inst_36797 = cljs.core.chunked_seq_QMARK_.call(null,inst_36795);
var state_36922__$1 = state_36922;
if(inst_36797){
var statearr_36998_37061 = state_36922__$1;
(statearr_36998_37061[(1)] = (13));

} else {
var statearr_36999_37062 = state_36922__$1;
(statearr_36999_37062[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (18))){
var inst_36829 = (state_36922[(2)]);
var state_36922__$1 = state_36922;
if(cljs.core.truth_(inst_36829)){
var statearr_37000_37063 = state_36922__$1;
(statearr_37000_37063[(1)] = (19));

} else {
var statearr_37001_37064 = state_36922__$1;
(statearr_37001_37064[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (42))){
var state_36922__$1 = state_36922;
var statearr_37002_37065 = state_36922__$1;
(statearr_37002_37065[(2)] = null);

(statearr_37002_37065[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (37))){
var inst_36888 = (state_36922[(2)]);
var state_36922__$1 = state_36922;
var statearr_37003_37066 = state_36922__$1;
(statearr_37003_37066[(2)] = inst_36888);

(statearr_37003_37066[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36923 === (8))){
var inst_36782 = (state_36922[(7)]);
var inst_36795 = (state_36922[(22)]);
var inst_36795__$1 = cljs.core.seq.call(null,inst_36782);
var state_36922__$1 = (function (){var statearr_37004 = state_36922;
(statearr_37004[(22)] = inst_36795__$1);

return statearr_37004;
})();
if(inst_36795__$1){
var statearr_37005_37067 = state_36922__$1;
(statearr_37005_37067[(1)] = (10));

} else {
var statearr_37006_37068 = state_36922__$1;
(statearr_37006_37068[(1)] = (11));

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
});})(c__31193__auto__,map__36767,map__36767__$1,opts,before_jsload,on_jsload,reload_dependents,map__36768,map__36768__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31105__auto__,c__31193__auto__,map__36767,map__36767__$1,opts,before_jsload,on_jsload,reload_dependents,map__36768,map__36768__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31106__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31106__auto____0 = (function (){
var statearr_37007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37007[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31106__auto__);

(statearr_37007[(1)] = (1));

return statearr_37007;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31106__auto____1 = (function (state_36922){
while(true){
var ret_value__31107__auto__ = (function (){try{while(true){
var result__31108__auto__ = switch__31105__auto__.call(null,state_36922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31108__auto__;
}
break;
}
}catch (e37008){if((e37008 instanceof Object)){
var ex__31109__auto__ = e37008;
var statearr_37009_37069 = state_36922;
(statearr_37009_37069[(5)] = ex__31109__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37070 = state_36922;
state_36922 = G__37070;
continue;
} else {
return ret_value__31107__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31106__auto__ = function(state_36922){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31106__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31106__auto____1.call(this,state_36922);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31106__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31106__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31106__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31106__auto__;
})()
;})(switch__31105__auto__,c__31193__auto__,map__36767,map__36767__$1,opts,before_jsload,on_jsload,reload_dependents,map__36768,map__36768__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31195__auto__ = (function (){var statearr_37010 = f__31194__auto__.call(null);
(statearr_37010[(6)] = c__31193__auto__);

return statearr_37010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31195__auto__);
});})(c__31193__auto__,map__36767,map__36767__$1,opts,before_jsload,on_jsload,reload_dependents,map__36768,map__36768__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31193__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37073,link){
var map__37074 = p__37073;
var map__37074__$1 = ((((!((map__37074 == null)))?((((map__37074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37074):map__37074);
var file = cljs.core.get.call(null,map__37074__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37074,map__37074__$1,file){
return (function (p1__37071_SHARP_,p2__37072_SHARP_){
if(cljs.core._EQ_.call(null,p1__37071_SHARP_,p2__37072_SHARP_)){
return p1__37071_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37074,map__37074__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37077){
var map__37078 = p__37077;
var map__37078__$1 = ((((!((map__37078 == null)))?((((map__37078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37078):map__37078);
var match_length = cljs.core.get.call(null,map__37078__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37078__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37076_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37076_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37080_SHARP_,p2__37081_SHARP_){
return cljs.core.assoc.call(null,p1__37080_SHARP_,cljs.core.get.call(null,p2__37081_SHARP_,key),p2__37081_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_37082 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37082);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37082);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37083,p__37084){
var map__37085 = p__37083;
var map__37085__$1 = ((((!((map__37085 == null)))?((((map__37085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37085):map__37085);
var on_cssload = cljs.core.get.call(null,map__37085__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37086 = p__37084;
var map__37086__$1 = ((((!((map__37086 == null)))?((((map__37086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37086.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37086):map__37086);
var files_msg = map__37086__$1;
var files = cljs.core.get.call(null,map__37086__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1522528355745
