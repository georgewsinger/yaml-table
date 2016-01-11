goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__341307__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__341307 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__341308__i = 0, G__341308__a = new Array(arguments.length -  0);
while (G__341308__i < G__341308__a.length) {G__341308__a[G__341308__i] = arguments[G__341308__i + 0]; ++G__341308__i;}
  args = new cljs.core.IndexedSeq(G__341308__a,0);
} 
return G__341307__delegate.call(this,args);};
G__341307.cljs$lang$maxFixedArity = 0;
G__341307.cljs$lang$applyTo = (function (arglist__341309){
var args = cljs.core.seq(arglist__341309);
return G__341307__delegate(args);
});
G__341307.cljs$core$IFn$_invoke$arity$variadic = G__341307__delegate;
return G__341307;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__341310__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__341310 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__341311__i = 0, G__341311__a = new Array(arguments.length -  0);
while (G__341311__i < G__341311__a.length) {G__341311__a[G__341311__i] = arguments[G__341311__i + 0]; ++G__341311__i;}
  args = new cljs.core.IndexedSeq(G__341311__a,0);
} 
return G__341310__delegate.call(this,args);};
G__341310.cljs$lang$maxFixedArity = 0;
G__341310.cljs$lang$applyTo = (function (arglist__341312){
var args = cljs.core.seq(arglist__341312);
return G__341310__delegate(args);
});
G__341310.cljs$core$IFn$_invoke$arity$variadic = G__341310__delegate;
return G__341310;
})()
;

return null;
});
