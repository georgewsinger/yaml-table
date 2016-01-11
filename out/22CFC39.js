goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__364620__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__364620 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__364621__i = 0, G__364621__a = new Array(arguments.length -  0);
while (G__364621__i < G__364621__a.length) {G__364621__a[G__364621__i] = arguments[G__364621__i + 0]; ++G__364621__i;}
  args = new cljs.core.IndexedSeq(G__364621__a,0);
} 
return G__364620__delegate.call(this,args);};
G__364620.cljs$lang$maxFixedArity = 0;
G__364620.cljs$lang$applyTo = (function (arglist__364622){
var args = cljs.core.seq(arglist__364622);
return G__364620__delegate(args);
});
G__364620.cljs$core$IFn$_invoke$arity$variadic = G__364620__delegate;
return G__364620;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__364623__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__364623 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__364624__i = 0, G__364624__a = new Array(arguments.length -  0);
while (G__364624__i < G__364624__a.length) {G__364624__a[G__364624__i] = arguments[G__364624__i + 0]; ++G__364624__i;}
  args = new cljs.core.IndexedSeq(G__364624__a,0);
} 
return G__364623__delegate.call(this,args);};
G__364623.cljs$lang$maxFixedArity = 0;
G__364623.cljs$lang$applyTo = (function (arglist__364625){
var args = cljs.core.seq(arglist__364625);
return G__364623__delegate(args);
});
G__364623.cljs$core$IFn$_invoke$arity$variadic = G__364623__delegate;
return G__364623;
})()
;

return null;
});
