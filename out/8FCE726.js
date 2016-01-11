goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__320862__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__320862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__320863__i = 0, G__320863__a = new Array(arguments.length -  0);
while (G__320863__i < G__320863__a.length) {G__320863__a[G__320863__i] = arguments[G__320863__i + 0]; ++G__320863__i;}
  args = new cljs.core.IndexedSeq(G__320863__a,0);
} 
return G__320862__delegate.call(this,args);};
G__320862.cljs$lang$maxFixedArity = 0;
G__320862.cljs$lang$applyTo = (function (arglist__320864){
var args = cljs.core.seq(arglist__320864);
return G__320862__delegate(args);
});
G__320862.cljs$core$IFn$_invoke$arity$variadic = G__320862__delegate;
return G__320862;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__320865__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__320865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__320866__i = 0, G__320866__a = new Array(arguments.length -  0);
while (G__320866__i < G__320866__a.length) {G__320866__a[G__320866__i] = arguments[G__320866__i + 0]; ++G__320866__i;}
  args = new cljs.core.IndexedSeq(G__320866__a,0);
} 
return G__320865__delegate.call(this,args);};
G__320865.cljs$lang$maxFixedArity = 0;
G__320865.cljs$lang$applyTo = (function (arglist__320867){
var args = cljs.core.seq(arglist__320867);
return G__320865__delegate(args);
});
G__320865.cljs$core$IFn$_invoke$arity$variadic = G__320865__delegate;
return G__320865;
})()
;

return null;
});
