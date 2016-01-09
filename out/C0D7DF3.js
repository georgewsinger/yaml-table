goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__159158__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__159158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__159159__i = 0, G__159159__a = new Array(arguments.length -  0);
while (G__159159__i < G__159159__a.length) {G__159159__a[G__159159__i] = arguments[G__159159__i + 0]; ++G__159159__i;}
  args = new cljs.core.IndexedSeq(G__159159__a,0);
} 
return G__159158__delegate.call(this,args);};
G__159158.cljs$lang$maxFixedArity = 0;
G__159158.cljs$lang$applyTo = (function (arglist__159160){
var args = cljs.core.seq(arglist__159160);
return G__159158__delegate(args);
});
G__159158.cljs$core$IFn$_invoke$arity$variadic = G__159158__delegate;
return G__159158;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__159161__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__159161 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__159162__i = 0, G__159162__a = new Array(arguments.length -  0);
while (G__159162__i < G__159162__a.length) {G__159162__a[G__159162__i] = arguments[G__159162__i + 0]; ++G__159162__i;}
  args = new cljs.core.IndexedSeq(G__159162__a,0);
} 
return G__159161__delegate.call(this,args);};
G__159161.cljs$lang$maxFixedArity = 0;
G__159161.cljs$lang$applyTo = (function (arglist__159163){
var args = cljs.core.seq(arglist__159163);
return G__159161__delegate(args);
});
G__159161.cljs$core$IFn$_invoke$arity$variadic = G__159161__delegate;
return G__159161;
})()
;

return null;
});
