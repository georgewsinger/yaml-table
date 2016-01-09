goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__86639__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__86639 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__86640__i = 0, G__86640__a = new Array(arguments.length -  0);
while (G__86640__i < G__86640__a.length) {G__86640__a[G__86640__i] = arguments[G__86640__i + 0]; ++G__86640__i;}
  args = new cljs.core.IndexedSeq(G__86640__a,0);
} 
return G__86639__delegate.call(this,args);};
G__86639.cljs$lang$maxFixedArity = 0;
G__86639.cljs$lang$applyTo = (function (arglist__86641){
var args = cljs.core.seq(arglist__86641);
return G__86639__delegate(args);
});
G__86639.cljs$core$IFn$_invoke$arity$variadic = G__86639__delegate;
return G__86639;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__86642__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__86642 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__86643__i = 0, G__86643__a = new Array(arguments.length -  0);
while (G__86643__i < G__86643__a.length) {G__86643__a[G__86643__i] = arguments[G__86643__i + 0]; ++G__86643__i;}
  args = new cljs.core.IndexedSeq(G__86643__a,0);
} 
return G__86642__delegate.call(this,args);};
G__86642.cljs$lang$maxFixedArity = 0;
G__86642.cljs$lang$applyTo = (function (arglist__86644){
var args = cljs.core.seq(arglist__86644);
return G__86642__delegate(args);
});
G__86642.cljs$core$IFn$_invoke$arity$variadic = G__86642__delegate;
return G__86642;
})()
;

return null;
});
