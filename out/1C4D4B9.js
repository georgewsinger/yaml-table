goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__162301__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__162301 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__162302__i = 0, G__162302__a = new Array(arguments.length -  0);
while (G__162302__i < G__162302__a.length) {G__162302__a[G__162302__i] = arguments[G__162302__i + 0]; ++G__162302__i;}
  args = new cljs.core.IndexedSeq(G__162302__a,0);
} 
return G__162301__delegate.call(this,args);};
G__162301.cljs$lang$maxFixedArity = 0;
G__162301.cljs$lang$applyTo = (function (arglist__162303){
var args = cljs.core.seq(arglist__162303);
return G__162301__delegate(args);
});
G__162301.cljs$core$IFn$_invoke$arity$variadic = G__162301__delegate;
return G__162301;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__162304__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__162304 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__162305__i = 0, G__162305__a = new Array(arguments.length -  0);
while (G__162305__i < G__162305__a.length) {G__162305__a[G__162305__i] = arguments[G__162305__i + 0]; ++G__162305__i;}
  args = new cljs.core.IndexedSeq(G__162305__a,0);
} 
return G__162304__delegate.call(this,args);};
G__162304.cljs$lang$maxFixedArity = 0;
G__162304.cljs$lang$applyTo = (function (arglist__162306){
var args = cljs.core.seq(arglist__162306);
return G__162304__delegate(args);
});
G__162304.cljs$core$IFn$_invoke$arity$variadic = G__162304__delegate;
return G__162304;
})()
;

return null;
});
