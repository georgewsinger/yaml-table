goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__127220__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__127220 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__127221__i = 0, G__127221__a = new Array(arguments.length -  0);
while (G__127221__i < G__127221__a.length) {G__127221__a[G__127221__i] = arguments[G__127221__i + 0]; ++G__127221__i;}
  args = new cljs.core.IndexedSeq(G__127221__a,0);
} 
return G__127220__delegate.call(this,args);};
G__127220.cljs$lang$maxFixedArity = 0;
G__127220.cljs$lang$applyTo = (function (arglist__127222){
var args = cljs.core.seq(arglist__127222);
return G__127220__delegate(args);
});
G__127220.cljs$core$IFn$_invoke$arity$variadic = G__127220__delegate;
return G__127220;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__127223__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__127223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__127224__i = 0, G__127224__a = new Array(arguments.length -  0);
while (G__127224__i < G__127224__a.length) {G__127224__a[G__127224__i] = arguments[G__127224__i + 0]; ++G__127224__i;}
  args = new cljs.core.IndexedSeq(G__127224__a,0);
} 
return G__127223__delegate.call(this,args);};
G__127223.cljs$lang$maxFixedArity = 0;
G__127223.cljs$lang$applyTo = (function (arglist__127225){
var args = cljs.core.seq(arglist__127225);
return G__127223__delegate(args);
});
G__127223.cljs$core$IFn$_invoke$arity$variadic = G__127223__delegate;
return G__127223;
})()
;

return null;
});
