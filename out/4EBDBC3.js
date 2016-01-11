goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__341678__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__341678 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__341679__i = 0, G__341679__a = new Array(arguments.length -  0);
while (G__341679__i < G__341679__a.length) {G__341679__a[G__341679__i] = arguments[G__341679__i + 0]; ++G__341679__i;}
  args = new cljs.core.IndexedSeq(G__341679__a,0);
} 
return G__341678__delegate.call(this,args);};
G__341678.cljs$lang$maxFixedArity = 0;
G__341678.cljs$lang$applyTo = (function (arglist__341680){
var args = cljs.core.seq(arglist__341680);
return G__341678__delegate(args);
});
G__341678.cljs$core$IFn$_invoke$arity$variadic = G__341678__delegate;
return G__341678;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__341681__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__341681 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__341682__i = 0, G__341682__a = new Array(arguments.length -  0);
while (G__341682__i < G__341682__a.length) {G__341682__a[G__341682__i] = arguments[G__341682__i + 0]; ++G__341682__i;}
  args = new cljs.core.IndexedSeq(G__341682__a,0);
} 
return G__341681__delegate.call(this,args);};
G__341681.cljs$lang$maxFixedArity = 0;
G__341681.cljs$lang$applyTo = (function (arglist__341683){
var args = cljs.core.seq(arglist__341683);
return G__341681__delegate(args);
});
G__341681.cljs$core$IFn$_invoke$arity$variadic = G__341681__delegate;
return G__341681;
})()
;

return null;
});
