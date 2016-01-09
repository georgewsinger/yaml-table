goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__151004__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__151004 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__151005__i = 0, G__151005__a = new Array(arguments.length -  0);
while (G__151005__i < G__151005__a.length) {G__151005__a[G__151005__i] = arguments[G__151005__i + 0]; ++G__151005__i;}
  args = new cljs.core.IndexedSeq(G__151005__a,0);
} 
return G__151004__delegate.call(this,args);};
G__151004.cljs$lang$maxFixedArity = 0;
G__151004.cljs$lang$applyTo = (function (arglist__151006){
var args = cljs.core.seq(arglist__151006);
return G__151004__delegate(args);
});
G__151004.cljs$core$IFn$_invoke$arity$variadic = G__151004__delegate;
return G__151004;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__151007__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__151007 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__151008__i = 0, G__151008__a = new Array(arguments.length -  0);
while (G__151008__i < G__151008__a.length) {G__151008__a[G__151008__i] = arguments[G__151008__i + 0]; ++G__151008__i;}
  args = new cljs.core.IndexedSeq(G__151008__a,0);
} 
return G__151007__delegate.call(this,args);};
G__151007.cljs$lang$maxFixedArity = 0;
G__151007.cljs$lang$applyTo = (function (arglist__151009){
var args = cljs.core.seq(arglist__151009);
return G__151007__delegate(args);
});
G__151007.cljs$core$IFn$_invoke$arity$variadic = G__151007__delegate;
return G__151007;
})()
;

return null;
});
