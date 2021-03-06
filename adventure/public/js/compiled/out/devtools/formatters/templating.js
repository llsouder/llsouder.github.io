// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x41092_41093 = value;
x41092_41093.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x41095_41096 = value;
x41095_41096.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x41098_41099 = value;
x41098_41099.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__27753__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__27753__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__27753__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__28941__auto__ = [];
var len__28934__auto___41106 = arguments.length;
var i__28935__auto___41107 = (0);
while(true){
if((i__28935__auto___41107 < len__28934__auto___41106)){
args__28941__auto__.push((arguments[i__28935__auto___41107]));

var G__41108 = (i__28935__auto___41107 + (1));
i__28935__auto___41107 = G__41108;
continue;
} else {
}
break;
}

var argseq__28942__auto__ = ((((0) < args__28941__auto__.length))?(new cljs.core.IndexedSeq(args__28941__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__28942__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__41102_41109 = cljs.core.seq.call(null,items);
var chunk__41103_41110 = null;
var count__41104_41111 = (0);
var i__41105_41112 = (0);
while(true){
if((i__41105_41112 < count__41104_41111)){
var item_41113 = cljs.core._nth.call(null,chunk__41103_41110,i__41105_41112);
if(!((item_41113 == null))){
if(cljs.core.coll_QMARK_.call(null,item_41113)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_41113)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_41113));
}
} else {
}

var G__41114 = seq__41102_41109;
var G__41115 = chunk__41103_41110;
var G__41116 = count__41104_41111;
var G__41117 = (i__41105_41112 + (1));
seq__41102_41109 = G__41114;
chunk__41103_41110 = G__41115;
count__41104_41111 = G__41116;
i__41105_41112 = G__41117;
continue;
} else {
var temp__4657__auto___41118 = cljs.core.seq.call(null,seq__41102_41109);
if(temp__4657__auto___41118){
var seq__41102_41119__$1 = temp__4657__auto___41118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41102_41119__$1)){
var c__28604__auto___41120 = cljs.core.chunk_first.call(null,seq__41102_41119__$1);
var G__41121 = cljs.core.chunk_rest.call(null,seq__41102_41119__$1);
var G__41122 = c__28604__auto___41120;
var G__41123 = cljs.core.count.call(null,c__28604__auto___41120);
var G__41124 = (0);
seq__41102_41109 = G__41121;
chunk__41103_41110 = G__41122;
count__41104_41111 = G__41123;
i__41105_41112 = G__41124;
continue;
} else {
var item_41125 = cljs.core.first.call(null,seq__41102_41119__$1);
if(!((item_41125 == null))){
if(cljs.core.coll_QMARK_.call(null,item_41125)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_41125)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_41125));
}
} else {
}

var G__41126 = cljs.core.next.call(null,seq__41102_41119__$1);
var G__41127 = null;
var G__41128 = (0);
var G__41129 = (0);
seq__41102_41109 = G__41126;
chunk__41103_41110 = G__41127;
count__41104_41111 = G__41128;
i__41105_41112 = G__41129;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq41101){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41101));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__28941__auto__ = [];
var len__28934__auto___41137 = arguments.length;
var i__28935__auto___41138 = (0);
while(true){
if((i__28935__auto___41138 < len__28934__auto___41137)){
args__28941__auto__.push((arguments[i__28935__auto___41138]));

var G__41139 = (i__28935__auto___41138 + (1));
i__28935__auto___41138 = G__41139;
continue;
} else {
}
break;
}

var argseq__28942__auto__ = ((((2) < args__28941__auto__.length))?(new cljs.core.IndexedSeq(args__28941__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28942__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__41133_41140 = cljs.core.seq.call(null,children);
var chunk__41134_41141 = null;
var count__41135_41142 = (0);
var i__41136_41143 = (0);
while(true){
if((i__41136_41143 < count__41135_41142)){
var child_41144 = cljs.core._nth.call(null,chunk__41134_41141,i__41136_41143);
if(!((child_41144 == null))){
if(cljs.core.coll_QMARK_.call(null,child_41144)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_41144))));
} else {
var temp__4655__auto___41145 = devtools.formatters.helpers.pref.call(null,child_41144);
if(cljs.core.truth_(temp__4655__auto___41145)){
var child_value_41146 = temp__4655__auto___41145;
template.push(child_value_41146);
} else {
}
}
} else {
}

var G__41147 = seq__41133_41140;
var G__41148 = chunk__41134_41141;
var G__41149 = count__41135_41142;
var G__41150 = (i__41136_41143 + (1));
seq__41133_41140 = G__41147;
chunk__41134_41141 = G__41148;
count__41135_41142 = G__41149;
i__41136_41143 = G__41150;
continue;
} else {
var temp__4657__auto___41151 = cljs.core.seq.call(null,seq__41133_41140);
if(temp__4657__auto___41151){
var seq__41133_41152__$1 = temp__4657__auto___41151;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41133_41152__$1)){
var c__28604__auto___41153 = cljs.core.chunk_first.call(null,seq__41133_41152__$1);
var G__41154 = cljs.core.chunk_rest.call(null,seq__41133_41152__$1);
var G__41155 = c__28604__auto___41153;
var G__41156 = cljs.core.count.call(null,c__28604__auto___41153);
var G__41157 = (0);
seq__41133_41140 = G__41154;
chunk__41134_41141 = G__41155;
count__41135_41142 = G__41156;
i__41136_41143 = G__41157;
continue;
} else {
var child_41158 = cljs.core.first.call(null,seq__41133_41152__$1);
if(!((child_41158 == null))){
if(cljs.core.coll_QMARK_.call(null,child_41158)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_41158))));
} else {
var temp__4655__auto___41159 = devtools.formatters.helpers.pref.call(null,child_41158);
if(cljs.core.truth_(temp__4655__auto___41159)){
var child_value_41160 = temp__4655__auto___41159;
template.push(child_value_41160);
} else {
}
}
} else {
}

