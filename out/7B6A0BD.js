goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__363971__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__363971 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__363972__i = 0, G__363972__a = new Array(arguments.length -  0);
while (G__363972__i < G__363972__a.length) {G__363972__a[G__363972__i] = arguments[G__363972__i + 0]; ++G__363972__i;}
  args = new cljs.core.IndexedSeq(G__363972__a,0);
} 
return G__363971__delegate.call(this,args);};
G__363971.cljs$lang$maxFixedArity = 0;
G__363971.cljs$lang$applyTo = (function (arglist__363973){
var args = cljs.core.seq(arglist__363973);
return G__363971__delegate(args);
});
G__363971.cljs$core$IFn$_invoke$arity$variadic = G__363971__delegate;
return G__363971;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__363974__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__363974 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__363975__i = 0, G__363975__a = new Array(arguments.length -  0);
while (G__363975__i < G__363975__a.length) {G__363975__a[G__363975__i] = arguments[G__363975__i + 0]; ++G__363975__i;}
  args = new cljs.core.IndexedSeq(G__363975__a,0);
} 
return G__363974__delegate.call(this,args);};
G__363974.cljs$lang$maxFixedArity = 0;
G__363974.cljs$lang$applyTo = (function (arglist__363976){
var args = cljs.core.seq(arglist__363976);
return G__363974__delegate(args);
});
G__363974.cljs$core$IFn$_invoke$arity$variadic = G__363974__delegate;
return G__363974;
})()
;

return null;
});
