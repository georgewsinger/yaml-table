goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__110560__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__110560 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__110561__i = 0, G__110561__a = new Array(arguments.length -  0);
while (G__110561__i < G__110561__a.length) {G__110561__a[G__110561__i] = arguments[G__110561__i + 0]; ++G__110561__i;}
  args = new cljs.core.IndexedSeq(G__110561__a,0);
} 
return G__110560__delegate.call(this,args);};
G__110560.cljs$lang$maxFixedArity = 0;
G__110560.cljs$lang$applyTo = (function (arglist__110562){
var args = cljs.core.seq(arglist__110562);
return G__110560__delegate(args);
});
G__110560.cljs$core$IFn$_invoke$arity$variadic = G__110560__delegate;
return G__110560;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__110563__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__110563 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__110564__i = 0, G__110564__a = new Array(arguments.length -  0);
while (G__110564__i < G__110564__a.length) {G__110564__a[G__110564__i] = arguments[G__110564__i + 0]; ++G__110564__i;}
  args = new cljs.core.IndexedSeq(G__110564__a,0);
} 
return G__110563__delegate.call(this,args);};
G__110563.cljs$lang$maxFixedArity = 0;
G__110563.cljs$lang$applyTo = (function (arglist__110565){
var args = cljs.core.seq(arglist__110565);
return G__110563__delegate(args);
});
G__110563.cljs$core$IFn$_invoke$arity$variadic = G__110563__delegate;
return G__110563;
})()
;

return null;
});
