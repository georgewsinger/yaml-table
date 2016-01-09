goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__166357__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__166357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__166358__i = 0, G__166358__a = new Array(arguments.length -  0);
while (G__166358__i < G__166358__a.length) {G__166358__a[G__166358__i] = arguments[G__166358__i + 0]; ++G__166358__i;}
  args = new cljs.core.IndexedSeq(G__166358__a,0);
} 
return G__166357__delegate.call(this,args);};
G__166357.cljs$lang$maxFixedArity = 0;
G__166357.cljs$lang$applyTo = (function (arglist__166359){
var args = cljs.core.seq(arglist__166359);
return G__166357__delegate(args);
});
G__166357.cljs$core$IFn$_invoke$arity$variadic = G__166357__delegate;
return G__166357;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__166360__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__166360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__166361__i = 0, G__166361__a = new Array(arguments.length -  0);
while (G__166361__i < G__166361__a.length) {G__166361__a[G__166361__i] = arguments[G__166361__i + 0]; ++G__166361__i;}
  args = new cljs.core.IndexedSeq(G__166361__a,0);
} 
return G__166360__delegate.call(this,args);};
G__166360.cljs$lang$maxFixedArity = 0;
G__166360.cljs$lang$applyTo = (function (arglist__166362){
var args = cljs.core.seq(arglist__166362);
return G__166360__delegate(args);
});
G__166360.cljs$core$IFn$_invoke$arity$variadic = G__166360__delegate;
return G__166360;
})()
;

return null;
});
