goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30358__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30359__i = 0, G__30359__a = new Array(arguments.length -  0);
while (G__30359__i < G__30359__a.length) {G__30359__a[G__30359__i] = arguments[G__30359__i + 0]; ++G__30359__i;}
  args = new cljs.core.IndexedSeq(G__30359__a,0);
} 
return G__30358__delegate.call(this,args);};
G__30358.cljs$lang$maxFixedArity = 0;
G__30358.cljs$lang$applyTo = (function (arglist__30360){
var args = cljs.core.seq(arglist__30360);
return G__30358__delegate(args);
});
G__30358.cljs$core$IFn$_invoke$arity$variadic = G__30358__delegate;
return G__30358;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30361__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30361 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30362__i = 0, G__30362__a = new Array(arguments.length -  0);
while (G__30362__i < G__30362__a.length) {G__30362__a[G__30362__i] = arguments[G__30362__i + 0]; ++G__30362__i;}
  args = new cljs.core.IndexedSeq(G__30362__a,0);
} 
return G__30361__delegate.call(this,args);};
G__30361.cljs$lang$maxFixedArity = 0;
G__30361.cljs$lang$applyTo = (function (arglist__30363){
var args = cljs.core.seq(arglist__30363);
return G__30361__delegate(args);
});
G__30361.cljs$core$IFn$_invoke$arity$variadic = G__30361__delegate;
return G__30361;
})()
;

return null;
});
