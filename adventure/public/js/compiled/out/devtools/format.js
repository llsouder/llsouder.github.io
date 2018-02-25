// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__28448__auto__ = (((value == null))?null:value);
var m__28449__auto__ = (devtools.format._header[goog.typeOf(x__28448__auto__)]);
if(!((m__28449__auto__ == null))){
return m__28449__auto__.call(null,value);
} else {
var m__28449__auto____$1 = (devtools.format._header["_"]);
if(!((m__28449__auto____$1 == null))){
return m__28449__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__28448__auto__ = (((value == null))?null:value);
var m__28449__auto__ = (devtools.format._has_body[goog.typeOf(x__28448__auto__)]);
if(!((m__28449__auto__ == null))){
return m__28449__auto__.call(null,value);
} else {
var m__28449__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__28449__auto____$1 == null))){
return m__28449__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__28448__auto__ = (((value == null))?null:value);
var m__28449__auto__ = (devtools.format._body[goog.typeOf(x__28448__auto__)]);
if(!((m__28449__auto__ == null))){
return m__28449__auto__.call(null,value);
} else {
var m__28449__auto____$1 = (devtools.format._body["_"]);
if(!((m__28449__auto____$1 == null))){
return m__28449__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o38902 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38902["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38903 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38903["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38904 = temp__4655__auto____$2;
return (o38904["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o38905 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38905["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38906 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38906["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38907 = temp__4655__auto____$2;
return (o38907["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o38908 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38908["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38909 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38909["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38910 = temp__4655__auto____$2;
return (o38910["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o38911 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38911["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38912 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38912["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38913 = temp__4655__auto____$2;
return (o38913["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o38914 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38914["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38915 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38915["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38916 = temp__4655__auto____$2;
return (o38916["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o38917 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38917["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38918 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38918["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38919 = temp__4655__auto____$2;
return (o38919["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o38920 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38920["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38921 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38921["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38922 = temp__4655__auto____$2;
return (o38922["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__28941__auto__ = [];
var len__28934__auto___38924 = arguments.length;
var i__28935__auto___38925 = (0);
while(true){
if((i__28935__auto___38925 < len__28934__auto___38924)){
args__28941__auto__.push((arguments[i__28935__auto___38925]));

var G__38926 = (i__28935__auto___38925 + (1));
i__28935__auto___38925 = G__38926;
continue;
} else {
}
break;
}

var argseq__28942__auto__ = ((((0) < args__28941__auto__.length))?(new cljs.core.IndexedSeq(args__28941__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__28942__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq38923){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38923));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__28941__auto__ = [];
var len__28934__auto___38928 = arguments.length;
var i__28935__auto___38929 = (0);
while(true){
if((i__28935__auto___38929 < len__28934__auto___38928)){
args__28941__auto__.push((arguments[i__28935__auto___38929]));

var G__38930 = (i__28935__auto___38929 + (1));
i__28935__auto___38929 = G__38930;
continue;
} else {
}
break;
}

var argseq__28942__auto__ = ((((0) < args__28941__auto__.length))?(new cljs.core.IndexedSeq(args__28941__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__28942__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq38927){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38927));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__28941__auto__ = [];
var len__28934__auto___38932 = arguments.length;
var i__28935__auto___38933 = (0);
while(true){
if((i__28935__auto___38933 < len__28934__auto___38932)){
args__28941__auto__.push((arguments[i__28935__auto___38933]));

var G__38934 = (i__28935__auto___38933 + (1));
i__28935__auto___38933 = G__38934;
continue;
} else {
}
break;
}

var argseq__28942__auto__ = ((((0) < args__28941__auto__.length))?(new cljs.core.IndexedSeq(args__28941__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__28942__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq38931){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38931));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__28941__auto__ = [];
var len__28934__auto___38936 = arguments.length;
var i__28935__auto___38937 = (0);
while(true){
if((i__28935__auto___38937 < len__28934__auto___38936)){
args__28941__auto__.push((arguments[i__28935__auto___38937]));

var G__38938 = (i__28935__auto___38937 + (1));
i__28935__auto___38937 = G__38938;
continue;
} else {
}
break;
}

var argseq__28942__auto__ = ((((0) < args__28941__auto__.length))?(new cljs.core.IndexedSeq(args__28941__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__28942__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq38935){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38935));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__28941__auto__ = [];
var len__28934__auto___38940 = arguments.length;
var i__28935__auto___38941 = (0);
while(true){
if((i__28935__auto___38941 < len__28934__auto___38940)){
args__28941__auto__.push((arguments[i__28935__auto___38941]));

var G__38942 = (i__28935__auto___38941 + (1));
i__28935__auto___38941 = G__38942;
continue;
} else {
}
break;
}

var argseq__28942__auto__ = ((((0) < args__28941__auto__.length))?(new cljs.core.IndexedSeq(args__28941__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__28942__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq38939){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38939));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__28941__auto__ = [];
var len__28934__auto___38944 = arguments.length;
var i__28935__auto___38945 = (0);
while(true){
if((i__28935__auto___38945 < len__28934__auto___38944)){
args__28941__auto__.push((arguments[i__28935__auto___38945]));

var G__38946 = (i__28935__auto___38945 + (1));
i__28935__auto___38945 = G__38946;
continue;
} else {
}
break;
}

var argseq__28942__auto__ = ((((0) < args__28941__auto__.length))?(new cljs.core.IndexedSeq(args__28941__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__28942__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq38943){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38943));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__28941__auto__ = [];
var len__28934__auto___38948 = arguments.length;
var i__28935__auto___38949 = (0);
while(true){
if((i__28935__auto___38949 < len__28934__auto___38948)){
args__28941__auto__.push((arguments[i__28935__auto___38949]));

var G__38950 = (i__28935__auto___38949 + (1));
i__28935__auto___38949 = G__38950;
continue;
} else {
}
break;
}

var argseq__28942__auto__ = ((((0) < args__28941__auto__.length))?(new cljs.core.IndexedSeq(args__28941__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__28942__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq38947){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38947));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__28941__auto__ = [];
var len__28934__auto___38958 = arguments.length;
var i__28935__auto___38959 = (0);
while(true){
if((i__28935__auto___38959 < len__28934__auto___38958)){
args__28941__auto__.push((arguments[i__28935__auto___38959]));

var G__38960 = (i__28935__auto___38959 + (1));
i__28935__auto___38959 = G__38960;
continue;
} else {
}
break;
}

var argseq__28942__auto__ = ((((1) < args__28941__auto__.length))?(new cljs.core.IndexedSeq(args__28941__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28942__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__38954){
var vec__38955 = p__38954;
var state_override = cljs.core.nth.call(null,vec__38955,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__38955,state_override){
return (function (p1__38951_SHARP_){
return cljs.core.merge.call(null,p1__38951_SHARP_,state_override);
});})(vec__38955,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq38952){
var G__38953 = cljs.core.first.call(null,seq38952);
var seq38952__$1 = cljs.core.next.call(null,seq38952);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__38953,seq38952__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__28941__auto__ = [];
var len__28934__auto___38962 = arguments.length;
var i__28935__auto___38963 = (0);
while(true){
if((i__28935__auto___38963 < len__28934__auto___38962)){
args__28941__auto__.push((arguments[i__28935__auto___38963]));

var G__38964 = (i__28935__auto___38963 + (1));
i__28935__auto___38963 = G__38964;
continue;
} else {
}
break;
}

var argseq__28942__auto__ = ((((0) < args__28941__auto__.length))?(new cljs.core.IndexedSeq(args__28941__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__28942__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq38961){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38961));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__28941__auto__ = [];
var len__28934__auto___38967 = arguments.length;
var i__28935__auto___38968 = (0);
while(true){
if((i__28935__auto___38968 < len__28934__auto___38967)){
args__28941__auto__.push((arguments[i__28935__auto___38968]));

var G__38969 = (i__28935__auto___38968 + (1));
i__28935__auto___38968 = G__38969;
continue;
} else {
}
break;
}

var argseq__28942__auto__ = ((((1) < args__28941__auto__.length))?(new cljs.core.IndexedSeq(args__28941__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28942__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq38965){
var G__38966 = cljs.core.first.call(null,seq38965);
var seq38965__$1 = cljs.core.next.call(null,seq38965);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__38966,seq38965__$1);
});


//# sourceMappingURL=format.js.map?rel=1522528361687
