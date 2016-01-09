goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54234__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54234 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54235__i = 0, G__54235__a = new Array(arguments.length -  0);
while (G__54235__i < G__54235__a.length) {G__54235__a[G__54235__i] = arguments[G__54235__i + 0]; ++G__54235__i;}
  args = new cljs.core.IndexedSeq(G__54235__a,0);
} 
return G__54234__delegate.call(this,args);};
G__54234.cljs$lang$maxFixedArity = 0;
G__54234.cljs$lang$applyTo = (function (arglist__54236){
var args = cljs.core.seq(arglist__54236);
return G__54234__delegate(args);
});
G__54234.cljs$core$IFn$_invoke$arity$variadic = G__54234__delegate;
return G__54234;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54237__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54237 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54238__i = 0, G__54238__a = new Array(arguments.length -  0);
while (G__54238__i < G__54238__a.length) {G__54238__a[G__54238__i] = arguments[G__54238__i + 0]; ++G__54238__i;}
  args = new cljs.core.IndexedSeq(G__54238__a,0);
} 
return G__54237__delegate.call(this,args);};
G__54237.cljs$lang$maxFixedArity = 0;
G__54237.cljs$lang$applyTo = (function (arglist__54239){
var args = cljs.core.seq(arglist__54239);
return G__54237__delegate(args);
});
G__54237.cljs$core$IFn$_invoke$arity$variadic = G__54237__delegate;
return G__54237;
})()
;

return null;
});
