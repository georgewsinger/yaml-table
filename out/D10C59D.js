goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__148248__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__148248 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__148249__i = 0, G__148249__a = new Array(arguments.length -  0);
while (G__148249__i < G__148249__a.length) {G__148249__a[G__148249__i] = arguments[G__148249__i + 0]; ++G__148249__i;}
  args = new cljs.core.IndexedSeq(G__148249__a,0);
} 
return G__148248__delegate.call(this,args);};
G__148248.cljs$lang$maxFixedArity = 0;
G__148248.cljs$lang$applyTo = (function (arglist__148250){
var args = cljs.core.seq(arglist__148250);
return G__148248__delegate(args);
});
G__148248.cljs$core$IFn$_invoke$arity$variadic = G__148248__delegate;
return G__148248;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__148251__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__148251 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__148252__i = 0, G__148252__a = new Array(arguments.length -  0);
while (G__148252__i < G__148252__a.length) {G__148252__a[G__148252__i] = arguments[G__148252__i + 0]; ++G__148252__i;}
  args = new cljs.core.IndexedSeq(G__148252__a,0);
} 
return G__148251__delegate.call(this,args);};
G__148251.cljs$lang$maxFixedArity = 0;
G__148251.cljs$lang$applyTo = (function (arglist__148253){
var args = cljs.core.seq(arglist__148253);
return G__148251__delegate(args);
});
G__148251.cljs$core$IFn$_invoke$arity$variadic = G__148251__delegate;
return G__148251;
})()
;

return null;
});
