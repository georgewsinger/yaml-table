goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__150215__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__150215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__150216__i = 0, G__150216__a = new Array(arguments.length -  0);
while (G__150216__i < G__150216__a.length) {G__150216__a[G__150216__i] = arguments[G__150216__i + 0]; ++G__150216__i;}
  args = new cljs.core.IndexedSeq(G__150216__a,0);
} 
return G__150215__delegate.call(this,args);};
G__150215.cljs$lang$maxFixedArity = 0;
G__150215.cljs$lang$applyTo = (function (arglist__150217){
var args = cljs.core.seq(arglist__150217);
return G__150215__delegate(args);
});
G__150215.cljs$core$IFn$_invoke$arity$variadic = G__150215__delegate;
return G__150215;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__150218__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__150218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__150219__i = 0, G__150219__a = new Array(arguments.length -  0);
while (G__150219__i < G__150219__a.length) {G__150219__a[G__150219__i] = arguments[G__150219__i + 0]; ++G__150219__i;}
  args = new cljs.core.IndexedSeq(G__150219__a,0);
} 
return G__150218__delegate.call(this,args);};
G__150218.cljs$lang$maxFixedArity = 0;
G__150218.cljs$lang$applyTo = (function (arglist__150220){
var args = cljs.core.seq(arglist__150220);
return G__150218__delegate(args);
});
G__150218.cljs$core$IFn$_invoke$arity$variadic = G__150218__delegate;
return G__150218;
})()
;

return null;
});
