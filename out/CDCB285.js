goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__274289__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__274289 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__274290__i = 0, G__274290__a = new Array(arguments.length -  0);
while (G__274290__i < G__274290__a.length) {G__274290__a[G__274290__i] = arguments[G__274290__i + 0]; ++G__274290__i;}
  args = new cljs.core.IndexedSeq(G__274290__a,0);
} 
return G__274289__delegate.call(this,args);};
G__274289.cljs$lang$maxFixedArity = 0;
G__274289.cljs$lang$applyTo = (function (arglist__274291){
var args = cljs.core.seq(arglist__274291);
return G__274289__delegate(args);
});
G__274289.cljs$core$IFn$_invoke$arity$variadic = G__274289__delegate;
return G__274289;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__274292__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__274292 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__274293__i = 0, G__274293__a = new Array(arguments.length -  0);
while (G__274293__i < G__274293__a.length) {G__274293__a[G__274293__i] = arguments[G__274293__i + 0]; ++G__274293__i;}
  args = new cljs.core.IndexedSeq(G__274293__a,0);
} 
return G__274292__delegate.call(this,args);};
G__274292.cljs$lang$maxFixedArity = 0;
G__274292.cljs$lang$applyTo = (function (arglist__274294){
var args = cljs.core.seq(arglist__274294);
return G__274292__delegate(args);
});
G__274292.cljs$core$IFn$_invoke$arity$variadic = G__274292__delegate;
return G__274292;
})()
;

return null;
});
