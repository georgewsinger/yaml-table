goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__64921__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__64921 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64922__i = 0, G__64922__a = new Array(arguments.length -  0);
while (G__64922__i < G__64922__a.length) {G__64922__a[G__64922__i] = arguments[G__64922__i + 0]; ++G__64922__i;}
  args = new cljs.core.IndexedSeq(G__64922__a,0);
} 
return G__64921__delegate.call(this,args);};
G__64921.cljs$lang$maxFixedArity = 0;
G__64921.cljs$lang$applyTo = (function (arglist__64923){
var args = cljs.core.seq(arglist__64923);
return G__64921__delegate(args);
});
G__64921.cljs$core$IFn$_invoke$arity$variadic = G__64921__delegate;
return G__64921;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__64924__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__64924 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64925__i = 0, G__64925__a = new Array(arguments.length -  0);
while (G__64925__i < G__64925__a.length) {G__64925__a[G__64925__i] = arguments[G__64925__i + 0]; ++G__64925__i;}
  args = new cljs.core.IndexedSeq(G__64925__a,0);
} 
return G__64924__delegate.call(this,args);};
G__64924.cljs$lang$maxFixedArity = 0;
G__64924.cljs$lang$applyTo = (function (arglist__64926){
var args = cljs.core.seq(arglist__64926);
return G__64924__delegate(args);
});
G__64924.cljs$core$IFn$_invoke$arity$variadic = G__64924__delegate;
return G__64924;
})()
;

return null;
});
