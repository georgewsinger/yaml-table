goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__185055__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__185055 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__185056__i = 0, G__185056__a = new Array(arguments.length -  0);
while (G__185056__i < G__185056__a.length) {G__185056__a[G__185056__i] = arguments[G__185056__i + 0]; ++G__185056__i;}
  args = new cljs.core.IndexedSeq(G__185056__a,0);
} 
return G__185055__delegate.call(this,args);};
G__185055.cljs$lang$maxFixedArity = 0;
G__185055.cljs$lang$applyTo = (function (arglist__185057){
var args = cljs.core.seq(arglist__185057);
return G__185055__delegate(args);
});
G__185055.cljs$core$IFn$_invoke$arity$variadic = G__185055__delegate;
return G__185055;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__185058__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__185058 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__185059__i = 0, G__185059__a = new Array(arguments.length -  0);
while (G__185059__i < G__185059__a.length) {G__185059__a[G__185059__i] = arguments[G__185059__i + 0]; ++G__185059__i;}
  args = new cljs.core.IndexedSeq(G__185059__a,0);
} 
return G__185058__delegate.call(this,args);};
G__185058.cljs$lang$maxFixedArity = 0;
G__185058.cljs$lang$applyTo = (function (arglist__185060){
var args = cljs.core.seq(arglist__185060);
return G__185058__delegate(args);
});
G__185058.cljs$core$IFn$_invoke$arity$variadic = G__185058__delegate;
return G__185058;
})()
;

return null;
});
