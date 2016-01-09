goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__71725__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__71725 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71726__i = 0, G__71726__a = new Array(arguments.length -  0);
while (G__71726__i < G__71726__a.length) {G__71726__a[G__71726__i] = arguments[G__71726__i + 0]; ++G__71726__i;}
  args = new cljs.core.IndexedSeq(G__71726__a,0);
} 
return G__71725__delegate.call(this,args);};
G__71725.cljs$lang$maxFixedArity = 0;
G__71725.cljs$lang$applyTo = (function (arglist__71727){
var args = cljs.core.seq(arglist__71727);
return G__71725__delegate(args);
});
G__71725.cljs$core$IFn$_invoke$arity$variadic = G__71725__delegate;
return G__71725;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__71728__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__71728 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71729__i = 0, G__71729__a = new Array(arguments.length -  0);
while (G__71729__i < G__71729__a.length) {G__71729__a[G__71729__i] = arguments[G__71729__i + 0]; ++G__71729__i;}
  args = new cljs.core.IndexedSeq(G__71729__a,0);
} 
return G__71728__delegate.call(this,args);};
G__71728.cljs$lang$maxFixedArity = 0;
G__71728.cljs$lang$applyTo = (function (arglist__71730){
var args = cljs.core.seq(arglist__71730);
return G__71728__delegate(args);
});
G__71728.cljs$core$IFn$_invoke$arity$variadic = G__71728__delegate;
return G__71728;
})()
;

return null;
});
