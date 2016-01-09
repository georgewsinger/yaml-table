goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61662__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61662 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61663__i = 0, G__61663__a = new Array(arguments.length -  0);
while (G__61663__i < G__61663__a.length) {G__61663__a[G__61663__i] = arguments[G__61663__i + 0]; ++G__61663__i;}
  args = new cljs.core.IndexedSeq(G__61663__a,0);
} 
return G__61662__delegate.call(this,args);};
G__61662.cljs$lang$maxFixedArity = 0;
G__61662.cljs$lang$applyTo = (function (arglist__61664){
var args = cljs.core.seq(arglist__61664);
return G__61662__delegate(args);
});
G__61662.cljs$core$IFn$_invoke$arity$variadic = G__61662__delegate;
return G__61662;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61665__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61665 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61666__i = 0, G__61666__a = new Array(arguments.length -  0);
while (G__61666__i < G__61666__a.length) {G__61666__a[G__61666__i] = arguments[G__61666__i + 0]; ++G__61666__i;}
  args = new cljs.core.IndexedSeq(G__61666__a,0);
} 
return G__61665__delegate.call(this,args);};
G__61665.cljs$lang$maxFixedArity = 0;
G__61665.cljs$lang$applyTo = (function (arglist__61667){
var args = cljs.core.seq(arglist__61667);
return G__61665__delegate(args);
});
G__61665.cljs$core$IFn$_invoke$arity$variadic = G__61665__delegate;
return G__61665;
})()
;

return null;
});
