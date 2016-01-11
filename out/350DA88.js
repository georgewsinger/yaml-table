goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__218491__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__218491 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__218492__i = 0, G__218492__a = new Array(arguments.length -  0);
while (G__218492__i < G__218492__a.length) {G__218492__a[G__218492__i] = arguments[G__218492__i + 0]; ++G__218492__i;}
  args = new cljs.core.IndexedSeq(G__218492__a,0);
} 
return G__218491__delegate.call(this,args);};
G__218491.cljs$lang$maxFixedArity = 0;
G__218491.cljs$lang$applyTo = (function (arglist__218493){
var args = cljs.core.seq(arglist__218493);
return G__218491__delegate(args);
});
G__218491.cljs$core$IFn$_invoke$arity$variadic = G__218491__delegate;
return G__218491;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__218494__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__218494 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__218495__i = 0, G__218495__a = new Array(arguments.length -  0);
while (G__218495__i < G__218495__a.length) {G__218495__a[G__218495__i] = arguments[G__218495__i + 0]; ++G__218495__i;}
  args = new cljs.core.IndexedSeq(G__218495__a,0);
} 
return G__218494__delegate.call(this,args);};
G__218494.cljs$lang$maxFixedArity = 0;
G__218494.cljs$lang$applyTo = (function (arglist__218496){
var args = cljs.core.seq(arglist__218496);
return G__218494__delegate(args);
});
G__218494.cljs$core$IFn$_invoke$arity$variadic = G__218494__delegate;
return G__218494;
})()
;

return null;
});
