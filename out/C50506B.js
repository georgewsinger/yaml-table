goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__153432__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__153432 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__153433__i = 0, G__153433__a = new Array(arguments.length -  0);
while (G__153433__i < G__153433__a.length) {G__153433__a[G__153433__i] = arguments[G__153433__i + 0]; ++G__153433__i;}
  args = new cljs.core.IndexedSeq(G__153433__a,0);
} 
return G__153432__delegate.call(this,args);};
G__153432.cljs$lang$maxFixedArity = 0;
G__153432.cljs$lang$applyTo = (function (arglist__153434){
var args = cljs.core.seq(arglist__153434);
return G__153432__delegate(args);
});
G__153432.cljs$core$IFn$_invoke$arity$variadic = G__153432__delegate;
return G__153432;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__153435__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__153435 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__153436__i = 0, G__153436__a = new Array(arguments.length -  0);
while (G__153436__i < G__153436__a.length) {G__153436__a[G__153436__i] = arguments[G__153436__i + 0]; ++G__153436__i;}
  args = new cljs.core.IndexedSeq(G__153436__a,0);
} 
return G__153435__delegate.call(this,args);};
G__153435.cljs$lang$maxFixedArity = 0;
G__153435.cljs$lang$applyTo = (function (arglist__153437){
var args = cljs.core.seq(arglist__153437);
return G__153435__delegate(args);
});
G__153435.cljs$core$IFn$_invoke$arity$variadic = G__153435__delegate;
return G__153435;
})()
;

return null;
});
