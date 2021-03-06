goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35253__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35253 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35254__i = 0, G__35254__a = new Array(arguments.length -  0);
while (G__35254__i < G__35254__a.length) {G__35254__a[G__35254__i] = arguments[G__35254__i + 0]; ++G__35254__i;}
  args = new cljs.core.IndexedSeq(G__35254__a,0);
} 
return G__35253__delegate.call(this,args);};
G__35253.cljs$lang$maxFixedArity = 0;
G__35253.cljs$lang$applyTo = (function (arglist__35255){
var args = cljs.core.seq(arglist__35255);
return G__35253__delegate(args);
});
G__35253.cljs$core$IFn$_invoke$arity$variadic = G__35253__delegate;
return G__35253;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35256__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35256 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35257__i = 0, G__35257__a = new Array(arguments.length -  0);
while (G__35257__i < G__35257__a.length) {G__35257__a[G__35257__i] = arguments[G__35257__i + 0]; ++G__35257__i;}
  args = new cljs.core.IndexedSeq(G__35257__a,0);
} 
return G__35256__delegate.call(this,args);};
G__35256.cljs$lang$maxFixedArity = 0;
G__35256.cljs$lang$applyTo = (function (arglist__35258){
var args = cljs.core.seq(arglist__35258);
return G__35256__delegate(args);
});
G__35256.cljs$core$IFn$_invoke$arity$variadic = G__35256__delegate;
return G__35256;
})()
;

return null;
});
