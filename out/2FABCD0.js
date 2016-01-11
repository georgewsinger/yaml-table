goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__206913__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__206913 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__206914__i = 0, G__206914__a = new Array(arguments.length -  0);
while (G__206914__i < G__206914__a.length) {G__206914__a[G__206914__i] = arguments[G__206914__i + 0]; ++G__206914__i;}
  args = new cljs.core.IndexedSeq(G__206914__a,0);
} 
return G__206913__delegate.call(this,args);};
G__206913.cljs$lang$maxFixedArity = 0;
G__206913.cljs$lang$applyTo = (function (arglist__206915){
var args = cljs.core.seq(arglist__206915);
return G__206913__delegate(args);
});
G__206913.cljs$core$IFn$_invoke$arity$variadic = G__206913__delegate;
return G__206913;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__206916__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__206916 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__206917__i = 0, G__206917__a = new Array(arguments.length -  0);
while (G__206917__i < G__206917__a.length) {G__206917__a[G__206917__i] = arguments[G__206917__i + 0]; ++G__206917__i;}
  args = new cljs.core.IndexedSeq(G__206917__a,0);
} 
return G__206916__delegate.call(this,args);};
G__206916.cljs$lang$maxFixedArity = 0;
G__206916.cljs$lang$applyTo = (function (arglist__206918){
var args = cljs.core.seq(arglist__206918);
return G__206916__delegate(args);
});
G__206916.cljs$core$IFn$_invoke$arity$variadic = G__206916__delegate;
return G__206916;
})()
;

return null;
});
