goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45022__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45022 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45023__i = 0, G__45023__a = new Array(arguments.length -  0);
while (G__45023__i < G__45023__a.length) {G__45023__a[G__45023__i] = arguments[G__45023__i + 0]; ++G__45023__i;}
  args = new cljs.core.IndexedSeq(G__45023__a,0);
} 
return G__45022__delegate.call(this,args);};
G__45022.cljs$lang$maxFixedArity = 0;
G__45022.cljs$lang$applyTo = (function (arglist__45024){
var args = cljs.core.seq(arglist__45024);
return G__45022__delegate(args);
});
G__45022.cljs$core$IFn$_invoke$arity$variadic = G__45022__delegate;
return G__45022;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45025__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45025 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45026__i = 0, G__45026__a = new Array(arguments.length -  0);
while (G__45026__i < G__45026__a.length) {G__45026__a[G__45026__i] = arguments[G__45026__i + 0]; ++G__45026__i;}
  args = new cljs.core.IndexedSeq(G__45026__a,0);
} 
return G__45025__delegate.call(this,args);};
G__45025.cljs$lang$maxFixedArity = 0;
G__45025.cljs$lang$applyTo = (function (arglist__45027){
var args = cljs.core.seq(arglist__45027);
return G__45025__delegate(args);
});
G__45025.cljs$core$IFn$_invoke$arity$variadic = G__45025__delegate;
return G__45025;
})()
;

return null;
});
