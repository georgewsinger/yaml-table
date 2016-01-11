goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__281400__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__281400 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__281401__i = 0, G__281401__a = new Array(arguments.length -  0);
while (G__281401__i < G__281401__a.length) {G__281401__a[G__281401__i] = arguments[G__281401__i + 0]; ++G__281401__i;}
  args = new cljs.core.IndexedSeq(G__281401__a,0);
} 
return G__281400__delegate.call(this,args);};
G__281400.cljs$lang$maxFixedArity = 0;
G__281400.cljs$lang$applyTo = (function (arglist__281402){
var args = cljs.core.seq(arglist__281402);
return G__281400__delegate(args);
});
G__281400.cljs$core$IFn$_invoke$arity$variadic = G__281400__delegate;
return G__281400;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__281403__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__281403 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__281404__i = 0, G__281404__a = new Array(arguments.length -  0);
while (G__281404__i < G__281404__a.length) {G__281404__a[G__281404__i] = arguments[G__281404__i + 0]; ++G__281404__i;}
  args = new cljs.core.IndexedSeq(G__281404__a,0);
} 
return G__281403__delegate.call(this,args);};
G__281403.cljs$lang$maxFixedArity = 0;
G__281403.cljs$lang$applyTo = (function (arglist__281405){
var args = cljs.core.seq(arglist__281405);
return G__281403__delegate(args);
});
G__281403.cljs$core$IFn$_invoke$arity$variadic = G__281403__delegate;
return G__281403;
})()
;

return null;
});
