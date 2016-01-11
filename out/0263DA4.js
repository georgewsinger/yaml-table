goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__225883__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__225883 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__225884__i = 0, G__225884__a = new Array(arguments.length -  0);
while (G__225884__i < G__225884__a.length) {G__225884__a[G__225884__i] = arguments[G__225884__i + 0]; ++G__225884__i;}
  args = new cljs.core.IndexedSeq(G__225884__a,0);
} 
return G__225883__delegate.call(this,args);};
G__225883.cljs$lang$maxFixedArity = 0;
G__225883.cljs$lang$applyTo = (function (arglist__225885){
var args = cljs.core.seq(arglist__225885);
return G__225883__delegate(args);
});
G__225883.cljs$core$IFn$_invoke$arity$variadic = G__225883__delegate;
return G__225883;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__225886__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__225886 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__225887__i = 0, G__225887__a = new Array(arguments.length -  0);
while (G__225887__i < G__225887__a.length) {G__225887__a[G__225887__i] = arguments[G__225887__i + 0]; ++G__225887__i;}
  args = new cljs.core.IndexedSeq(G__225887__a,0);
} 
return G__225886__delegate.call(this,args);};
G__225886.cljs$lang$maxFixedArity = 0;
G__225886.cljs$lang$applyTo = (function (arglist__225888){
var args = cljs.core.seq(arglist__225888);
return G__225886__delegate(args);
});
G__225886.cljs$core$IFn$_invoke$arity$variadic = G__225886__delegate;
return G__225886;
})()
;

return null;
});
