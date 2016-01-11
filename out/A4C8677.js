goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__314379__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__314379 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__314380__i = 0, G__314380__a = new Array(arguments.length -  0);
while (G__314380__i < G__314380__a.length) {G__314380__a[G__314380__i] = arguments[G__314380__i + 0]; ++G__314380__i;}
  args = new cljs.core.IndexedSeq(G__314380__a,0);
} 
return G__314379__delegate.call(this,args);};
G__314379.cljs$lang$maxFixedArity = 0;
G__314379.cljs$lang$applyTo = (function (arglist__314381){
var args = cljs.core.seq(arglist__314381);
return G__314379__delegate(args);
});
G__314379.cljs$core$IFn$_invoke$arity$variadic = G__314379__delegate;
return G__314379;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__314382__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__314382 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__314383__i = 0, G__314383__a = new Array(arguments.length -  0);
while (G__314383__i < G__314383__a.length) {G__314383__a[G__314383__i] = arguments[G__314383__i + 0]; ++G__314383__i;}
  args = new cljs.core.IndexedSeq(G__314383__a,0);
} 
return G__314382__delegate.call(this,args);};
G__314382.cljs$lang$maxFixedArity = 0;
G__314382.cljs$lang$applyTo = (function (arglist__314384){
var args = cljs.core.seq(arglist__314384);
return G__314382__delegate(args);
});
G__314382.cljs$core$IFn$_invoke$arity$variadic = G__314382__delegate;
return G__314382;
})()
;

return null;
});
