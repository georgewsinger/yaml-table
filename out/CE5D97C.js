goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__177101__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__177101 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__177102__i = 0, G__177102__a = new Array(arguments.length -  0);
while (G__177102__i < G__177102__a.length) {G__177102__a[G__177102__i] = arguments[G__177102__i + 0]; ++G__177102__i;}
  args = new cljs.core.IndexedSeq(G__177102__a,0);
} 
return G__177101__delegate.call(this,args);};
G__177101.cljs$lang$maxFixedArity = 0;
G__177101.cljs$lang$applyTo = (function (arglist__177103){
var args = cljs.core.seq(arglist__177103);
return G__177101__delegate(args);
});
G__177101.cljs$core$IFn$_invoke$arity$variadic = G__177101__delegate;
return G__177101;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__177104__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__177104 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__177105__i = 0, G__177105__a = new Array(arguments.length -  0);
while (G__177105__i < G__177105__a.length) {G__177105__a[G__177105__i] = arguments[G__177105__i + 0]; ++G__177105__i;}
  args = new cljs.core.IndexedSeq(G__177105__a,0);
} 
return G__177104__delegate.call(this,args);};
G__177104.cljs$lang$maxFixedArity = 0;
G__177104.cljs$lang$applyTo = (function (arglist__177106){
var args = cljs.core.seq(arglist__177106);
return G__177104__delegate(args);
});
G__177104.cljs$core$IFn$_invoke$arity$variadic = G__177104__delegate;
return G__177104;
})()
;

return null;
});
