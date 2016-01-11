goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__325951__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__325951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__325952__i = 0, G__325952__a = new Array(arguments.length -  0);
while (G__325952__i < G__325952__a.length) {G__325952__a[G__325952__i] = arguments[G__325952__i + 0]; ++G__325952__i;}
  args = new cljs.core.IndexedSeq(G__325952__a,0);
} 
return G__325951__delegate.call(this,args);};
G__325951.cljs$lang$maxFixedArity = 0;
G__325951.cljs$lang$applyTo = (function (arglist__325953){
var args = cljs.core.seq(arglist__325953);
return G__325951__delegate(args);
});
G__325951.cljs$core$IFn$_invoke$arity$variadic = G__325951__delegate;
return G__325951;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__325954__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__325954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__325955__i = 0, G__325955__a = new Array(arguments.length -  0);
while (G__325955__i < G__325955__a.length) {G__325955__a[G__325955__i] = arguments[G__325955__i + 0]; ++G__325955__i;}
  args = new cljs.core.IndexedSeq(G__325955__a,0);
} 
return G__325954__delegate.call(this,args);};
G__325954.cljs$lang$maxFixedArity = 0;
G__325954.cljs$lang$applyTo = (function (arglist__325956){
var args = cljs.core.seq(arglist__325956);
return G__325954__delegate(args);
});
G__325954.cljs$core$IFn$_invoke$arity$variadic = G__325954__delegate;
return G__325954;
})()
;

return null;
});
