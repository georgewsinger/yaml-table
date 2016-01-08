goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29974__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29974 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29975__i = 0, G__29975__a = new Array(arguments.length -  0);
while (G__29975__i < G__29975__a.length) {G__29975__a[G__29975__i] = arguments[G__29975__i + 0]; ++G__29975__i;}
  args = new cljs.core.IndexedSeq(G__29975__a,0);
} 
return G__29974__delegate.call(this,args);};
G__29974.cljs$lang$maxFixedArity = 0;
G__29974.cljs$lang$applyTo = (function (arglist__29976){
var args = cljs.core.seq(arglist__29976);
return G__29974__delegate(args);
});
G__29974.cljs$core$IFn$_invoke$arity$variadic = G__29974__delegate;
return G__29974;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29977__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29977 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29978__i = 0, G__29978__a = new Array(arguments.length -  0);
while (G__29978__i < G__29978__a.length) {G__29978__a[G__29978__i] = arguments[G__29978__i + 0]; ++G__29978__i;}
  args = new cljs.core.IndexedSeq(G__29978__a,0);
} 
return G__29977__delegate.call(this,args);};
G__29977.cljs$lang$maxFixedArity = 0;
G__29977.cljs$lang$applyTo = (function (arglist__29979){
var args = cljs.core.seq(arglist__29979);
return G__29977__delegate(args);
});
G__29977.cljs$core$IFn$_invoke$arity$variadic = G__29977__delegate;
return G__29977;
})()
;

return null;
});
