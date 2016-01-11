goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__327048__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__327048 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__327049__i = 0, G__327049__a = new Array(arguments.length -  0);
while (G__327049__i < G__327049__a.length) {G__327049__a[G__327049__i] = arguments[G__327049__i + 0]; ++G__327049__i;}
  args = new cljs.core.IndexedSeq(G__327049__a,0);
} 
return G__327048__delegate.call(this,args);};
G__327048.cljs$lang$maxFixedArity = 0;
G__327048.cljs$lang$applyTo = (function (arglist__327050){
var args = cljs.core.seq(arglist__327050);
return G__327048__delegate(args);
});
G__327048.cljs$core$IFn$_invoke$arity$variadic = G__327048__delegate;
return G__327048;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__327051__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__327051 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__327052__i = 0, G__327052__a = new Array(arguments.length -  0);
while (G__327052__i < G__327052__a.length) {G__327052__a[G__327052__i] = arguments[G__327052__i + 0]; ++G__327052__i;}
  args = new cljs.core.IndexedSeq(G__327052__a,0);
} 
return G__327051__delegate.call(this,args);};
G__327051.cljs$lang$maxFixedArity = 0;
G__327051.cljs$lang$applyTo = (function (arglist__327053){
var args = cljs.core.seq(arglist__327053);
return G__327051__delegate(args);
});
G__327051.cljs$core$IFn$_invoke$arity$variadic = G__327051__delegate;
return G__327051;
})()
;

return null;
});
