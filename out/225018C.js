goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__297049__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__297049 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__297050__i = 0, G__297050__a = new Array(arguments.length -  0);
while (G__297050__i < G__297050__a.length) {G__297050__a[G__297050__i] = arguments[G__297050__i + 0]; ++G__297050__i;}
  args = new cljs.core.IndexedSeq(G__297050__a,0);
} 
return G__297049__delegate.call(this,args);};
G__297049.cljs$lang$maxFixedArity = 0;
G__297049.cljs$lang$applyTo = (function (arglist__297051){
var args = cljs.core.seq(arglist__297051);
return G__297049__delegate(args);
});
G__297049.cljs$core$IFn$_invoke$arity$variadic = G__297049__delegate;
return G__297049;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__297052__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__297052 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__297053__i = 0, G__297053__a = new Array(arguments.length -  0);
while (G__297053__i < G__297053__a.length) {G__297053__a[G__297053__i] = arguments[G__297053__i + 0]; ++G__297053__i;}
  args = new cljs.core.IndexedSeq(G__297053__a,0);
} 
return G__297052__delegate.call(this,args);};
G__297052.cljs$lang$maxFixedArity = 0;
G__297052.cljs$lang$applyTo = (function (arglist__297054){
var args = cljs.core.seq(arglist__297054);
return G__297052__delegate(args);
});
G__297052.cljs$core$IFn$_invoke$arity$variadic = G__297052__delegate;
return G__297052;
})()
;

return null;
});
