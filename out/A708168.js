goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__254227__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__254227 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__254228__i = 0, G__254228__a = new Array(arguments.length -  0);
while (G__254228__i < G__254228__a.length) {G__254228__a[G__254228__i] = arguments[G__254228__i + 0]; ++G__254228__i;}
  args = new cljs.core.IndexedSeq(G__254228__a,0);
} 
return G__254227__delegate.call(this,args);};
G__254227.cljs$lang$maxFixedArity = 0;
G__254227.cljs$lang$applyTo = (function (arglist__254229){
var args = cljs.core.seq(arglist__254229);
return G__254227__delegate(args);
});
G__254227.cljs$core$IFn$_invoke$arity$variadic = G__254227__delegate;
return G__254227;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__254230__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__254230 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__254231__i = 0, G__254231__a = new Array(arguments.length -  0);
while (G__254231__i < G__254231__a.length) {G__254231__a[G__254231__i] = arguments[G__254231__i + 0]; ++G__254231__i;}
  args = new cljs.core.IndexedSeq(G__254231__a,0);
} 
return G__254230__delegate.call(this,args);};
G__254230.cljs$lang$maxFixedArity = 0;
G__254230.cljs$lang$applyTo = (function (arglist__254232){
var args = cljs.core.seq(arglist__254232);
return G__254230__delegate(args);
});
G__254230.cljs$core$IFn$_invoke$arity$variadic = G__254230__delegate;
return G__254230;
})()
;

return null;
});
