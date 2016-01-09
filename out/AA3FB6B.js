goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__91534__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__91534 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__91535__i = 0, G__91535__a = new Array(arguments.length -  0);
while (G__91535__i < G__91535__a.length) {G__91535__a[G__91535__i] = arguments[G__91535__i + 0]; ++G__91535__i;}
  args = new cljs.core.IndexedSeq(G__91535__a,0);
} 
return G__91534__delegate.call(this,args);};
G__91534.cljs$lang$maxFixedArity = 0;
G__91534.cljs$lang$applyTo = (function (arglist__91536){
var args = cljs.core.seq(arglist__91536);
return G__91534__delegate(args);
});
G__91534.cljs$core$IFn$_invoke$arity$variadic = G__91534__delegate;
return G__91534;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__91537__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__91537 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__91538__i = 0, G__91538__a = new Array(arguments.length -  0);
while (G__91538__i < G__91538__a.length) {G__91538__a[G__91538__i] = arguments[G__91538__i + 0]; ++G__91538__i;}
  args = new cljs.core.IndexedSeq(G__91538__a,0);
} 
return G__91537__delegate.call(this,args);};
G__91537.cljs$lang$maxFixedArity = 0;
G__91537.cljs$lang$applyTo = (function (arglist__91539){
var args = cljs.core.seq(arglist__91539);
return G__91537__delegate(args);
});
G__91537.cljs$core$IFn$_invoke$arity$variadic = G__91537__delegate;
return G__91537;
})()
;

return null;
});
