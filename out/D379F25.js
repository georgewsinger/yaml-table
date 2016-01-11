goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__266802__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__266802 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__266803__i = 0, G__266803__a = new Array(arguments.length -  0);
while (G__266803__i < G__266803__a.length) {G__266803__a[G__266803__i] = arguments[G__266803__i + 0]; ++G__266803__i;}
  args = new cljs.core.IndexedSeq(G__266803__a,0);
} 
return G__266802__delegate.call(this,args);};
G__266802.cljs$lang$maxFixedArity = 0;
G__266802.cljs$lang$applyTo = (function (arglist__266804){
var args = cljs.core.seq(arglist__266804);
return G__266802__delegate(args);
});
G__266802.cljs$core$IFn$_invoke$arity$variadic = G__266802__delegate;
return G__266802;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__266805__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__266805 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__266806__i = 0, G__266806__a = new Array(arguments.length -  0);
while (G__266806__i < G__266806__a.length) {G__266806__a[G__266806__i] = arguments[G__266806__i + 0]; ++G__266806__i;}
  args = new cljs.core.IndexedSeq(G__266806__a,0);
} 
return G__266805__delegate.call(this,args);};
G__266805.cljs$lang$maxFixedArity = 0;
G__266805.cljs$lang$applyTo = (function (arglist__266807){
var args = cljs.core.seq(arglist__266807);
return G__266805__delegate(args);
});
G__266805.cljs$core$IFn$_invoke$arity$variadic = G__266805__delegate;
return G__266805;
})()
;

return null;
});
