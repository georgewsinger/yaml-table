goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67750__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67750 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67751__i = 0, G__67751__a = new Array(arguments.length -  0);
while (G__67751__i < G__67751__a.length) {G__67751__a[G__67751__i] = arguments[G__67751__i + 0]; ++G__67751__i;}
  args = new cljs.core.IndexedSeq(G__67751__a,0);
} 
return G__67750__delegate.call(this,args);};
G__67750.cljs$lang$maxFixedArity = 0;
G__67750.cljs$lang$applyTo = (function (arglist__67752){
var args = cljs.core.seq(arglist__67752);
return G__67750__delegate(args);
});
G__67750.cljs$core$IFn$_invoke$arity$variadic = G__67750__delegate;
return G__67750;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67753__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67753 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67754__i = 0, G__67754__a = new Array(arguments.length -  0);
while (G__67754__i < G__67754__a.length) {G__67754__a[G__67754__i] = arguments[G__67754__i + 0]; ++G__67754__i;}
  args = new cljs.core.IndexedSeq(G__67754__a,0);
} 
return G__67753__delegate.call(this,args);};
G__67753.cljs$lang$maxFixedArity = 0;
G__67753.cljs$lang$applyTo = (function (arglist__67755){
var args = cljs.core.seq(arglist__67755);
return G__67753__delegate(args);
});
G__67753.cljs$core$IFn$_invoke$arity$variadic = G__67753__delegate;
return G__67753;
})()
;

return null;
});
