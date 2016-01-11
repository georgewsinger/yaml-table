goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__310767__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__310767 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__310768__i = 0, G__310768__a = new Array(arguments.length -  0);
while (G__310768__i < G__310768__a.length) {G__310768__a[G__310768__i] = arguments[G__310768__i + 0]; ++G__310768__i;}
  args = new cljs.core.IndexedSeq(G__310768__a,0);
} 
return G__310767__delegate.call(this,args);};
G__310767.cljs$lang$maxFixedArity = 0;
G__310767.cljs$lang$applyTo = (function (arglist__310769){
var args = cljs.core.seq(arglist__310769);
return G__310767__delegate(args);
});
G__310767.cljs$core$IFn$_invoke$arity$variadic = G__310767__delegate;
return G__310767;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__310770__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__310770 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__310771__i = 0, G__310771__a = new Array(arguments.length -  0);
while (G__310771__i < G__310771__a.length) {G__310771__a[G__310771__i] = arguments[G__310771__i + 0]; ++G__310771__i;}
  args = new cljs.core.IndexedSeq(G__310771__a,0);
} 
return G__310770__delegate.call(this,args);};
G__310770.cljs$lang$maxFixedArity = 0;
G__310770.cljs$lang$applyTo = (function (arglist__310772){
var args = cljs.core.seq(arglist__310772);
return G__310770__delegate(args);
});
G__310770.cljs$core$IFn$_invoke$arity$variadic = G__310770__delegate;
return G__310770;
})()
;

return null;
});
