// Compiled by ClojureScript 1.10.238 {}
goog.provide('data_project.parse');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * makes a key value pair from a : delimited string where the 1st value is the key and the second is the value
 */
data_project.parse.makekvpair = (function data_project$parse$makekvpair(line){
var splitline = clojure.string.split.call(null,line,/:/);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,cljs.core.nth.call(null,splitline,(0))),cljs.core.nth.call(null,splitline,(1))]);
});
/**
 * makes a record from a list of strings.  Each string is a : delimited kv pair.
 */
data_project.parse.makerecord = (function data_project$parse$makerecord(thedata){
if((cljs.core.count.call(null,thedata) > (1))){
return cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,data_project.parse.makekvpair,thedata));
} else {
return null;
}
});
/**
 * parse data into a list of records.
 */
data_project.parse.parse_data = (function data_project$parse$parse_data(text){
return cljs.core.keep.call(null,data_project.parse.makerecord,cljs.core.partition_by.call(null,cljs.core.empty_QMARK_,clojure.string.split_lines.call(null,text)));
});
data_project.parse.list_colors = (function data_project$parse$list_colors(p_data){
return cljs.core.keys.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"Color","Color",1460651487),p_data));
});
data_project.parse.get_names = (function data_project$parse$get_names(color,p_data){
return cljs.core.map.call(null,new cljs.core.Keyword(null,"Name","Name",-131211369),cljs.core.filter.call(null,(function (p1__26465_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"Color","Color",1460651487).cljs$core$IFn$_invoke$arity$1(p1__26465_SHARP_),color);
}),p_data));
});

//# sourceMappingURL=parse.js.map?rel=1533908786075
