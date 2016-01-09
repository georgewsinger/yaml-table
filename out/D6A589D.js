goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44060__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44061__i = 0, G__44061__a = new Array(arguments.length -  0);
while (G__44061__i < G__44061__a.length) {G__44061__a[G__44061__i] = arguments[G__44061__i + 0]; ++G__44061__i;}
  args = new cljs.core.IndexedSeq(G__44061__a,0);
} 
return G__44060__delegate.call(this,args);};
G__44060.cljs$lang$maxFixedArity = 0;
G__44060.cljs$lang$applyTo = (function (arglist__44062){
var args = cljs.core.seq(arglist__44062);
return G__44060__delegate(args);
});
G__44060.cljs$core$IFn$_invoke$arity$variadic = G__44060__delegate;
return G__44060;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44063__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44063 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44064__i = 0, G__44064__a = new Array(arguments.length -  0);
while (G__44064__i < G__44064__a.length) {G__44064__a[G__44064__i] = arguments[G__44064__i + 0]; ++G__44064__i;}
  args = new cljs.core.IndexedSeq(G__44064__a,0);
} 
return G__44063__delegate.call(this,args);};
G__44063.cljs$lang$maxFixedArity = 0;
G__44063.cljs$lang$applyTo = (function (arglist__44065){
var args = cljs.core.seq(arglist__44065);
return G__44063__delegate(args);
});
G__44063.cljs$core$IFn$_invoke$arity$variadic = G__44063__delegate;
return G__44063;
})()
;

return null;
});
