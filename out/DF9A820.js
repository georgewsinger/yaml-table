goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__254589__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__254589 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__254590__i = 0, G__254590__a = new Array(arguments.length -  0);
while (G__254590__i < G__254590__a.length) {G__254590__a[G__254590__i] = arguments[G__254590__i + 0]; ++G__254590__i;}
  args = new cljs.core.IndexedSeq(G__254590__a,0);
} 
return G__254589__delegate.call(this,args);};
G__254589.cljs$lang$maxFixedArity = 0;
G__254589.cljs$lang$applyTo = (function (arglist__254591){
var args = cljs.core.seq(arglist__254591);
return G__254589__delegate(args);
});
G__254589.cljs$core$IFn$_invoke$arity$variadic = G__254589__delegate;
return G__254589;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__254592__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__254592 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__254593__i = 0, G__254593__a = new Array(arguments.length -  0);
while (G__254593__i < G__254593__a.length) {G__254593__a[G__254593__i] = arguments[G__254593__i + 0]; ++G__254593__i;}
  args = new cljs.core.IndexedSeq(G__254593__a,0);
} 
return G__254592__delegate.call(this,args);};
G__254592.cljs$lang$maxFixedArity = 0;
G__254592.cljs$lang$applyTo = (function (arglist__254594){
var args = cljs.core.seq(arglist__254594);
return G__254592__delegate(args);
});
G__254592.cljs$core$IFn$_invoke$arity$variadic = G__254592__delegate;
return G__254592;
})()
;

return null;
});
