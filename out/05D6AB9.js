goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__324864__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__324864 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__324865__i = 0, G__324865__a = new Array(arguments.length -  0);
while (G__324865__i < G__324865__a.length) {G__324865__a[G__324865__i] = arguments[G__324865__i + 0]; ++G__324865__i;}
  args = new cljs.core.IndexedSeq(G__324865__a,0);
} 
return G__324864__delegate.call(this,args);};
G__324864.cljs$lang$maxFixedArity = 0;
G__324864.cljs$lang$applyTo = (function (arglist__324866){
var args = cljs.core.seq(arglist__324866);
return G__324864__delegate(args);
});
G__324864.cljs$core$IFn$_invoke$arity$variadic = G__324864__delegate;
return G__324864;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__324867__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__324867 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__324868__i = 0, G__324868__a = new Array(arguments.length -  0);
while (G__324868__i < G__324868__a.length) {G__324868__a[G__324868__i] = arguments[G__324868__i + 0]; ++G__324868__i;}
  args = new cljs.core.IndexedSeq(G__324868__a,0);
} 
return G__324867__delegate.call(this,args);};
G__324867.cljs$lang$maxFixedArity = 0;
G__324867.cljs$lang$applyTo = (function (arglist__324869){
var args = cljs.core.seq(arglist__324869);
return G__324867__delegate(args);
});
G__324867.cljs$core$IFn$_invoke$arity$variadic = G__324867__delegate;
return G__324867;
})()
;

return null;
});
