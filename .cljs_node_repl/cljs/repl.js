// Compiled by ClojureScript 1.7.170 {:target :nodejs}
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
var seq__14534_14548 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14535_14549 = null;
var count__14536_14550 = (0);
var i__14537_14551 = (0);
while(true){
if((i__14537_14551 < count__14536_14550)){
var f_14552 = cljs.core._nth.call(null,chunk__14535_14549,i__14537_14551);
cljs.core.println.call(null,"  ",f_14552);

var G__14553 = seq__14534_14548;
var G__14554 = chunk__14535_14549;
var G__14555 = count__14536_14550;
var G__14556 = (i__14537_14551 + (1));
seq__14534_14548 = G__14553;
chunk__14535_14549 = G__14554;
count__14536_14550 = G__14555;
i__14537_14551 = G__14556;
continue;
} else {
var temp__4425__auto___14557 = cljs.core.seq.call(null,seq__14534_14548);
if(temp__4425__auto___14557){
var seq__14534_14558__$1 = temp__4425__auto___14557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14534_14558__$1)){
var c__14181__auto___14559 = cljs.core.chunk_first.call(null,seq__14534_14558__$1);
var G__14560 = cljs.core.chunk_rest.call(null,seq__14534_14558__$1);
var G__14561 = c__14181__auto___14559;
var G__14562 = cljs.core.count.call(null,c__14181__auto___14559);
var G__14563 = (0);
seq__14534_14548 = G__14560;
chunk__14535_14549 = G__14561;
count__14536_14550 = G__14562;
i__14537_14551 = G__14563;
continue;
} else {
var f_14564 = cljs.core.first.call(null,seq__14534_14558__$1);
cljs.core.println.call(null,"  ",f_14564);

var G__14565 = cljs.core.next.call(null,seq__14534_14558__$1);
var G__14566 = null;
var G__14567 = (0);
var G__14568 = (0);
seq__14534_14548 = G__14565;
chunk__14535_14549 = G__14566;
count__14536_14550 = G__14567;
i__14537_14551 = G__14568;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14569 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__13378__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__13378__auto__)){
return or__13378__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_14569);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_14569)))?cljs.core.second.call(null,arglists_14569):arglists_14569));
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
var seq__14538 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14539 = null;
var count__14540 = (0);
var i__14541 = (0);
while(true){
if((i__14541 < count__14540)){
var vec__14542 = cljs.core._nth.call(null,chunk__14539,i__14541);
var name = cljs.core.nth.call(null,vec__14542,(0),null);
var map__14543 = cljs.core.nth.call(null,vec__14542,(1),null);
var map__14543__$1 = ((((!((map__14543 == null)))?((((map__14543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14543):map__14543);
var doc = cljs.core.get.call(null,map__14543__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__14543__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__14570 = seq__14538;
var G__14571 = chunk__14539;
var G__14572 = count__14540;
var G__14573 = (i__14541 + (1));
seq__14538 = G__14570;
chunk__14539 = G__14571;
count__14540 = G__14572;
i__14541 = G__14573;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14538);
if(temp__4425__auto__){
var seq__14538__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14538__$1)){
var c__14181__auto__ = cljs.core.chunk_first.call(null,seq__14538__$1);
var G__14574 = cljs.core.chunk_rest.call(null,seq__14538__$1);
var G__14575 = c__14181__auto__;
var G__14576 = cljs.core.count.call(null,c__14181__auto__);
var G__14577 = (0);
seq__14538 = G__14574;
chunk__14539 = G__14575;
count__14540 = G__14576;
i__14541 = G__14577;
continue;
} else {
var vec__14545 = cljs.core.first.call(null,seq__14538__$1);
var name = cljs.core.nth.call(null,vec__14545,(0),null);
var map__14546 = cljs.core.nth.call(null,vec__14545,(1),null);
var map__14546__$1 = ((((!((map__14546 == null)))?((((map__14546.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14546.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14546):map__14546);
var doc = cljs.core.get.call(null,map__14546__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__14546__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__14578 = cljs.core.next.call(null,seq__14538__$1);
var G__14579 = null;
var G__14580 = (0);
var G__14581 = (0);
seq__14538 = G__14578;
chunk__14539 = G__14579;
count__14540 = G__14580;
i__14541 = G__14581;
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

//# sourceMappingURL=repl.js.map