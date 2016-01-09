goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__101669__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__101669 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__101670__i = 0, G__101670__a = new Array(arguments.length -  0);
while (G__101670__i < G__101670__a.length) {G__101670__a[G__101670__i] = arguments[G__101670__i + 0]; ++G__101670__i;}
  args = new cljs.core.IndexedSeq(G__101670__a,0);
} 
return G__101669__delegate.call(this,args);};
G__101669.cljs$lang$maxFixedArity = 0;
G__101669.cljs$lang$applyTo = (function (arglist__101671){
var args = cljs.core.seq(arglist__101671);
return G__101669__delegate(args);
});
G__101669.cljs$core$IFn$_invoke$arity$variadic = G__101669__delegate;
return G__101669;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__101672__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__101672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__101673__i = 0, G__101673__a = new Array(arguments.length -  0);
while (G__101673__i < G__101673__a.length) {G__101673__a[G__101673__i] = arguments[G__101673__i + 0]; ++G__101673__i;}
  args = new cljs.core.IndexedSeq(G__101673__a,0);
} 
return G__101672__delegate.call(this,args);};
G__101672.cljs$lang$maxFixedArity = 0;
G__101672.cljs$lang$applyTo = (function (arglist__101674){
var args = cljs.core.seq(arglist__101674);
return G__101672__delegate(args);
});
G__101672.cljs$core$IFn$_invoke$arity$variadic = G__101672__delegate;
return G__101672;
})()
;

return null;
});
