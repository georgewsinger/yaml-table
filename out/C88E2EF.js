goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__98412__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__98412 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__98413__i = 0, G__98413__a = new Array(arguments.length -  0);
while (G__98413__i < G__98413__a.length) {G__98413__a[G__98413__i] = arguments[G__98413__i + 0]; ++G__98413__i;}
  args = new cljs.core.IndexedSeq(G__98413__a,0);
} 
return G__98412__delegate.call(this,args);};
G__98412.cljs$lang$maxFixedArity = 0;
G__98412.cljs$lang$applyTo = (function (arglist__98414){
var args = cljs.core.seq(arglist__98414);
return G__98412__delegate(args);
});
G__98412.cljs$core$IFn$_invoke$arity$variadic = G__98412__delegate;
return G__98412;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__98415__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__98415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__98416__i = 0, G__98416__a = new Array(arguments.length -  0);
while (G__98416__i < G__98416__a.length) {G__98416__a[G__98416__i] = arguments[G__98416__i + 0]; ++G__98416__i;}
  args = new cljs.core.IndexedSeq(G__98416__a,0);
} 
return G__98415__delegate.call(this,args);};
G__98415.cljs$lang$maxFixedArity = 0;
G__98415.cljs$lang$applyTo = (function (arglist__98417){
var args = cljs.core.seq(arglist__98417);
return G__98415__delegate(args);
});
G__98415.cljs$core$IFn$_invoke$arity$variadic = G__98415__delegate;
return G__98415;
})()
;

return null;
});
