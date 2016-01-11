goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__331315__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__331315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__331316__i = 0, G__331316__a = new Array(arguments.length -  0);
while (G__331316__i < G__331316__a.length) {G__331316__a[G__331316__i] = arguments[G__331316__i + 0]; ++G__331316__i;}
  args = new cljs.core.IndexedSeq(G__331316__a,0);
} 
return G__331315__delegate.call(this,args);};
G__331315.cljs$lang$maxFixedArity = 0;
G__331315.cljs$lang$applyTo = (function (arglist__331317){
var args = cljs.core.seq(arglist__331317);
return G__331315__delegate(args);
});
G__331315.cljs$core$IFn$_invoke$arity$variadic = G__331315__delegate;
return G__331315;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__331318__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__331318 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__331319__i = 0, G__331319__a = new Array(arguments.length -  0);
while (G__331319__i < G__331319__a.length) {G__331319__a[G__331319__i] = arguments[G__331319__i + 0]; ++G__331319__i;}
  args = new cljs.core.IndexedSeq(G__331319__a,0);
} 
return G__331318__delegate.call(this,args);};
G__331318.cljs$lang$maxFixedArity = 0;
G__331318.cljs$lang$applyTo = (function (arglist__331320){
var args = cljs.core.seq(arglist__331320);
return G__331318__delegate(args);
});
G__331318.cljs$core$IFn$_invoke$arity$variadic = G__331318__delegate;
return G__331318;
})()
;

return null;
});
