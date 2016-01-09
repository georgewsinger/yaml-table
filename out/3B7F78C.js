goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__68370__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__68370 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68371__i = 0, G__68371__a = new Array(arguments.length -  0);
while (G__68371__i < G__68371__a.length) {G__68371__a[G__68371__i] = arguments[G__68371__i + 0]; ++G__68371__i;}
  args = new cljs.core.IndexedSeq(G__68371__a,0);
} 
return G__68370__delegate.call(this,args);};
G__68370.cljs$lang$maxFixedArity = 0;
G__68370.cljs$lang$applyTo = (function (arglist__68372){
var args = cljs.core.seq(arglist__68372);
return G__68370__delegate(args);
});
G__68370.cljs$core$IFn$_invoke$arity$variadic = G__68370__delegate;
return G__68370;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__68373__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__68373 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68374__i = 0, G__68374__a = new Array(arguments.length -  0);
while (G__68374__i < G__68374__a.length) {G__68374__a[G__68374__i] = arguments[G__68374__i + 0]; ++G__68374__i;}
  args = new cljs.core.IndexedSeq(G__68374__a,0);
} 
return G__68373__delegate.call(this,args);};
G__68373.cljs$lang$maxFixedArity = 0;
G__68373.cljs$lang$applyTo = (function (arglist__68375){
var args = cljs.core.seq(arglist__68375);
return G__68373__delegate(args);
});
G__68373.cljs$core$IFn$_invoke$arity$variadic = G__68373__delegate;
return G__68373;
})()
;

return null;
});
