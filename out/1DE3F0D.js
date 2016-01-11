goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__363210__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__363210 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__363211__i = 0, G__363211__a = new Array(arguments.length -  0);
while (G__363211__i < G__363211__a.length) {G__363211__a[G__363211__i] = arguments[G__363211__i + 0]; ++G__363211__i;}
  args = new cljs.core.IndexedSeq(G__363211__a,0);
} 
return G__363210__delegate.call(this,args);};
G__363210.cljs$lang$maxFixedArity = 0;
G__363210.cljs$lang$applyTo = (function (arglist__363212){
var args = cljs.core.seq(arglist__363212);
return G__363210__delegate(args);
});
G__363210.cljs$core$IFn$_invoke$arity$variadic = G__363210__delegate;
return G__363210;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__363213__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__363213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__363214__i = 0, G__363214__a = new Array(arguments.length -  0);
while (G__363214__i < G__363214__a.length) {G__363214__a[G__363214__i] = arguments[G__363214__i + 0]; ++G__363214__i;}
  args = new cljs.core.IndexedSeq(G__363214__a,0);
} 
return G__363213__delegate.call(this,args);};
G__363213.cljs$lang$maxFixedArity = 0;
G__363213.cljs$lang$applyTo = (function (arglist__363215){
var args = cljs.core.seq(arglist__363215);
return G__363213__delegate(args);
});
G__363213.cljs$core$IFn$_invoke$arity$variadic = G__363213__delegate;
return G__363213;
})()
;

return null;
});
