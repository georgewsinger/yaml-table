goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25353__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25353 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25354__i = 0, G__25354__a = new Array(arguments.length -  0);
while (G__25354__i < G__25354__a.length) {G__25354__a[G__25354__i] = arguments[G__25354__i + 0]; ++G__25354__i;}
  args = new cljs.core.IndexedSeq(G__25354__a,0);
} 
return G__25353__delegate.call(this,args);};
G__25353.cljs$lang$maxFixedArity = 0;
G__25353.cljs$lang$applyTo = (function (arglist__25355){
var args = cljs.core.seq(arglist__25355);
return G__25353__delegate(args);
});
G__25353.cljs$core$IFn$_invoke$arity$variadic = G__25353__delegate;
return G__25353;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25356__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25356 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25357__i = 0, G__25357__a = new Array(arguments.length -  0);
while (G__25357__i < G__25357__a.length) {G__25357__a[G__25357__i] = arguments[G__25357__i + 0]; ++G__25357__i;}
  args = new cljs.core.IndexedSeq(G__25357__a,0);
} 
return G__25356__delegate.call(this,args);};
G__25356.cljs$lang$maxFixedArity = 0;
G__25356.cljs$lang$applyTo = (function (arglist__25358){
var args = cljs.core.seq(arglist__25358);
return G__25356__delegate(args);
});
G__25356.cljs$core$IFn$_invoke$arity$variadic = G__25356__delegate;
return G__25356;
})()
;

return null;
});
