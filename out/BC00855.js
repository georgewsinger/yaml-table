goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__150910__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__150910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__150911__i = 0, G__150911__a = new Array(arguments.length -  0);
while (G__150911__i < G__150911__a.length) {G__150911__a[G__150911__i] = arguments[G__150911__i + 0]; ++G__150911__i;}
  args = new cljs.core.IndexedSeq(G__150911__a,0);
} 
return G__150910__delegate.call(this,args);};
G__150910.cljs$lang$maxFixedArity = 0;
G__150910.cljs$lang$applyTo = (function (arglist__150912){
var args = cljs.core.seq(arglist__150912);
return G__150910__delegate(args);
});
G__150910.cljs$core$IFn$_invoke$arity$variadic = G__150910__delegate;
return G__150910;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__150913__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__150913 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__150914__i = 0, G__150914__a = new Array(arguments.length -  0);
while (G__150914__i < G__150914__a.length) {G__150914__a[G__150914__i] = arguments[G__150914__i + 0]; ++G__150914__i;}
  args = new cljs.core.IndexedSeq(G__150914__a,0);
} 
return G__150913__delegate.call(this,args);};
G__150913.cljs$lang$maxFixedArity = 0;
G__150913.cljs$lang$applyTo = (function (arglist__150915){
var args = cljs.core.seq(arglist__150915);
return G__150913__delegate(args);
});
G__150913.cljs$core$IFn$_invoke$arity$variadic = G__150913__delegate;
return G__150913;
})()
;

return null;
});
