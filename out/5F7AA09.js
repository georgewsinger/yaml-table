goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__55208__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__55208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55209__i = 0, G__55209__a = new Array(arguments.length -  0);
while (G__55209__i < G__55209__a.length) {G__55209__a[G__55209__i] = arguments[G__55209__i + 0]; ++G__55209__i;}
  args = new cljs.core.IndexedSeq(G__55209__a,0);
} 
return G__55208__delegate.call(this,args);};
G__55208.cljs$lang$maxFixedArity = 0;
G__55208.cljs$lang$applyTo = (function (arglist__55210){
var args = cljs.core.seq(arglist__55210);
return G__55208__delegate(args);
});
G__55208.cljs$core$IFn$_invoke$arity$variadic = G__55208__delegate;
return G__55208;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__55211__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__55211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55212__i = 0, G__55212__a = new Array(arguments.length -  0);
while (G__55212__i < G__55212__a.length) {G__55212__a[G__55212__i] = arguments[G__55212__i + 0]; ++G__55212__i;}
  args = new cljs.core.IndexedSeq(G__55212__a,0);
} 
return G__55211__delegate.call(this,args);};
G__55211.cljs$lang$maxFixedArity = 0;
G__55211.cljs$lang$applyTo = (function (arglist__55213){
var args = cljs.core.seq(arglist__55213);
return G__55211__delegate(args);
});
G__55211.cljs$core$IFn$_invoke$arity$variadic = G__55211__delegate;
return G__55211;
})()
;

return null;
});
