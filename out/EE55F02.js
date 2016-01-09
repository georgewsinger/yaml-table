goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__144125__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__144125 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__144126__i = 0, G__144126__a = new Array(arguments.length -  0);
while (G__144126__i < G__144126__a.length) {G__144126__a[G__144126__i] = arguments[G__144126__i + 0]; ++G__144126__i;}
  args = new cljs.core.IndexedSeq(G__144126__a,0);
} 
return G__144125__delegate.call(this,args);};
G__144125.cljs$lang$maxFixedArity = 0;
G__144125.cljs$lang$applyTo = (function (arglist__144127){
var args = cljs.core.seq(arglist__144127);
return G__144125__delegate(args);
});
G__144125.cljs$core$IFn$_invoke$arity$variadic = G__144125__delegate;
return G__144125;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__144128__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__144128 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__144129__i = 0, G__144129__a = new Array(arguments.length -  0);
while (G__144129__i < G__144129__a.length) {G__144129__a[G__144129__i] = arguments[G__144129__i + 0]; ++G__144129__i;}
  args = new cljs.core.IndexedSeq(G__144129__a,0);
} 
return G__144128__delegate.call(this,args);};
G__144128.cljs$lang$maxFixedArity = 0;
G__144128.cljs$lang$applyTo = (function (arglist__144130){
var args = cljs.core.seq(arglist__144130);
return G__144128__delegate(args);
});
G__144128.cljs$core$IFn$_invoke$arity$variadic = G__144128__delegate;
return G__144128;
})()
;

return null;
});
