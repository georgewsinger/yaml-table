goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19005__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19005 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19006__i = 0, G__19006__a = new Array(arguments.length -  0);
while (G__19006__i < G__19006__a.length) {G__19006__a[G__19006__i] = arguments[G__19006__i + 0]; ++G__19006__i;}
  args = new cljs.core.IndexedSeq(G__19006__a,0);
} 
return G__19005__delegate.call(this,args);};
G__19005.cljs$lang$maxFixedArity = 0;
G__19005.cljs$lang$applyTo = (function (arglist__19007){
var args = cljs.core.seq(arglist__19007);
return G__19005__delegate(args);
});
G__19005.cljs$core$IFn$_invoke$arity$variadic = G__19005__delegate;
return G__19005;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19008__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19008 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19009__i = 0, G__19009__a = new Array(arguments.length -  0);
while (G__19009__i < G__19009__a.length) {G__19009__a[G__19009__i] = arguments[G__19009__i + 0]; ++G__19009__i;}
  args = new cljs.core.IndexedSeq(G__19009__a,0);
} 
return G__19008__delegate.call(this,args);};
G__19008.cljs$lang$maxFixedArity = 0;
G__19008.cljs$lang$applyTo = (function (arglist__19010){
var args = cljs.core.seq(arglist__19010);
return G__19008__delegate(args);
});
G__19008.cljs$core$IFn$_invoke$arity$variadic = G__19008__delegate;
return G__19008;
})()
;

return null;
});
