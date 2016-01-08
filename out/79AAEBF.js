goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22797__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22798__i = 0, G__22798__a = new Array(arguments.length -  0);
while (G__22798__i < G__22798__a.length) {G__22798__a[G__22798__i] = arguments[G__22798__i + 0]; ++G__22798__i;}
  args = new cljs.core.IndexedSeq(G__22798__a,0);
} 
return G__22797__delegate.call(this,args);};
G__22797.cljs$lang$maxFixedArity = 0;
G__22797.cljs$lang$applyTo = (function (arglist__22799){
var args = cljs.core.seq(arglist__22799);
return G__22797__delegate(args);
});
G__22797.cljs$core$IFn$_invoke$arity$variadic = G__22797__delegate;
return G__22797;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22800__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22801__i = 0, G__22801__a = new Array(arguments.length -  0);
while (G__22801__i < G__22801__a.length) {G__22801__a[G__22801__i] = arguments[G__22801__i + 0]; ++G__22801__i;}
  args = new cljs.core.IndexedSeq(G__22801__a,0);
} 
return G__22800__delegate.call(this,args);};
G__22800.cljs$lang$maxFixedArity = 0;
G__22800.cljs$lang$applyTo = (function (arglist__22802){
var args = cljs.core.seq(arglist__22802);
return G__22800__delegate(args);
});
G__22800.cljs$core$IFn$_invoke$arity$variadic = G__22800__delegate;
return G__22800;
})()
;

return null;
});
