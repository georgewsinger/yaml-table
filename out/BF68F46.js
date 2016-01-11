goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__266434__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__266434 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__266435__i = 0, G__266435__a = new Array(arguments.length -  0);
while (G__266435__i < G__266435__a.length) {G__266435__a[G__266435__i] = arguments[G__266435__i + 0]; ++G__266435__i;}
  args = new cljs.core.IndexedSeq(G__266435__a,0);
} 
return G__266434__delegate.call(this,args);};
G__266434.cljs$lang$maxFixedArity = 0;
G__266434.cljs$lang$applyTo = (function (arglist__266436){
var args = cljs.core.seq(arglist__266436);
return G__266434__delegate(args);
});
G__266434.cljs$core$IFn$_invoke$arity$variadic = G__266434__delegate;
return G__266434;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__266437__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__266437 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__266438__i = 0, G__266438__a = new Array(arguments.length -  0);
while (G__266438__i < G__266438__a.length) {G__266438__a[G__266438__i] = arguments[G__266438__i + 0]; ++G__266438__i;}
  args = new cljs.core.IndexedSeq(G__266438__a,0);
} 
return G__266437__delegate.call(this,args);};
G__266437.cljs$lang$maxFixedArity = 0;
G__266437.cljs$lang$applyTo = (function (arglist__266439){
var args = cljs.core.seq(arglist__266439);
return G__266437__delegate(args);
});
G__266437.cljs$core$IFn$_invoke$arity$variadic = G__266437__delegate;
return G__266437;
})()
;

return null;
});
