goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__82130__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__82130 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__82131__i = 0, G__82131__a = new Array(arguments.length -  0);
while (G__82131__i < G__82131__a.length) {G__82131__a[G__82131__i] = arguments[G__82131__i + 0]; ++G__82131__i;}
  args = new cljs.core.IndexedSeq(G__82131__a,0);
} 
return G__82130__delegate.call(this,args);};
G__82130.cljs$lang$maxFixedArity = 0;
G__82130.cljs$lang$applyTo = (function (arglist__82132){
var args = cljs.core.seq(arglist__82132);
return G__82130__delegate(args);
});
G__82130.cljs$core$IFn$_invoke$arity$variadic = G__82130__delegate;
return G__82130;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__82133__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__82133 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__82134__i = 0, G__82134__a = new Array(arguments.length -  0);
while (G__82134__i < G__82134__a.length) {G__82134__a[G__82134__i] = arguments[G__82134__i + 0]; ++G__82134__i;}
  args = new cljs.core.IndexedSeq(G__82134__a,0);
} 
return G__82133__delegate.call(this,args);};
G__82133.cljs$lang$maxFixedArity = 0;
G__82133.cljs$lang$applyTo = (function (arglist__82135){
var args = cljs.core.seq(arglist__82135);
return G__82133__delegate(args);
});
G__82133.cljs$core$IFn$_invoke$arity$variadic = G__82133__delegate;
return G__82133;
})()
;

return null;
});
