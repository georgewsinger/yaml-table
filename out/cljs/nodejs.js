// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10945__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__10945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10946__i = 0, G__10946__a = new Array(arguments.length -  0);
while (G__10946__i < G__10946__a.length) {G__10946__a[G__10946__i] = arguments[G__10946__i + 0]; ++G__10946__i;}
  args = new cljs.core.IndexedSeq(G__10946__a,0);
} 
return G__10945__delegate.call(this,args);};
G__10945.cljs$lang$maxFixedArity = 0;
G__10945.cljs$lang$applyTo = (function (arglist__10947){
var args = cljs.core.seq(arglist__10947);
return G__10945__delegate(args);
});
G__10945.cljs$core$IFn$_invoke$arity$variadic = G__10945__delegate;
return G__10945;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10948__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__10948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10949__i = 0, G__10949__a = new Array(arguments.length -  0);
while (G__10949__i < G__10949__a.length) {G__10949__a[G__10949__i] = arguments[G__10949__i + 0]; ++G__10949__i;}
  args = new cljs.core.IndexedSeq(G__10949__a,0);
} 
return G__10948__delegate.call(this,args);};
G__10948.cljs$lang$maxFixedArity = 0;
G__10948.cljs$lang$applyTo = (function (arglist__10950){
var args = cljs.core.seq(arglist__10950);
return G__10948__delegate(args);
});
G__10948.cljs$core$IFn$_invoke$arity$variadic = G__10948__delegate;
return G__10948;
})()
;

return null;
});
