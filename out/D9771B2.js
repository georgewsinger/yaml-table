goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58762__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58763__i = 0, G__58763__a = new Array(arguments.length -  0);
while (G__58763__i < G__58763__a.length) {G__58763__a[G__58763__i] = arguments[G__58763__i + 0]; ++G__58763__i;}
  args = new cljs.core.IndexedSeq(G__58763__a,0);
} 
return G__58762__delegate.call(this,args);};
G__58762.cljs$lang$maxFixedArity = 0;
G__58762.cljs$lang$applyTo = (function (arglist__58764){
var args = cljs.core.seq(arglist__58764);
return G__58762__delegate(args);
});
G__58762.cljs$core$IFn$_invoke$arity$variadic = G__58762__delegate;
return G__58762;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58765__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58766__i = 0, G__58766__a = new Array(arguments.length -  0);
while (G__58766__i < G__58766__a.length) {G__58766__a[G__58766__i] = arguments[G__58766__i + 0]; ++G__58766__i;}
  args = new cljs.core.IndexedSeq(G__58766__a,0);
} 
return G__58765__delegate.call(this,args);};
G__58765.cljs$lang$maxFixedArity = 0;
G__58765.cljs$lang$applyTo = (function (arglist__58767){
var args = cljs.core.seq(arglist__58767);
return G__58765__delegate(args);
});
G__58765.cljs$core$IFn$_invoke$arity$variadic = G__58765__delegate;
return G__58765;
})()
;

return null;
});
