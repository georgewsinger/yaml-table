goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__355589__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__355589 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__355590__i = 0, G__355590__a = new Array(arguments.length -  0);
while (G__355590__i < G__355590__a.length) {G__355590__a[G__355590__i] = arguments[G__355590__i + 0]; ++G__355590__i;}
  args = new cljs.core.IndexedSeq(G__355590__a,0);
} 
return G__355589__delegate.call(this,args);};
G__355589.cljs$lang$maxFixedArity = 0;
G__355589.cljs$lang$applyTo = (function (arglist__355591){
var args = cljs.core.seq(arglist__355591);
return G__355589__delegate(args);
});
G__355589.cljs$core$IFn$_invoke$arity$variadic = G__355589__delegate;
return G__355589;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__355592__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__355592 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__355593__i = 0, G__355593__a = new Array(arguments.length -  0);
while (G__355593__i < G__355593__a.length) {G__355593__a[G__355593__i] = arguments[G__355593__i + 0]; ++G__355593__i;}
  args = new cljs.core.IndexedSeq(G__355593__a,0);
} 
return G__355592__delegate.call(this,args);};
G__355592.cljs$lang$maxFixedArity = 0;
G__355592.cljs$lang$applyTo = (function (arglist__355594){
var args = cljs.core.seq(arglist__355594);
return G__355592__delegate(args);
});
G__355592.cljs$core$IFn$_invoke$arity$variadic = G__355592__delegate;
return G__355592;
})()
;

return null;
});
