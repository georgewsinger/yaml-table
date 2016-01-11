goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__330396__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__330396 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__330397__i = 0, G__330397__a = new Array(arguments.length -  0);
while (G__330397__i < G__330397__a.length) {G__330397__a[G__330397__i] = arguments[G__330397__i + 0]; ++G__330397__i;}
  args = new cljs.core.IndexedSeq(G__330397__a,0);
} 
return G__330396__delegate.call(this,args);};
G__330396.cljs$lang$maxFixedArity = 0;
G__330396.cljs$lang$applyTo = (function (arglist__330398){
var args = cljs.core.seq(arglist__330398);
return G__330396__delegate(args);
});
G__330396.cljs$core$IFn$_invoke$arity$variadic = G__330396__delegate;
return G__330396;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__330399__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__330399 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__330400__i = 0, G__330400__a = new Array(arguments.length -  0);
while (G__330400__i < G__330400__a.length) {G__330400__a[G__330400__i] = arguments[G__330400__i + 0]; ++G__330400__i;}
  args = new cljs.core.IndexedSeq(G__330400__a,0);
} 
return G__330399__delegate.call(this,args);};
G__330399.cljs$lang$maxFixedArity = 0;
G__330399.cljs$lang$applyTo = (function (arglist__330401){
var args = cljs.core.seq(arglist__330401);
return G__330399__delegate(args);
});
G__330399.cljs$core$IFn$_invoke$arity$variadic = G__330399__delegate;
return G__330399;
})()
;

return null;
});
