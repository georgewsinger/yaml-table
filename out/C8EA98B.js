goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__142851__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__142851 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__142852__i = 0, G__142852__a = new Array(arguments.length -  0);
while (G__142852__i < G__142852__a.length) {G__142852__a[G__142852__i] = arguments[G__142852__i + 0]; ++G__142852__i;}
  args = new cljs.core.IndexedSeq(G__142852__a,0);
} 
return G__142851__delegate.call(this,args);};
G__142851.cljs$lang$maxFixedArity = 0;
G__142851.cljs$lang$applyTo = (function (arglist__142853){
var args = cljs.core.seq(arglist__142853);
return G__142851__delegate(args);
});
G__142851.cljs$core$IFn$_invoke$arity$variadic = G__142851__delegate;
return G__142851;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__142854__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__142854 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__142855__i = 0, G__142855__a = new Array(arguments.length -  0);
while (G__142855__i < G__142855__a.length) {G__142855__a[G__142855__i] = arguments[G__142855__i + 0]; ++G__142855__i;}
  args = new cljs.core.IndexedSeq(G__142855__a,0);
} 
return G__142854__delegate.call(this,args);};
G__142854.cljs$lang$maxFixedArity = 0;
G__142854.cljs$lang$applyTo = (function (arglist__142856){
var args = cljs.core.seq(arglist__142856);
return G__142854__delegate(args);
});
G__142854.cljs$core$IFn$_invoke$arity$variadic = G__142854__delegate;
return G__142854;
})()
;

return null;
});
