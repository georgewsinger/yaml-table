goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__329992__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__329992 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__329993__i = 0, G__329993__a = new Array(arguments.length -  0);
while (G__329993__i < G__329993__a.length) {G__329993__a[G__329993__i] = arguments[G__329993__i + 0]; ++G__329993__i;}
  args = new cljs.core.IndexedSeq(G__329993__a,0);
} 
return G__329992__delegate.call(this,args);};
G__329992.cljs$lang$maxFixedArity = 0;
G__329992.cljs$lang$applyTo = (function (arglist__329994){
var args = cljs.core.seq(arglist__329994);
return G__329992__delegate(args);
});
G__329992.cljs$core$IFn$_invoke$arity$variadic = G__329992__delegate;
return G__329992;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__329995__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__329995 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__329996__i = 0, G__329996__a = new Array(arguments.length -  0);
while (G__329996__i < G__329996__a.length) {G__329996__a[G__329996__i] = arguments[G__329996__i + 0]; ++G__329996__i;}
  args = new cljs.core.IndexedSeq(G__329996__a,0);
} 
return G__329995__delegate.call(this,args);};
G__329995.cljs$lang$maxFixedArity = 0;
G__329995.cljs$lang$applyTo = (function (arglist__329997){
var args = cljs.core.seq(arglist__329997);
return G__329995__delegate(args);
});
G__329995.cljs$core$IFn$_invoke$arity$variadic = G__329995__delegate;
return G__329995;
})()
;

return null;
});
