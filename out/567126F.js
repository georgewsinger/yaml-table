goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__154563__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__154563 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__154564__i = 0, G__154564__a = new Array(arguments.length -  0);
while (G__154564__i < G__154564__a.length) {G__154564__a[G__154564__i] = arguments[G__154564__i + 0]; ++G__154564__i;}
  args = new cljs.core.IndexedSeq(G__154564__a,0);
} 
return G__154563__delegate.call(this,args);};
G__154563.cljs$lang$maxFixedArity = 0;
G__154563.cljs$lang$applyTo = (function (arglist__154565){
var args = cljs.core.seq(arglist__154565);
return G__154563__delegate(args);
});
G__154563.cljs$core$IFn$_invoke$arity$variadic = G__154563__delegate;
return G__154563;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__154566__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__154566 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__154567__i = 0, G__154567__a = new Array(arguments.length -  0);
while (G__154567__i < G__154567__a.length) {G__154567__a[G__154567__i] = arguments[G__154567__i + 0]; ++G__154567__i;}
  args = new cljs.core.IndexedSeq(G__154567__a,0);
} 
return G__154566__delegate.call(this,args);};
G__154566.cljs$lang$maxFixedArity = 0;
G__154566.cljs$lang$applyTo = (function (arglist__154568){
var args = cljs.core.seq(arglist__154568);
return G__154566__delegate(args);
});
G__154566.cljs$core$IFn$_invoke$arity$variadic = G__154566__delegate;
return G__154566;
})()
;

return null;
});
