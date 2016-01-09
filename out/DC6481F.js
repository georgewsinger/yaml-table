goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__131089__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__131089 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__131090__i = 0, G__131090__a = new Array(arguments.length -  0);
while (G__131090__i < G__131090__a.length) {G__131090__a[G__131090__i] = arguments[G__131090__i + 0]; ++G__131090__i;}
  args = new cljs.core.IndexedSeq(G__131090__a,0);
} 
return G__131089__delegate.call(this,args);};
G__131089.cljs$lang$maxFixedArity = 0;
G__131089.cljs$lang$applyTo = (function (arglist__131091){
var args = cljs.core.seq(arglist__131091);
return G__131089__delegate(args);
});
G__131089.cljs$core$IFn$_invoke$arity$variadic = G__131089__delegate;
return G__131089;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__131092__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__131092 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__131093__i = 0, G__131093__a = new Array(arguments.length -  0);
while (G__131093__i < G__131093__a.length) {G__131093__a[G__131093__i] = arguments[G__131093__i + 0]; ++G__131093__i;}
  args = new cljs.core.IndexedSeq(G__131093__a,0);
} 
return G__131092__delegate.call(this,args);};
G__131092.cljs$lang$maxFixedArity = 0;
G__131092.cljs$lang$applyTo = (function (arglist__131094){
var args = cljs.core.seq(arglist__131094);
return G__131092__delegate(args);
});
G__131092.cljs$core$IFn$_invoke$arity$variadic = G__131092__delegate;
return G__131092;
})()
;

return null;
});
