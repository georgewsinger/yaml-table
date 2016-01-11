goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__328153__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__328153 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__328154__i = 0, G__328154__a = new Array(arguments.length -  0);
while (G__328154__i < G__328154__a.length) {G__328154__a[G__328154__i] = arguments[G__328154__i + 0]; ++G__328154__i;}
  args = new cljs.core.IndexedSeq(G__328154__a,0);
} 
return G__328153__delegate.call(this,args);};
G__328153.cljs$lang$maxFixedArity = 0;
G__328153.cljs$lang$applyTo = (function (arglist__328155){
var args = cljs.core.seq(arglist__328155);
return G__328153__delegate(args);
});
G__328153.cljs$core$IFn$_invoke$arity$variadic = G__328153__delegate;
return G__328153;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__328156__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__328156 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__328157__i = 0, G__328157__a = new Array(arguments.length -  0);
while (G__328157__i < G__328157__a.length) {G__328157__a[G__328157__i] = arguments[G__328157__i + 0]; ++G__328157__i;}
  args = new cljs.core.IndexedSeq(G__328157__a,0);
} 
return G__328156__delegate.call(this,args);};
G__328156.cljs$lang$maxFixedArity = 0;
G__328156.cljs$lang$applyTo = (function (arglist__328158){
var args = cljs.core.seq(arglist__328158);
return G__328156__delegate(args);
});
G__328156.cljs$core$IFn$_invoke$arity$variadic = G__328156__delegate;
return G__328156;
})()
;

return null;
});
