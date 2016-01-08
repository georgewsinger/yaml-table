goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33367__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33368__i = 0, G__33368__a = new Array(arguments.length -  0);
while (G__33368__i < G__33368__a.length) {G__33368__a[G__33368__i] = arguments[G__33368__i + 0]; ++G__33368__i;}
  args = new cljs.core.IndexedSeq(G__33368__a,0);
} 
return G__33367__delegate.call(this,args);};
G__33367.cljs$lang$maxFixedArity = 0;
G__33367.cljs$lang$applyTo = (function (arglist__33369){
var args = cljs.core.seq(arglist__33369);
return G__33367__delegate(args);
});
G__33367.cljs$core$IFn$_invoke$arity$variadic = G__33367__delegate;
return G__33367;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33370__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33370 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33371__i = 0, G__33371__a = new Array(arguments.length -  0);
while (G__33371__i < G__33371__a.length) {G__33371__a[G__33371__i] = arguments[G__33371__i + 0]; ++G__33371__i;}
  args = new cljs.core.IndexedSeq(G__33371__a,0);
} 
return G__33370__delegate.call(this,args);};
G__33370.cljs$lang$maxFixedArity = 0;
G__33370.cljs$lang$applyTo = (function (arglist__33372){
var args = cljs.core.seq(arglist__33372);
return G__33370__delegate(args);
});
G__33370.cljs$core$IFn$_invoke$arity$variadic = G__33370__delegate;
return G__33370;
})()
;

return null;
});
