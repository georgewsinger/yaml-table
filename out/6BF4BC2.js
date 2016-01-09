goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__56386__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__56386 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56387__i = 0, G__56387__a = new Array(arguments.length -  0);
while (G__56387__i < G__56387__a.length) {G__56387__a[G__56387__i] = arguments[G__56387__i + 0]; ++G__56387__i;}
  args = new cljs.core.IndexedSeq(G__56387__a,0);
} 
return G__56386__delegate.call(this,args);};
G__56386.cljs$lang$maxFixedArity = 0;
G__56386.cljs$lang$applyTo = (function (arglist__56388){
var args = cljs.core.seq(arglist__56388);
return G__56386__delegate(args);
});
G__56386.cljs$core$IFn$_invoke$arity$variadic = G__56386__delegate;
return G__56386;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__56389__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__56389 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56390__i = 0, G__56390__a = new Array(arguments.length -  0);
while (G__56390__i < G__56390__a.length) {G__56390__a[G__56390__i] = arguments[G__56390__i + 0]; ++G__56390__i;}
  args = new cljs.core.IndexedSeq(G__56390__a,0);
} 
return G__56389__delegate.call(this,args);};
G__56389.cljs$lang$maxFixedArity = 0;
G__56389.cljs$lang$applyTo = (function (arglist__56391){
var args = cljs.core.seq(arglist__56391);
return G__56389__delegate(args);
});
G__56389.cljs$core$IFn$_invoke$arity$variadic = G__56389__delegate;
return G__56389;
})()
;

return null;
});
