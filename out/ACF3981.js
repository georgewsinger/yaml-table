goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__258911__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__258911 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__258912__i = 0, G__258912__a = new Array(arguments.length -  0);
while (G__258912__i < G__258912__a.length) {G__258912__a[G__258912__i] = arguments[G__258912__i + 0]; ++G__258912__i;}
  args = new cljs.core.IndexedSeq(G__258912__a,0);
} 
return G__258911__delegate.call(this,args);};
G__258911.cljs$lang$maxFixedArity = 0;
G__258911.cljs$lang$applyTo = (function (arglist__258913){
var args = cljs.core.seq(arglist__258913);
return G__258911__delegate(args);
});
G__258911.cljs$core$IFn$_invoke$arity$variadic = G__258911__delegate;
return G__258911;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__258914__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__258914 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__258915__i = 0, G__258915__a = new Array(arguments.length -  0);
while (G__258915__i < G__258915__a.length) {G__258915__a[G__258915__i] = arguments[G__258915__i + 0]; ++G__258915__i;}
  args = new cljs.core.IndexedSeq(G__258915__a,0);
} 
return G__258914__delegate.call(this,args);};
G__258914.cljs$lang$maxFixedArity = 0;
G__258914.cljs$lang$applyTo = (function (arglist__258916){
var args = cljs.core.seq(arglist__258916);
return G__258914__delegate(args);
});
G__258914.cljs$core$IFn$_invoke$arity$variadic = G__258914__delegate;
return G__258914;
})()
;

return null;
});
