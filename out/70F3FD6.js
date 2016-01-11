goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__324499__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__324499 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__324500__i = 0, G__324500__a = new Array(arguments.length -  0);
while (G__324500__i < G__324500__a.length) {G__324500__a[G__324500__i] = arguments[G__324500__i + 0]; ++G__324500__i;}
  args = new cljs.core.IndexedSeq(G__324500__a,0);
} 
return G__324499__delegate.call(this,args);};
G__324499.cljs$lang$maxFixedArity = 0;
G__324499.cljs$lang$applyTo = (function (arglist__324501){
var args = cljs.core.seq(arglist__324501);
return G__324499__delegate(args);
});
G__324499.cljs$core$IFn$_invoke$arity$variadic = G__324499__delegate;
return G__324499;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__324502__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__324502 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__324503__i = 0, G__324503__a = new Array(arguments.length -  0);
while (G__324503__i < G__324503__a.length) {G__324503__a[G__324503__i] = arguments[G__324503__i + 0]; ++G__324503__i;}
  args = new cljs.core.IndexedSeq(G__324503__a,0);
} 
return G__324502__delegate.call(this,args);};
G__324502.cljs$lang$maxFixedArity = 0;
G__324502.cljs$lang$applyTo = (function (arglist__324504){
var args = cljs.core.seq(arglist__324504);
return G__324502__delegate(args);
});
G__324502.cljs$core$IFn$_invoke$arity$variadic = G__324502__delegate;
return G__324502;
})()
;

return null;
});
