goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__214040__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__214040 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__214041__i = 0, G__214041__a = new Array(arguments.length -  0);
while (G__214041__i < G__214041__a.length) {G__214041__a[G__214041__i] = arguments[G__214041__i + 0]; ++G__214041__i;}
  args = new cljs.core.IndexedSeq(G__214041__a,0);
} 
return G__214040__delegate.call(this,args);};
G__214040.cljs$lang$maxFixedArity = 0;
G__214040.cljs$lang$applyTo = (function (arglist__214042){
var args = cljs.core.seq(arglist__214042);
return G__214040__delegate(args);
});
G__214040.cljs$core$IFn$_invoke$arity$variadic = G__214040__delegate;
return G__214040;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__214043__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__214043 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__214044__i = 0, G__214044__a = new Array(arguments.length -  0);
while (G__214044__i < G__214044__a.length) {G__214044__a[G__214044__i] = arguments[G__214044__i + 0]; ++G__214044__i;}
  args = new cljs.core.IndexedSeq(G__214044__a,0);
} 
return G__214043__delegate.call(this,args);};
G__214043.cljs$lang$maxFixedArity = 0;
G__214043.cljs$lang$applyTo = (function (arglist__214045){
var args = cljs.core.seq(arglist__214045);
return G__214043__delegate(args);
});
G__214043.cljs$core$IFn$_invoke$arity$variadic = G__214043__delegate;
return G__214043;
})()
;

return null;
});
