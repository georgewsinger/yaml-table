goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63020__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63020 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63021__i = 0, G__63021__a = new Array(arguments.length -  0);
while (G__63021__i < G__63021__a.length) {G__63021__a[G__63021__i] = arguments[G__63021__i + 0]; ++G__63021__i;}
  args = new cljs.core.IndexedSeq(G__63021__a,0);
} 
return G__63020__delegate.call(this,args);};
G__63020.cljs$lang$maxFixedArity = 0;
G__63020.cljs$lang$applyTo = (function (arglist__63022){
var args = cljs.core.seq(arglist__63022);
return G__63020__delegate(args);
});
G__63020.cljs$core$IFn$_invoke$arity$variadic = G__63020__delegate;
return G__63020;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63023__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63023 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63024__i = 0, G__63024__a = new Array(arguments.length -  0);
while (G__63024__i < G__63024__a.length) {G__63024__a[G__63024__i] = arguments[G__63024__i + 0]; ++G__63024__i;}
  args = new cljs.core.IndexedSeq(G__63024__a,0);
} 
return G__63023__delegate.call(this,args);};
G__63023.cljs$lang$maxFixedArity = 0;
G__63023.cljs$lang$applyTo = (function (arglist__63025){
var args = cljs.core.seq(arglist__63025);
return G__63023__delegate(args);
});
G__63023.cljs$core$IFn$_invoke$arity$variadic = G__63023__delegate;
return G__63023;
})()
;

return null;
});
