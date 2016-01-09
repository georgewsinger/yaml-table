goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__86388__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__86388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__86389__i = 0, G__86389__a = new Array(arguments.length -  0);
while (G__86389__i < G__86389__a.length) {G__86389__a[G__86389__i] = arguments[G__86389__i + 0]; ++G__86389__i;}
  args = new cljs.core.IndexedSeq(G__86389__a,0);
} 
return G__86388__delegate.call(this,args);};
G__86388.cljs$lang$maxFixedArity = 0;
G__86388.cljs$lang$applyTo = (function (arglist__86390){
var args = cljs.core.seq(arglist__86390);
return G__86388__delegate(args);
});
G__86388.cljs$core$IFn$_invoke$arity$variadic = G__86388__delegate;
return G__86388;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__86391__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__86391 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__86392__i = 0, G__86392__a = new Array(arguments.length -  0);
while (G__86392__i < G__86392__a.length) {G__86392__a[G__86392__i] = arguments[G__86392__i + 0]; ++G__86392__i;}
  args = new cljs.core.IndexedSeq(G__86392__a,0);
} 
return G__86391__delegate.call(this,args);};
G__86391.cljs$lang$maxFixedArity = 0;
G__86391.cljs$lang$applyTo = (function (arglist__86393){
var args = cljs.core.seq(arglist__86393);
return G__86391__delegate(args);
});
G__86391.cljs$core$IFn$_invoke$arity$variadic = G__86391__delegate;
return G__86391;
})()
;

return null;
});
