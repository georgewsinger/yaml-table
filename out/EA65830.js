goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__150121__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__150121 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__150122__i = 0, G__150122__a = new Array(arguments.length -  0);
while (G__150122__i < G__150122__a.length) {G__150122__a[G__150122__i] = arguments[G__150122__i + 0]; ++G__150122__i;}
  args = new cljs.core.IndexedSeq(G__150122__a,0);
} 
return G__150121__delegate.call(this,args);};
G__150121.cljs$lang$maxFixedArity = 0;
G__150121.cljs$lang$applyTo = (function (arglist__150123){
var args = cljs.core.seq(arglist__150123);
return G__150121__delegate(args);
});
G__150121.cljs$core$IFn$_invoke$arity$variadic = G__150121__delegate;
return G__150121;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__150124__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__150124 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__150125__i = 0, G__150125__a = new Array(arguments.length -  0);
while (G__150125__i < G__150125__a.length) {G__150125__a[G__150125__i] = arguments[G__150125__i + 0]; ++G__150125__i;}
  args = new cljs.core.IndexedSeq(G__150125__a,0);
} 
return G__150124__delegate.call(this,args);};
G__150124.cljs$lang$maxFixedArity = 0;
G__150124.cljs$lang$applyTo = (function (arglist__150126){
var args = cljs.core.seq(arglist__150126);
return G__150124__delegate(args);
});
G__150124.cljs$core$IFn$_invoke$arity$variadic = G__150124__delegate;
return G__150124;
})()
;

return null;
});
