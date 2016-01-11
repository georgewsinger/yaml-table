goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__326685__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__326685 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__326686__i = 0, G__326686__a = new Array(arguments.length -  0);
while (G__326686__i < G__326686__a.length) {G__326686__a[G__326686__i] = arguments[G__326686__i + 0]; ++G__326686__i;}
  args = new cljs.core.IndexedSeq(G__326686__a,0);
} 
return G__326685__delegate.call(this,args);};
G__326685.cljs$lang$maxFixedArity = 0;
G__326685.cljs$lang$applyTo = (function (arglist__326687){
var args = cljs.core.seq(arglist__326687);
return G__326685__delegate(args);
});
G__326685.cljs$core$IFn$_invoke$arity$variadic = G__326685__delegate;
return G__326685;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__326688__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__326688 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__326689__i = 0, G__326689__a = new Array(arguments.length -  0);
while (G__326689__i < G__326689__a.length) {G__326689__a[G__326689__i] = arguments[G__326689__i + 0]; ++G__326689__i;}
  args = new cljs.core.IndexedSeq(G__326689__a,0);
} 
return G__326688__delegate.call(this,args);};
G__326688.cljs$lang$maxFixedArity = 0;
G__326688.cljs$lang$applyTo = (function (arglist__326690){
var args = cljs.core.seq(arglist__326690);
return G__326688__delegate(args);
});
G__326688.cljs$core$IFn$_invoke$arity$variadic = G__326688__delegate;
return G__326688;
})()
;

return null;
});
