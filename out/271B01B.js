goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__47476__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__47476 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47477__i = 0, G__47477__a = new Array(arguments.length -  0);
while (G__47477__i < G__47477__a.length) {G__47477__a[G__47477__i] = arguments[G__47477__i + 0]; ++G__47477__i;}
  args = new cljs.core.IndexedSeq(G__47477__a,0);
} 
return G__47476__delegate.call(this,args);};
G__47476.cljs$lang$maxFixedArity = 0;
G__47476.cljs$lang$applyTo = (function (arglist__47478){
var args = cljs.core.seq(arglist__47478);
return G__47476__delegate(args);
});
G__47476.cljs$core$IFn$_invoke$arity$variadic = G__47476__delegate;
return G__47476;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__47479__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__47479 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47480__i = 0, G__47480__a = new Array(arguments.length -  0);
while (G__47480__i < G__47480__a.length) {G__47480__a[G__47480__i] = arguments[G__47480__i + 0]; ++G__47480__i;}
  args = new cljs.core.IndexedSeq(G__47480__a,0);
} 
return G__47479__delegate.call(this,args);};
G__47479.cljs$lang$maxFixedArity = 0;
G__47479.cljs$lang$applyTo = (function (arglist__47481){
var args = cljs.core.seq(arglist__47481);
return G__47479__delegate(args);
});
G__47479.cljs$core$IFn$_invoke$arity$variadic = G__47479__delegate;
return G__47479;
})()
;

return null;
});
