goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23185__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23185 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23186__i = 0, G__23186__a = new Array(arguments.length -  0);
while (G__23186__i < G__23186__a.length) {G__23186__a[G__23186__i] = arguments[G__23186__i + 0]; ++G__23186__i;}
  args = new cljs.core.IndexedSeq(G__23186__a,0);
} 
return G__23185__delegate.call(this,args);};
G__23185.cljs$lang$maxFixedArity = 0;
G__23185.cljs$lang$applyTo = (function (arglist__23187){
var args = cljs.core.seq(arglist__23187);
return G__23185__delegate(args);
});
G__23185.cljs$core$IFn$_invoke$arity$variadic = G__23185__delegate;
return G__23185;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23188__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23188 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23189__i = 0, G__23189__a = new Array(arguments.length -  0);
while (G__23189__i < G__23189__a.length) {G__23189__a[G__23189__i] = arguments[G__23189__i + 0]; ++G__23189__i;}
  args = new cljs.core.IndexedSeq(G__23189__a,0);
} 
return G__23188__delegate.call(this,args);};
G__23188.cljs$lang$maxFixedArity = 0;
G__23188.cljs$lang$applyTo = (function (arglist__23190){
var args = cljs.core.seq(arglist__23190);
return G__23188__delegate(args);
});
G__23188.cljs$core$IFn$_invoke$arity$variadic = G__23188__delegate;
return G__23188;
})()
;

return null;
});
