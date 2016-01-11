goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__237655__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__237655 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__237656__i = 0, G__237656__a = new Array(arguments.length -  0);
while (G__237656__i < G__237656__a.length) {G__237656__a[G__237656__i] = arguments[G__237656__i + 0]; ++G__237656__i;}
  args = new cljs.core.IndexedSeq(G__237656__a,0);
} 
return G__237655__delegate.call(this,args);};
G__237655.cljs$lang$maxFixedArity = 0;
G__237655.cljs$lang$applyTo = (function (arglist__237657){
var args = cljs.core.seq(arglist__237657);
return G__237655__delegate(args);
});
G__237655.cljs$core$IFn$_invoke$arity$variadic = G__237655__delegate;
return G__237655;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__237658__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__237658 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__237659__i = 0, G__237659__a = new Array(arguments.length -  0);
while (G__237659__i < G__237659__a.length) {G__237659__a[G__237659__i] = arguments[G__237659__i + 0]; ++G__237659__i;}
  args = new cljs.core.IndexedSeq(G__237659__a,0);
} 
return G__237658__delegate.call(this,args);};
G__237658.cljs$lang$maxFixedArity = 0;
G__237658.cljs$lang$applyTo = (function (arglist__237660){
var args = cljs.core.seq(arglist__237660);
return G__237658__delegate(args);
});
G__237658.cljs$core$IFn$_invoke$arity$variadic = G__237658__delegate;
return G__237658;
})()
;

return null;
});
