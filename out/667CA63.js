goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__342045__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__342045 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__342046__i = 0, G__342046__a = new Array(arguments.length -  0);
while (G__342046__i < G__342046__a.length) {G__342046__a[G__342046__i] = arguments[G__342046__i + 0]; ++G__342046__i;}
  args = new cljs.core.IndexedSeq(G__342046__a,0);
} 
return G__342045__delegate.call(this,args);};
G__342045.cljs$lang$maxFixedArity = 0;
G__342045.cljs$lang$applyTo = (function (arglist__342047){
var args = cljs.core.seq(arglist__342047);
return G__342045__delegate(args);
});
G__342045.cljs$core$IFn$_invoke$arity$variadic = G__342045__delegate;
return G__342045;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__342048__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__342048 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__342049__i = 0, G__342049__a = new Array(arguments.length -  0);
while (G__342049__i < G__342049__a.length) {G__342049__a[G__342049__i] = arguments[G__342049__i + 0]; ++G__342049__i;}
  args = new cljs.core.IndexedSeq(G__342049__a,0);
} 
return G__342048__delegate.call(this,args);};
G__342048.cljs$lang$maxFixedArity = 0;
G__342048.cljs$lang$applyTo = (function (arglist__342050){
var args = cljs.core.seq(arglist__342050);
return G__342048__delegate(args);
});
G__342048.cljs$core$IFn$_invoke$arity$variadic = G__342048__delegate;
return G__342048;
})()
;

return null;
});
