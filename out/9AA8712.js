goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__263195__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__263195 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__263196__i = 0, G__263196__a = new Array(arguments.length -  0);
while (G__263196__i < G__263196__a.length) {G__263196__a[G__263196__i] = arguments[G__263196__i + 0]; ++G__263196__i;}
  args = new cljs.core.IndexedSeq(G__263196__a,0);
} 
return G__263195__delegate.call(this,args);};
G__263195.cljs$lang$maxFixedArity = 0;
G__263195.cljs$lang$applyTo = (function (arglist__263197){
var args = cljs.core.seq(arglist__263197);
return G__263195__delegate(args);
});
G__263195.cljs$core$IFn$_invoke$arity$variadic = G__263195__delegate;
return G__263195;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__263198__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__263198 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__263199__i = 0, G__263199__a = new Array(arguments.length -  0);
while (G__263199__i < G__263199__a.length) {G__263199__a[G__263199__i] = arguments[G__263199__i + 0]; ++G__263199__i;}
  args = new cljs.core.IndexedSeq(G__263199__a,0);
} 
return G__263198__delegate.call(this,args);};
G__263198.cljs$lang$maxFixedArity = 0;
G__263198.cljs$lang$applyTo = (function (arglist__263200){
var args = cljs.core.seq(arglist__263200);
return G__263198__delegate(args);
});
G__263198.cljs$core$IFn$_invoke$arity$variadic = G__263198__delegate;
return G__263198;
})()
;

return null;
});
