goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__156353__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__156353 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__156354__i = 0, G__156354__a = new Array(arguments.length -  0);
while (G__156354__i < G__156354__a.length) {G__156354__a[G__156354__i] = arguments[G__156354__i + 0]; ++G__156354__i;}
  args = new cljs.core.IndexedSeq(G__156354__a,0);
} 
return G__156353__delegate.call(this,args);};
G__156353.cljs$lang$maxFixedArity = 0;
G__156353.cljs$lang$applyTo = (function (arglist__156355){
var args = cljs.core.seq(arglist__156355);
return G__156353__delegate(args);
});
G__156353.cljs$core$IFn$_invoke$arity$variadic = G__156353__delegate;
return G__156353;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__156356__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__156356 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__156357__i = 0, G__156357__a = new Array(arguments.length -  0);
while (G__156357__i < G__156357__a.length) {G__156357__a[G__156357__i] = arguments[G__156357__i + 0]; ++G__156357__i;}
  args = new cljs.core.IndexedSeq(G__156357__a,0);
} 
return G__156356__delegate.call(this,args);};
G__156356.cljs$lang$maxFixedArity = 0;
G__156356.cljs$lang$applyTo = (function (arglist__156358){
var args = cljs.core.seq(arglist__156358);
return G__156356__delegate(args);
});
G__156356.cljs$core$IFn$_invoke$arity$variadic = G__156356__delegate;
return G__156356;
})()
;

return null;
});
