goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36118__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36118 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36119__i = 0, G__36119__a = new Array(arguments.length -  0);
while (G__36119__i < G__36119__a.length) {G__36119__a[G__36119__i] = arguments[G__36119__i + 0]; ++G__36119__i;}
  args = new cljs.core.IndexedSeq(G__36119__a,0);
} 
return G__36118__delegate.call(this,args);};
G__36118.cljs$lang$maxFixedArity = 0;
G__36118.cljs$lang$applyTo = (function (arglist__36120){
var args = cljs.core.seq(arglist__36120);
return G__36118__delegate(args);
});
G__36118.cljs$core$IFn$_invoke$arity$variadic = G__36118__delegate;
return G__36118;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36121__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36121 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36122__i = 0, G__36122__a = new Array(arguments.length -  0);
while (G__36122__i < G__36122__a.length) {G__36122__a[G__36122__i] = arguments[G__36122__i + 0]; ++G__36122__i;}
  args = new cljs.core.IndexedSeq(G__36122__a,0);
} 
return G__36121__delegate.call(this,args);};
G__36121.cljs$lang$maxFixedArity = 0;
G__36121.cljs$lang$applyTo = (function (arglist__36123){
var args = cljs.core.seq(arglist__36123);
return G__36121__delegate(args);
});
G__36121.cljs$core$IFn$_invoke$arity$variadic = G__36121__delegate;
return G__36121;
})()
;

return null;
});
