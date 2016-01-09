goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__185329__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__185329 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__185330__i = 0, G__185330__a = new Array(arguments.length -  0);
while (G__185330__i < G__185330__a.length) {G__185330__a[G__185330__i] = arguments[G__185330__i + 0]; ++G__185330__i;}
  args = new cljs.core.IndexedSeq(G__185330__a,0);
} 
return G__185329__delegate.call(this,args);};
G__185329.cljs$lang$maxFixedArity = 0;
G__185329.cljs$lang$applyTo = (function (arglist__185331){
var args = cljs.core.seq(arglist__185331);
return G__185329__delegate(args);
});
G__185329.cljs$core$IFn$_invoke$arity$variadic = G__185329__delegate;
return G__185329;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__185332__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__185332 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__185333__i = 0, G__185333__a = new Array(arguments.length -  0);
while (G__185333__i < G__185333__a.length) {G__185333__a[G__185333__i] = arguments[G__185333__i + 0]; ++G__185333__i;}
  args = new cljs.core.IndexedSeq(G__185333__a,0);
} 
return G__185332__delegate.call(this,args);};
G__185332.cljs$lang$maxFixedArity = 0;
G__185332.cljs$lang$applyTo = (function (arglist__185334){
var args = cljs.core.seq(arglist__185334);
return G__185332__delegate(args);
});
G__185332.cljs$core$IFn$_invoke$arity$variadic = G__185332__delegate;
return G__185332;
})()
;

return null;
});
