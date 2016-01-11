goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__336960__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__336960 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__336961__i = 0, G__336961__a = new Array(arguments.length -  0);
while (G__336961__i < G__336961__a.length) {G__336961__a[G__336961__i] = arguments[G__336961__i + 0]; ++G__336961__i;}
  args = new cljs.core.IndexedSeq(G__336961__a,0);
} 
return G__336960__delegate.call(this,args);};
G__336960.cljs$lang$maxFixedArity = 0;
G__336960.cljs$lang$applyTo = (function (arglist__336962){
var args = cljs.core.seq(arglist__336962);
return G__336960__delegate(args);
});
G__336960.cljs$core$IFn$_invoke$arity$variadic = G__336960__delegate;
return G__336960;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__336963__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__336963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__336964__i = 0, G__336964__a = new Array(arguments.length -  0);
while (G__336964__i < G__336964__a.length) {G__336964__a[G__336964__i] = arguments[G__336964__i + 0]; ++G__336964__i;}
  args = new cljs.core.IndexedSeq(G__336964__a,0);
} 
return G__336963__delegate.call(this,args);};
G__336963.cljs$lang$maxFixedArity = 0;
G__336963.cljs$lang$applyTo = (function (arglist__336965){
var args = cljs.core.seq(arglist__336965);
return G__336963__delegate(args);
});
G__336963.cljs$core$IFn$_invoke$arity$variadic = G__336963__delegate;
return G__336963;
})()
;

return null;
});
