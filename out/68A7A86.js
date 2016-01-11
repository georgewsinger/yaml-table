goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__346426__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__346426 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__346427__i = 0, G__346427__a = new Array(arguments.length -  0);
while (G__346427__i < G__346427__a.length) {G__346427__a[G__346427__i] = arguments[G__346427__i + 0]; ++G__346427__i;}
  args = new cljs.core.IndexedSeq(G__346427__a,0);
} 
return G__346426__delegate.call(this,args);};
G__346426.cljs$lang$maxFixedArity = 0;
G__346426.cljs$lang$applyTo = (function (arglist__346428){
var args = cljs.core.seq(arglist__346428);
return G__346426__delegate(args);
});
G__346426.cljs$core$IFn$_invoke$arity$variadic = G__346426__delegate;
return G__346426;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__346429__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__346429 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__346430__i = 0, G__346430__a = new Array(arguments.length -  0);
while (G__346430__i < G__346430__a.length) {G__346430__a[G__346430__i] = arguments[G__346430__i + 0]; ++G__346430__i;}
  args = new cljs.core.IndexedSeq(G__346430__a,0);
} 
return G__346429__delegate.call(this,args);};
G__346429.cljs$lang$maxFixedArity = 0;
G__346429.cljs$lang$applyTo = (function (arglist__346431){
var args = cljs.core.seq(arglist__346431);
return G__346429__delegate(args);
});
G__346429.cljs$core$IFn$_invoke$arity$variadic = G__346429__delegate;
return G__346429;
})()
;

return null;
});
