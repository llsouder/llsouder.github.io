// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38077){
var map__38078 = p__38077;
var map__38078__$1 = ((((!((map__38078 == null)))?((((map__38078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38078):map__38078);
var m = map__38078__$1;
var n = cljs.core.get.call(null,map__38078__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38078__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38080_38102 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38081_38103 = null;
var count__38082_38104 = (0);
var i__38083_38105 = (0);
while(true){
if((i__38083_38105 < count__38082_38104)){
var f_38106 = cljs.core._nth.call(null,chunk__38081_38103,i__38083_38105);
cljs.core.println.call(null,"  ",f_38106);

var G__38107 = seq__38080_38102;
var G__38108 = chunk__38081_38103;
var G__38109 = count__38082_38104;
var G__38110 = (i__38083_38105 + (1));
seq__38080_38102 = G__38107;
chunk__38081_38103 = G__38108;
count__38082_38104 = G__38109;
i__38083_38105 = G__38110;
continue;
} else {
var temp__4657__auto___38111 = cljs.core.seq.call(null,seq__38080_38102);
if(temp__4657__auto___38111){
var seq__38080_38112__$1 = temp__4657__auto___38111;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38080_38112__$1)){
var c__28604__auto___38113 = cljs.core.chunk_first.call(null,seq__38080_38112__$1);
var G__38114 = cljs.core.chunk_rest.call(null,seq__38080_38112__$1);
var G__38115 = c__28604__auto___38113;
var G__38116 = cljs.core.count.call(null,c__28604__auto___38113);
var G__38117 = (0);
seq__38080_38102 = G__38114;
chunk__38081_38103 = G__38115;
count__38082_38104 = G__38116;
i__38083_38105 = G__38117;
continue;
} else {
var f_38118 = cljs.core.first.call(null,seq__38080_38112__$1);
cljs.core.println.call(null,"  ",f_38118);

var G__38119 = cljs.core.next.call(null,seq__38080_38112__$1);
var G__38120 = null;
var G__38121 = (0);
var G__38122 = (0);
seq__38080_38102 = G__38119;
chunk__38081_38103 = G__38120;
count__38082_38104 = G__38121;
i__38083_38105 = G__38122;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38123 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27765__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27765__auto__)){
return or__27765__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38123);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38123)))?cljs.core.second.call(null,arglists_38123):arglists_38123));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38084_38124 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38085_38125 = null;
var count__38086_38126 = (0);
var i__38087_38127 = (0);
while(true){
if((i__38087_38127 < count__38086_38126)){
var vec__38088_38128 = cljs.core._nth.call(null,chunk__38085_38125,i__38087_38127);
var name_38129 = cljs.core.nth.call(null,vec__38088_38128,(0),null);
var map__38091_38130 = cljs.core.nth.call(null,vec__38088_38128,(1),null);
var map__38091_38131__$1 = ((((!((map__38091_38130 == null)))?((((map__38091_38130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38091_38130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38091_38130):map__38091_38130);
var doc_38132 = cljs.core.get.call(null,map__38091_38131__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38133 = cljs.core.get.call(null,map__38091_38131__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38129);

cljs.core.println.call(null," ",arglists_38133);

if(cljs.core.truth_(doc_38132)){
cljs.core.println.call(null," ",doc_38132);
} else {
}

var G__38134 = seq__38084_38124;
var G__38135 = chunk__38085_38125;
var G__38136 = count__38086_38126;
var G__38137 = (i__38087_38127 + (1));
seq__38084_38124 = G__38134;
chunk__38085_38125 = G__38135;
count__38086_38126 = G__38136;
i__38087_38127 = G__38137;
continue;
} else {
var temp__4657__auto___38138 = cljs.core.seq.call(null,seq__38084_38124);
if(temp__4657__auto___38138){
var seq__38084_38139__$1 = temp__4657__auto___38138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38084_38139__$1)){
var c__28604__auto___38140 = cljs.core.chunk_first.call(null,seq__38084_38139__$1);
var G__38141 = cljs.core.chunk_rest.call(null,seq__38084_38139__$1);
var G__38142 = c__28604__auto___38140;
var G__38143 = cljs.core.count.call(null,c__28604__auto___38140);
var G__38144 = (0);
seq__38084_38124 = G__38141;
chunk__38085_38125 = G__38142;
count__38086_38126 = G__38143;
i__38087_38127 = G__38144;
continue;
} else {
var vec__38093_38145 = cljs.core.first.call(null,seq__38084_38139__$1);
var name_38146 = cljs.core.nth.call(null,vec__38093_38145,(0),null);
var map__38096_38147 = cljs.core.nth.call(null,vec__38093_38145,(1),null);
var map__38096_38148__$1 = ((((!((map__38096_38147 == null)))?((((map__38096_38147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38096_38147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38096_38147):map__38096_38147);
var doc_38149 = cljs.core.get.call(null,map__38096_38148__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38150 = cljs.core.get.call(null,map__38096_38148__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38146);

cljs.core.println.call(null," ",arglists_38150);

if(cljs.core.truth_(doc_38149)){
cljs.core.println.call(null," ",doc_38149);
} else {
}

var G__38151 = cljs.core.next.call(null,seq__38084_38139__$1);
var G__38152 = null;
var G__38153 = (0);
var G__38154 = (0);
seq__38084_38124 = G__38151;
chunk__38085_38125 = G__38152;
count__38086_38126 = G__38153;
i__38087_38127 = G__38154;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__38098 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38099 = null;
var count__38100 = (0);
var i__38101 = (0);
while(true){
if((i__38101 < count__38100)){
var role = cljs.core._nth.call(null,chunk__38099,i__38101);
var temp__4657__auto___38155__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38155__$1)){
var spec_38156 = temp__4657__auto___38155__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38156));
} else {
}

var G__38157 = seq__38098;
var G__38158 = chunk__38099;
var G__38159 = count__38100;
var G__38160 = (i__38101 + (1));
seq__38098 = G__38157;
chunk__38099 = G__38158;
count__38100 = G__38159;
i__38101 = G__38160;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__38098);
if(temp__4657__auto____$1){
var seq__38098__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38098__$1)){
var c__28604__auto__ = cljs.core.chunk_first.call(null,seq__38098__$1);
var G__38161 = cljs.core.chunk_rest.call(null,seq__38098__$1);
var G__38162 = c__28604__auto__;
var G__38163 = cljs.core.count.call(null,c__28604__auto__);
var G__38164 = (0);
seq__38098 = G__38161;
chunk__38099 = G__38162;
count__38100 = G__38163;
i__38101 = G__38164;
continue;
} else {
var role = cljs.core.first.call(null,seq__38098__$1);
var temp__4657__auto___38165__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38165__$2)){
var spec_38166 = temp__4657__auto___38165__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38166));
} else {
}

var G__38167 = cljs.core.next.call(null,seq__38098__$1);
var G__38168 = null;
var G__38169 = (0);
var G__38170 = (0);
seq__38098 = G__38167;
chunk__38099 = G__38168;
count__38100 = G__38169;
i__38101 = G__38170;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1522528359917
