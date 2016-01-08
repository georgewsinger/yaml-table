goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42674__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42674 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42675__i = 0, G__42675__a = new Array(arguments.length -  0);
while (G__42675__i < G__42675__a.length) {G__42675__a[G__42675__i] = arguments[G__42675__i + 0]; ++G__42675__i;}
  args = new cljs.core.IndexedSeq(G__42675__a,0);
} 
return G__42674__delegate.call(this,args);};
G__42674.cljs$lang$maxFixedArity = 0;
G__42674.cljs$lang$applyTo = (function (arglist__42676){
var args = cljs.core.seq(arglist__42676);
return G__42674__delegate(args);
});
G__42674.cljs$core$IFn$_invoke$arity$variadic = G__42674__delegate;
return G__42674;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42677__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42678__i = 0, G__42678__a = new Array(arguments.length -  0);
while (G__42678__i < G__42678__a.length) {G__42678__a[G__42678__i] = arguments[G__42678__i + 0]; ++G__42678__i;}
  args = new cljs.core.IndexedSeq(G__42678__a,0);
} 
return G__42677__delegate.call(this,args);};
G__42677.cljs$lang$maxFixedArity = 0;
G__42677.cljs$lang$applyTo = (function (arglist__42679){
var args = cljs.core.seq(arglist__42679);
return G__42677__delegate(args);
});
G__42677.cljs$core$IFn$_invoke$arity$variadic = G__42677__delegate;
return G__42677;
})()
;

return null;
});
