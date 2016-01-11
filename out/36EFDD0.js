goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__351575__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__351575 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__351576__i = 0, G__351576__a = new Array(arguments.length -  0);
while (G__351576__i < G__351576__a.length) {G__351576__a[G__351576__i] = arguments[G__351576__i + 0]; ++G__351576__i;}
  args = new cljs.core.IndexedSeq(G__351576__a,0);
} 
return G__351575__delegate.call(this,args);};
G__351575.cljs$lang$maxFixedArity = 0;
G__351575.cljs$lang$applyTo = (function (arglist__351577){
var args = cljs.core.seq(arglist__351577);
return G__351575__delegate(args);
});
G__351575.cljs$core$IFn$_invoke$arity$variadic = G__351575__delegate;
return G__351575;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__351578__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__351578 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__351579__i = 0, G__351579__a = new Array(arguments.length -  0);
while (G__351579__i < G__351579__a.length) {G__351579__a[G__351579__i] = arguments[G__351579__i + 0]; ++G__351579__i;}
  args = new cljs.core.IndexedSeq(G__351579__a,0);
} 
return G__351578__delegate.call(this,args);};
G__351578.cljs$lang$maxFixedArity = 0;
G__351578.cljs$lang$applyTo = (function (arglist__351580){
var args = cljs.core.seq(arglist__351580);
return G__351578__delegate(args);
});
G__351578.cljs$core$IFn$_invoke$arity$variadic = G__351578__delegate;
return G__351578;
})()
;

return null;
});
