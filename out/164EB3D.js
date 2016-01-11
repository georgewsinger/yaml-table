goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__285974__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__285974 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__285975__i = 0, G__285975__a = new Array(arguments.length -  0);
while (G__285975__i < G__285975__a.length) {G__285975__a[G__285975__i] = arguments[G__285975__i + 0]; ++G__285975__i;}
  args = new cljs.core.IndexedSeq(G__285975__a,0);
} 
return G__285974__delegate.call(this,args);};
G__285974.cljs$lang$maxFixedArity = 0;
G__285974.cljs$lang$applyTo = (function (arglist__285976){
var args = cljs.core.seq(arglist__285976);
return G__285974__delegate(args);
});
G__285974.cljs$core$IFn$_invoke$arity$variadic = G__285974__delegate;
return G__285974;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__285977__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__285977 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__285978__i = 0, G__285978__a = new Array(arguments.length -  0);
while (G__285978__i < G__285978__a.length) {G__285978__a[G__285978__i] = arguments[G__285978__i + 0]; ++G__285978__i;}
  args = new cljs.core.IndexedSeq(G__285978__a,0);
} 
return G__285977__delegate.call(this,args);};
G__285977.cljs$lang$maxFixedArity = 0;
G__285977.cljs$lang$applyTo = (function (arglist__285979){
var args = cljs.core.seq(arglist__285979);
return G__285977__delegate(args);
});
G__285977.cljs$core$IFn$_invoke$arity$variadic = G__285977__delegate;
return G__285977;
})()
;

return null;
});
