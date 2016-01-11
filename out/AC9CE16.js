goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__255311__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__255311 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__255312__i = 0, G__255312__a = new Array(arguments.length -  0);
while (G__255312__i < G__255312__a.length) {G__255312__a[G__255312__i] = arguments[G__255312__i + 0]; ++G__255312__i;}
  args = new cljs.core.IndexedSeq(G__255312__a,0);
} 
return G__255311__delegate.call(this,args);};
G__255311.cljs$lang$maxFixedArity = 0;
G__255311.cljs$lang$applyTo = (function (arglist__255313){
var args = cljs.core.seq(arglist__255313);
return G__255311__delegate(args);
});
G__255311.cljs$core$IFn$_invoke$arity$variadic = G__255311__delegate;
return G__255311;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__255314__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__255314 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__255315__i = 0, G__255315__a = new Array(arguments.length -  0);
while (G__255315__i < G__255315__a.length) {G__255315__a[G__255315__i] = arguments[G__255315__i + 0]; ++G__255315__i;}
  args = new cljs.core.IndexedSeq(G__255315__a,0);
} 
return G__255314__delegate.call(this,args);};
G__255314.cljs$lang$maxFixedArity = 0;
G__255314.cljs$lang$applyTo = (function (arglist__255316){
var args = cljs.core.seq(arglist__255316);
return G__255314__delegate(args);
});
G__255314.cljs$core$IFn$_invoke$arity$variadic = G__255314__delegate;
return G__255314;
})()
;

return null;
});
