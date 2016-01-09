goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__163578__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__163578 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__163579__i = 0, G__163579__a = new Array(arguments.length -  0);
while (G__163579__i < G__163579__a.length) {G__163579__a[G__163579__i] = arguments[G__163579__i + 0]; ++G__163579__i;}
  args = new cljs.core.IndexedSeq(G__163579__a,0);
} 
return G__163578__delegate.call(this,args);};
G__163578.cljs$lang$maxFixedArity = 0;
G__163578.cljs$lang$applyTo = (function (arglist__163580){
var args = cljs.core.seq(arglist__163580);
return G__163578__delegate(args);
});
G__163578.cljs$core$IFn$_invoke$arity$variadic = G__163578__delegate;
return G__163578;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__163581__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__163581 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__163582__i = 0, G__163582__a = new Array(arguments.length -  0);
while (G__163582__i < G__163582__a.length) {G__163582__a[G__163582__i] = arguments[G__163582__i + 0]; ++G__163582__i;}
  args = new cljs.core.IndexedSeq(G__163582__a,0);
} 
return G__163581__delegate.call(this,args);};
G__163581.cljs$lang$maxFixedArity = 0;
G__163581.cljs$lang$applyTo = (function (arglist__163583){
var args = cljs.core.seq(arglist__163583);
return G__163581__delegate(args);
});
G__163581.cljs$core$IFn$_invoke$arity$variadic = G__163581__delegate;
return G__163581;
})()
;

return null;
});
