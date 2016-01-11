goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__247396__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__247396 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__247397__i = 0, G__247397__a = new Array(arguments.length -  0);
while (G__247397__i < G__247397__a.length) {G__247397__a[G__247397__i] = arguments[G__247397__i + 0]; ++G__247397__i;}
  args = new cljs.core.IndexedSeq(G__247397__a,0);
} 
return G__247396__delegate.call(this,args);};
G__247396.cljs$lang$maxFixedArity = 0;
G__247396.cljs$lang$applyTo = (function (arglist__247398){
var args = cljs.core.seq(arglist__247398);
return G__247396__delegate(args);
});
G__247396.cljs$core$IFn$_invoke$arity$variadic = G__247396__delegate;
return G__247396;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__247399__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__247399 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__247400__i = 0, G__247400__a = new Array(arguments.length -  0);
while (G__247400__i < G__247400__a.length) {G__247400__a[G__247400__i] = arguments[G__247400__i + 0]; ++G__247400__i;}
  args = new cljs.core.IndexedSeq(G__247400__a,0);
} 
return G__247399__delegate.call(this,args);};
G__247399.cljs$lang$maxFixedArity = 0;
G__247399.cljs$lang$applyTo = (function (arglist__247401){
var args = cljs.core.seq(arglist__247401);
return G__247399__delegate(args);
});
G__247399.cljs$core$IFn$_invoke$arity$variadic = G__247399__delegate;
return G__247399;
})()
;

return null;
});
