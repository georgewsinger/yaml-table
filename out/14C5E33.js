goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__50359__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__50359 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50360__i = 0, G__50360__a = new Array(arguments.length -  0);
while (G__50360__i < G__50360__a.length) {G__50360__a[G__50360__i] = arguments[G__50360__i + 0]; ++G__50360__i;}
  args = new cljs.core.IndexedSeq(G__50360__a,0);
} 
return G__50359__delegate.call(this,args);};
G__50359.cljs$lang$maxFixedArity = 0;
G__50359.cljs$lang$applyTo = (function (arglist__50361){
var args = cljs.core.seq(arglist__50361);
return G__50359__delegate(args);
});
G__50359.cljs$core$IFn$_invoke$arity$variadic = G__50359__delegate;
return G__50359;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__50362__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__50362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50363__i = 0, G__50363__a = new Array(arguments.length -  0);
while (G__50363__i < G__50363__a.length) {G__50363__a[G__50363__i] = arguments[G__50363__i + 0]; ++G__50363__i;}
  args = new cljs.core.IndexedSeq(G__50363__a,0);
} 
return G__50362__delegate.call(this,args);};
G__50362.cljs$lang$maxFixedArity = 0;
G__50362.cljs$lang$applyTo = (function (arglist__50364){
var args = cljs.core.seq(arglist__50364);
return G__50362__delegate(args);
});
G__50362.cljs$core$IFn$_invoke$arity$variadic = G__50362__delegate;
return G__50362;
})()
;

return null;
});
