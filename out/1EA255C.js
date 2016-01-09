goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63834__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63834 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63835__i = 0, G__63835__a = new Array(arguments.length -  0);
while (G__63835__i < G__63835__a.length) {G__63835__a[G__63835__i] = arguments[G__63835__i + 0]; ++G__63835__i;}
  args = new cljs.core.IndexedSeq(G__63835__a,0);
} 
return G__63834__delegate.call(this,args);};
G__63834.cljs$lang$maxFixedArity = 0;
G__63834.cljs$lang$applyTo = (function (arglist__63836){
var args = cljs.core.seq(arglist__63836);
return G__63834__delegate(args);
});
G__63834.cljs$core$IFn$_invoke$arity$variadic = G__63834__delegate;
return G__63834;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63837__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63838__i = 0, G__63838__a = new Array(arguments.length -  0);
while (G__63838__i < G__63838__a.length) {G__63838__a[G__63838__i] = arguments[G__63838__i + 0]; ++G__63838__i;}
  args = new cljs.core.IndexedSeq(G__63838__a,0);
} 
return G__63837__delegate.call(this,args);};
G__63837.cljs$lang$maxFixedArity = 0;
G__63837.cljs$lang$applyTo = (function (arglist__63839){
var args = cljs.core.seq(arglist__63839);
return G__63837__delegate(args);
});
G__63837.cljs$core$IFn$_invoke$arity$variadic = G__63837__delegate;
return G__63837;
})()
;

return null;
});
