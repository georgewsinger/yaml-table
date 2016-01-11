goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__218119__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__218119 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__218120__i = 0, G__218120__a = new Array(arguments.length -  0);
while (G__218120__i < G__218120__a.length) {G__218120__a[G__218120__i] = arguments[G__218120__i + 0]; ++G__218120__i;}
  args = new cljs.core.IndexedSeq(G__218120__a,0);
} 
return G__218119__delegate.call(this,args);};
G__218119.cljs$lang$maxFixedArity = 0;
G__218119.cljs$lang$applyTo = (function (arglist__218121){
var args = cljs.core.seq(arglist__218121);
return G__218119__delegate(args);
});
G__218119.cljs$core$IFn$_invoke$arity$variadic = G__218119__delegate;
return G__218119;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__218122__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__218122 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__218123__i = 0, G__218123__a = new Array(arguments.length -  0);
while (G__218123__i < G__218123__a.length) {G__218123__a[G__218123__i] = arguments[G__218123__i + 0]; ++G__218123__i;}
  args = new cljs.core.IndexedSeq(G__218123__a,0);
} 
return G__218122__delegate.call(this,args);};
G__218122.cljs$lang$maxFixedArity = 0;
G__218122.cljs$lang$applyTo = (function (arglist__218124){
var args = cljs.core.seq(arglist__218124);
return G__218122__delegate(args);
});
G__218122.cljs$core$IFn$_invoke$arity$variadic = G__218122__delegate;
return G__218122;
})()
;

return null;
});
