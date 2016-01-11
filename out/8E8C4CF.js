goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__222376__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__222376 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__222377__i = 0, G__222377__a = new Array(arguments.length -  0);
while (G__222377__i < G__222377__a.length) {G__222377__a[G__222377__i] = arguments[G__222377__i + 0]; ++G__222377__i;}
  args = new cljs.core.IndexedSeq(G__222377__a,0);
} 
return G__222376__delegate.call(this,args);};
G__222376.cljs$lang$maxFixedArity = 0;
G__222376.cljs$lang$applyTo = (function (arglist__222378){
var args = cljs.core.seq(arglist__222378);
return G__222376__delegate(args);
});
G__222376.cljs$core$IFn$_invoke$arity$variadic = G__222376__delegate;
return G__222376;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__222379__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__222379 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__222380__i = 0, G__222380__a = new Array(arguments.length -  0);
while (G__222380__i < G__222380__a.length) {G__222380__a[G__222380__i] = arguments[G__222380__i + 0]; ++G__222380__i;}
  args = new cljs.core.IndexedSeq(G__222380__a,0);
} 
return G__222379__delegate.call(this,args);};
G__222379.cljs$lang$maxFixedArity = 0;
G__222379.cljs$lang$applyTo = (function (arglist__222381){
var args = cljs.core.seq(arglist__222381);
return G__222379__delegate(args);
});
G__222379.cljs$core$IFn$_invoke$arity$variadic = G__222379__delegate;
return G__222379;
})()
;

return null;
});
