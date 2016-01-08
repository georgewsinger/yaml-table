goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21898__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21898 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21899__i = 0, G__21899__a = new Array(arguments.length -  0);
while (G__21899__i < G__21899__a.length) {G__21899__a[G__21899__i] = arguments[G__21899__i + 0]; ++G__21899__i;}
  args = new cljs.core.IndexedSeq(G__21899__a,0);
} 
return G__21898__delegate.call(this,args);};
G__21898.cljs$lang$maxFixedArity = 0;
G__21898.cljs$lang$applyTo = (function (arglist__21900){
var args = cljs.core.seq(arglist__21900);
return G__21898__delegate(args);
});
G__21898.cljs$core$IFn$_invoke$arity$variadic = G__21898__delegate;
return G__21898;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21901__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21901 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21902__i = 0, G__21902__a = new Array(arguments.length -  0);
while (G__21902__i < G__21902__a.length) {G__21902__a[G__21902__i] = arguments[G__21902__i + 0]; ++G__21902__i;}
  args = new cljs.core.IndexedSeq(G__21902__a,0);
} 
return G__21901__delegate.call(this,args);};
G__21901.cljs$lang$maxFixedArity = 0;
G__21901.cljs$lang$applyTo = (function (arglist__21903){
var args = cljs.core.seq(arglist__21903);
return G__21901__delegate(args);
});
G__21901.cljs$core$IFn$_invoke$arity$variadic = G__21901__delegate;
return G__21901;
})()
;

return null;
});
