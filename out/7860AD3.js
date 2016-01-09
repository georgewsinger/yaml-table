goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__151782__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__151782 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__151783__i = 0, G__151783__a = new Array(arguments.length -  0);
while (G__151783__i < G__151783__a.length) {G__151783__a[G__151783__i] = arguments[G__151783__i + 0]; ++G__151783__i;}
  args = new cljs.core.IndexedSeq(G__151783__a,0);
} 
return G__151782__delegate.call(this,args);};
G__151782.cljs$lang$maxFixedArity = 0;
G__151782.cljs$lang$applyTo = (function (arglist__151784){
var args = cljs.core.seq(arglist__151784);
return G__151782__delegate(args);
});
G__151782.cljs$core$IFn$_invoke$arity$variadic = G__151782__delegate;
return G__151782;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__151785__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__151785 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__151786__i = 0, G__151786__a = new Array(arguments.length -  0);
while (G__151786__i < G__151786__a.length) {G__151786__a[G__151786__i] = arguments[G__151786__i + 0]; ++G__151786__i;}
  args = new cljs.core.IndexedSeq(G__151786__a,0);
} 
return G__151785__delegate.call(this,args);};
G__151785.cljs$lang$maxFixedArity = 0;
G__151785.cljs$lang$applyTo = (function (arglist__151787){
var args = cljs.core.seq(arglist__151787);
return G__151785__delegate(args);
});
G__151785.cljs$core$IFn$_invoke$arity$variadic = G__151785__delegate;
return G__151785;
})()
;

return null;
});
