goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__327419__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__327419 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__327420__i = 0, G__327420__a = new Array(arguments.length -  0);
while (G__327420__i < G__327420__a.length) {G__327420__a[G__327420__i] = arguments[G__327420__i + 0]; ++G__327420__i;}
  args = new cljs.core.IndexedSeq(G__327420__a,0);
} 
return G__327419__delegate.call(this,args);};
G__327419.cljs$lang$maxFixedArity = 0;
G__327419.cljs$lang$applyTo = (function (arglist__327421){
var args = cljs.core.seq(arglist__327421);
return G__327419__delegate(args);
});
G__327419.cljs$core$IFn$_invoke$arity$variadic = G__327419__delegate;
return G__327419;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__327422__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__327422 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__327423__i = 0, G__327423__a = new Array(arguments.length -  0);
while (G__327423__i < G__327423__a.length) {G__327423__a[G__327423__i] = arguments[G__327423__i + 0]; ++G__327423__i;}
  args = new cljs.core.IndexedSeq(G__327423__a,0);
} 
return G__327422__delegate.call(this,args);};
G__327422.cljs$lang$maxFixedArity = 0;
G__327422.cljs$lang$applyTo = (function (arglist__327424){
var args = cljs.core.seq(arglist__327424);
return G__327422__delegate(args);
});
G__327422.cljs$core$IFn$_invoke$arity$variadic = G__327422__delegate;
return G__327422;
})()
;

return null;
});
