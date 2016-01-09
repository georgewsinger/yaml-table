goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__138604__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__138604 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__138605__i = 0, G__138605__a = new Array(arguments.length -  0);
while (G__138605__i < G__138605__a.length) {G__138605__a[G__138605__i] = arguments[G__138605__i + 0]; ++G__138605__i;}
  args = new cljs.core.IndexedSeq(G__138605__a,0);
} 
return G__138604__delegate.call(this,args);};
G__138604.cljs$lang$maxFixedArity = 0;
G__138604.cljs$lang$applyTo = (function (arglist__138606){
var args = cljs.core.seq(arglist__138606);
return G__138604__delegate(args);
});
G__138604.cljs$core$IFn$_invoke$arity$variadic = G__138604__delegate;
return G__138604;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__138607__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__138607 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__138608__i = 0, G__138608__a = new Array(arguments.length -  0);
while (G__138608__i < G__138608__a.length) {G__138608__a[G__138608__i] = arguments[G__138608__i + 0]; ++G__138608__i;}
  args = new cljs.core.IndexedSeq(G__138608__a,0);
} 
return G__138607__delegate.call(this,args);};
G__138607.cljs$lang$maxFixedArity = 0;
G__138607.cljs$lang$applyTo = (function (arglist__138609){
var args = cljs.core.seq(arglist__138609);
return G__138607__delegate(args);
});
G__138607.cljs$core$IFn$_invoke$arity$variadic = G__138607__delegate;
return G__138607;
})()
;

return null;
});
