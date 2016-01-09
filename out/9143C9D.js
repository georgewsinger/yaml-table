goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__138593__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__138593 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__138594__i = 0, G__138594__a = new Array(arguments.length -  0);
while (G__138594__i < G__138594__a.length) {G__138594__a[G__138594__i] = arguments[G__138594__i + 0]; ++G__138594__i;}
  args = new cljs.core.IndexedSeq(G__138594__a,0);
} 
return G__138593__delegate.call(this,args);};
G__138593.cljs$lang$maxFixedArity = 0;
G__138593.cljs$lang$applyTo = (function (arglist__138595){
var args = cljs.core.seq(arglist__138595);
return G__138593__delegate(args);
});
G__138593.cljs$core$IFn$_invoke$arity$variadic = G__138593__delegate;
return G__138593;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__138596__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__138596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__138597__i = 0, G__138597__a = new Array(arguments.length -  0);
while (G__138597__i < G__138597__a.length) {G__138597__a[G__138597__i] = arguments[G__138597__i + 0]; ++G__138597__i;}
  args = new cljs.core.IndexedSeq(G__138597__a,0);
} 
return G__138596__delegate.call(this,args);};
G__138596.cljs$lang$maxFixedArity = 0;
G__138596.cljs$lang$applyTo = (function (arglist__138598){
var args = cljs.core.seq(arglist__138598);
return G__138596__delegate(args);
});
G__138596.cljs$core$IFn$_invoke$arity$variadic = G__138596__delegate;
return G__138596;
})()
;

return null;
});
