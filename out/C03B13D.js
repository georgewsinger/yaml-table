goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28396__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28396 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28397__i = 0, G__28397__a = new Array(arguments.length -  0);
while (G__28397__i < G__28397__a.length) {G__28397__a[G__28397__i] = arguments[G__28397__i + 0]; ++G__28397__i;}
  args = new cljs.core.IndexedSeq(G__28397__a,0);
} 
return G__28396__delegate.call(this,args);};
G__28396.cljs$lang$maxFixedArity = 0;
G__28396.cljs$lang$applyTo = (function (arglist__28398){
var args = cljs.core.seq(arglist__28398);
return G__28396__delegate(args);
});
G__28396.cljs$core$IFn$_invoke$arity$variadic = G__28396__delegate;
return G__28396;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28399__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28399 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28400__i = 0, G__28400__a = new Array(arguments.length -  0);
while (G__28400__i < G__28400__a.length) {G__28400__a[G__28400__i] = arguments[G__28400__i + 0]; ++G__28400__i;}
  args = new cljs.core.IndexedSeq(G__28400__a,0);
} 
return G__28399__delegate.call(this,args);};
G__28399.cljs$lang$maxFixedArity = 0;
G__28399.cljs$lang$applyTo = (function (arglist__28401){
var args = cljs.core.seq(arglist__28401);
return G__28399__delegate(args);
});
G__28399.cljs$core$IFn$_invoke$arity$variadic = G__28399__delegate;
return G__28399;
})()
;

return null;
});
