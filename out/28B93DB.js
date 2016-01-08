goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37904__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37904 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37905__i = 0, G__37905__a = new Array(arguments.length -  0);
while (G__37905__i < G__37905__a.length) {G__37905__a[G__37905__i] = arguments[G__37905__i + 0]; ++G__37905__i;}
  args = new cljs.core.IndexedSeq(G__37905__a,0);
} 
return G__37904__delegate.call(this,args);};
G__37904.cljs$lang$maxFixedArity = 0;
G__37904.cljs$lang$applyTo = (function (arglist__37906){
var args = cljs.core.seq(arglist__37906);
return G__37904__delegate(args);
});
G__37904.cljs$core$IFn$_invoke$arity$variadic = G__37904__delegate;
return G__37904;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37907__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37907 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37908__i = 0, G__37908__a = new Array(arguments.length -  0);
while (G__37908__i < G__37908__a.length) {G__37908__a[G__37908__i] = arguments[G__37908__i + 0]; ++G__37908__i;}
  args = new cljs.core.IndexedSeq(G__37908__a,0);
} 
return G__37907__delegate.call(this,args);};
G__37907.cljs$lang$maxFixedArity = 0;
G__37907.cljs$lang$applyTo = (function (arglist__37909){
var args = cljs.core.seq(arglist__37909);
return G__37907__delegate(args);
});
G__37907.cljs$core$IFn$_invoke$arity$variadic = G__37907__delegate;
return G__37907;
})()
;

return null;
});
