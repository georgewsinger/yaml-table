goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__271052__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__271052 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__271053__i = 0, G__271053__a = new Array(arguments.length -  0);
while (G__271053__i < G__271053__a.length) {G__271053__a[G__271053__i] = arguments[G__271053__i + 0]; ++G__271053__i;}
  args = new cljs.core.IndexedSeq(G__271053__a,0);
} 
return G__271052__delegate.call(this,args);};
G__271052.cljs$lang$maxFixedArity = 0;
G__271052.cljs$lang$applyTo = (function (arglist__271054){
var args = cljs.core.seq(arglist__271054);
return G__271052__delegate(args);
});
G__271052.cljs$core$IFn$_invoke$arity$variadic = G__271052__delegate;
return G__271052;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__271055__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__271055 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__271056__i = 0, G__271056__a = new Array(arguments.length -  0);
while (G__271056__i < G__271056__a.length) {G__271056__a[G__271056__i] = arguments[G__271056__i + 0]; ++G__271056__i;}
  args = new cljs.core.IndexedSeq(G__271056__a,0);
} 
return G__271055__delegate.call(this,args);};
G__271055.cljs$lang$maxFixedArity = 0;
G__271055.cljs$lang$applyTo = (function (arglist__271057){
var args = cljs.core.seq(arglist__271057);
return G__271055__delegate(args);
});
G__271055.cljs$core$IFn$_invoke$arity$variadic = G__271055__delegate;
return G__271055;
})()
;

return null;
});
