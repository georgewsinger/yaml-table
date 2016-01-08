// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18784_18798 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18785_18799 = null;
var count__18786_18800 = (0);
var i__18787_18801 = (0);
while(true){
if((i__18787_18801 < count__18786_18800)){
var f_18802 = cljs.core._nth.call(null,chunk__18785_18799,i__18787_18801);
cljs.core.println.call(null,"  ",f_18802);

var G__18803 = seq__18784_18798;
var G__18804 = chunk__18785_18799;
var G__18805 = count__18786_18800;
var G__18806 = (i__18787_18801 + (1));
seq__18784_18798 = G__18803;
chunk__18785_18799 = G__18804;
count__18786_18800 = G__18805;
i__18787_18801 = G__18806;
continue;
} else {
var temp__4425__auto___18807 = cljs.core.seq.call(null,seq__18784_18798);
if(temp__4425__auto___18807){
var seq__18784_18808__$1 = temp__4425__auto___18807;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18784_18808__$1)){
var c__14174__auto___18809 = cljs.core.chunk_first.call(null,seq__18784_18808__$1);
var G__18810 = cljs.core.chunk_rest.call(null,seq__18784_18808__$1);
var G__18811 = c__14174__auto___18809;
var G__18812 = cljs.core.count.call(null,c__14174__auto___18809);
var G__18813 = (0);
seq__18784_18798 = G__18810;
chunk__18785_18799 = G__18811;
count__18786_18800 = G__18812;
i__18787_18801 = G__18813;
continue;
} else {
var f_18814 = cljs.core.first.call(null,seq__18784_18808__$1);
cljs.core.println.call(null,"  ",f_18814);

var G__18815 = cljs.core.next.call(null,seq__18784_18808__$1);
var G__18816 = null;
var G__18817 = (0);
var G__18818 = (0);
seq__18784_18798 = G__18815;
chunk__18785_18799 = G__18816;
count__18786_18800 = G__18817;
i__18787_18801 = G__18818;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18819 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__13371__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__13371__auto__)){
return or__13371__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18819);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18819)))?cljs.core.second.call(null,arglists_18819):arglists_18819));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__18788 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18789 = null;
var count__18790 = (0);
var i__18791 = (0);
while(true){
if((i__18791 < count__18790)){
var vec__18792 = cljs.core._nth.call(null,chunk__18789,i__18791);
var name = cljs.core.nth.call(null,vec__18792,(0),null);
var map__18793 = cljs.core.nth.call(null,vec__18792,(1),null);
var map__18793__$1 = ((((!((map__18793 == null)))?((((map__18793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18793):map__18793);
var doc = cljs.core.get.call(null,map__18793__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__18793__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__18820 = seq__18788;
var G__18821 = chunk__18789;
var G__18822 = count__18790;
var G__18823 = (i__18791 + (1));
seq__18788 = G__18820;
chunk__18789 = G__18821;
count__18790 = G__18822;
i__18791 = G__18823;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18788);
if(temp__4425__auto__){
var seq__18788__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18788__$1)){
var c__14174__auto__ = cljs.core.chunk_first.call(null,seq__18788__$1);
var G__18824 = cljs.core.chunk_rest.call(null,seq__18788__$1);
var G__18825 = c__14174__auto__;
var G__18826 = cljs.core.count.call(null,c__14174__auto__);
var G__18827 = (0);
seq__18788 = G__18824;
chunk__18789 = G__18825;
count__18790 = G__18826;
i__18791 = G__18827;
continue;
} else {
var vec__18795 = cljs.core.first.call(null,seq__18788__$1);
var name = cljs.core.nth.call(null,vec__18795,(0),null);
var map__18796 = cljs.core.nth.call(null,vec__18795,(1),null);
var map__18796__$1 = ((((!((map__18796 == null)))?((((map__18796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18796):map__18796);
var doc = cljs.core.get.call(null,map__18796__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__18796__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__18828 = cljs.core.next.call(null,seq__18788__$1);
var G__18829 = null;
var G__18830 = (0);
var G__18831 = (0);
seq__18788 = G__18828;
chunk__18789 = G__18829;
count__18790 = G__18830;
i__18791 = G__18831;
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
}
});
