goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__331041__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__331041 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__331042__i = 0, G__331042__a = new Array(arguments.length -  0);
while (G__331042__i < G__331042__a.length) {G__331042__a[G__331042__i] = arguments[G__331042__i + 0]; ++G__331042__i;}
  args = new cljs.core.IndexedSeq(G__331042__a,0);
} 
return G__331041__delegate.call(this,args);};
G__331041.cljs$lang$maxFixedArity = 0;
G__331041.cljs$lang$applyTo = (function (arglist__331043){
var args = cljs.core.seq(arglist__331043);
return G__331041__delegate(args);
});
G__331041.cljs$core$IFn$_invoke$arity$variadic = G__331041__delegate;
return G__331041;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__331044__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__331044 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__331045__i = 0, G__331045__a = new Array(arguments.length -  0);
while (G__331045__i < G__331045__a.length) {G__331045__a[G__331045__i] = arguments[G__331045__i + 0]; ++G__331045__i;}
  args = new cljs.core.IndexedSeq(G__331045__a,0);
} 
return G__331044__delegate.call(this,args);};
G__331044.cljs$lang$maxFixedArity = 0;
G__331044.cljs$lang$applyTo = (function (arglist__331046){
var args = cljs.core.seq(arglist__331046);
return G__331044__delegate(args);
});
G__331044.cljs$core$IFn$_invoke$arity$variadic = G__331044__delegate;
return G__331044;
})()
;

return null;
});
