goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21313__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21313 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21314__i = 0, G__21314__a = new Array(arguments.length -  0);
while (G__21314__i < G__21314__a.length) {G__21314__a[G__21314__i] = arguments[G__21314__i + 0]; ++G__21314__i;}
  args = new cljs.core.IndexedSeq(G__21314__a,0);
} 
return G__21313__delegate.call(this,args);};
G__21313.cljs$lang$maxFixedArity = 0;
G__21313.cljs$lang$applyTo = (function (arglist__21315){
var args = cljs.core.seq(arglist__21315);
return G__21313__delegate(args);
});
G__21313.cljs$core$IFn$_invoke$arity$variadic = G__21313__delegate;
return G__21313;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21316__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21316 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21317__i = 0, G__21317__a = new Array(arguments.length -  0);
while (G__21317__i < G__21317__a.length) {G__21317__a[G__21317__i] = arguments[G__21317__i + 0]; ++G__21317__i;}
  args = new cljs.core.IndexedSeq(G__21317__a,0);
} 
return G__21316__delegate.call(this,args);};
G__21316.cljs$lang$maxFixedArity = 0;
G__21316.cljs$lang$applyTo = (function (arglist__21318){
var args = cljs.core.seq(arglist__21318);
return G__21316__delegate(args);
});
G__21316.cljs$core$IFn$_invoke$arity$variadic = G__21316__delegate;
return G__21316;
})()
;

return null;
});
