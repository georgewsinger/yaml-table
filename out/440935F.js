goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__69599__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__69599 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69600__i = 0, G__69600__a = new Array(arguments.length -  0);
while (G__69600__i < G__69600__a.length) {G__69600__a[G__69600__i] = arguments[G__69600__i + 0]; ++G__69600__i;}
  args = new cljs.core.IndexedSeq(G__69600__a,0);
} 
return G__69599__delegate.call(this,args);};
G__69599.cljs$lang$maxFixedArity = 0;
G__69599.cljs$lang$applyTo = (function (arglist__69601){
var args = cljs.core.seq(arglist__69601);
return G__69599__delegate(args);
});
G__69599.cljs$core$IFn$_invoke$arity$variadic = G__69599__delegate;
return G__69599;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__69602__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__69602 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69603__i = 0, G__69603__a = new Array(arguments.length -  0);
while (G__69603__i < G__69603__a.length) {G__69603__a[G__69603__i] = arguments[G__69603__i + 0]; ++G__69603__i;}
  args = new cljs.core.IndexedSeq(G__69603__a,0);
} 
return G__69602__delegate.call(this,args);};
G__69602.cljs$lang$maxFixedArity = 0;
G__69602.cljs$lang$applyTo = (function (arglist__69604){
var args = cljs.core.seq(arglist__69604);
return G__69602__delegate(args);
});
G__69602.cljs$core$IFn$_invoke$arity$variadic = G__69602__delegate;
return G__69602;
})()
;

return null;
});
