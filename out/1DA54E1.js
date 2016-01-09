goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__73625__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__73625 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73626__i = 0, G__73626__a = new Array(arguments.length -  0);
while (G__73626__i < G__73626__a.length) {G__73626__a[G__73626__i] = arguments[G__73626__i + 0]; ++G__73626__i;}
  args = new cljs.core.IndexedSeq(G__73626__a,0);
} 
return G__73625__delegate.call(this,args);};
G__73625.cljs$lang$maxFixedArity = 0;
G__73625.cljs$lang$applyTo = (function (arglist__73627){
var args = cljs.core.seq(arglist__73627);
return G__73625__delegate(args);
});
G__73625.cljs$core$IFn$_invoke$arity$variadic = G__73625__delegate;
return G__73625;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__73628__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__73628 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73629__i = 0, G__73629__a = new Array(arguments.length -  0);
while (G__73629__i < G__73629__a.length) {G__73629__a[G__73629__i] = arguments[G__73629__i + 0]; ++G__73629__i;}
  args = new cljs.core.IndexedSeq(G__73629__a,0);
} 
return G__73628__delegate.call(this,args);};
G__73628.cljs$lang$maxFixedArity = 0;
G__73628.cljs$lang$applyTo = (function (arglist__73630){
var args = cljs.core.seq(arglist__73630);
return G__73628__delegate(args);
});
G__73628.cljs$core$IFn$_invoke$arity$variadic = G__73628__delegate;
return G__73628;
})()
;

return null;
});
