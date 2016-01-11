goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__317615__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__317615 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__317616__i = 0, G__317616__a = new Array(arguments.length -  0);
while (G__317616__i < G__317616__a.length) {G__317616__a[G__317616__i] = arguments[G__317616__i + 0]; ++G__317616__i;}
  args = new cljs.core.IndexedSeq(G__317616__a,0);
} 
return G__317615__delegate.call(this,args);};
G__317615.cljs$lang$maxFixedArity = 0;
G__317615.cljs$lang$applyTo = (function (arglist__317617){
var args = cljs.core.seq(arglist__317617);
return G__317615__delegate(args);
});
G__317615.cljs$core$IFn$_invoke$arity$variadic = G__317615__delegate;
return G__317615;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__317618__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__317618 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__317619__i = 0, G__317619__a = new Array(arguments.length -  0);
while (G__317619__i < G__317619__a.length) {G__317619__a[G__317619__i] = arguments[G__317619__i + 0]; ++G__317619__i;}
  args = new cljs.core.IndexedSeq(G__317619__a,0);
} 
return G__317618__delegate.call(this,args);};
G__317618.cljs$lang$maxFixedArity = 0;
G__317618.cljs$lang$applyTo = (function (arglist__317620){
var args = cljs.core.seq(arglist__317620);
return G__317618__delegate(args);
});
G__317618.cljs$core$IFn$_invoke$arity$variadic = G__317618__delegate;
return G__317618;
})()
;

return null;
});
