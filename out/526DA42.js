goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__225605__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__225605 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__225606__i = 0, G__225606__a = new Array(arguments.length -  0);
while (G__225606__i < G__225606__a.length) {G__225606__a[G__225606__i] = arguments[G__225606__i + 0]; ++G__225606__i;}
  args = new cljs.core.IndexedSeq(G__225606__a,0);
} 
return G__225605__delegate.call(this,args);};
G__225605.cljs$lang$maxFixedArity = 0;
G__225605.cljs$lang$applyTo = (function (arglist__225607){
var args = cljs.core.seq(arglist__225607);
return G__225605__delegate(args);
});
G__225605.cljs$core$IFn$_invoke$arity$variadic = G__225605__delegate;
return G__225605;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__225608__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__225608 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__225609__i = 0, G__225609__a = new Array(arguments.length -  0);
while (G__225609__i < G__225609__a.length) {G__225609__a[G__225609__i] = arguments[G__225609__i + 0]; ++G__225609__i;}
  args = new cljs.core.IndexedSeq(G__225609__a,0);
} 
return G__225608__delegate.call(this,args);};
G__225608.cljs$lang$maxFixedArity = 0;
G__225608.cljs$lang$applyTo = (function (arglist__225610){
var args = cljs.core.seq(arglist__225610);
return G__225608__delegate(args);
});
G__225608.cljs$core$IFn$_invoke$arity$variadic = G__225608__delegate;
return G__225608;
})()
;

return null;
});
