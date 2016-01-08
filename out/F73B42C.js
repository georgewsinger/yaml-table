goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28910__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28911__i = 0, G__28911__a = new Array(arguments.length -  0);
while (G__28911__i < G__28911__a.length) {G__28911__a[G__28911__i] = arguments[G__28911__i + 0]; ++G__28911__i;}
  args = new cljs.core.IndexedSeq(G__28911__a,0);
} 
return G__28910__delegate.call(this,args);};
G__28910.cljs$lang$maxFixedArity = 0;
G__28910.cljs$lang$applyTo = (function (arglist__28912){
var args = cljs.core.seq(arglist__28912);
return G__28910__delegate(args);
});
G__28910.cljs$core$IFn$_invoke$arity$variadic = G__28910__delegate;
return G__28910;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28913__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28913 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28914__i = 0, G__28914__a = new Array(arguments.length -  0);
while (G__28914__i < G__28914__a.length) {G__28914__a[G__28914__i] = arguments[G__28914__i + 0]; ++G__28914__i;}
  args = new cljs.core.IndexedSeq(G__28914__a,0);
} 
return G__28913__delegate.call(this,args);};
G__28913.cljs$lang$maxFixedArity = 0;
G__28913.cljs$lang$applyTo = (function (arglist__28915){
var args = cljs.core.seq(arglist__28915);
return G__28913__delegate(args);
});
G__28913.cljs$core$IFn$_invoke$arity$variadic = G__28913__delegate;
return G__28913;
})()
;

return null;
});
