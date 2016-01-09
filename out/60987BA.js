goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__82756__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__82756 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__82757__i = 0, G__82757__a = new Array(arguments.length -  0);
while (G__82757__i < G__82757__a.length) {G__82757__a[G__82757__i] = arguments[G__82757__i + 0]; ++G__82757__i;}
  args = new cljs.core.IndexedSeq(G__82757__a,0);
} 
return G__82756__delegate.call(this,args);};
G__82756.cljs$lang$maxFixedArity = 0;
G__82756.cljs$lang$applyTo = (function (arglist__82758){
var args = cljs.core.seq(arglist__82758);
return G__82756__delegate(args);
});
G__82756.cljs$core$IFn$_invoke$arity$variadic = G__82756__delegate;
return G__82756;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__82759__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__82759 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__82760__i = 0, G__82760__a = new Array(arguments.length -  0);
while (G__82760__i < G__82760__a.length) {G__82760__a[G__82760__i] = arguments[G__82760__i + 0]; ++G__82760__i;}
  args = new cljs.core.IndexedSeq(G__82760__a,0);
} 
return G__82759__delegate.call(this,args);};
G__82759.cljs$lang$maxFixedArity = 0;
G__82759.cljs$lang$applyTo = (function (arglist__82761){
var args = cljs.core.seq(arglist__82761);
return G__82759__delegate(args);
});
G__82759.cljs$core$IFn$_invoke$arity$variadic = G__82759__delegate;
return G__82759;
})()
;

return null;
});
