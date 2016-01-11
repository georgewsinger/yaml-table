goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__259583__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__259583 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__259584__i = 0, G__259584__a = new Array(arguments.length -  0);
while (G__259584__i < G__259584__a.length) {G__259584__a[G__259584__i] = arguments[G__259584__i + 0]; ++G__259584__i;}
  args = new cljs.core.IndexedSeq(G__259584__a,0);
} 
return G__259583__delegate.call(this,args);};
G__259583.cljs$lang$maxFixedArity = 0;
G__259583.cljs$lang$applyTo = (function (arglist__259585){
var args = cljs.core.seq(arglist__259585);
return G__259583__delegate(args);
});
G__259583.cljs$core$IFn$_invoke$arity$variadic = G__259583__delegate;
return G__259583;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__259586__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__259586 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__259587__i = 0, G__259587__a = new Array(arguments.length -  0);
while (G__259587__i < G__259587__a.length) {G__259587__a[G__259587__i] = arguments[G__259587__i + 0]; ++G__259587__i;}
  args = new cljs.core.IndexedSeq(G__259587__a,0);
} 
return G__259586__delegate.call(this,args);};
G__259586.cljs$lang$maxFixedArity = 0;
G__259586.cljs$lang$applyTo = (function (arglist__259588){
var args = cljs.core.seq(arglist__259588);
return G__259586__delegate(args);
});
G__259586.cljs$core$IFn$_invoke$arity$variadic = G__259586__delegate;
return G__259586;
})()
;

return null;
});
