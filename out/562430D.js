goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__340944__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__340944 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__340945__i = 0, G__340945__a = new Array(arguments.length -  0);
while (G__340945__i < G__340945__a.length) {G__340945__a[G__340945__i] = arguments[G__340945__i + 0]; ++G__340945__i;}
  args = new cljs.core.IndexedSeq(G__340945__a,0);
} 
return G__340944__delegate.call(this,args);};
G__340944.cljs$lang$maxFixedArity = 0;
G__340944.cljs$lang$applyTo = (function (arglist__340946){
var args = cljs.core.seq(arglist__340946);
return G__340944__delegate(args);
});
G__340944.cljs$core$IFn$_invoke$arity$variadic = G__340944__delegate;
return G__340944;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__340947__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__340947 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__340948__i = 0, G__340948__a = new Array(arguments.length -  0);
while (G__340948__i < G__340948__a.length) {G__340948__a[G__340948__i] = arguments[G__340948__i + 0]; ++G__340948__i;}
  args = new cljs.core.IndexedSeq(G__340948__a,0);
} 
return G__340947__delegate.call(this,args);};
G__340947.cljs$lang$maxFixedArity = 0;
G__340947.cljs$lang$applyTo = (function (arglist__340949){
var args = cljs.core.seq(arglist__340949);
return G__340947__delegate(args);
});
G__340947.cljs$core$IFn$_invoke$arity$variadic = G__340947__delegate;
return G__340947;
})()
;

return null;
});
