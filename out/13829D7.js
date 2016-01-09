goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__156102__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__156102 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__156103__i = 0, G__156103__a = new Array(arguments.length -  0);
while (G__156103__i < G__156103__a.length) {G__156103__a[G__156103__i] = arguments[G__156103__i + 0]; ++G__156103__i;}
  args = new cljs.core.IndexedSeq(G__156103__a,0);
} 
return G__156102__delegate.call(this,args);};
G__156102.cljs$lang$maxFixedArity = 0;
G__156102.cljs$lang$applyTo = (function (arglist__156104){
var args = cljs.core.seq(arglist__156104);
return G__156102__delegate(args);
});
G__156102.cljs$core$IFn$_invoke$arity$variadic = G__156102__delegate;
return G__156102;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__156105__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__156105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__156106__i = 0, G__156106__a = new Array(arguments.length -  0);
while (G__156106__i < G__156106__a.length) {G__156106__a[G__156106__i] = arguments[G__156106__i + 0]; ++G__156106__i;}
  args = new cljs.core.IndexedSeq(G__156106__a,0);
} 
return G__156105__delegate.call(this,args);};
G__156105.cljs$lang$maxFixedArity = 0;
G__156105.cljs$lang$applyTo = (function (arglist__156107){
var args = cljs.core.seq(arglist__156107);
return G__156105__delegate(args);
});
G__156105.cljs$core$IFn$_invoke$arity$variadic = G__156105__delegate;
return G__156105;
})()
;

return null;
});
