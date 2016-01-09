goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__70715__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__70715 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70716__i = 0, G__70716__a = new Array(arguments.length -  0);
while (G__70716__i < G__70716__a.length) {G__70716__a[G__70716__i] = arguments[G__70716__i + 0]; ++G__70716__i;}
  args = new cljs.core.IndexedSeq(G__70716__a,0);
} 
return G__70715__delegate.call(this,args);};
G__70715.cljs$lang$maxFixedArity = 0;
G__70715.cljs$lang$applyTo = (function (arglist__70717){
var args = cljs.core.seq(arglist__70717);
return G__70715__delegate(args);
});
G__70715.cljs$core$IFn$_invoke$arity$variadic = G__70715__delegate;
return G__70715;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__70718__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__70718 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70719__i = 0, G__70719__a = new Array(arguments.length -  0);
while (G__70719__i < G__70719__a.length) {G__70719__a[G__70719__i] = arguments[G__70719__i + 0]; ++G__70719__i;}
  args = new cljs.core.IndexedSeq(G__70719__a,0);
} 
return G__70718__delegate.call(this,args);};
G__70718.cljs$lang$maxFixedArity = 0;
G__70718.cljs$lang$applyTo = (function (arglist__70720){
var args = cljs.core.seq(arglist__70720);
return G__70718__delegate(args);
});
G__70718.cljs$core$IFn$_invoke$arity$variadic = G__70718__delegate;
return G__70718;
})()
;

return null;
});
