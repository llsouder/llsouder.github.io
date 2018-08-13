// Compiled by ClojureScript 1.10.238 {}
goog.provide('data_project.page');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('data_project.color');
goog.require('data_project.dog');
goog.require('data_project.parse');
goog.require('data_project.scene');
goog.require('data_project.upload');
goog.require('data_project.online');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof data_project.page.selected_color !== 'undefined'){
} else {
data_project.page.selected_color = reagent.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
}
if(typeof data_project.page.data_choice !== 'undefined'){
} else {
data_project.page.data_choice = reagent.core.atom.call(null,new cljs.core.Keyword(null,"file","file",-1269645878));
}
if(typeof data_project.page.bg_color !== 'undefined'){
} else {
data_project.page.bg_color = reagent.core.atom.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["0xCCC",null], null), null));
}
data_project.page.get_names = (function data_project$page$get_names(color){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref.call(null,data_project.page.data_choice))){
return data_project.parse.get_names.call(null,color,data_project.parse.parse_data.call(null,cljs.core.deref.call(null,data_project.upload.file_data)));
} else {
return data_project.parse.get_names.call(null,color,data_project.online.data);
}
});
data_project.page.list_colors = (function data_project$page$list_colors(){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref.call(null,data_project.page.data_choice))){
cljs.core.println.call(null,cljs.core.first.call(null,data_project.parse.parse_data.call(null,cljs.core.deref.call(null,data_project.upload.file_data))));

return data_project.parse.list_colors.call(null,data_project.parse.parse_data.call(null,cljs.core.deref.call(null,data_project.upload.file_data)));
} else {
cljs.core.println.call(null,cljs.core.first.call(null,data_project.online.data));

return data_project.parse.list_colors.call(null,data_project.online.data);
}
});
data_project.page.show_text = (function data_project$page$show_text(color){
var names_27407 = data_project.page.get_names.call(null,color);
cljs.core.doall.call(null,cljs.core.map.call(null,((function (names_27407){
return (function (p1__27406_SHARP_){
return data_project.scene.display_text.call(null,p1__27406_SHARP_,data_project.color.name_to_hex.call(null,color),cljs.core.rand_int.call(null,(100)),(cljs.core.rand_int.call(null,(100)) - (70)));
});})(names_27407))
,names_27407));

cljs.core.reset_BANG_.call(null,data_project.page.bg_color,cljs.core.PersistentHashSet.createAsIfByAssoc([color]));

return cljs.core.swap_BANG_.call(null,data_project.page.selected_color,cljs.core.conj,color);
});
data_project.page.remove_text = (function data_project$page$remove_text(color){
var names_27409 = data_project.page.get_names.call(null,color);
cljs.core.doall.call(null,cljs.core.map.call(null,((function (names_27409){
return (function (p1__27408_SHARP_){
return data_project.scene.remove_text.call(null,p1__27408_SHARP_);
});})(names_27409))
,names_27409));

cljs.core.reset_BANG_.call(null,data_project.page.bg_color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["gray",null], null), null));

return cljs.core.swap_BANG_.call(null,data_project.page.selected_color,cljs.core.disj,color);
});
data_project.page.toggle = (function data_project$page$toggle(color){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,data_project.page.selected_color),color)){
return data_project.page.remove_text.call(null,color);
} else {
return data_project.page.show_text.call(null,color);
}
});
data_project.page.local_component = (function data_project$page$local_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Use local data",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.reset_BANG_.call(null,data_project.page.data_choice,new cljs.core.Keyword(null,"local","local",-1497766724));
})], null)], null);
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
data_project.page.dog_button = (function data_project$page$dog_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"dog",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"dog?",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),data_project.dog.update_BANG_], null)], null);
});
data_project.page.button_panel = (function data_project$page$button_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"button-panel"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data_project.upload.input_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data_project.page.local_component], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.call(null,data_project.page.button,data_project.page.list_colors.call(null))], null)], null);
});
data_project.page.dog_panel = (function data_project$page$dog_panel(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"dog-panel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"dog-button"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data_project.page.dog_button], null)], null),(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,data_project.dog.image)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.deref.call(null,data_project.dog.image),new cljs.core.Keyword(null,"height","height",1025178622),"300px",new cljs.core.Keyword(null,"width","width",-384071477),"300px"], null)], null):null)], null);
});
data_project.page.home_page = (function data_project$page$home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(300),new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.deref.call(null,data_project.page.bg_color)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Data-Project GL"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data_project.page.button_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data_project.page.dog_panel], null)], null);
});

//# sourceMappingURL=page.js.map?rel=1534123151626
