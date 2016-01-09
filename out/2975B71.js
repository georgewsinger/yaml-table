goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__57307__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__57307 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57308__i = 0, G__57308__a = new Array(arguments.length -  0);
while (G__57308__i < G__57308__a.length) {G__57308__a[G__57308__i] = arguments[G__57308__i + 0]; ++G__57308__i;}
  args = new cljs.core.IndexedSeq(G__57308__a,0);
} 
return G__57307__delegate.call(this,args);};
G__57307.cljs$lang$maxFixedArity = 0;
G__57307.cljs$lang$applyTo = (function (arglist__57309){
var args = cljs.core.seq(arglist__57309);
return G__57307__delegate(args);
});
G__57307.cljs$core$IFn$_invoke$arity$variadic = G__57307__delegate;
return G__57307;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__57310__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__57310 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57311__i = 0, G__57311__a = new Array(arguments.length -  0);
while (G__57311__i < G__57311__a.length) {G__57311__a[G__57311__i] = arguments[G__57311__i + 0]; ++G__57311__i;}
  args = new cljs.core.IndexedSeq(G__57311__a,0);
} 
return G__57310__delegate.call(this,args);};
G__57310.cljs$lang$maxFixedArity = 0;
G__57310.cljs$lang$applyTo = (function (arglist__57312){
var args = cljs.core.seq(arglist__57312);
return G__57310__delegate(args);
});
G__57310.cljs$core$IFn$_invoke$arity$variadic = G__57310__delegate;
return G__57310;
})()
;

return null;
});
