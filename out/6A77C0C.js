goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__150557__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__150557 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__150558__i = 0, G__150558__a = new Array(arguments.length -  0);
while (G__150558__i < G__150558__a.length) {G__150558__a[G__150558__i] = arguments[G__150558__i + 0]; ++G__150558__i;}
  args = new cljs.core.IndexedSeq(G__150558__a,0);
} 
return G__150557__delegate.call(this,args);};
G__150557.cljs$lang$maxFixedArity = 0;
G__150557.cljs$lang$applyTo = (function (arglist__150559){
var args = cljs.core.seq(arglist__150559);
return G__150557__delegate(args);
});
G__150557.cljs$core$IFn$_invoke$arity$variadic = G__150557__delegate;
return G__150557;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__150560__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__150560 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__150561__i = 0, G__150561__a = new Array(arguments.length -  0);
while (G__150561__i < G__150561__a.length) {G__150561__a[G__150561__i] = arguments[G__150561__i + 0]; ++G__150561__i;}
  args = new cljs.core.IndexedSeq(G__150561__a,0);
} 
return G__150560__delegate.call(this,args);};
G__150560.cljs$lang$maxFixedArity = 0;
G__150560.cljs$lang$applyTo = (function (arglist__150562){
var args = cljs.core.seq(arglist__150562);
return G__150560__delegate(args);
});
G__150560.cljs$core$IFn$_invoke$arity$variadic = G__150560__delegate;
return G__150560;
})()
;

return null;
});
