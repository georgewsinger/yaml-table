goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__203299__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__203299 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__203300__i = 0, G__203300__a = new Array(arguments.length -  0);
while (G__203300__i < G__203300__a.length) {G__203300__a[G__203300__i] = arguments[G__203300__i + 0]; ++G__203300__i;}
  args = new cljs.core.IndexedSeq(G__203300__a,0);
} 
return G__203299__delegate.call(this,args);};
G__203299.cljs$lang$maxFixedArity = 0;
G__203299.cljs$lang$applyTo = (function (arglist__203301){
var args = cljs.core.seq(arglist__203301);
return G__203299__delegate(args);
});
G__203299.cljs$core$IFn$_invoke$arity$variadic = G__203299__delegate;
return G__203299;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__203302__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__203302 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__203303__i = 0, G__203303__a = new Array(arguments.length -  0);
while (G__203303__i < G__203303__a.length) {G__203303__a[G__203303__i] = arguments[G__203303__i + 0]; ++G__203303__i;}
  args = new cljs.core.IndexedSeq(G__203303__a,0);
} 
return G__203302__delegate.call(this,args);};
G__203302.cljs$lang$maxFixedArity = 0;
G__203302.cljs$lang$applyTo = (function (arglist__203304){
var args = cljs.core.seq(arglist__203304);
return G__203302__delegate(args);
});
G__203302.cljs$core$IFn$_invoke$arity$variadic = G__203302__delegate;
return G__203302;
})()
;

return null;
});
