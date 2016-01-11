goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__324474__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__324474 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__324475__i = 0, G__324475__a = new Array(arguments.length -  0);
while (G__324475__i < G__324475__a.length) {G__324475__a[G__324475__i] = arguments[G__324475__i + 0]; ++G__324475__i;}
  args = new cljs.core.IndexedSeq(G__324475__a,0);
} 
return G__324474__delegate.call(this,args);};
G__324474.cljs$lang$maxFixedArity = 0;
G__324474.cljs$lang$applyTo = (function (arglist__324476){
var args = cljs.core.seq(arglist__324476);
return G__324474__delegate(args);
});
G__324474.cljs$core$IFn$_invoke$arity$variadic = G__324474__delegate;
return G__324474;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__324477__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__324477 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__324478__i = 0, G__324478__a = new Array(arguments.length -  0);
while (G__324478__i < G__324478__a.length) {G__324478__a[G__324478__i] = arguments[G__324478__i + 0]; ++G__324478__i;}
  args = new cljs.core.IndexedSeq(G__324478__a,0);
} 
return G__324477__delegate.call(this,args);};
G__324477.cljs$lang$maxFixedArity = 0;
G__324477.cljs$lang$applyTo = (function (arglist__324479){
var args = cljs.core.seq(arglist__324479);
return G__324477__delegate(args);
});
G__324477.cljs$core$IFn$_invoke$arity$variadic = G__324477__delegate;
return G__324477;
})()
;

return null;
});
