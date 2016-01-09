goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53239__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53240__i = 0, G__53240__a = new Array(arguments.length -  0);
while (G__53240__i < G__53240__a.length) {G__53240__a[G__53240__i] = arguments[G__53240__i + 0]; ++G__53240__i;}
  args = new cljs.core.IndexedSeq(G__53240__a,0);
} 
return G__53239__delegate.call(this,args);};
G__53239.cljs$lang$maxFixedArity = 0;
G__53239.cljs$lang$applyTo = (function (arglist__53241){
var args = cljs.core.seq(arglist__53241);
return G__53239__delegate(args);
});
G__53239.cljs$core$IFn$_invoke$arity$variadic = G__53239__delegate;
return G__53239;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53242__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53242 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53243__i = 0, G__53243__a = new Array(arguments.length -  0);
while (G__53243__i < G__53243__a.length) {G__53243__a[G__53243__i] = arguments[G__53243__i + 0]; ++G__53243__i;}
  args = new cljs.core.IndexedSeq(G__53243__a,0);
} 
return G__53242__delegate.call(this,args);};
G__53242.cljs$lang$maxFixedArity = 0;
G__53242.cljs$lang$applyTo = (function (arglist__53244){
var args = cljs.core.seq(arglist__53244);
return G__53242__delegate(args);
});
G__53242.cljs$core$IFn$_invoke$arity$variadic = G__53242__delegate;
return G__53242;
})()
;

return null;
});
