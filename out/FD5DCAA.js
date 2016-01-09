goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__148121__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__148121 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__148122__i = 0, G__148122__a = new Array(arguments.length -  0);
while (G__148122__i < G__148122__a.length) {G__148122__a[G__148122__i] = arguments[G__148122__i + 0]; ++G__148122__i;}
  args = new cljs.core.IndexedSeq(G__148122__a,0);
} 
return G__148121__delegate.call(this,args);};
G__148121.cljs$lang$maxFixedArity = 0;
G__148121.cljs$lang$applyTo = (function (arglist__148123){
var args = cljs.core.seq(arglist__148123);
return G__148121__delegate(args);
});
G__148121.cljs$core$IFn$_invoke$arity$variadic = G__148121__delegate;
return G__148121;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__148124__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__148124 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__148125__i = 0, G__148125__a = new Array(arguments.length -  0);
while (G__148125__i < G__148125__a.length) {G__148125__a[G__148125__i] = arguments[G__148125__i + 0]; ++G__148125__i;}
  args = new cljs.core.IndexedSeq(G__148125__a,0);
} 
return G__148124__delegate.call(this,args);};
G__148124.cljs$lang$maxFixedArity = 0;
G__148124.cljs$lang$applyTo = (function (arglist__148126){
var args = cljs.core.seq(arglist__148126);
return G__148124__delegate(args);
});
G__148124.cljs$core$IFn$_invoke$arity$variadic = G__148124__delegate;
return G__148124;
})()
;

return null;
});
