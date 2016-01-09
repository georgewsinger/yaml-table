goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__78257__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__78257 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__78258__i = 0, G__78258__a = new Array(arguments.length -  0);
while (G__78258__i < G__78258__a.length) {G__78258__a[G__78258__i] = arguments[G__78258__i + 0]; ++G__78258__i;}
  args = new cljs.core.IndexedSeq(G__78258__a,0);
} 
return G__78257__delegate.call(this,args);};
G__78257.cljs$lang$maxFixedArity = 0;
G__78257.cljs$lang$applyTo = (function (arglist__78259){
var args = cljs.core.seq(arglist__78259);
return G__78257__delegate(args);
});
G__78257.cljs$core$IFn$_invoke$arity$variadic = G__78257__delegate;
return G__78257;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__78260__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__78260 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__78261__i = 0, G__78261__a = new Array(arguments.length -  0);
while (G__78261__i < G__78261__a.length) {G__78261__a[G__78261__i] = arguments[G__78261__i + 0]; ++G__78261__i;}
  args = new cljs.core.IndexedSeq(G__78261__a,0);
} 
return G__78260__delegate.call(this,args);};
G__78260.cljs$lang$maxFixedArity = 0;
G__78260.cljs$lang$applyTo = (function (arglist__78262){
var args = cljs.core.seq(arglist__78262);
return G__78260__delegate(args);
});
G__78260.cljs$core$IFn$_invoke$arity$variadic = G__78260__delegate;
return G__78260;
})()
;

return null;
});
