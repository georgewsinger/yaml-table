goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__65836__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__65836 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65837__i = 0, G__65837__a = new Array(arguments.length -  0);
while (G__65837__i < G__65837__a.length) {G__65837__a[G__65837__i] = arguments[G__65837__i + 0]; ++G__65837__i;}
  args = new cljs.core.IndexedSeq(G__65837__a,0);
} 
return G__65836__delegate.call(this,args);};
G__65836.cljs$lang$maxFixedArity = 0;
G__65836.cljs$lang$applyTo = (function (arglist__65838){
var args = cljs.core.seq(arglist__65838);
return G__65836__delegate(args);
});
G__65836.cljs$core$IFn$_invoke$arity$variadic = G__65836__delegate;
return G__65836;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__65839__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__65839 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65840__i = 0, G__65840__a = new Array(arguments.length -  0);
while (G__65840__i < G__65840__a.length) {G__65840__a[G__65840__i] = arguments[G__65840__i + 0]; ++G__65840__i;}
  args = new cljs.core.IndexedSeq(G__65840__a,0);
} 
return G__65839__delegate.call(this,args);};
G__65839.cljs$lang$maxFixedArity = 0;
G__65839.cljs$lang$applyTo = (function (arglist__65841){
var args = cljs.core.seq(arglist__65841);
return G__65839__delegate(args);
});
G__65839.cljs$core$IFn$_invoke$arity$variadic = G__65839__delegate;
return G__65839;
})()
;

return null;
});