var G__41161 = cljs.core.next.call(null,seq__41133_41152__$1);
var G__41162 = null;
var G__41163 = (0);
var G__41164 = (0);
seq__41133_41140 = G__41161;
chunk__41134_41141 = G__41162;
count__41135_41142 = G__41163;
i__41136_41143 = G__41164;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq41130){
var G__41131 = cljs.core.first.call(null,seq41130);
var seq41130__$1 = cljs.core.next.call(null,seq41130);
var G__41132 = cljs.core.first.call(null,seq41130__$1);
var seq41130__$2 = cljs.core.next.call(null,seq41130__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__41131,G__41132,seq41130__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__28941__auto__ = [];
var len__28934__auto___41167 = arguments.length;
var i__28935__auto___41168 = (0);
while(true){
if((i__28935__auto___41168 < len__28934__auto___41167)){
args__28941__auto__.push((arguments[i__28935__auto___41168]));

var G__41169 = (i__28935__auto___41168 + (1));
i__28935__auto___41168 = G__41169;
continue;
} else {
}
break;
}

var argseq__28942__auto__ = ((((1) < args__28941__auto__.length))?(new cljs.core.IndexedSeq(args__28941__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28942__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq41165){
var G__41166 = cljs.core.first.call(null,seq41165);
var seq41165__$1 = cljs.core.next.call(null,seq41165);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41166,seq41165__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__28941__auto__ = [];
var len__28934__auto___41172 = arguments.length;
var i__28935__auto___41173 = (0);
while(true){
if((i__28935__auto___41173 < len__28934__auto___41172)){
args__28941__auto__.push((arguments[i__28935__auto___41173]));

var G__41174 = (i__28935__auto___41173 + (1));
i__28935__auto___41173 = G__41174;
continue;
} else {
}
break;
}

var argseq__28942__auto__ = ((((1) < args__28941__auto__.length))?(new cljs.core.IndexedSeq(args__28941__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28942__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq41170){
var G__41171 = cljs.core.first.call(null,seq41170);
var seq41170__$1 = cljs.core.next.call(null,seq41170);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41171,seq41170__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__41176 = arguments.length;
switch (G__41176) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj41178 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__27765__auto__ = start_index;
if(cljs.core.truth_(or__27765__auto__)){
return or__27765__auto__;
} else {
return (0);
}
})()};
return obj41178;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__28941__auto__ = [];
var len__28934__auto___41186 = arguments.length;
var i__28935__auto___41187 = (0);
while(true){
if((i__28935__auto___41187 < len__28934__auto___41186)){
args__28941__auto__.push((arguments[i__28935__auto___41187]));

var G__41188 = (i__28935__auto___41187 + (1));
i__28935__auto___41187 = G__41188;
continue;
} else {
}
break;
}

var argseq__28942__auto__ = ((((1) < args__28941__auto__.length))?(new cljs.core.IndexedSeq(args__28941__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28942__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__41182){
var vec__41183 = p__41182;
var state_override_fn = cljs.core.nth.call(null,vec__41183,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq41180){
var G__41181 = cljs.core.first.call(null,seq41180);
var seq41180__$1 = cljs.core.next.call(null,seq41180);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__41181,seq41180__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_41189 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_41189;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__41190 = name;
switch (G__41190) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__41192 = tag;
var html_tag = cljs.core.nth.call(null,vec__41192,(0),null);
var style = cljs.core.nth.call(null,vec__41192,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_41195 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_41195;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_41196 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_41197 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_41197;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_41196;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__41198 = initial_value;
var G__41199 = value.call(null);
initial_value = G__41198;
value = G__41199;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__41200 = initial_value;
var G__41201 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__41200;
value = G__41201;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__41202 = initial_value;
var G__41203 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__41202;
value = G__41203;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1522528368601
