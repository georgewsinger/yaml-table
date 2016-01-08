goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42257__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42257 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42258__i = 0, G__42258__a = new Array(arguments.length -  0);
while (G__42258__i < G__42258__a.length) {G__42258__a[G__42258__i] = arguments[G__42258__i + 0]; ++G__42258__i;}
  args = new cljs.core.IndexedSeq(G__42258__a,0);
} 
return G__42257__delegate.call(this,args);};
G__42257.cljs$lang$maxFixedArity = 0;
G__42257.cljs$lang$applyTo = (function (arglist__42259){
var args = cljs.core.seq(arglist__42259);
return G__42257__delegate(args);
});
G__42257.cljs$core$IFn$_invoke$arity$variadic = G__42257__delegate;
return G__42257;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42260__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42260 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42261__i = 0, G__42261__a = new Array(arguments.length -  0);
while (G__42261__i < G__42261__a.length) {G__42261__a[G__42261__i] = arguments[G__42261__i + 0]; ++G__42261__i;}
  args = new cljs.core.IndexedSeq(G__42261__a,0);
} 
return G__42260__delegate.call(this,args);};
G__42260.cljs$lang$maxFixedArity = 0;
G__42260.cljs$lang$applyTo = (function (arglist__42262){
var args = cljs.core.seq(arglist__42262);
return G__42260__delegate(args);
});
G__42260.cljs$core$IFn$_invoke$arity$variadic = G__42260__delegate;
return G__42260;
})()
;

return null;
});
