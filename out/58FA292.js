goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__234058__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__234058 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__234059__i = 0, G__234059__a = new Array(arguments.length -  0);
while (G__234059__i < G__234059__a.length) {G__234059__a[G__234059__i] = arguments[G__234059__i + 0]; ++G__234059__i;}
  args = new cljs.core.IndexedSeq(G__234059__a,0);
} 
return G__234058__delegate.call(this,args);};
G__234058.cljs$lang$maxFixedArity = 0;
G__234058.cljs$lang$applyTo = (function (arglist__234060){
var args = cljs.core.seq(arglist__234060);
return G__234058__delegate(args);
});
G__234058.cljs$core$IFn$_invoke$arity$variadic = G__234058__delegate;
return G__234058;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__234061__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__234061 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__234062__i = 0, G__234062__a = new Array(arguments.length -  0);
while (G__234062__i < G__234062__a.length) {G__234062__a[G__234062__i] = arguments[G__234062__i + 0]; ++G__234062__i;}
  args = new cljs.core.IndexedSeq(G__234062__a,0);
} 
return G__234061__delegate.call(this,args);};
G__234061.cljs$lang$maxFixedArity = 0;
G__234061.cljs$lang$applyTo = (function (arglist__234063){
var args = cljs.core.seq(arglist__234063);
return G__234061__delegate(args);
});
G__234061.cljs$core$IFn$_invoke$arity$variadic = G__234061__delegate;
return G__234061;
})()
;

return null;
});
