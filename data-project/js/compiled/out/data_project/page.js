// Compiled by ClojureScript 1.10.238 {}
goog.provide('data_project.page');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('data_project.color');
goog.require('data_project.parse');
goog.require('data_project.scene');
goog.require('data_project.upload');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
data_project.page.app_state = reagent.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
data_project.page.show_text = (function data_project$page$show_text(color){
var names_26471 = data_project.parse.get_names.call(null,color,data_project.parse.parse_data.call(null,cljs.core.deref.call(null,data_project.upload.file_data)));
cljs.core.doall.call(null,cljs.core.map.call(null,((function (names_26471){
return (function (p1__26470_SHARP_){
return data_project.scene.display_text.call(null,p1__26470_SHARP_,data_project.color.name_to_hex.call(null,color),cljs.core.rand_int.call(null,(100)),(cljs.core.rand_int.call(null,(100)) - (70)));
});})(names_26471))
,names_26471));

return cljs.core.swap_BANG_.call(null,data_project.page.app_state,cljs.core.conj,color);
});
data_project.page.remove_text = (function data_project$page$remove_text(color){
var names_26473 = data_project.parse.get_names.call(null,color,data_project.parse.parse_data.call(null,cljs.core.deref.call(null,data_project.upload.file_data)));
cljs.core.doall.call(null,cljs.core.map.call(null,((function (names_26473){
return (function (p1__26472_SHARP_){
return data_project.scene.remove_text.call(null,p1__26472_SHARP_);
});})(names_26473))
,names_26473));

return cljs.core.swap_BANG_.call(null,data_project.page.app_state,cljs.core.disj,color);
});
data_project.page.toggle = (function data_project$page$toggle(color){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,data_project.page.app_state),color)){
return data_project.page.remove_text.call(null,color);
} else {
return data_project.page.show_text.call(null,color);
}
});
/**
 * Make a colorful button that will show the all the names which are in this
 *   color group.
 */
data_project.page.button = (function data_project$page$button(color){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),color,new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"show",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return data_project.page.toggle.call(null,color);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),color], null)], null)], null);
});
data_project.page.home_page = (function data_project$page$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Data-Project GL"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data_project.upload.input_component], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.call(null,data_project.page.button,data_project.parse.list_colors.call(null,data_project.parse.parse_data.call(null,cljs.core.deref.call(null,data_project.upload.file_data))))], null)], null);
});

//# sourceMappingURL=page.js.map?rel=1533908786114
