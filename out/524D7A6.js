goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__86377__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__86377 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__86378__i = 0, G__86378__a = new Array(arguments.length -  0);
while (G__86378__i < G__86378__a.length) {G__86378__a[G__86378__i] = arguments[G__86378__i + 0]; ++G__86378__i;}
  args = new cljs.core.IndexedSeq(G__86378__a,0);
} 
return G__86377__delegate.call(this,args);};
G__86377.cljs$lang$maxFixedArity = 0;
G__86377.cljs$lang$applyTo = (function (arglist__86379){
var args = cljs.core.seq(arglist__86379);
return G__86377__delegate(args);
});
G__86377.cljs$core$IFn$_invoke$arity$variadic = G__86377__delegate;
return G__86377;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__86380__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__86380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__86381__i = 0, G__86381__a = new Array(arguments.length -  0);
while (G__86381__i < G__86381__a.length) {G__86381__a[G__86381__i] = arguments[G__86381__i + 0]; ++G__86381__i;}
  args = new cljs.core.IndexedSeq(G__86381__a,0);
} 
return G__86380__delegate.call(this,args);};
G__86380.cljs$lang$maxFixedArity = 0;
G__86380.cljs$lang$applyTo = (function (arglist__86382){
var args = cljs.core.seq(arglist__86382);
return G__86380__delegate(args);
});
G__86380.cljs$core$IFn$_invoke$arity$variadic = G__86380__delegate;
return G__86380;
})()
;

return null;
});
