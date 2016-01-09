goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__160686__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__160686 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__160687__i = 0, G__160687__a = new Array(arguments.length -  0);
while (G__160687__i < G__160687__a.length) {G__160687__a[G__160687__i] = arguments[G__160687__i + 0]; ++G__160687__i;}
  args = new cljs.core.IndexedSeq(G__160687__a,0);
} 
return G__160686__delegate.call(this,args);};
G__160686.cljs$lang$maxFixedArity = 0;
G__160686.cljs$lang$applyTo = (function (arglist__160688){
var args = cljs.core.seq(arglist__160688);
return G__160686__delegate(args);
});
G__160686.cljs$core$IFn$_invoke$arity$variadic = G__160686__delegate;
return G__160686;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__160689__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__160689 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__160690__i = 0, G__160690__a = new Array(arguments.length -  0);
while (G__160690__i < G__160690__a.length) {G__160690__a[G__160690__i] = arguments[G__160690__i + 0]; ++G__160690__i;}
  args = new cljs.core.IndexedSeq(G__160690__a,0);
} 
return G__160689__delegate.call(this,args);};
G__160689.cljs$lang$maxFixedArity = 0;
G__160689.cljs$lang$applyTo = (function (arglist__160691){
var args = cljs.core.seq(arglist__160691);
return G__160689__delegate(args);
});
G__160689.cljs$core$IFn$_invoke$arity$variadic = G__160689__delegate;
return G__160689;
})()
;

return null;
});
