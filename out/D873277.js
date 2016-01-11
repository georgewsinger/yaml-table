goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__347942__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__347942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__347943__i = 0, G__347943__a = new Array(arguments.length -  0);
while (G__347943__i < G__347943__a.length) {G__347943__a[G__347943__i] = arguments[G__347943__i + 0]; ++G__347943__i;}
  args = new cljs.core.IndexedSeq(G__347943__a,0);
} 
return G__347942__delegate.call(this,args);};
G__347942.cljs$lang$maxFixedArity = 0;
G__347942.cljs$lang$applyTo = (function (arglist__347944){
var args = cljs.core.seq(arglist__347944);
return G__347942__delegate(args);
});
G__347942.cljs$core$IFn$_invoke$arity$variadic = G__347942__delegate;
return G__347942;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__347945__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__347945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__347946__i = 0, G__347946__a = new Array(arguments.length -  0);
while (G__347946__i < G__347946__a.length) {G__347946__a[G__347946__i] = arguments[G__347946__i + 0]; ++G__347946__i;}
  args = new cljs.core.IndexedSeq(G__347946__a,0);
} 
return G__347945__delegate.call(this,args);};
G__347945.cljs$lang$maxFixedArity = 0;
G__347945.cljs$lang$applyTo = (function (arglist__347947){
var args = cljs.core.seq(arglist__347947);
return G__347945__delegate(args);
});
G__347945.cljs$core$IFn$_invoke$arity$variadic = G__347945__delegate;
return G__347945;
})()
;

return null;
});
