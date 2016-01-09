goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45844__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45844 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45845__i = 0, G__45845__a = new Array(arguments.length -  0);
while (G__45845__i < G__45845__a.length) {G__45845__a[G__45845__i] = arguments[G__45845__i + 0]; ++G__45845__i;}
  args = new cljs.core.IndexedSeq(G__45845__a,0);
} 
return G__45844__delegate.call(this,args);};
G__45844.cljs$lang$maxFixedArity = 0;
G__45844.cljs$lang$applyTo = (function (arglist__45846){
var args = cljs.core.seq(arglist__45846);
return G__45844__delegate(args);
});
G__45844.cljs$core$IFn$_invoke$arity$variadic = G__45844__delegate;
return G__45844;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45847__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45847 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45848__i = 0, G__45848__a = new Array(arguments.length -  0);
while (G__45848__i < G__45848__a.length) {G__45848__a[G__45848__i] = arguments[G__45848__i + 0]; ++G__45848__i;}
  args = new cljs.core.IndexedSeq(G__45848__a,0);
} 
return G__45847__delegate.call(this,args);};
G__45847.cljs$lang$maxFixedArity = 0;
G__45847.cljs$lang$applyTo = (function (arglist__45849){
var args = cljs.core.seq(arglist__45849);
return G__45847__delegate(args);
});
G__45847.cljs$core$IFn$_invoke$arity$variadic = G__45847__delegate;
return G__45847;
})()
;

return null;
});
