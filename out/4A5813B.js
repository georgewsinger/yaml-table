goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__362468__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__362468 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__362469__i = 0, G__362469__a = new Array(arguments.length -  0);
while (G__362469__i < G__362469__a.length) {G__362469__a[G__362469__i] = arguments[G__362469__i + 0]; ++G__362469__i;}
  args = new cljs.core.IndexedSeq(G__362469__a,0);
} 
return G__362468__delegate.call(this,args);};
G__362468.cljs$lang$maxFixedArity = 0;
G__362468.cljs$lang$applyTo = (function (arglist__362470){
var args = cljs.core.seq(arglist__362470);
return G__362468__delegate(args);
});
G__362468.cljs$core$IFn$_invoke$arity$variadic = G__362468__delegate;
return G__362468;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__362471__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__362471 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__362472__i = 0, G__362472__a = new Array(arguments.length -  0);
while (G__362472__i < G__362472__a.length) {G__362472__a[G__362472__i] = arguments[G__362472__i + 0]; ++G__362472__i;}
  args = new cljs.core.IndexedSeq(G__362472__a,0);
} 
return G__362471__delegate.call(this,args);};
G__362471.cljs$lang$maxFixedArity = 0;
G__362471.cljs$lang$applyTo = (function (arglist__362473){
var args = cljs.core.seq(arglist__362473);
return G__362471__delegate(args);
});
G__362471.cljs$core$IFn$_invoke$arity$variadic = G__362471__delegate;
return G__362471;
})()
;

return null;
});
