goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__165752__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__165752 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__165753__i = 0, G__165753__a = new Array(arguments.length -  0);
while (G__165753__i < G__165753__a.length) {G__165753__a[G__165753__i] = arguments[G__165753__i + 0]; ++G__165753__i;}
  args = new cljs.core.IndexedSeq(G__165753__a,0);
} 
return G__165752__delegate.call(this,args);};
G__165752.cljs$lang$maxFixedArity = 0;
G__165752.cljs$lang$applyTo = (function (arglist__165754){
var args = cljs.core.seq(arglist__165754);
return G__165752__delegate(args);
});
G__165752.cljs$core$IFn$_invoke$arity$variadic = G__165752__delegate;
return G__165752;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__165755__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__165755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__165756__i = 0, G__165756__a = new Array(arguments.length -  0);
while (G__165756__i < G__165756__a.length) {G__165756__a[G__165756__i] = arguments[G__165756__i + 0]; ++G__165756__i;}
  args = new cljs.core.IndexedSeq(G__165756__a,0);
} 
return G__165755__delegate.call(this,args);};
G__165755.cljs$lang$maxFixedArity = 0;
G__165755.cljs$lang$applyTo = (function (arglist__165757){
var args = cljs.core.seq(arglist__165757);
return G__165755__delegate(args);
});
G__165755.cljs$core$IFn$_invoke$arity$variadic = G__165755__delegate;
return G__165755;
})()
;

return null;
});
