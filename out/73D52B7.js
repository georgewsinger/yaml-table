goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__285347__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__285347 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__285348__i = 0, G__285348__a = new Array(arguments.length -  0);
while (G__285348__i < G__285348__a.length) {G__285348__a[G__285348__i] = arguments[G__285348__i + 0]; ++G__285348__i;}
  args = new cljs.core.IndexedSeq(G__285348__a,0);
} 
return G__285347__delegate.call(this,args);};
G__285347.cljs$lang$maxFixedArity = 0;
G__285347.cljs$lang$applyTo = (function (arglist__285349){
var args = cljs.core.seq(arglist__285349);
return G__285347__delegate(args);
});
G__285347.cljs$core$IFn$_invoke$arity$variadic = G__285347__delegate;
return G__285347;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__285350__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__285350 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__285351__i = 0, G__285351__a = new Array(arguments.length -  0);
while (G__285351__i < G__285351__a.length) {G__285351__a[G__285351__i] = arguments[G__285351__i + 0]; ++G__285351__i;}
  args = new cljs.core.IndexedSeq(G__285351__a,0);
} 
return G__285350__delegate.call(this,args);};
G__285350.cljs$lang$maxFixedArity = 0;
G__285350.cljs$lang$applyTo = (function (arglist__285352){
var args = cljs.core.seq(arglist__285352);
return G__285350__delegate(args);
});
G__285350.cljs$core$IFn$_invoke$arity$variadic = G__285350__delegate;
return G__285350;
})()
;

return null;
});
