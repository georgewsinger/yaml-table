goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__347561__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__347561 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__347562__i = 0, G__347562__a = new Array(arguments.length -  0);
while (G__347562__i < G__347562__a.length) {G__347562__a[G__347562__i] = arguments[G__347562__i + 0]; ++G__347562__i;}
  args = new cljs.core.IndexedSeq(G__347562__a,0);
} 
return G__347561__delegate.call(this,args);};
G__347561.cljs$lang$maxFixedArity = 0;
G__347561.cljs$lang$applyTo = (function (arglist__347563){
var args = cljs.core.seq(arglist__347563);
return G__347561__delegate(args);
});
G__347561.cljs$core$IFn$_invoke$arity$variadic = G__347561__delegate;
return G__347561;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__347564__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__347564 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__347565__i = 0, G__347565__a = new Array(arguments.length -  0);
while (G__347565__i < G__347565__a.length) {G__347565__a[G__347565__i] = arguments[G__347565__i + 0]; ++G__347565__i;}
  args = new cljs.core.IndexedSeq(G__347565__a,0);
} 
return G__347564__delegate.call(this,args);};
G__347564.cljs$lang$maxFixedArity = 0;
G__347564.cljs$lang$applyTo = (function (arglist__347566){
var args = cljs.core.seq(arglist__347566);
return G__347564__delegate(args);
});
G__347564.cljs$core$IFn$_invoke$arity$variadic = G__347564__delegate;
return G__347564;
})()
;

return null;
});
