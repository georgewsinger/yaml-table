goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__346053__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__346053 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__346054__i = 0, G__346054__a = new Array(arguments.length -  0);
while (G__346054__i < G__346054__a.length) {G__346054__a[G__346054__i] = arguments[G__346054__i + 0]; ++G__346054__i;}
  args = new cljs.core.IndexedSeq(G__346054__a,0);
} 
return G__346053__delegate.call(this,args);};
G__346053.cljs$lang$maxFixedArity = 0;
G__346053.cljs$lang$applyTo = (function (arglist__346055){
var args = cljs.core.seq(arglist__346055);
return G__346053__delegate(args);
});
G__346053.cljs$core$IFn$_invoke$arity$variadic = G__346053__delegate;
return G__346053;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__346056__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__346056 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__346057__i = 0, G__346057__a = new Array(arguments.length -  0);
while (G__346057__i < G__346057__a.length) {G__346057__a[G__346057__i] = arguments[G__346057__i + 0]; ++G__346057__i;}
  args = new cljs.core.IndexedSeq(G__346057__a,0);
} 
return G__346056__delegate.call(this,args);};
G__346056.cljs$lang$maxFixedArity = 0;
G__346056.cljs$lang$applyTo = (function (arglist__346058){
var args = cljs.core.seq(arglist__346058);
return G__346056__delegate(args);
});
G__346056.cljs$core$IFn$_invoke$arity$variadic = G__346056__delegate;
return G__346056;
})()
;

return null;
});
