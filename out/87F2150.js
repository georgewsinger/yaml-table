goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__329250__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__329250 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__329251__i = 0, G__329251__a = new Array(arguments.length -  0);
while (G__329251__i < G__329251__a.length) {G__329251__a[G__329251__i] = arguments[G__329251__i + 0]; ++G__329251__i;}
  args = new cljs.core.IndexedSeq(G__329251__a,0);
} 
return G__329250__delegate.call(this,args);};
G__329250.cljs$lang$maxFixedArity = 0;
G__329250.cljs$lang$applyTo = (function (arglist__329252){
var args = cljs.core.seq(arglist__329252);
return G__329250__delegate(args);
});
G__329250.cljs$core$IFn$_invoke$arity$variadic = G__329250__delegate;
return G__329250;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__329253__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__329253 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__329254__i = 0, G__329254__a = new Array(arguments.length -  0);
while (G__329254__i < G__329254__a.length) {G__329254__a[G__329254__i] = arguments[G__329254__i + 0]; ++G__329254__i;}
  args = new cljs.core.IndexedSeq(G__329254__a,0);
} 
return G__329253__delegate.call(this,args);};
G__329253.cljs$lang$maxFixedArity = 0;
G__329253.cljs$lang$applyTo = (function (arglist__329255){
var args = cljs.core.seq(arglist__329255);
return G__329253__delegate(args);
});
G__329253.cljs$core$IFn$_invoke$arity$variadic = G__329253__delegate;
return G__329253;
})()
;

return null;
});
