goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__170544__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__170544 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__170545__i = 0, G__170545__a = new Array(arguments.length -  0);
while (G__170545__i < G__170545__a.length) {G__170545__a[G__170545__i] = arguments[G__170545__i + 0]; ++G__170545__i;}
  args = new cljs.core.IndexedSeq(G__170545__a,0);
} 
return G__170544__delegate.call(this,args);};
G__170544.cljs$lang$maxFixedArity = 0;
G__170544.cljs$lang$applyTo = (function (arglist__170546){
var args = cljs.core.seq(arglist__170546);
return G__170544__delegate(args);
});
G__170544.cljs$core$IFn$_invoke$arity$variadic = G__170544__delegate;
return G__170544;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__170547__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__170547 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__170548__i = 0, G__170548__a = new Array(arguments.length -  0);
while (G__170548__i < G__170548__a.length) {G__170548__a[G__170548__i] = arguments[G__170548__i + 0]; ++G__170548__i;}
  args = new cljs.core.IndexedSeq(G__170548__a,0);
} 
return G__170547__delegate.call(this,args);};
G__170547.cljs$lang$maxFixedArity = 0;
G__170547.cljs$lang$applyTo = (function (arglist__170549){
var args = cljs.core.seq(arglist__170549);
return G__170547__delegate(args);
});
G__170547.cljs$core$IFn$_invoke$arity$variadic = G__170547__delegate;
return G__170547;
})()
;

return null;
});
