goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__66874__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__66874 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66875__i = 0, G__66875__a = new Array(arguments.length -  0);
while (G__66875__i < G__66875__a.length) {G__66875__a[G__66875__i] = arguments[G__66875__i + 0]; ++G__66875__i;}
  args = new cljs.core.IndexedSeq(G__66875__a,0);
} 
return G__66874__delegate.call(this,args);};
G__66874.cljs$lang$maxFixedArity = 0;
G__66874.cljs$lang$applyTo = (function (arglist__66876){
var args = cljs.core.seq(arglist__66876);
return G__66874__delegate(args);
});
G__66874.cljs$core$IFn$_invoke$arity$variadic = G__66874__delegate;
return G__66874;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__66877__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__66877 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66878__i = 0, G__66878__a = new Array(arguments.length -  0);
while (G__66878__i < G__66878__a.length) {G__66878__a[G__66878__i] = arguments[G__66878__i + 0]; ++G__66878__i;}
  args = new cljs.core.IndexedSeq(G__66878__a,0);
} 
return G__66877__delegate.call(this,args);};
G__66877.cljs$lang$maxFixedArity = 0;
G__66877.cljs$lang$applyTo = (function (arglist__66879){
var args = cljs.core.seq(arglist__66879);
return G__66877__delegate(args);
});
G__66877.cljs$core$IFn$_invoke$arity$variadic = G__66877__delegate;
return G__66877;
})()
;

return null;
});
