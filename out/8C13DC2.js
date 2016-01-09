goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__68122__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__68122 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68123__i = 0, G__68123__a = new Array(arguments.length -  0);
while (G__68123__i < G__68123__a.length) {G__68123__a[G__68123__i] = arguments[G__68123__i + 0]; ++G__68123__i;}
  args = new cljs.core.IndexedSeq(G__68123__a,0);
} 
return G__68122__delegate.call(this,args);};
G__68122.cljs$lang$maxFixedArity = 0;
G__68122.cljs$lang$applyTo = (function (arglist__68124){
var args = cljs.core.seq(arglist__68124);
return G__68122__delegate(args);
});
G__68122.cljs$core$IFn$_invoke$arity$variadic = G__68122__delegate;
return G__68122;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__68125__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__68125 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68126__i = 0, G__68126__a = new Array(arguments.length -  0);
while (G__68126__i < G__68126__a.length) {G__68126__a[G__68126__i] = arguments[G__68126__i + 0]; ++G__68126__i;}
  args = new cljs.core.IndexedSeq(G__68126__a,0);
} 
return G__68125__delegate.call(this,args);};
G__68125.cljs$lang$maxFixedArity = 0;
G__68125.cljs$lang$applyTo = (function (arglist__68127){
var args = cljs.core.seq(arglist__68127);
return G__68125__delegate(args);
});
G__68125.cljs$core$IFn$_invoke$arity$variadic = G__68125__delegate;
return G__68125;
})()
;

return null;
});
