goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__267447__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__267447 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__267448__i = 0, G__267448__a = new Array(arguments.length -  0);
while (G__267448__i < G__267448__a.length) {G__267448__a[G__267448__i] = arguments[G__267448__i + 0]; ++G__267448__i;}
  args = new cljs.core.IndexedSeq(G__267448__a,0);
} 
return G__267447__delegate.call(this,args);};
G__267447.cljs$lang$maxFixedArity = 0;
G__267447.cljs$lang$applyTo = (function (arglist__267449){
var args = cljs.core.seq(arglist__267449);
return G__267447__delegate(args);
});
G__267447.cljs$core$IFn$_invoke$arity$variadic = G__267447__delegate;
return G__267447;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__267450__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__267450 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__267451__i = 0, G__267451__a = new Array(arguments.length -  0);
while (G__267451__i < G__267451__a.length) {G__267451__a[G__267451__i] = arguments[G__267451__i + 0]; ++G__267451__i;}
  args = new cljs.core.IndexedSeq(G__267451__a,0);
} 
return G__267450__delegate.call(this,args);};
G__267450.cljs$lang$maxFixedArity = 0;
G__267450.cljs$lang$applyTo = (function (arglist__267452){
var args = cljs.core.seq(arglist__267452);
return G__267450__delegate(args);
});
G__267450.cljs$core$IFn$_invoke$arity$variadic = G__267450__delegate;
return G__267450;
})()
;

return null;
});
