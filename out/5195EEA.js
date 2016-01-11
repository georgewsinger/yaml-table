goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__314014__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__314014 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__314015__i = 0, G__314015__a = new Array(arguments.length -  0);
while (G__314015__i < G__314015__a.length) {G__314015__a[G__314015__i] = arguments[G__314015__i + 0]; ++G__314015__i;}
  args = new cljs.core.IndexedSeq(G__314015__a,0);
} 
return G__314014__delegate.call(this,args);};
G__314014.cljs$lang$maxFixedArity = 0;
G__314014.cljs$lang$applyTo = (function (arglist__314016){
var args = cljs.core.seq(arglist__314016);
return G__314014__delegate(args);
});
G__314014.cljs$core$IFn$_invoke$arity$variadic = G__314014__delegate;
return G__314014;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__314017__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__314017 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__314018__i = 0, G__314018__a = new Array(arguments.length -  0);
while (G__314018__i < G__314018__a.length) {G__314018__a[G__314018__i] = arguments[G__314018__i + 0]; ++G__314018__i;}
  args = new cljs.core.IndexedSeq(G__314018__a,0);
} 
return G__314017__delegate.call(this,args);};
G__314017.cljs$lang$maxFixedArity = 0;
G__314017.cljs$lang$applyTo = (function (arglist__314019){
var args = cljs.core.seq(arglist__314019);
return G__314017__delegate(args);
});
G__314017.cljs$core$IFn$_invoke$arity$variadic = G__314017__delegate;
return G__314017;
})()
;

return null;
});
