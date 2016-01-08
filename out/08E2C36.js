goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33745__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33745 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33746__i = 0, G__33746__a = new Array(arguments.length -  0);
while (G__33746__i < G__33746__a.length) {G__33746__a[G__33746__i] = arguments[G__33746__i + 0]; ++G__33746__i;}
  args = new cljs.core.IndexedSeq(G__33746__a,0);
} 
return G__33745__delegate.call(this,args);};
G__33745.cljs$lang$maxFixedArity = 0;
G__33745.cljs$lang$applyTo = (function (arglist__33747){
var args = cljs.core.seq(arglist__33747);
return G__33745__delegate(args);
});
G__33745.cljs$core$IFn$_invoke$arity$variadic = G__33745__delegate;
return G__33745;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33748__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33748 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33749__i = 0, G__33749__a = new Array(arguments.length -  0);
while (G__33749__i < G__33749__a.length) {G__33749__a[G__33749__i] = arguments[G__33749__i + 0]; ++G__33749__i;}
  args = new cljs.core.IndexedSeq(G__33749__a,0);
} 
return G__33748__delegate.call(this,args);};
G__33748.cljs$lang$maxFixedArity = 0;
G__33748.cljs$lang$applyTo = (function (arglist__33750){
var args = cljs.core.seq(arglist__33750);
return G__33748__delegate(args);
});
G__33748.cljs$core$IFn$_invoke$arity$variadic = G__33748__delegate;
return G__33748;
})()
;

return null;
});
