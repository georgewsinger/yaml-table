goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__214029__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__214029 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__214030__i = 0, G__214030__a = new Array(arguments.length -  0);
while (G__214030__i < G__214030__a.length) {G__214030__a[G__214030__i] = arguments[G__214030__i + 0]; ++G__214030__i;}
  args = new cljs.core.IndexedSeq(G__214030__a,0);
} 
return G__214029__delegate.call(this,args);};
G__214029.cljs$lang$maxFixedArity = 0;
G__214029.cljs$lang$applyTo = (function (arglist__214031){
var args = cljs.core.seq(arglist__214031);
return G__214029__delegate(args);
});
G__214029.cljs$core$IFn$_invoke$arity$variadic = G__214029__delegate;
return G__214029;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__214032__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__214032 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__214033__i = 0, G__214033__a = new Array(arguments.length -  0);
while (G__214033__i < G__214033__a.length) {G__214033__a[G__214033__i] = arguments[G__214033__i + 0]; ++G__214033__i;}
  args = new cljs.core.IndexedSeq(G__214033__a,0);
} 
return G__214032__delegate.call(this,args);};
G__214032.cljs$lang$maxFixedArity = 0;
G__214032.cljs$lang$applyTo = (function (arglist__214034){
var args = cljs.core.seq(arglist__214034);
return G__214032__delegate(args);
});
G__214032.cljs$core$IFn$_invoke$arity$variadic = G__214032__delegate;
return G__214032;
})()
;

return null;
});
