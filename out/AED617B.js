goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__154814__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__154814 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__154815__i = 0, G__154815__a = new Array(arguments.length -  0);
while (G__154815__i < G__154815__a.length) {G__154815__a[G__154815__i] = arguments[G__154815__i + 0]; ++G__154815__i;}
  args = new cljs.core.IndexedSeq(G__154815__a,0);
} 
return G__154814__delegate.call(this,args);};
G__154814.cljs$lang$maxFixedArity = 0;
G__154814.cljs$lang$applyTo = (function (arglist__154816){
var args = cljs.core.seq(arglist__154816);
return G__154814__delegate(args);
});
G__154814.cljs$core$IFn$_invoke$arity$variadic = G__154814__delegate;
return G__154814;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__154817__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__154817 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__154818__i = 0, G__154818__a = new Array(arguments.length -  0);
while (G__154818__i < G__154818__a.length) {G__154818__a[G__154818__i] = arguments[G__154818__i + 0]; ++G__154818__i;}
  args = new cljs.core.IndexedSeq(G__154818__a,0);
} 
return G__154817__delegate.call(this,args);};
G__154817.cljs$lang$maxFixedArity = 0;
G__154817.cljs$lang$applyTo = (function (arglist__154819){
var args = cljs.core.seq(arglist__154819);
return G__154817__delegate(args);
});
G__154817.cljs$core$IFn$_invoke$arity$variadic = G__154817__delegate;
return G__154817;
})()
;

return null;
});
