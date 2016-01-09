goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__66355__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__66355 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66356__i = 0, G__66356__a = new Array(arguments.length -  0);
while (G__66356__i < G__66356__a.length) {G__66356__a[G__66356__i] = arguments[G__66356__i + 0]; ++G__66356__i;}
  args = new cljs.core.IndexedSeq(G__66356__a,0);
} 
return G__66355__delegate.call(this,args);};
G__66355.cljs$lang$maxFixedArity = 0;
G__66355.cljs$lang$applyTo = (function (arglist__66357){
var args = cljs.core.seq(arglist__66357);
return G__66355__delegate(args);
});
G__66355.cljs$core$IFn$_invoke$arity$variadic = G__66355__delegate;
return G__66355;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__66358__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__66358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66359__i = 0, G__66359__a = new Array(arguments.length -  0);
while (G__66359__i < G__66359__a.length) {G__66359__a[G__66359__i] = arguments[G__66359__i + 0]; ++G__66359__i;}
  args = new cljs.core.IndexedSeq(G__66359__a,0);
} 
return G__66358__delegate.call(this,args);};
G__66358.cljs$lang$maxFixedArity = 0;
G__66358.cljs$lang$applyTo = (function (arglist__66360){
var args = cljs.core.seq(arglist__66360);
return G__66358__delegate(args);
});
G__66358.cljs$core$IFn$_invoke$arity$variadic = G__66358__delegate;
return G__66358;
})()
;

return null;
});
