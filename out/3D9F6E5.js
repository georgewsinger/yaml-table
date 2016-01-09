goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__101658__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__101658 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__101659__i = 0, G__101659__a = new Array(arguments.length -  0);
while (G__101659__i < G__101659__a.length) {G__101659__a[G__101659__i] = arguments[G__101659__i + 0]; ++G__101659__i;}
  args = new cljs.core.IndexedSeq(G__101659__a,0);
} 
return G__101658__delegate.call(this,args);};
G__101658.cljs$lang$maxFixedArity = 0;
G__101658.cljs$lang$applyTo = (function (arglist__101660){
var args = cljs.core.seq(arglist__101660);
return G__101658__delegate(args);
});
G__101658.cljs$core$IFn$_invoke$arity$variadic = G__101658__delegate;
return G__101658;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__101661__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__101661 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__101662__i = 0, G__101662__a = new Array(arguments.length -  0);
while (G__101662__i < G__101662__a.length) {G__101662__a[G__101662__i] = arguments[G__101662__i + 0]; ++G__101662__i;}
  args = new cljs.core.IndexedSeq(G__101662__a,0);
} 
return G__101661__delegate.call(this,args);};
G__101661.cljs$lang$maxFixedArity = 0;
G__101661.cljs$lang$applyTo = (function (arglist__101663){
var args = cljs.core.seq(arglist__101663);
return G__101661__delegate(args);
});
G__101661.cljs$core$IFn$_invoke$arity$variadic = G__101661__delegate;
return G__101661;
})()
;

return null;
});
