goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__50945__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__50945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50946__i = 0, G__50946__a = new Array(arguments.length -  0);
while (G__50946__i < G__50946__a.length) {G__50946__a[G__50946__i] = arguments[G__50946__i + 0]; ++G__50946__i;}
  args = new cljs.core.IndexedSeq(G__50946__a,0);
} 
return G__50945__delegate.call(this,args);};
G__50945.cljs$lang$maxFixedArity = 0;
G__50945.cljs$lang$applyTo = (function (arglist__50947){
var args = cljs.core.seq(arglist__50947);
return G__50945__delegate(args);
});
G__50945.cljs$core$IFn$_invoke$arity$variadic = G__50945__delegate;
return G__50945;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__50948__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__50948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50949__i = 0, G__50949__a = new Array(arguments.length -  0);
while (G__50949__i < G__50949__a.length) {G__50949__a[G__50949__i] = arguments[G__50949__i + 0]; ++G__50949__i;}
  args = new cljs.core.IndexedSeq(G__50949__a,0);
} 
return G__50948__delegate.call(this,args);};
G__50948.cljs$lang$maxFixedArity = 0;
G__50948.cljs$lang$applyTo = (function (arglist__50950){
var args = cljs.core.seq(arglist__50950);
return G__50948__delegate(args);
});
G__50948.cljs$core$IFn$_invoke$arity$variadic = G__50948__delegate;
return G__50948;
})()
;

return null;
});
