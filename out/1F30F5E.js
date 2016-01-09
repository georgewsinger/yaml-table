goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__148623__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__148623 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__148624__i = 0, G__148624__a = new Array(arguments.length -  0);
while (G__148624__i < G__148624__a.length) {G__148624__a[G__148624__i] = arguments[G__148624__i + 0]; ++G__148624__i;}
  args = new cljs.core.IndexedSeq(G__148624__a,0);
} 
return G__148623__delegate.call(this,args);};
G__148623.cljs$lang$maxFixedArity = 0;
G__148623.cljs$lang$applyTo = (function (arglist__148625){
var args = cljs.core.seq(arglist__148625);
return G__148623__delegate(args);
});
G__148623.cljs$core$IFn$_invoke$arity$variadic = G__148623__delegate;
return G__148623;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__148626__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__148626 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__148627__i = 0, G__148627__a = new Array(arguments.length -  0);
while (G__148627__i < G__148627__a.length) {G__148627__a[G__148627__i] = arguments[G__148627__i + 0]; ++G__148627__i;}
  args = new cljs.core.IndexedSeq(G__148627__a,0);
} 
return G__148626__delegate.call(this,args);};
G__148626.cljs$lang$maxFixedArity = 0;
G__148626.cljs$lang$applyTo = (function (arglist__148628){
var args = cljs.core.seq(arglist__148628);
return G__148626__delegate(args);
});
G__148626.cljs$core$IFn$_invoke$arity$variadic = G__148626__delegate;
return G__148626;
})()
;

return null;
});
