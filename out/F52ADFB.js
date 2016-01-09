goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__69351__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__69351 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69352__i = 0, G__69352__a = new Array(arguments.length -  0);
while (G__69352__i < G__69352__a.length) {G__69352__a[G__69352__i] = arguments[G__69352__i + 0]; ++G__69352__i;}
  args = new cljs.core.IndexedSeq(G__69352__a,0);
} 
return G__69351__delegate.call(this,args);};
G__69351.cljs$lang$maxFixedArity = 0;
G__69351.cljs$lang$applyTo = (function (arglist__69353){
var args = cljs.core.seq(arglist__69353);
return G__69351__delegate(args);
});
G__69351.cljs$core$IFn$_invoke$arity$variadic = G__69351__delegate;
return G__69351;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__69354__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__69354 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69355__i = 0, G__69355__a = new Array(arguments.length -  0);
while (G__69355__i < G__69355__a.length) {G__69355__a[G__69355__i] = arguments[G__69355__i + 0]; ++G__69355__i;}
  args = new cljs.core.IndexedSeq(G__69355__a,0);
} 
return G__69354__delegate.call(this,args);};
G__69354.cljs$lang$maxFixedArity = 0;
G__69354.cljs$lang$applyTo = (function (arglist__69356){
var args = cljs.core.seq(arglist__69356);
return G__69354__delegate(args);
});
G__69354.cljs$core$IFn$_invoke$arity$variadic = G__69354__delegate;
return G__69354;
})()
;

return null;
});
