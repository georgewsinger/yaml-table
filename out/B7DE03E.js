goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__258933__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__258933 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__258934__i = 0, G__258934__a = new Array(arguments.length -  0);
while (G__258934__i < G__258934__a.length) {G__258934__a[G__258934__i] = arguments[G__258934__i + 0]; ++G__258934__i;}
  args = new cljs.core.IndexedSeq(G__258934__a,0);
} 
return G__258933__delegate.call(this,args);};
G__258933.cljs$lang$maxFixedArity = 0;
G__258933.cljs$lang$applyTo = (function (arglist__258935){
var args = cljs.core.seq(arglist__258935);
return G__258933__delegate(args);
});
G__258933.cljs$core$IFn$_invoke$arity$variadic = G__258933__delegate;
return G__258933;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__258936__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__258936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__258937__i = 0, G__258937__a = new Array(arguments.length -  0);
while (G__258937__i < G__258937__a.length) {G__258937__a[G__258937__i] = arguments[G__258937__i + 0]; ++G__258937__i;}
  args = new cljs.core.IndexedSeq(G__258937__a,0);
} 
return G__258936__delegate.call(this,args);};
G__258936.cljs$lang$maxFixedArity = 0;
G__258936.cljs$lang$applyTo = (function (arglist__258938){
var args = cljs.core.seq(arglist__258938);
return G__258936__delegate(args);
});
G__258936.cljs$core$IFn$_invoke$arity$variadic = G__258936__delegate;
return G__258936;
})()
;

return null;
});
