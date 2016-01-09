goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__164183__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__164183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__164184__i = 0, G__164184__a = new Array(arguments.length -  0);
while (G__164184__i < G__164184__a.length) {G__164184__a[G__164184__i] = arguments[G__164184__i + 0]; ++G__164184__i;}
  args = new cljs.core.IndexedSeq(G__164184__a,0);
} 
return G__164183__delegate.call(this,args);};
G__164183.cljs$lang$maxFixedArity = 0;
G__164183.cljs$lang$applyTo = (function (arglist__164185){
var args = cljs.core.seq(arglist__164185);
return G__164183__delegate(args);
});
G__164183.cljs$core$IFn$_invoke$arity$variadic = G__164183__delegate;
return G__164183;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__164186__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__164186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__164187__i = 0, G__164187__a = new Array(arguments.length -  0);
while (G__164187__i < G__164187__a.length) {G__164187__a[G__164187__i] = arguments[G__164187__i + 0]; ++G__164187__i;}
  args = new cljs.core.IndexedSeq(G__164187__a,0);
} 
return G__164186__delegate.call(this,args);};
G__164186.cljs$lang$maxFixedArity = 0;
G__164186.cljs$lang$applyTo = (function (arglist__164188){
var args = cljs.core.seq(arglist__164188);
return G__164186__delegate(args);
});
G__164186.cljs$core$IFn$_invoke$arity$variadic = G__164186__delegate;
return G__164186;
})()
;

return null;
});
