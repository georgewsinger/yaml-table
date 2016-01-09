goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__149343__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__149343 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__149344__i = 0, G__149344__a = new Array(arguments.length -  0);
while (G__149344__i < G__149344__a.length) {G__149344__a[G__149344__i] = arguments[G__149344__i + 0]; ++G__149344__i;}
  args = new cljs.core.IndexedSeq(G__149344__a,0);
} 
return G__149343__delegate.call(this,args);};
G__149343.cljs$lang$maxFixedArity = 0;
G__149343.cljs$lang$applyTo = (function (arglist__149345){
var args = cljs.core.seq(arglist__149345);
return G__149343__delegate(args);
});
G__149343.cljs$core$IFn$_invoke$arity$variadic = G__149343__delegate;
return G__149343;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__149346__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__149346 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__149347__i = 0, G__149347__a = new Array(arguments.length -  0);
while (G__149347__i < G__149347__a.length) {G__149347__a[G__149347__i] = arguments[G__149347__i + 0]; ++G__149347__i;}
  args = new cljs.core.IndexedSeq(G__149347__a,0);
} 
return G__149346__delegate.call(this,args);};
G__149346.cljs$lang$maxFixedArity = 0;
G__149346.cljs$lang$applyTo = (function (arglist__149348){
var args = cljs.core.seq(arglist__149348);
return G__149346__delegate(args);
});
G__149346.cljs$core$IFn$_invoke$arity$variadic = G__149346__delegate;
return G__149346;
})()
;

return null;
});
