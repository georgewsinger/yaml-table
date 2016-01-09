goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46660__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46660 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46661__i = 0, G__46661__a = new Array(arguments.length -  0);
while (G__46661__i < G__46661__a.length) {G__46661__a[G__46661__i] = arguments[G__46661__i + 0]; ++G__46661__i;}
  args = new cljs.core.IndexedSeq(G__46661__a,0);
} 
return G__46660__delegate.call(this,args);};
G__46660.cljs$lang$maxFixedArity = 0;
G__46660.cljs$lang$applyTo = (function (arglist__46662){
var args = cljs.core.seq(arglist__46662);
return G__46660__delegate(args);
});
G__46660.cljs$core$IFn$_invoke$arity$variadic = G__46660__delegate;
return G__46660;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46663__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46663 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46664__i = 0, G__46664__a = new Array(arguments.length -  0);
while (G__46664__i < G__46664__a.length) {G__46664__a[G__46664__i] = arguments[G__46664__i + 0]; ++G__46664__i;}
  args = new cljs.core.IndexedSeq(G__46664__a,0);
} 
return G__46663__delegate.call(this,args);};
G__46663.cljs$lang$maxFixedArity = 0;
G__46663.cljs$lang$applyTo = (function (arglist__46665){
var args = cljs.core.seq(arglist__46665);
return G__46663__delegate(args);
});
G__46663.cljs$core$IFn$_invoke$arity$variadic = G__46663__delegate;
return G__46663;
})()
;

return null;
});
