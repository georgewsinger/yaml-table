goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__55973__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__55973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55974__i = 0, G__55974__a = new Array(arguments.length -  0);
while (G__55974__i < G__55974__a.length) {G__55974__a[G__55974__i] = arguments[G__55974__i + 0]; ++G__55974__i;}
  args = new cljs.core.IndexedSeq(G__55974__a,0);
} 
return G__55973__delegate.call(this,args);};
G__55973.cljs$lang$maxFixedArity = 0;
G__55973.cljs$lang$applyTo = (function (arglist__55975){
var args = cljs.core.seq(arglist__55975);
return G__55973__delegate(args);
});
G__55973.cljs$core$IFn$_invoke$arity$variadic = G__55973__delegate;
return G__55973;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__55976__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__55976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55977__i = 0, G__55977__a = new Array(arguments.length -  0);
while (G__55977__i < G__55977__a.length) {G__55977__a[G__55977__i] = arguments[G__55977__i + 0]; ++G__55977__i;}
  args = new cljs.core.IndexedSeq(G__55977__a,0);
} 
return G__55976__delegate.call(this,args);};
G__55976.cljs$lang$maxFixedArity = 0;
G__55976.cljs$lang$applyTo = (function (arglist__55978){
var args = cljs.core.seq(arglist__55978);
return G__55976__delegate(args);
});
G__55976.cljs$core$IFn$_invoke$arity$variadic = G__55976__delegate;
return G__55976;
})()
;

return null;
});
