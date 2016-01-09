goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43496__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43496 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43497__i = 0, G__43497__a = new Array(arguments.length -  0);
while (G__43497__i < G__43497__a.length) {G__43497__a[G__43497__i] = arguments[G__43497__i + 0]; ++G__43497__i;}
  args = new cljs.core.IndexedSeq(G__43497__a,0);
} 
return G__43496__delegate.call(this,args);};
G__43496.cljs$lang$maxFixedArity = 0;
G__43496.cljs$lang$applyTo = (function (arglist__43498){
var args = cljs.core.seq(arglist__43498);
return G__43496__delegate(args);
});
G__43496.cljs$core$IFn$_invoke$arity$variadic = G__43496__delegate;
return G__43496;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43499__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43499 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43500__i = 0, G__43500__a = new Array(arguments.length -  0);
while (G__43500__i < G__43500__a.length) {G__43500__a[G__43500__i] = arguments[G__43500__i + 0]; ++G__43500__i;}
  args = new cljs.core.IndexedSeq(G__43500__a,0);
} 
return G__43499__delegate.call(this,args);};
G__43499.cljs$lang$maxFixedArity = 0;
G__43499.cljs$lang$applyTo = (function (arglist__43501){
var args = cljs.core.seq(arglist__43501);
return G__43499__delegate(args);
});
G__43499.cljs$core$IFn$_invoke$arity$variadic = G__43499__delegate;
return G__43499;
})()
;

return null;
});
