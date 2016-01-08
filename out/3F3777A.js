goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37397__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37398__i = 0, G__37398__a = new Array(arguments.length -  0);
while (G__37398__i < G__37398__a.length) {G__37398__a[G__37398__i] = arguments[G__37398__i + 0]; ++G__37398__i;}
  args = new cljs.core.IndexedSeq(G__37398__a,0);
} 
return G__37397__delegate.call(this,args);};
G__37397.cljs$lang$maxFixedArity = 0;
G__37397.cljs$lang$applyTo = (function (arglist__37399){
var args = cljs.core.seq(arglist__37399);
return G__37397__delegate(args);
});
G__37397.cljs$core$IFn$_invoke$arity$variadic = G__37397__delegate;
return G__37397;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37400__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37400 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37401__i = 0, G__37401__a = new Array(arguments.length -  0);
while (G__37401__i < G__37401__a.length) {G__37401__a[G__37401__i] = arguments[G__37401__i + 0]; ++G__37401__i;}
  args = new cljs.core.IndexedSeq(G__37401__a,0);
} 
return G__37400__delegate.call(this,args);};
G__37400.cljs$lang$maxFixedArity = 0;
G__37400.cljs$lang$applyTo = (function (arglist__37402){
var args = cljs.core.seq(arglist__37402);
return G__37400__delegate(args);
});
G__37400.cljs$core$IFn$_invoke$arity$variadic = G__37400__delegate;
return G__37400;
})()
;

return null;
});
