goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63976__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63977__i = 0, G__63977__a = new Array(arguments.length -  0);
while (G__63977__i < G__63977__a.length) {G__63977__a[G__63977__i] = arguments[G__63977__i + 0]; ++G__63977__i;}
  args = new cljs.core.IndexedSeq(G__63977__a,0);
} 
return G__63976__delegate.call(this,args);};
G__63976.cljs$lang$maxFixedArity = 0;
G__63976.cljs$lang$applyTo = (function (arglist__63978){
var args = cljs.core.seq(arglist__63978);
return G__63976__delegate(args);
});
G__63976.cljs$core$IFn$_invoke$arity$variadic = G__63976__delegate;
return G__63976;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63979__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63980__i = 0, G__63980__a = new Array(arguments.length -  0);
while (G__63980__i < G__63980__a.length) {G__63980__a[G__63980__i] = arguments[G__63980__i + 0]; ++G__63980__i;}
  args = new cljs.core.IndexedSeq(G__63980__a,0);
} 
return G__63979__delegate.call(this,args);};
G__63979.cljs$lang$maxFixedArity = 0;
G__63979.cljs$lang$applyTo = (function (arglist__63981){
var args = cljs.core.seq(arglist__63981);
return G__63979__delegate(args);
});
G__63979.cljs$core$IFn$_invoke$arity$variadic = G__63979__delegate;
return G__63979;
})()
;

return null;
});
