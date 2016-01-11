goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__258552__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__258552 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__258553__i = 0, G__258553__a = new Array(arguments.length -  0);
while (G__258553__i < G__258553__a.length) {G__258553__a[G__258553__i] = arguments[G__258553__i + 0]; ++G__258553__i;}
  args = new cljs.core.IndexedSeq(G__258553__a,0);
} 
return G__258552__delegate.call(this,args);};
G__258552.cljs$lang$maxFixedArity = 0;
G__258552.cljs$lang$applyTo = (function (arglist__258554){
var args = cljs.core.seq(arglist__258554);
return G__258552__delegate(args);
});
G__258552.cljs$core$IFn$_invoke$arity$variadic = G__258552__delegate;
return G__258552;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__258555__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__258555 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__258556__i = 0, G__258556__a = new Array(arguments.length -  0);
while (G__258556__i < G__258556__a.length) {G__258556__a[G__258556__i] = arguments[G__258556__i + 0]; ++G__258556__i;}
  args = new cljs.core.IndexedSeq(G__258556__a,0);
} 
return G__258555__delegate.call(this,args);};
G__258555.cljs$lang$maxFixedArity = 0;
G__258555.cljs$lang$applyTo = (function (arglist__258557){
var args = cljs.core.seq(arglist__258557);
return G__258555__delegate(args);
});
G__258555.cljs$core$IFn$_invoke$arity$variadic = G__258555__delegate;
return G__258555;
})()
;

return null;
});
