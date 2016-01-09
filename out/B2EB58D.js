goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63438__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63438 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63439__i = 0, G__63439__a = new Array(arguments.length -  0);
while (G__63439__i < G__63439__a.length) {G__63439__a[G__63439__i] = arguments[G__63439__i + 0]; ++G__63439__i;}
  args = new cljs.core.IndexedSeq(G__63439__a,0);
} 
return G__63438__delegate.call(this,args);};
G__63438.cljs$lang$maxFixedArity = 0;
G__63438.cljs$lang$applyTo = (function (arglist__63440){
var args = cljs.core.seq(arglist__63440);
return G__63438__delegate(args);
});
G__63438.cljs$core$IFn$_invoke$arity$variadic = G__63438__delegate;
return G__63438;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63441__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63441 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63442__i = 0, G__63442__a = new Array(arguments.length -  0);
while (G__63442__i < G__63442__a.length) {G__63442__a[G__63442__i] = arguments[G__63442__i + 0]; ++G__63442__i;}
  args = new cljs.core.IndexedSeq(G__63442__a,0);
} 
return G__63441__delegate.call(this,args);};
G__63441.cljs$lang$maxFixedArity = 0;
G__63441.cljs$lang$applyTo = (function (arglist__63443){
var args = cljs.core.seq(arglist__63443);
return G__63441__delegate(args);
});
G__63441.cljs$core$IFn$_invoke$arity$variadic = G__63441__delegate;
return G__63441;
})()
;

return null;
});
