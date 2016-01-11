goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__259298__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__259298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__259299__i = 0, G__259299__a = new Array(arguments.length -  0);
while (G__259299__i < G__259299__a.length) {G__259299__a[G__259299__i] = arguments[G__259299__i + 0]; ++G__259299__i;}
  args = new cljs.core.IndexedSeq(G__259299__a,0);
} 
return G__259298__delegate.call(this,args);};
G__259298.cljs$lang$maxFixedArity = 0;
G__259298.cljs$lang$applyTo = (function (arglist__259300){
var args = cljs.core.seq(arglist__259300);
return G__259298__delegate(args);
});
G__259298.cljs$core$IFn$_invoke$arity$variadic = G__259298__delegate;
return G__259298;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__259301__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__259301 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__259302__i = 0, G__259302__a = new Array(arguments.length -  0);
while (G__259302__i < G__259302__a.length) {G__259302__a[G__259302__i] = arguments[G__259302__i + 0]; ++G__259302__i;}
  args = new cljs.core.IndexedSeq(G__259302__a,0);
} 
return G__259301__delegate.call(this,args);};
G__259301.cljs$lang$maxFixedArity = 0;
G__259301.cljs$lang$applyTo = (function (arglist__259303){
var args = cljs.core.seq(arglist__259303);
return G__259301__delegate(args);
});
G__259301.cljs$core$IFn$_invoke$arity$variadic = G__259301__delegate;
return G__259301;
})()
;

return null;
});
