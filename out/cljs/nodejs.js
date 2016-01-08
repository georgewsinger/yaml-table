// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14446__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__14446 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14447__i = 0, G__14447__a = new Array(arguments.length -  0);
while (G__14447__i < G__14447__a.length) {G__14447__a[G__14447__i] = arguments[G__14447__i + 0]; ++G__14447__i;}
  args = new cljs.core.IndexedSeq(G__14447__a,0);
} 
return G__14446__delegate.call(this,args);};
G__14446.cljs$lang$maxFixedArity = 0;
G__14446.cljs$lang$applyTo = (function (arglist__14448){
var args = cljs.core.seq(arglist__14448);
return G__14446__delegate(args);
});
G__14446.cljs$core$IFn$_invoke$arity$variadic = G__14446__delegate;
return G__14446;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14449__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__14449 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14450__i = 0, G__14450__a = new Array(arguments.length -  0);
while (G__14450__i < G__14450__a.length) {G__14450__a[G__14450__i] = arguments[G__14450__i + 0]; ++G__14450__i;}
  args = new cljs.core.IndexedSeq(G__14450__a,0);
} 
return G__14449__delegate.call(this,args);};
G__14449.cljs$lang$maxFixedArity = 0;
G__14449.cljs$lang$applyTo = (function (arglist__14451){
var args = cljs.core.seq(arglist__14451);
return G__14449__delegate(args);
});
G__14449.cljs$core$IFn$_invoke$arity$variadic = G__14449__delegate;
return G__14449;
})()
;

return null;
});