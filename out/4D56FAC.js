goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__154210__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__154210 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__154211__i = 0, G__154211__a = new Array(arguments.length -  0);
while (G__154211__i < G__154211__a.length) {G__154211__a[G__154211__i] = arguments[G__154211__i + 0]; ++G__154211__i;}
  args = new cljs.core.IndexedSeq(G__154211__a,0);
} 
return G__154210__delegate.call(this,args);};
G__154210.cljs$lang$maxFixedArity = 0;
G__154210.cljs$lang$applyTo = (function (arglist__154212){
var args = cljs.core.seq(arglist__154212);
return G__154210__delegate(args);
});
G__154210.cljs$core$IFn$_invoke$arity$variadic = G__154210__delegate;
return G__154210;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__154213__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__154213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__154214__i = 0, G__154214__a = new Array(arguments.length -  0);
while (G__154214__i < G__154214__a.length) {G__154214__a[G__154214__i] = arguments[G__154214__i + 0]; ++G__154214__i;}
  args = new cljs.core.IndexedSeq(G__154214__a,0);
} 
return G__154213__delegate.call(this,args);};
G__154213.cljs$lang$maxFixedArity = 0;
G__154213.cljs$lang$applyTo = (function (arglist__154215){
var args = cljs.core.seq(arglist__154215);
return G__154213__delegate(args);
});
G__154213.cljs$core$IFn$_invoke$arity$variadic = G__154213__delegate;
return G__154213;
})()
;

return null;
});
