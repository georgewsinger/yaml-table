goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__340573__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__340573 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__340574__i = 0, G__340574__a = new Array(arguments.length -  0);
while (G__340574__i < G__340574__a.length) {G__340574__a[G__340574__i] = arguments[G__340574__i + 0]; ++G__340574__i;}
  args = new cljs.core.IndexedSeq(G__340574__a,0);
} 
return G__340573__delegate.call(this,args);};
G__340573.cljs$lang$maxFixedArity = 0;
G__340573.cljs$lang$applyTo = (function (arglist__340575){
var args = cljs.core.seq(arglist__340575);
return G__340573__delegate(args);
});
G__340573.cljs$core$IFn$_invoke$arity$variadic = G__340573__delegate;
return G__340573;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__340576__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__340576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__340577__i = 0, G__340577__a = new Array(arguments.length -  0);
while (G__340577__i < G__340577__a.length) {G__340577__a[G__340577__i] = arguments[G__340577__i + 0]; ++G__340577__i;}
  args = new cljs.core.IndexedSeq(G__340577__a,0);
} 
return G__340576__delegate.call(this,args);};
G__340576.cljs$lang$maxFixedArity = 0;
G__340576.cljs$lang$applyTo = (function (arglist__340578){
var args = cljs.core.seq(arglist__340578);
return G__340576__delegate(args);
});
G__340576.cljs$core$IFn$_invoke$arity$variadic = G__340576__delegate;
return G__340576;
})()
;

return null;
});
