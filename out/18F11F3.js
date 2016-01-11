goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__332428__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__332428 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__332429__i = 0, G__332429__a = new Array(arguments.length -  0);
while (G__332429__i < G__332429__a.length) {G__332429__a[G__332429__i] = arguments[G__332429__i + 0]; ++G__332429__i;}
  args = new cljs.core.IndexedSeq(G__332429__a,0);
} 
return G__332428__delegate.call(this,args);};
G__332428.cljs$lang$maxFixedArity = 0;
G__332428.cljs$lang$applyTo = (function (arglist__332430){
var args = cljs.core.seq(arglist__332430);
return G__332428__delegate(args);
});
G__332428.cljs$core$IFn$_invoke$arity$variadic = G__332428__delegate;
return G__332428;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__332431__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__332431 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__332432__i = 0, G__332432__a = new Array(arguments.length -  0);
while (G__332432__i < G__332432__a.length) {G__332432__a[G__332432__i] = arguments[G__332432__i + 0]; ++G__332432__i;}
  args = new cljs.core.IndexedSeq(G__332432__a,0);
} 
return G__332431__delegate.call(this,args);};
G__332431.cljs$lang$maxFixedArity = 0;
G__332431.cljs$lang$applyTo = (function (arglist__332433){
var args = cljs.core.seq(arglist__332433);
return G__332431__delegate(args);
});
G__332431.cljs$core$IFn$_invoke$arity$variadic = G__332431__delegate;
return G__332431;
})()
;

return null;
});
