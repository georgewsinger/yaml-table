goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__64372__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__64372 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64373__i = 0, G__64373__a = new Array(arguments.length -  0);
while (G__64373__i < G__64373__a.length) {G__64373__a[G__64373__i] = arguments[G__64373__i + 0]; ++G__64373__i;}
  args = new cljs.core.IndexedSeq(G__64373__a,0);
} 
return G__64372__delegate.call(this,args);};
G__64372.cljs$lang$maxFixedArity = 0;
G__64372.cljs$lang$applyTo = (function (arglist__64374){
var args = cljs.core.seq(arglist__64374);
return G__64372__delegate(args);
});
G__64372.cljs$core$IFn$_invoke$arity$variadic = G__64372__delegate;
return G__64372;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__64375__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__64375 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64376__i = 0, G__64376__a = new Array(arguments.length -  0);
while (G__64376__i < G__64376__a.length) {G__64376__a[G__64376__i] = arguments[G__64376__i + 0]; ++G__64376__i;}
  args = new cljs.core.IndexedSeq(G__64376__a,0);
} 
return G__64375__delegate.call(this,args);};
G__64375.cljs$lang$maxFixedArity = 0;
G__64375.cljs$lang$applyTo = (function (arglist__64377){
var args = cljs.core.seq(arglist__64377);
return G__64375__delegate(args);
});
G__64375.cljs$core$IFn$_invoke$arity$variadic = G__64375__delegate;
return G__64375;
})()
;

return null;
});
