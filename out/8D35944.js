goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__247385__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__247385 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__247386__i = 0, G__247386__a = new Array(arguments.length -  0);
while (G__247386__i < G__247386__a.length) {G__247386__a[G__247386__i] = arguments[G__247386__i + 0]; ++G__247386__i;}
  args = new cljs.core.IndexedSeq(G__247386__a,0);
} 
return G__247385__delegate.call(this,args);};
G__247385.cljs$lang$maxFixedArity = 0;
G__247385.cljs$lang$applyTo = (function (arglist__247387){
var args = cljs.core.seq(arglist__247387);
return G__247385__delegate(args);
});
G__247385.cljs$core$IFn$_invoke$arity$variadic = G__247385__delegate;
return G__247385;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__247388__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__247388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__247389__i = 0, G__247389__a = new Array(arguments.length -  0);
while (G__247389__i < G__247389__a.length) {G__247389__a[G__247389__i] = arguments[G__247389__i + 0]; ++G__247389__i;}
  args = new cljs.core.IndexedSeq(G__247389__a,0);
} 
return G__247388__delegate.call(this,args);};
G__247388.cljs$lang$maxFixedArity = 0;
G__247388.cljs$lang$applyTo = (function (arglist__247390){
var args = cljs.core.seq(arglist__247390);
return G__247388__delegate(args);
});
G__247388.cljs$core$IFn$_invoke$arity$variadic = G__247388__delegate;
return G__247388;
})()
;

return null;
});
