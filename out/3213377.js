goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__149685__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__149685 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__149686__i = 0, G__149686__a = new Array(arguments.length -  0);
while (G__149686__i < G__149686__a.length) {G__149686__a[G__149686__i] = arguments[G__149686__i + 0]; ++G__149686__i;}
  args = new cljs.core.IndexedSeq(G__149686__a,0);
} 
return G__149685__delegate.call(this,args);};
G__149685.cljs$lang$maxFixedArity = 0;
G__149685.cljs$lang$applyTo = (function (arglist__149687){
var args = cljs.core.seq(arglist__149687);
return G__149685__delegate(args);
});
G__149685.cljs$core$IFn$_invoke$arity$variadic = G__149685__delegate;
return G__149685;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__149688__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__149688 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__149689__i = 0, G__149689__a = new Array(arguments.length -  0);
while (G__149689__i < G__149689__a.length) {G__149689__a[G__149689__i] = arguments[G__149689__i + 0]; ++G__149689__i;}
  args = new cljs.core.IndexedSeq(G__149689__a,0);
} 
return G__149688__delegate.call(this,args);};
G__149688.cljs$lang$maxFixedArity = 0;
G__149688.cljs$lang$applyTo = (function (arglist__149690){
var args = cljs.core.seq(arglist__149690);
return G__149688__delegate(args);
});
G__149688.cljs$core$IFn$_invoke$arity$variadic = G__149688__delegate;
return G__149688;
})()
;

return null;
});
