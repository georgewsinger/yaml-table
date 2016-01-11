goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__363585__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__363585 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__363586__i = 0, G__363586__a = new Array(arguments.length -  0);
while (G__363586__i < G__363586__a.length) {G__363586__a[G__363586__i] = arguments[G__363586__i + 0]; ++G__363586__i;}
  args = new cljs.core.IndexedSeq(G__363586__a,0);
} 
return G__363585__delegate.call(this,args);};
G__363585.cljs$lang$maxFixedArity = 0;
G__363585.cljs$lang$applyTo = (function (arglist__363587){
var args = cljs.core.seq(arglist__363587);
return G__363585__delegate(args);
});
G__363585.cljs$core$IFn$_invoke$arity$variadic = G__363585__delegate;
return G__363585;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__363588__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__363588 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__363589__i = 0, G__363589__a = new Array(arguments.length -  0);
while (G__363589__i < G__363589__a.length) {G__363589__a[G__363589__i] = arguments[G__363589__i + 0]; ++G__363589__i;}
  args = new cljs.core.IndexedSeq(G__363589__a,0);
} 
return G__363588__delegate.call(this,args);};
G__363588.cljs$lang$maxFixedArity = 0;
G__363588.cljs$lang$applyTo = (function (arglist__363590){
var args = cljs.core.seq(arglist__363590);
return G__363588__delegate(args);
});
G__363588.cljs$core$IFn$_invoke$arity$variadic = G__363588__delegate;
return G__363588;
})()
;

return null;
});
