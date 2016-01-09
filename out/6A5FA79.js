goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__172552__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__172552 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__172553__i = 0, G__172553__a = new Array(arguments.length -  0);
while (G__172553__i < G__172553__a.length) {G__172553__a[G__172553__i] = arguments[G__172553__i + 0]; ++G__172553__i;}
  args = new cljs.core.IndexedSeq(G__172553__a,0);
} 
return G__172552__delegate.call(this,args);};
G__172552.cljs$lang$maxFixedArity = 0;
G__172552.cljs$lang$applyTo = (function (arglist__172554){
var args = cljs.core.seq(arglist__172554);
return G__172552__delegate(args);
});
G__172552.cljs$core$IFn$_invoke$arity$variadic = G__172552__delegate;
return G__172552;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__172555__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__172555 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__172556__i = 0, G__172556__a = new Array(arguments.length -  0);
while (G__172556__i < G__172556__a.length) {G__172556__a[G__172556__i] = arguments[G__172556__i + 0]; ++G__172556__i;}
  args = new cljs.core.IndexedSeq(G__172556__a,0);
} 
return G__172555__delegate.call(this,args);};
G__172555.cljs$lang$maxFixedArity = 0;
G__172555.cljs$lang$applyTo = (function (arglist__172557){
var args = cljs.core.seq(arglist__172557);
return G__172555__delegate(args);
});
G__172555.cljs$core$IFn$_invoke$arity$variadic = G__172555__delegate;
return G__172555;
})()
;

return null;
});
