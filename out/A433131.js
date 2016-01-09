goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__172827__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__172827 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__172828__i = 0, G__172828__a = new Array(arguments.length -  0);
while (G__172828__i < G__172828__a.length) {G__172828__a[G__172828__i] = arguments[G__172828__i + 0]; ++G__172828__i;}
  args = new cljs.core.IndexedSeq(G__172828__a,0);
} 
return G__172827__delegate.call(this,args);};
G__172827.cljs$lang$maxFixedArity = 0;
G__172827.cljs$lang$applyTo = (function (arglist__172829){
var args = cljs.core.seq(arglist__172829);
return G__172827__delegate(args);
});
G__172827.cljs$core$IFn$_invoke$arity$variadic = G__172827__delegate;
return G__172827;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__172830__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__172830 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__172831__i = 0, G__172831__a = new Array(arguments.length -  0);
while (G__172831__i < G__172831__a.length) {G__172831__a[G__172831__i] = arguments[G__172831__i + 0]; ++G__172831__i;}
  args = new cljs.core.IndexedSeq(G__172831__a,0);
} 
return G__172830__delegate.call(this,args);};
G__172830.cljs$lang$maxFixedArity = 0;
G__172830.cljs$lang$applyTo = (function (arglist__172832){
var args = cljs.core.seq(arglist__172832);
return G__172830__delegate(args);
});
G__172830.cljs$core$IFn$_invoke$arity$variadic = G__172830__delegate;
return G__172830;
})()
;

return null;
});
