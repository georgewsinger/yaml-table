goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__158816__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__158816 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__158817__i = 0, G__158817__a = new Array(arguments.length -  0);
while (G__158817__i < G__158817__a.length) {G__158817__a[G__158817__i] = arguments[G__158817__i + 0]; ++G__158817__i;}
  args = new cljs.core.IndexedSeq(G__158817__a,0);
} 
return G__158816__delegate.call(this,args);};
G__158816.cljs$lang$maxFixedArity = 0;
G__158816.cljs$lang$applyTo = (function (arglist__158818){
var args = cljs.core.seq(arglist__158818);
return G__158816__delegate(args);
});
G__158816.cljs$core$IFn$_invoke$arity$variadic = G__158816__delegate;
return G__158816;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__158819__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__158819 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__158820__i = 0, G__158820__a = new Array(arguments.length -  0);
while (G__158820__i < G__158820__a.length) {G__158820__a[G__158820__i] = arguments[G__158820__i + 0]; ++G__158820__i;}
  args = new cljs.core.IndexedSeq(G__158820__a,0);
} 
return G__158819__delegate.call(this,args);};
G__158819.cljs$lang$maxFixedArity = 0;
G__158819.cljs$lang$applyTo = (function (arglist__158821){
var args = cljs.core.seq(arglist__158821);
return G__158819__delegate(args);
});
G__158819.cljs$core$IFn$_invoke$arity$variadic = G__158819__delegate;
return G__158819;
})()
;

return null;
});
