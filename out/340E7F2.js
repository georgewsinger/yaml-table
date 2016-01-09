goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__160344__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__160344 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__160345__i = 0, G__160345__a = new Array(arguments.length -  0);
while (G__160345__i < G__160345__a.length) {G__160345__a[G__160345__i] = arguments[G__160345__i + 0]; ++G__160345__i;}
  args = new cljs.core.IndexedSeq(G__160345__a,0);
} 
return G__160344__delegate.call(this,args);};
G__160344.cljs$lang$maxFixedArity = 0;
G__160344.cljs$lang$applyTo = (function (arglist__160346){
var args = cljs.core.seq(arglist__160346);
return G__160344__delegate(args);
});
G__160344.cljs$core$IFn$_invoke$arity$variadic = G__160344__delegate;
return G__160344;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__160347__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__160347 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__160348__i = 0, G__160348__a = new Array(arguments.length -  0);
while (G__160348__i < G__160348__a.length) {G__160348__a[G__160348__i] = arguments[G__160348__i + 0]; ++G__160348__i;}
  args = new cljs.core.IndexedSeq(G__160348__a,0);
} 
return G__160347__delegate.call(this,args);};
G__160347.cljs$lang$maxFixedArity = 0;
G__160347.cljs$lang$applyTo = (function (arglist__160349){
var args = cljs.core.seq(arglist__160349);
return G__160347__delegate(args);
});
G__160347.cljs$core$IFn$_invoke$arity$variadic = G__160347__delegate;
return G__160347;
})()
;

return null;
});
