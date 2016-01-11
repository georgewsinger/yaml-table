goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__286333__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__286333 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__286334__i = 0, G__286334__a = new Array(arguments.length -  0);
while (G__286334__i < G__286334__a.length) {G__286334__a[G__286334__i] = arguments[G__286334__i + 0]; ++G__286334__i;}
  args = new cljs.core.IndexedSeq(G__286334__a,0);
} 
return G__286333__delegate.call(this,args);};
G__286333.cljs$lang$maxFixedArity = 0;
G__286333.cljs$lang$applyTo = (function (arglist__286335){
var args = cljs.core.seq(arglist__286335);
return G__286333__delegate(args);
});
G__286333.cljs$core$IFn$_invoke$arity$variadic = G__286333__delegate;
return G__286333;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__286336__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__286336 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__286337__i = 0, G__286337__a = new Array(arguments.length -  0);
while (G__286337__i < G__286337__a.length) {G__286337__a[G__286337__i] = arguments[G__286337__i + 0]; ++G__286337__i;}
  args = new cljs.core.IndexedSeq(G__286337__a,0);
} 
return G__286336__delegate.call(this,args);};
G__286336.cljs$lang$maxFixedArity = 0;
G__286336.cljs$lang$applyTo = (function (arglist__286338){
var args = cljs.core.seq(arglist__286338);
return G__286336__delegate(args);
});
G__286336.cljs$core$IFn$_invoke$arity$variadic = G__286336__delegate;
return G__286336;
})()
;

return null;
});
