goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__62097__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__62097 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62098__i = 0, G__62098__a = new Array(arguments.length -  0);
while (G__62098__i < G__62098__a.length) {G__62098__a[G__62098__i] = arguments[G__62098__i + 0]; ++G__62098__i;}
  args = new cljs.core.IndexedSeq(G__62098__a,0);
} 
return G__62097__delegate.call(this,args);};
G__62097.cljs$lang$maxFixedArity = 0;
G__62097.cljs$lang$applyTo = (function (arglist__62099){
var args = cljs.core.seq(arglist__62099);
return G__62097__delegate(args);
});
G__62097.cljs$core$IFn$_invoke$arity$variadic = G__62097__delegate;
return G__62097;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__62100__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__62100 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62101__i = 0, G__62101__a = new Array(arguments.length -  0);
while (G__62101__i < G__62101__a.length) {G__62101__a[G__62101__i] = arguments[G__62101__i + 0]; ++G__62101__i;}
  args = new cljs.core.IndexedSeq(G__62101__a,0);
} 
return G__62100__delegate.call(this,args);};
G__62100.cljs$lang$maxFixedArity = 0;
G__62100.cljs$lang$applyTo = (function (arglist__62102){
var args = cljs.core.seq(arglist__62102);
return G__62100__delegate(args);
});
G__62100.cljs$core$IFn$_invoke$arity$variadic = G__62100__delegate;
return G__62100;
})()
;

return null;
});
