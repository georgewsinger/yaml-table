goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__98401__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__98401 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__98402__i = 0, G__98402__a = new Array(arguments.length -  0);
while (G__98402__i < G__98402__a.length) {G__98402__a[G__98402__i] = arguments[G__98402__i + 0]; ++G__98402__i;}
  args = new cljs.core.IndexedSeq(G__98402__a,0);
} 
return G__98401__delegate.call(this,args);};
G__98401.cljs$lang$maxFixedArity = 0;
G__98401.cljs$lang$applyTo = (function (arglist__98403){
var args = cljs.core.seq(arglist__98403);
return G__98401__delegate(args);
});
G__98401.cljs$core$IFn$_invoke$arity$variadic = G__98401__delegate;
return G__98401;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__98404__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__98404 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__98405__i = 0, G__98405__a = new Array(arguments.length -  0);
while (G__98405__i < G__98405__a.length) {G__98405__a[G__98405__i] = arguments[G__98405__i + 0]; ++G__98405__i;}
  args = new cljs.core.IndexedSeq(G__98405__a,0);
} 
return G__98404__delegate.call(this,args);};
G__98404.cljs$lang$maxFixedArity = 0;
G__98404.cljs$lang$applyTo = (function (arglist__98406){
var args = cljs.core.seq(arglist__98406);
return G__98404__delegate(args);
});
G__98404.cljs$core$IFn$_invoke$arity$variadic = G__98404__delegate;
return G__98404;
})()
;

return null;
});
