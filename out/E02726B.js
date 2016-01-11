goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__293813__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__293813 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__293814__i = 0, G__293814__a = new Array(arguments.length -  0);
while (G__293814__i < G__293814__a.length) {G__293814__a[G__293814__i] = arguments[G__293814__i + 0]; ++G__293814__i;}
  args = new cljs.core.IndexedSeq(G__293814__a,0);
} 
return G__293813__delegate.call(this,args);};
G__293813.cljs$lang$maxFixedArity = 0;
G__293813.cljs$lang$applyTo = (function (arglist__293815){
var args = cljs.core.seq(arglist__293815);
return G__293813__delegate(args);
});
G__293813.cljs$core$IFn$_invoke$arity$variadic = G__293813__delegate;
return G__293813;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__293816__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__293816 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__293817__i = 0, G__293817__a = new Array(arguments.length -  0);
while (G__293817__i < G__293817__a.length) {G__293817__a[G__293817__i] = arguments[G__293817__i + 0]; ++G__293817__i;}
  args = new cljs.core.IndexedSeq(G__293817__a,0);
} 
return G__293816__delegate.call(this,args);};
G__293816.cljs$lang$maxFixedArity = 0;
G__293816.cljs$lang$applyTo = (function (arglist__293818){
var args = cljs.core.seq(arglist__293818);
return G__293816__delegate(args);
});
G__293816.cljs$core$IFn$_invoke$arity$variadic = G__293816__delegate;
return G__293816;
})()
;

return null;
});
