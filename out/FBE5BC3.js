goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__73372__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__73372 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73373__i = 0, G__73373__a = new Array(arguments.length -  0);
while (G__73373__i < G__73373__a.length) {G__73373__a[G__73373__i] = arguments[G__73373__i + 0]; ++G__73373__i;}
  args = new cljs.core.IndexedSeq(G__73373__a,0);
} 
return G__73372__delegate.call(this,args);};
G__73372.cljs$lang$maxFixedArity = 0;
G__73372.cljs$lang$applyTo = (function (arglist__73374){
var args = cljs.core.seq(arglist__73374);
return G__73372__delegate(args);
});
G__73372.cljs$core$IFn$_invoke$arity$variadic = G__73372__delegate;
return G__73372;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__73375__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__73375 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73376__i = 0, G__73376__a = new Array(arguments.length -  0);
while (G__73376__i < G__73376__a.length) {G__73376__a[G__73376__i] = arguments[G__73376__i + 0]; ++G__73376__i;}
  args = new cljs.core.IndexedSeq(G__73376__a,0);
} 
return G__73375__delegate.call(this,args);};
G__73375.cljs$lang$maxFixedArity = 0;
G__73375.cljs$lang$applyTo = (function (arglist__73377){
var args = cljs.core.seq(arglist__73377);
return G__73375__delegate(args);
});
G__73375.cljs$core$IFn$_invoke$arity$variadic = G__73375__delegate;
return G__73375;
})()
;

return null;
});
