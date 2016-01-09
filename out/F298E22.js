goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63031__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63031 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63032__i = 0, G__63032__a = new Array(arguments.length -  0);
while (G__63032__i < G__63032__a.length) {G__63032__a[G__63032__i] = arguments[G__63032__i + 0]; ++G__63032__i;}
  args = new cljs.core.IndexedSeq(G__63032__a,0);
} 
return G__63031__delegate.call(this,args);};
G__63031.cljs$lang$maxFixedArity = 0;
G__63031.cljs$lang$applyTo = (function (arglist__63033){
var args = cljs.core.seq(arglist__63033);
return G__63031__delegate(args);
});
G__63031.cljs$core$IFn$_invoke$arity$variadic = G__63031__delegate;
return G__63031;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63034__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63034 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63035__i = 0, G__63035__a = new Array(arguments.length -  0);
while (G__63035__i < G__63035__a.length) {G__63035__a[G__63035__i] = arguments[G__63035__i + 0]; ++G__63035__i;}
  args = new cljs.core.IndexedSeq(G__63035__a,0);
} 
return G__63034__delegate.call(this,args);};
G__63034.cljs$lang$maxFixedArity = 0;
G__63034.cljs$lang$applyTo = (function (arglist__63036){
var args = cljs.core.seq(arglist__63036);
return G__63034__delegate(args);
});
G__63034.cljs$core$IFn$_invoke$arity$variadic = G__63034__delegate;
return G__63034;
})()
;

return null;
});
