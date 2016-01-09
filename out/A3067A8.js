goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67121__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67121 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67122__i = 0, G__67122__a = new Array(arguments.length -  0);
while (G__67122__i < G__67122__a.length) {G__67122__a[G__67122__i] = arguments[G__67122__i + 0]; ++G__67122__i;}
  args = new cljs.core.IndexedSeq(G__67122__a,0);
} 
return G__67121__delegate.call(this,args);};
G__67121.cljs$lang$maxFixedArity = 0;
G__67121.cljs$lang$applyTo = (function (arglist__67123){
var args = cljs.core.seq(arglist__67123);
return G__67121__delegate(args);
});
G__67121.cljs$core$IFn$_invoke$arity$variadic = G__67121__delegate;
return G__67121;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67124__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67124 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67125__i = 0, G__67125__a = new Array(arguments.length -  0);
while (G__67125__i < G__67125__a.length) {G__67125__a[G__67125__i] = arguments[G__67125__i + 0]; ++G__67125__i;}
  args = new cljs.core.IndexedSeq(G__67125__a,0);
} 
return G__67124__delegate.call(this,args);};
G__67124.cljs$lang$maxFixedArity = 0;
G__67124.cljs$lang$applyTo = (function (arglist__67126){
var args = cljs.core.seq(arglist__67126);
return G__67124__delegate(args);
});
G__67124.cljs$core$IFn$_invoke$arity$variadic = G__67124__delegate;
return G__67124;
})()
;

return null;
});
