goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40307__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40307 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40308__i = 0, G__40308__a = new Array(arguments.length -  0);
while (G__40308__i < G__40308__a.length) {G__40308__a[G__40308__i] = arguments[G__40308__i + 0]; ++G__40308__i;}
  args = new cljs.core.IndexedSeq(G__40308__a,0);
} 
return G__40307__delegate.call(this,args);};
G__40307.cljs$lang$maxFixedArity = 0;
G__40307.cljs$lang$applyTo = (function (arglist__40309){
var args = cljs.core.seq(arglist__40309);
return G__40307__delegate(args);
});
G__40307.cljs$core$IFn$_invoke$arity$variadic = G__40307__delegate;
return G__40307;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40310__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40310 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40311__i = 0, G__40311__a = new Array(arguments.length -  0);
while (G__40311__i < G__40311__a.length) {G__40311__a[G__40311__i] = arguments[G__40311__i + 0]; ++G__40311__i;}
  args = new cljs.core.IndexedSeq(G__40311__a,0);
} 
return G__40310__delegate.call(this,args);};
G__40310.cljs$lang$maxFixedArity = 0;
G__40310.cljs$lang$applyTo = (function (arglist__40312){
var args = cljs.core.seq(arglist__40312);
return G__40310__delegate(args);
});
G__40310.cljs$core$IFn$_invoke$arity$variadic = G__40310__delegate;
return G__40310;
})()
;

return null;
});
