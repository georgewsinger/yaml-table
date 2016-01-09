goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__151876__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__151876 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__151877__i = 0, G__151877__a = new Array(arguments.length -  0);
while (G__151877__i < G__151877__a.length) {G__151877__a[G__151877__i] = arguments[G__151877__i + 0]; ++G__151877__i;}
  args = new cljs.core.IndexedSeq(G__151877__a,0);
} 
return G__151876__delegate.call(this,args);};
G__151876.cljs$lang$maxFixedArity = 0;
G__151876.cljs$lang$applyTo = (function (arglist__151878){
var args = cljs.core.seq(arglist__151878);
return G__151876__delegate(args);
});
G__151876.cljs$core$IFn$_invoke$arity$variadic = G__151876__delegate;
return G__151876;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__151879__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__151879 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__151880__i = 0, G__151880__a = new Array(arguments.length -  0);
while (G__151880__i < G__151880__a.length) {G__151880__a[G__151880__i] = arguments[G__151880__i + 0]; ++G__151880__i;}
  args = new cljs.core.IndexedSeq(G__151880__a,0);
} 
return G__151879__delegate.call(this,args);};
G__151879.cljs$lang$maxFixedArity = 0;
G__151879.cljs$lang$applyTo = (function (arglist__151881){
var args = cljs.core.seq(arglist__151881);
return G__151879__delegate(args);
});
G__151879.cljs$core$IFn$_invoke$arity$variadic = G__151879__delegate;
return G__151879;
})()
;

return null;
});
