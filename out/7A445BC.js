goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__161708__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__161708 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__161709__i = 0, G__161709__a = new Array(arguments.length -  0);
while (G__161709__i < G__161709__a.length) {G__161709__a[G__161709__i] = arguments[G__161709__i + 0]; ++G__161709__i;}
  args = new cljs.core.IndexedSeq(G__161709__a,0);
} 
return G__161708__delegate.call(this,args);};
G__161708.cljs$lang$maxFixedArity = 0;
G__161708.cljs$lang$applyTo = (function (arglist__161710){
var args = cljs.core.seq(arglist__161710);
return G__161708__delegate(args);
});
G__161708.cljs$core$IFn$_invoke$arity$variadic = G__161708__delegate;
return G__161708;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__161711__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__161711 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__161712__i = 0, G__161712__a = new Array(arguments.length -  0);
while (G__161712__i < G__161712__a.length) {G__161712__a[G__161712__i] = arguments[G__161712__i + 0]; ++G__161712__i;}
  args = new cljs.core.IndexedSeq(G__161712__a,0);
} 
return G__161711__delegate.call(this,args);};
G__161711.cljs$lang$maxFixedArity = 0;
G__161711.cljs$lang$applyTo = (function (arglist__161713){
var args = cljs.core.seq(arglist__161713);
return G__161711__delegate(args);
});
G__161711.cljs$core$IFn$_invoke$arity$variadic = G__161711__delegate;
return G__161711;
})()
;

return null;
});
