goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33037__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33037 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33038__i = 0, G__33038__a = new Array(arguments.length -  0);
while (G__33038__i < G__33038__a.length) {G__33038__a[G__33038__i] = arguments[G__33038__i + 0]; ++G__33038__i;}
  args = new cljs.core.IndexedSeq(G__33038__a,0);
} 
return G__33037__delegate.call(this,args);};
G__33037.cljs$lang$maxFixedArity = 0;
G__33037.cljs$lang$applyTo = (function (arglist__33039){
var args = cljs.core.seq(arglist__33039);
return G__33037__delegate(args);
});
G__33037.cljs$core$IFn$_invoke$arity$variadic = G__33037__delegate;
return G__33037;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33040__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33040 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33041__i = 0, G__33041__a = new Array(arguments.length -  0);
while (G__33041__i < G__33041__a.length) {G__33041__a[G__33041__i] = arguments[G__33041__i + 0]; ++G__33041__i;}
  args = new cljs.core.IndexedSeq(G__33041__a,0);
} 
return G__33040__delegate.call(this,args);};
G__33040.cljs$lang$maxFixedArity = 0;
G__33040.cljs$lang$applyTo = (function (arglist__33042){
var args = cljs.core.seq(arglist__33042);
return G__33040__delegate(args);
});
G__33040.cljs$core$IFn$_invoke$arity$variadic = G__33040__delegate;
return G__33040;
})()
;

return null;
});
