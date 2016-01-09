goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__184690__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__184690 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__184691__i = 0, G__184691__a = new Array(arguments.length -  0);
while (G__184691__i < G__184691__a.length) {G__184691__a[G__184691__i] = arguments[G__184691__i + 0]; ++G__184691__i;}
  args = new cljs.core.IndexedSeq(G__184691__a,0);
} 
return G__184690__delegate.call(this,args);};
G__184690.cljs$lang$maxFixedArity = 0;
G__184690.cljs$lang$applyTo = (function (arglist__184692){
var args = cljs.core.seq(arglist__184692);
return G__184690__delegate(args);
});
G__184690.cljs$core$IFn$_invoke$arity$variadic = G__184690__delegate;
return G__184690;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__184693__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__184693 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__184694__i = 0, G__184694__a = new Array(arguments.length -  0);
while (G__184694__i < G__184694__a.length) {G__184694__a[G__184694__i] = arguments[G__184694__i + 0]; ++G__184694__i;}
  args = new cljs.core.IndexedSeq(G__184694__a,0);
} 
return G__184693__delegate.call(this,args);};
G__184693.cljs$lang$maxFixedArity = 0;
G__184693.cljs$lang$applyTo = (function (arglist__184695){
var args = cljs.core.seq(arglist__184695);
return G__184693__delegate(args);
});
G__184693.cljs$core$IFn$_invoke$arity$variadic = G__184693__delegate;
return G__184693;
})()
;

return null;
});
