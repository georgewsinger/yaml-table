goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__210162__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__210162 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__210163__i = 0, G__210163__a = new Array(arguments.length -  0);
while (G__210163__i < G__210163__a.length) {G__210163__a[G__210163__i] = arguments[G__210163__i + 0]; ++G__210163__i;}
  args = new cljs.core.IndexedSeq(G__210163__a,0);
} 
return G__210162__delegate.call(this,args);};
G__210162.cljs$lang$maxFixedArity = 0;
G__210162.cljs$lang$applyTo = (function (arglist__210164){
var args = cljs.core.seq(arglist__210164);
return G__210162__delegate(args);
});
G__210162.cljs$core$IFn$_invoke$arity$variadic = G__210162__delegate;
return G__210162;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__210165__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__210165 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__210166__i = 0, G__210166__a = new Array(arguments.length -  0);
while (G__210166__i < G__210166__a.length) {G__210166__a[G__210166__i] = arguments[G__210166__i + 0]; ++G__210166__i;}
  args = new cljs.core.IndexedSeq(G__210166__a,0);
} 
return G__210165__delegate.call(this,args);};
G__210165.cljs$lang$maxFixedArity = 0;
G__210165.cljs$lang$applyTo = (function (arglist__210167){
var args = cljs.core.seq(arglist__210167);
return G__210165__delegate(args);
});
G__210165.cljs$core$IFn$_invoke$arity$variadic = G__210165__delegate;
return G__210165;
})()
;

return null;
});
