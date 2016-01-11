goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__222365__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__222365 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__222366__i = 0, G__222366__a = new Array(arguments.length -  0);
while (G__222366__i < G__222366__a.length) {G__222366__a[G__222366__i] = arguments[G__222366__i + 0]; ++G__222366__i;}
  args = new cljs.core.IndexedSeq(G__222366__a,0);
} 
return G__222365__delegate.call(this,args);};
G__222365.cljs$lang$maxFixedArity = 0;
G__222365.cljs$lang$applyTo = (function (arglist__222367){
var args = cljs.core.seq(arglist__222367);
return G__222365__delegate(args);
});
G__222365.cljs$core$IFn$_invoke$arity$variadic = G__222365__delegate;
return G__222365;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__222368__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__222368 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__222369__i = 0, G__222369__a = new Array(arguments.length -  0);
while (G__222369__i < G__222369__a.length) {G__222369__a[G__222369__i] = arguments[G__222369__i + 0]; ++G__222369__i;}
  args = new cljs.core.IndexedSeq(G__222369__a,0);
} 
return G__222368__delegate.call(this,args);};
G__222368.cljs$lang$maxFixedArity = 0;
G__222368.cljs$lang$applyTo = (function (arglist__222370){
var args = cljs.core.seq(arglist__222370);
return G__222368__delegate(args);
});
G__222368.cljs$core$IFn$_invoke$arity$variadic = G__222368__delegate;
return G__222368;
})()
;

return null;
});
