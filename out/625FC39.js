goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__49120__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__49120 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49121__i = 0, G__49121__a = new Array(arguments.length -  0);
while (G__49121__i < G__49121__a.length) {G__49121__a[G__49121__i] = arguments[G__49121__i + 0]; ++G__49121__i;}
  args = new cljs.core.IndexedSeq(G__49121__a,0);
} 
return G__49120__delegate.call(this,args);};
G__49120.cljs$lang$maxFixedArity = 0;
G__49120.cljs$lang$applyTo = (function (arglist__49122){
var args = cljs.core.seq(arglist__49122);
return G__49120__delegate(args);
});
G__49120.cljs$core$IFn$_invoke$arity$variadic = G__49120__delegate;
return G__49120;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__49123__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__49123 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49124__i = 0, G__49124__a = new Array(arguments.length -  0);
while (G__49124__i < G__49124__a.length) {G__49124__a[G__49124__i] = arguments[G__49124__i + 0]; ++G__49124__i;}
  args = new cljs.core.IndexedSeq(G__49124__a,0);
} 
return G__49123__delegate.call(this,args);};
G__49123.cljs$lang$maxFixedArity = 0;
G__49123.cljs$lang$applyTo = (function (arglist__49125){
var args = cljs.core.seq(arglist__49125);
return G__49123__delegate(args);
});
G__49123.cljs$core$IFn$_invoke$arity$variadic = G__49123__delegate;
return G__49123;
})()
;

return null;
});
