goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__70340__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__70340 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70341__i = 0, G__70341__a = new Array(arguments.length -  0);
while (G__70341__i < G__70341__a.length) {G__70341__a[G__70341__i] = arguments[G__70341__i + 0]; ++G__70341__i;}
  args = new cljs.core.IndexedSeq(G__70341__a,0);
} 
return G__70340__delegate.call(this,args);};
G__70340.cljs$lang$maxFixedArity = 0;
G__70340.cljs$lang$applyTo = (function (arglist__70342){
var args = cljs.core.seq(arglist__70342);
return G__70340__delegate(args);
});
G__70340.cljs$core$IFn$_invoke$arity$variadic = G__70340__delegate;
return G__70340;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__70343__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__70343 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70344__i = 0, G__70344__a = new Array(arguments.length -  0);
while (G__70344__i < G__70344__a.length) {G__70344__a[G__70344__i] = arguments[G__70344__i + 0]; ++G__70344__i;}
  args = new cljs.core.IndexedSeq(G__70344__a,0);
} 
return G__70343__delegate.call(this,args);};
G__70343.cljs$lang$maxFixedArity = 0;
G__70343.cljs$lang$applyTo = (function (arglist__70345){
var args = cljs.core.seq(arglist__70345);
return G__70343__delegate(args);
});
G__70343.cljs$core$IFn$_invoke$arity$variadic = G__70343__delegate;
return G__70343;
})()
;

return null;
});
