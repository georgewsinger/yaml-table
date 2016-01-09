goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__161024__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__161024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__161025__i = 0, G__161025__a = new Array(arguments.length -  0);
while (G__161025__i < G__161025__a.length) {G__161025__a[G__161025__i] = arguments[G__161025__i + 0]; ++G__161025__i;}
  args = new cljs.core.IndexedSeq(G__161025__a,0);
} 
return G__161024__delegate.call(this,args);};
G__161024.cljs$lang$maxFixedArity = 0;
G__161024.cljs$lang$applyTo = (function (arglist__161026){
var args = cljs.core.seq(arglist__161026);
return G__161024__delegate(args);
});
G__161024.cljs$core$IFn$_invoke$arity$variadic = G__161024__delegate;
return G__161024;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__161027__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__161027 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__161028__i = 0, G__161028__a = new Array(arguments.length -  0);
while (G__161028__i < G__161028__a.length) {G__161028__a[G__161028__i] = arguments[G__161028__i + 0]; ++G__161028__i;}
  args = new cljs.core.IndexedSeq(G__161028__a,0);
} 
return G__161027__delegate.call(this,args);};
G__161027.cljs$lang$maxFixedArity = 0;
G__161027.cljs$lang$applyTo = (function (arglist__161029){
var args = cljs.core.seq(arglist__161029);
return G__161027__delegate(args);
});
G__161027.cljs$core$IFn$_invoke$arity$variadic = G__161027__delegate;
return G__161027;
})()
;

return null;
});
