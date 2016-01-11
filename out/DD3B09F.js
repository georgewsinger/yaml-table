goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__237292__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__237292 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__237293__i = 0, G__237293__a = new Array(arguments.length -  0);
while (G__237293__i < G__237293__a.length) {G__237293__a[G__237293__i] = arguments[G__237293__i + 0]; ++G__237293__i;}
  args = new cljs.core.IndexedSeq(G__237293__a,0);
} 
return G__237292__delegate.call(this,args);};
G__237292.cljs$lang$maxFixedArity = 0;
G__237292.cljs$lang$applyTo = (function (arglist__237294){
var args = cljs.core.seq(arglist__237294);
return G__237292__delegate(args);
});
G__237292.cljs$core$IFn$_invoke$arity$variadic = G__237292__delegate;
return G__237292;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__237295__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__237295 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__237296__i = 0, G__237296__a = new Array(arguments.length -  0);
while (G__237296__i < G__237296__a.length) {G__237296__a[G__237296__i] = arguments[G__237296__i + 0]; ++G__237296__i;}
  args = new cljs.core.IndexedSeq(G__237296__a,0);
} 
return G__237295__delegate.call(this,args);};
G__237295.cljs$lang$maxFixedArity = 0;
G__237295.cljs$lang$applyTo = (function (arglist__237297){
var args = cljs.core.seq(arglist__237297);
return G__237295__delegate(args);
});
G__237295.cljs$core$IFn$_invoke$arity$variadic = G__237295__delegate;
return G__237295;
})()
;

return null;
});
