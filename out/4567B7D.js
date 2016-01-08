goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25987__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25987 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25988__i = 0, G__25988__a = new Array(arguments.length -  0);
while (G__25988__i < G__25988__a.length) {G__25988__a[G__25988__i] = arguments[G__25988__i + 0]; ++G__25988__i;}
  args = new cljs.core.IndexedSeq(G__25988__a,0);
} 
return G__25987__delegate.call(this,args);};
G__25987.cljs$lang$maxFixedArity = 0;
G__25987.cljs$lang$applyTo = (function (arglist__25989){
var args = cljs.core.seq(arglist__25989);
return G__25987__delegate(args);
});
G__25987.cljs$core$IFn$_invoke$arity$variadic = G__25987__delegate;
return G__25987;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25990__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25990 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25991__i = 0, G__25991__a = new Array(arguments.length -  0);
while (G__25991__i < G__25991__a.length) {G__25991__a[G__25991__i] = arguments[G__25991__i + 0]; ++G__25991__i;}
  args = new cljs.core.IndexedSeq(G__25991__a,0);
} 
return G__25990__delegate.call(this,args);};
G__25990.cljs$lang$maxFixedArity = 0;
G__25990.cljs$lang$applyTo = (function (arglist__25992){
var args = cljs.core.seq(arglist__25992);
return G__25990__delegate(args);
});
G__25990.cljs$core$IFn$_invoke$arity$variadic = G__25990__delegate;
return G__25990;
})()
;

return null;
});
