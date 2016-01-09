goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__66482__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__66482 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66483__i = 0, G__66483__a = new Array(arguments.length -  0);
while (G__66483__i < G__66483__a.length) {G__66483__a[G__66483__i] = arguments[G__66483__i + 0]; ++G__66483__i;}
  args = new cljs.core.IndexedSeq(G__66483__a,0);
} 
return G__66482__delegate.call(this,args);};
G__66482.cljs$lang$maxFixedArity = 0;
G__66482.cljs$lang$applyTo = (function (arglist__66484){
var args = cljs.core.seq(arglist__66484);
return G__66482__delegate(args);
});
G__66482.cljs$core$IFn$_invoke$arity$variadic = G__66482__delegate;
return G__66482;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__66485__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__66485 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66486__i = 0, G__66486__a = new Array(arguments.length -  0);
while (G__66486__i < G__66486__a.length) {G__66486__a[G__66486__i] = arguments[G__66486__i + 0]; ++G__66486__i;}
  args = new cljs.core.IndexedSeq(G__66486__a,0);
} 
return G__66485__delegate.call(this,args);};
G__66485.cljs$lang$maxFixedArity = 0;
G__66485.cljs$lang$applyTo = (function (arglist__66487){
var args = cljs.core.seq(arglist__66487);
return G__66485__delegate(args);
});
G__66485.cljs$core$IFn$_invoke$arity$variadic = G__66485__delegate;
return G__66485;
})()
;

return null;
});
