goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__293802__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__293802 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__293803__i = 0, G__293803__a = new Array(arguments.length -  0);
while (G__293803__i < G__293803__a.length) {G__293803__a[G__293803__i] = arguments[G__293803__i + 0]; ++G__293803__i;}
  args = new cljs.core.IndexedSeq(G__293803__a,0);
} 
return G__293802__delegate.call(this,args);};
G__293802.cljs$lang$maxFixedArity = 0;
G__293802.cljs$lang$applyTo = (function (arglist__293804){
var args = cljs.core.seq(arglist__293804);
return G__293802__delegate(args);
});
G__293802.cljs$core$IFn$_invoke$arity$variadic = G__293802__delegate;
return G__293802;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__293805__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__293805 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__293806__i = 0, G__293806__a = new Array(arguments.length -  0);
while (G__293806__i < G__293806__a.length) {G__293806__a[G__293806__i] = arguments[G__293806__i + 0]; ++G__293806__i;}
  args = new cljs.core.IndexedSeq(G__293806__a,0);
} 
return G__293805__delegate.call(this,args);};
G__293805.cljs$lang$maxFixedArity = 0;
G__293805.cljs$lang$applyTo = (function (arglist__293807){
var args = cljs.core.seq(arglist__293807);
return G__293805__delegate(args);
});
G__293805.cljs$core$IFn$_invoke$arity$variadic = G__293805__delegate;
return G__293805;
})()
;

return null;
});
