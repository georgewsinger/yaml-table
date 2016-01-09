goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__117438__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__117438 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__117439__i = 0, G__117439__a = new Array(arguments.length -  0);
while (G__117439__i < G__117439__a.length) {G__117439__a[G__117439__i] = arguments[G__117439__i + 0]; ++G__117439__i;}
  args = new cljs.core.IndexedSeq(G__117439__a,0);
} 
return G__117438__delegate.call(this,args);};
G__117438.cljs$lang$maxFixedArity = 0;
G__117438.cljs$lang$applyTo = (function (arglist__117440){
var args = cljs.core.seq(arglist__117440);
return G__117438__delegate(args);
});
G__117438.cljs$core$IFn$_invoke$arity$variadic = G__117438__delegate;
return G__117438;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__117441__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__117441 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__117442__i = 0, G__117442__a = new Array(arguments.length -  0);
while (G__117442__i < G__117442__a.length) {G__117442__a[G__117442__i] = arguments[G__117442__i + 0]; ++G__117442__i;}
  args = new cljs.core.IndexedSeq(G__117442__a,0);
} 
return G__117441__delegate.call(this,args);};
G__117441.cljs$lang$maxFixedArity = 0;
G__117441.cljs$lang$applyTo = (function (arglist__117443){
var args = cljs.core.seq(arglist__117443);
return G__117441__delegate(args);
});
G__117441.cljs$core$IFn$_invoke$arity$variadic = G__117441__delegate;
return G__117441;
})()
;

return null;
});
