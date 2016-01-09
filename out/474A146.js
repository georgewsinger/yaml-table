goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__49950__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__49950 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49951__i = 0, G__49951__a = new Array(arguments.length -  0);
while (G__49951__i < G__49951__a.length) {G__49951__a[G__49951__i] = arguments[G__49951__i + 0]; ++G__49951__i;}
  args = new cljs.core.IndexedSeq(G__49951__a,0);
} 
return G__49950__delegate.call(this,args);};
G__49950.cljs$lang$maxFixedArity = 0;
G__49950.cljs$lang$applyTo = (function (arglist__49952){
var args = cljs.core.seq(arglist__49952);
return G__49950__delegate(args);
});
G__49950.cljs$core$IFn$_invoke$arity$variadic = G__49950__delegate;
return G__49950;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__49953__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__49953 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49954__i = 0, G__49954__a = new Array(arguments.length -  0);
while (G__49954__i < G__49954__a.length) {G__49954__a[G__49954__i] = arguments[G__49954__i + 0]; ++G__49954__i;}
  args = new cljs.core.IndexedSeq(G__49954__a,0);
} 
return G__49953__delegate.call(this,args);};
G__49953.cljs$lang$maxFixedArity = 0;
G__49953.cljs$lang$applyTo = (function (arglist__49955){
var args = cljs.core.seq(arglist__49955);
return G__49953__delegate(args);
});
G__49953.cljs$core$IFn$_invoke$arity$variadic = G__49953__delegate;
return G__49953;
})()
;

return null;
});
