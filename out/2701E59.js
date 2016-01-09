goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__91523__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__91523 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__91524__i = 0, G__91524__a = new Array(arguments.length -  0);
while (G__91524__i < G__91524__a.length) {G__91524__a[G__91524__i] = arguments[G__91524__i + 0]; ++G__91524__i;}
  args = new cljs.core.IndexedSeq(G__91524__a,0);
} 
return G__91523__delegate.call(this,args);};
G__91523.cljs$lang$maxFixedArity = 0;
G__91523.cljs$lang$applyTo = (function (arglist__91525){
var args = cljs.core.seq(arglist__91525);
return G__91523__delegate(args);
});
G__91523.cljs$core$IFn$_invoke$arity$variadic = G__91523__delegate;
return G__91523;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__91526__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__91526 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__91527__i = 0, G__91527__a = new Array(arguments.length -  0);
while (G__91527__i < G__91527__a.length) {G__91527__a[G__91527__i] = arguments[G__91527__i + 0]; ++G__91527__i;}
  args = new cljs.core.IndexedSeq(G__91527__a,0);
} 
return G__91526__delegate.call(this,args);};
G__91526.cljs$lang$maxFixedArity = 0;
G__91526.cljs$lang$applyTo = (function (arglist__91528){
var args = cljs.core.seq(arglist__91528);
return G__91526__delegate(args);
});
G__91526.cljs$core$IFn$_invoke$arity$variadic = G__91526__delegate;
return G__91526;
})()
;

return null;
});
