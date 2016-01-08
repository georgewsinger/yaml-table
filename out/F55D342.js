goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24331__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24331 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24332__i = 0, G__24332__a = new Array(arguments.length -  0);
while (G__24332__i < G__24332__a.length) {G__24332__a[G__24332__i] = arguments[G__24332__i + 0]; ++G__24332__i;}
  args = new cljs.core.IndexedSeq(G__24332__a,0);
} 
return G__24331__delegate.call(this,args);};
G__24331.cljs$lang$maxFixedArity = 0;
G__24331.cljs$lang$applyTo = (function (arglist__24333){
var args = cljs.core.seq(arglist__24333);
return G__24331__delegate(args);
});
G__24331.cljs$core$IFn$_invoke$arity$variadic = G__24331__delegate;
return G__24331;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24334__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24334 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24335__i = 0, G__24335__a = new Array(arguments.length -  0);
while (G__24335__i < G__24335__a.length) {G__24335__a[G__24335__i] = arguments[G__24335__i + 0]; ++G__24335__i;}
  args = new cljs.core.IndexedSeq(G__24335__a,0);
} 
return G__24334__delegate.call(this,args);};
G__24334.cljs$lang$maxFixedArity = 0;
G__24334.cljs$lang$applyTo = (function (arglist__24336){
var args = cljs.core.seq(arglist__24336);
return G__24334__delegate(args);
});
G__24334.cljs$core$IFn$_invoke$arity$variadic = G__24334__delegate;
return G__24334;
})()
;

return null;
});
