goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61651__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61651 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61652__i = 0, G__61652__a = new Array(arguments.length -  0);
while (G__61652__i < G__61652__a.length) {G__61652__a[G__61652__i] = arguments[G__61652__i + 0]; ++G__61652__i;}
  args = new cljs.core.IndexedSeq(G__61652__a,0);
} 
return G__61651__delegate.call(this,args);};
G__61651.cljs$lang$maxFixedArity = 0;
G__61651.cljs$lang$applyTo = (function (arglist__61653){
var args = cljs.core.seq(arglist__61653);
return G__61651__delegate(args);
});
G__61651.cljs$core$IFn$_invoke$arity$variadic = G__61651__delegate;
return G__61651;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61654__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61654 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61655__i = 0, G__61655__a = new Array(arguments.length -  0);
while (G__61655__i < G__61655__a.length) {G__61655__a[G__61655__i] = arguments[G__61655__i + 0]; ++G__61655__i;}
  args = new cljs.core.IndexedSeq(G__61655__a,0);
} 
return G__61654__delegate.call(this,args);};
G__61654.cljs$lang$maxFixedArity = 0;
G__61654.cljs$lang$applyTo = (function (arglist__61656){
var args = cljs.core.seq(arglist__61656);
return G__61654__delegate(args);
});
G__61654.cljs$core$IFn$_invoke$arity$variadic = G__61654__delegate;
return G__61654;
})()
;

return null;
});
