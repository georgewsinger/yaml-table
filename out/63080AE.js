goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__362101__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__362101 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__362102__i = 0, G__362102__a = new Array(arguments.length -  0);
while (G__362102__i < G__362102__a.length) {G__362102__a[G__362102__i] = arguments[G__362102__i + 0]; ++G__362102__i;}
  args = new cljs.core.IndexedSeq(G__362102__a,0);
} 
return G__362101__delegate.call(this,args);};
G__362101.cljs$lang$maxFixedArity = 0;
G__362101.cljs$lang$applyTo = (function (arglist__362103){
var args = cljs.core.seq(arglist__362103);
return G__362101__delegate(args);
});
G__362101.cljs$core$IFn$_invoke$arity$variadic = G__362101__delegate;
return G__362101;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__362104__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__362104 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__362105__i = 0, G__362105__a = new Array(arguments.length -  0);
while (G__362105__i < G__362105__a.length) {G__362105__a[G__362105__i] = arguments[G__362105__i + 0]; ++G__362105__i;}
  args = new cljs.core.IndexedSeq(G__362105__a,0);
} 
return G__362104__delegate.call(this,args);};
G__362104.cljs$lang$maxFixedArity = 0;
G__362104.cljs$lang$applyTo = (function (arglist__362106){
var args = cljs.core.seq(arglist__362106);
return G__362104__delegate(args);
});
G__362104.cljs$core$IFn$_invoke$arity$variadic = G__362104__delegate;
return G__362104;
})()
;

return null;
});
