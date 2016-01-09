goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__163835__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__163835 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__163836__i = 0, G__163836__a = new Array(arguments.length -  0);
while (G__163836__i < G__163836__a.length) {G__163836__a[G__163836__i] = arguments[G__163836__i + 0]; ++G__163836__i;}
  args = new cljs.core.IndexedSeq(G__163836__a,0);
} 
return G__163835__delegate.call(this,args);};
G__163835.cljs$lang$maxFixedArity = 0;
G__163835.cljs$lang$applyTo = (function (arglist__163837){
var args = cljs.core.seq(arglist__163837);
return G__163835__delegate(args);
});
G__163835.cljs$core$IFn$_invoke$arity$variadic = G__163835__delegate;
return G__163835;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__163838__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__163838 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__163839__i = 0, G__163839__a = new Array(arguments.length -  0);
while (G__163839__i < G__163839__a.length) {G__163839__a[G__163839__i] = arguments[G__163839__i + 0]; ++G__163839__i;}
  args = new cljs.core.IndexedSeq(G__163839__a,0);
} 
return G__163838__delegate.call(this,args);};
G__163838.cljs$lang$maxFixedArity = 0;
G__163838.cljs$lang$applyTo = (function (arglist__163840){
var args = cljs.core.seq(arglist__163840);
return G__163838__delegate(args);
});
G__163838.cljs$core$IFn$_invoke$arity$variadic = G__163838__delegate;
return G__163838;
})()
;

return null;
});
