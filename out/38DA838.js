goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__166973__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__166973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__166974__i = 0, G__166974__a = new Array(arguments.length -  0);
while (G__166974__i < G__166974__a.length) {G__166974__a[G__166974__i] = arguments[G__166974__i + 0]; ++G__166974__i;}
  args = new cljs.core.IndexedSeq(G__166974__a,0);
} 
return G__166973__delegate.call(this,args);};
G__166973.cljs$lang$maxFixedArity = 0;
G__166973.cljs$lang$applyTo = (function (arglist__166975){
var args = cljs.core.seq(arglist__166975);
return G__166973__delegate(args);
});
G__166973.cljs$core$IFn$_invoke$arity$variadic = G__166973__delegate;
return G__166973;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__166976__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__166976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__166977__i = 0, G__166977__a = new Array(arguments.length -  0);
while (G__166977__i < G__166977__a.length) {G__166977__a[G__166977__i] = arguments[G__166977__i + 0]; ++G__166977__i;}
  args = new cljs.core.IndexedSeq(G__166977__a,0);
} 
return G__166976__delegate.call(this,args);};
G__166976.cljs$lang$maxFixedArity = 0;
G__166976.cljs$lang$applyTo = (function (arglist__166978){
var args = cljs.core.seq(arglist__166978);
return G__166976__delegate(args);
});
G__166976.cljs$core$IFn$_invoke$arity$variadic = G__166976__delegate;
return G__166976;
})()
;

return null;
});
