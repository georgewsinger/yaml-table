goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__300307__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__300307 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__300308__i = 0, G__300308__a = new Array(arguments.length -  0);
while (G__300308__i < G__300308__a.length) {G__300308__a[G__300308__i] = arguments[G__300308__i + 0]; ++G__300308__i;}
  args = new cljs.core.IndexedSeq(G__300308__a,0);
} 
return G__300307__delegate.call(this,args);};
G__300307.cljs$lang$maxFixedArity = 0;
G__300307.cljs$lang$applyTo = (function (arglist__300309){
var args = cljs.core.seq(arglist__300309);
return G__300307__delegate(args);
});
G__300307.cljs$core$IFn$_invoke$arity$variadic = G__300307__delegate;
return G__300307;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__300310__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__300310 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__300311__i = 0, G__300311__a = new Array(arguments.length -  0);
while (G__300311__i < G__300311__a.length) {G__300311__a[G__300311__i] = arguments[G__300311__i + 0]; ++G__300311__i;}
  args = new cljs.core.IndexedSeq(G__300311__a,0);
} 
return G__300310__delegate.call(this,args);};
G__300310.cljs$lang$maxFixedArity = 0;
G__300310.cljs$lang$applyTo = (function (arglist__300312){
var args = cljs.core.seq(arglist__300312);
return G__300310__delegate(args);
});
G__300310.cljs$core$IFn$_invoke$arity$variadic = G__300310__delegate;
return G__300310;
})()
;

return null;
});
