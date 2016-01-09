goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__143499__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__143499 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__143500__i = 0, G__143500__a = new Array(arguments.length -  0);
while (G__143500__i < G__143500__a.length) {G__143500__a[G__143500__i] = arguments[G__143500__i + 0]; ++G__143500__i;}
  args = new cljs.core.IndexedSeq(G__143500__a,0);
} 
return G__143499__delegate.call(this,args);};
G__143499.cljs$lang$maxFixedArity = 0;
G__143499.cljs$lang$applyTo = (function (arglist__143501){
var args = cljs.core.seq(arglist__143501);
return G__143499__delegate(args);
});
G__143499.cljs$core$IFn$_invoke$arity$variadic = G__143499__delegate;
return G__143499;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__143502__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__143502 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__143503__i = 0, G__143503__a = new Array(arguments.length -  0);
while (G__143503__i < G__143503__a.length) {G__143503__a[G__143503__i] = arguments[G__143503__i + 0]; ++G__143503__i;}
  args = new cljs.core.IndexedSeq(G__143503__a,0);
} 
return G__143502__delegate.call(this,args);};
G__143502.cljs$lang$maxFixedArity = 0;
G__143502.cljs$lang$applyTo = (function (arglist__143504){
var args = cljs.core.seq(arglist__143504);
return G__143502__delegate(args);
});
G__143502.cljs$core$IFn$_invoke$arity$variadic = G__143502__delegate;
return G__143502;
})()
;

return null;
});
