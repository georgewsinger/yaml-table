goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__144500__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__144500 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__144501__i = 0, G__144501__a = new Array(arguments.length -  0);
while (G__144501__i < G__144501__a.length) {G__144501__a[G__144501__i] = arguments[G__144501__i + 0]; ++G__144501__i;}
  args = new cljs.core.IndexedSeq(G__144501__a,0);
} 
return G__144500__delegate.call(this,args);};
G__144500.cljs$lang$maxFixedArity = 0;
G__144500.cljs$lang$applyTo = (function (arglist__144502){
var args = cljs.core.seq(arglist__144502);
return G__144500__delegate(args);
});
G__144500.cljs$core$IFn$_invoke$arity$variadic = G__144500__delegate;
return G__144500;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__144503__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__144503 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__144504__i = 0, G__144504__a = new Array(arguments.length -  0);
while (G__144504__i < G__144504__a.length) {G__144504__a[G__144504__i] = arguments[G__144504__i + 0]; ++G__144504__i;}
  args = new cljs.core.IndexedSeq(G__144504__a,0);
} 
return G__144503__delegate.call(this,args);};
G__144503.cljs$lang$maxFixedArity = 0;
G__144503.cljs$lang$applyTo = (function (arglist__144505){
var args = cljs.core.seq(arglist__144505);
return G__144503__delegate(args);
});
G__144503.cljs$core$IFn$_invoke$arity$variadic = G__144503__delegate;
return G__144503;
})()
;

return null;
});
