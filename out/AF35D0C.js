goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24320__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24320 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24321__i = 0, G__24321__a = new Array(arguments.length -  0);
while (G__24321__i < G__24321__a.length) {G__24321__a[G__24321__i] = arguments[G__24321__i + 0]; ++G__24321__i;}
  args = new cljs.core.IndexedSeq(G__24321__a,0);
} 
return G__24320__delegate.call(this,args);};
G__24320.cljs$lang$maxFixedArity = 0;
G__24320.cljs$lang$applyTo = (function (arglist__24322){
var args = cljs.core.seq(arglist__24322);
return G__24320__delegate(args);
});
G__24320.cljs$core$IFn$_invoke$arity$variadic = G__24320__delegate;
return G__24320;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24323__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24324__i = 0, G__24324__a = new Array(arguments.length -  0);
while (G__24324__i < G__24324__a.length) {G__24324__a[G__24324__i] = arguments[G__24324__i + 0]; ++G__24324__i;}
  args = new cljs.core.IndexedSeq(G__24324__a,0);
} 
return G__24323__delegate.call(this,args);};
G__24323.cljs$lang$maxFixedArity = 0;
G__24323.cljs$lang$applyTo = (function (arglist__24325){
var args = cljs.core.seq(arglist__24325);
return G__24323__delegate(args);
});
G__24323.cljs$core$IFn$_invoke$arity$variadic = G__24323__delegate;
return G__24323;
})()
;

return null;
});
