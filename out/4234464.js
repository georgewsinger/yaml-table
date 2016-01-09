goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__51354__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__51354 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51355__i = 0, G__51355__a = new Array(arguments.length -  0);
while (G__51355__i < G__51355__a.length) {G__51355__a[G__51355__i] = arguments[G__51355__i + 0]; ++G__51355__i;}
  args = new cljs.core.IndexedSeq(G__51355__a,0);
} 
return G__51354__delegate.call(this,args);};
G__51354.cljs$lang$maxFixedArity = 0;
G__51354.cljs$lang$applyTo = (function (arglist__51356){
var args = cljs.core.seq(arglist__51356);
return G__51354__delegate(args);
});
G__51354.cljs$core$IFn$_invoke$arity$variadic = G__51354__delegate;
return G__51354;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__51357__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__51357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51358__i = 0, G__51358__a = new Array(arguments.length -  0);
while (G__51358__i < G__51358__a.length) {G__51358__a[G__51358__i] = arguments[G__51358__i + 0]; ++G__51358__i;}
  args = new cljs.core.IndexedSeq(G__51358__a,0);
} 
return G__51357__delegate.call(this,args);};
G__51357.cljs$lang$maxFixedArity = 0;
G__51357.cljs$lang$applyTo = (function (arglist__51359){
var args = cljs.core.seq(arglist__51359);
return G__51357__delegate(args);
});
G__51357.cljs$core$IFn$_invoke$arity$variadic = G__51357__delegate;
return G__51357;
})()
;

return null;
});
