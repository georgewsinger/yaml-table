goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__170818__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__170818 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__170819__i = 0, G__170819__a = new Array(arguments.length -  0);
while (G__170819__i < G__170819__a.length) {G__170819__a[G__170819__i] = arguments[G__170819__i + 0]; ++G__170819__i;}
  args = new cljs.core.IndexedSeq(G__170819__a,0);
} 
return G__170818__delegate.call(this,args);};
G__170818.cljs$lang$maxFixedArity = 0;
G__170818.cljs$lang$applyTo = (function (arglist__170820){
var args = cljs.core.seq(arglist__170820);
return G__170818__delegate(args);
});
G__170818.cljs$core$IFn$_invoke$arity$variadic = G__170818__delegate;
return G__170818;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__170821__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__170821 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__170822__i = 0, G__170822__a = new Array(arguments.length -  0);
while (G__170822__i < G__170822__a.length) {G__170822__a[G__170822__i] = arguments[G__170822__i + 0]; ++G__170822__i;}
  args = new cljs.core.IndexedSeq(G__170822__a,0);
} 
return G__170821__delegate.call(this,args);};
G__170821.cljs$lang$maxFixedArity = 0;
G__170821.cljs$lang$applyTo = (function (arglist__170823){
var args = cljs.core.seq(arglist__170823);
return G__170821__delegate(args);
});
G__170821.cljs$core$IFn$_invoke$arity$variadic = G__170821__delegate;
return G__170821;
})()
;

return null;
});
