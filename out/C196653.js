goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__87265__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__87265 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87266__i = 0, G__87266__a = new Array(arguments.length -  0);
while (G__87266__i < G__87266__a.length) {G__87266__a[G__87266__i] = arguments[G__87266__i + 0]; ++G__87266__i;}
  args = new cljs.core.IndexedSeq(G__87266__a,0);
} 
return G__87265__delegate.call(this,args);};
G__87265.cljs$lang$maxFixedArity = 0;
G__87265.cljs$lang$applyTo = (function (arglist__87267){
var args = cljs.core.seq(arglist__87267);
return G__87265__delegate(args);
});
G__87265.cljs$core$IFn$_invoke$arity$variadic = G__87265__delegate;
return G__87265;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__87268__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__87268 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87269__i = 0, G__87269__a = new Array(arguments.length -  0);
while (G__87269__i < G__87269__a.length) {G__87269__a[G__87269__i] = arguments[G__87269__i + 0]; ++G__87269__i;}
  args = new cljs.core.IndexedSeq(G__87269__a,0);
} 
return G__87268__delegate.call(this,args);};
G__87268.cljs$lang$maxFixedArity = 0;
G__87268.cljs$lang$applyTo = (function (arglist__87270){
var args = cljs.core.seq(arglist__87270);
return G__87268__delegate(args);
});
G__87268.cljs$core$IFn$_invoke$arity$variadic = G__87268__delegate;
return G__87268;
})()
;

return null;
});
