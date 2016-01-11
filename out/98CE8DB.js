goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__297060__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__297060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__297061__i = 0, G__297061__a = new Array(arguments.length -  0);
while (G__297061__i < G__297061__a.length) {G__297061__a[G__297061__i] = arguments[G__297061__i + 0]; ++G__297061__i;}
  args = new cljs.core.IndexedSeq(G__297061__a,0);
} 
return G__297060__delegate.call(this,args);};
G__297060.cljs$lang$maxFixedArity = 0;
G__297060.cljs$lang$applyTo = (function (arglist__297062){
var args = cljs.core.seq(arglist__297062);
return G__297060__delegate(args);
});
G__297060.cljs$core$IFn$_invoke$arity$variadic = G__297060__delegate;
return G__297060;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__297063__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__297063 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__297064__i = 0, G__297064__a = new Array(arguments.length -  0);
while (G__297064__i < G__297064__a.length) {G__297064__a[G__297064__i] = arguments[G__297064__i + 0]; ++G__297064__i;}
  args = new cljs.core.IndexedSeq(G__297064__a,0);
} 
return G__297063__delegate.call(this,args);};
G__297063.cljs$lang$maxFixedArity = 0;
G__297063.cljs$lang$applyTo = (function (arglist__297065){
var args = cljs.core.seq(arglist__297065);
return G__297063__delegate(args);
});
G__297063.cljs$core$IFn$_invoke$arity$variadic = G__297063__delegate;
return G__297063;
})()
;

return null;
});
