goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__317626__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__317626 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__317627__i = 0, G__317627__a = new Array(arguments.length -  0);
while (G__317627__i < G__317627__a.length) {G__317627__a[G__317627__i] = arguments[G__317627__i + 0]; ++G__317627__i;}
  args = new cljs.core.IndexedSeq(G__317627__a,0);
} 
return G__317626__delegate.call(this,args);};
G__317626.cljs$lang$maxFixedArity = 0;
G__317626.cljs$lang$applyTo = (function (arglist__317628){
var args = cljs.core.seq(arglist__317628);
return G__317626__delegate(args);
});
G__317626.cljs$core$IFn$_invoke$arity$variadic = G__317626__delegate;
return G__317626;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__317629__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__317629 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__317630__i = 0, G__317630__a = new Array(arguments.length -  0);
while (G__317630__i < G__317630__a.length) {G__317630__a[G__317630__i] = arguments[G__317630__i + 0]; ++G__317630__i;}
  args = new cljs.core.IndexedSeq(G__317630__a,0);
} 
return G__317629__delegate.call(this,args);};
G__317629.cljs$lang$maxFixedArity = 0;
G__317629.cljs$lang$applyTo = (function (arglist__317631){
var args = cljs.core.seq(arglist__317631);
return G__317629__delegate(args);
});
G__317629.cljs$core$IFn$_invoke$arity$variadic = G__317629__delegate;
return G__317629;
})()
;

return null;
});
