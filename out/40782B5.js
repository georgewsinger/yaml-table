goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__48298__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__48298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48299__i = 0, G__48299__a = new Array(arguments.length -  0);
while (G__48299__i < G__48299__a.length) {G__48299__a[G__48299__i] = arguments[G__48299__i + 0]; ++G__48299__i;}
  args = new cljs.core.IndexedSeq(G__48299__a,0);
} 
return G__48298__delegate.call(this,args);};
G__48298.cljs$lang$maxFixedArity = 0;
G__48298.cljs$lang$applyTo = (function (arglist__48300){
var args = cljs.core.seq(arglist__48300);
return G__48298__delegate(args);
});
G__48298.cljs$core$IFn$_invoke$arity$variadic = G__48298__delegate;
return G__48298;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__48301__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__48301 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48302__i = 0, G__48302__a = new Array(arguments.length -  0);
while (G__48302__i < G__48302__a.length) {G__48302__a[G__48302__i] = arguments[G__48302__i + 0]; ++G__48302__i;}
  args = new cljs.core.IndexedSeq(G__48302__a,0);
} 
return G__48301__delegate.call(this,args);};
G__48301.cljs$lang$maxFixedArity = 0;
G__48301.cljs$lang$applyTo = (function (arglist__48303){
var args = cljs.core.seq(arglist__48303);
return G__48301__delegate(args);
});
G__48301.cljs$core$IFn$_invoke$arity$variadic = G__48301__delegate;
return G__48301;
})()
;

return null;
});
