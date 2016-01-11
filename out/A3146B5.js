goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__327782__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__327782 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__327783__i = 0, G__327783__a = new Array(arguments.length -  0);
while (G__327783__i < G__327783__a.length) {G__327783__a[G__327783__i] = arguments[G__327783__i + 0]; ++G__327783__i;}
  args = new cljs.core.IndexedSeq(G__327783__a,0);
} 
return G__327782__delegate.call(this,args);};
G__327782.cljs$lang$maxFixedArity = 0;
G__327782.cljs$lang$applyTo = (function (arglist__327784){
var args = cljs.core.seq(arglist__327784);
return G__327782__delegate(args);
});
G__327782.cljs$core$IFn$_invoke$arity$variadic = G__327782__delegate;
return G__327782;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__327785__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__327785 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__327786__i = 0, G__327786__a = new Array(arguments.length -  0);
while (G__327786__i < G__327786__a.length) {G__327786__a[G__327786__i] = arguments[G__327786__i + 0]; ++G__327786__i;}
  args = new cljs.core.IndexedSeq(G__327786__a,0);
} 
return G__327785__delegate.call(this,args);};
G__327785.cljs$lang$maxFixedArity = 0;
G__327785.cljs$lang$applyTo = (function (arglist__327787){
var args = cljs.core.seq(arglist__327787);
return G__327785__delegate(args);
});
G__327785.cljs$core$IFn$_invoke$arity$variadic = G__327785__delegate;
return G__327785;
})()
;

return null;
});
