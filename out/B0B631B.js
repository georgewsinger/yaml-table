goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29250__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29250 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29251__i = 0, G__29251__a = new Array(arguments.length -  0);
while (G__29251__i < G__29251__a.length) {G__29251__a[G__29251__i] = arguments[G__29251__i + 0]; ++G__29251__i;}
  args = new cljs.core.IndexedSeq(G__29251__a,0);
} 
return G__29250__delegate.call(this,args);};
G__29250.cljs$lang$maxFixedArity = 0;
G__29250.cljs$lang$applyTo = (function (arglist__29252){
var args = cljs.core.seq(arglist__29252);
return G__29250__delegate(args);
});
G__29250.cljs$core$IFn$_invoke$arity$variadic = G__29250__delegate;
return G__29250;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29253__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29253 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29254__i = 0, G__29254__a = new Array(arguments.length -  0);
while (G__29254__i < G__29254__a.length) {G__29254__a[G__29254__i] = arguments[G__29254__i + 0]; ++G__29254__i;}
  args = new cljs.core.IndexedSeq(G__29254__a,0);
} 
return G__29253__delegate.call(this,args);};
G__29253.cljs$lang$maxFixedArity = 0;
G__29253.cljs$lang$applyTo = (function (arglist__29255){
var args = cljs.core.seq(arglist__29255);
return G__29253__delegate(args);
});
G__29253.cljs$core$IFn$_invoke$arity$variadic = G__29253__delegate;
return G__29253;
})()
;

return null;
});
