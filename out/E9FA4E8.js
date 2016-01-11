goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__250630__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__250630 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__250631__i = 0, G__250631__a = new Array(arguments.length -  0);
while (G__250631__i < G__250631__a.length) {G__250631__a[G__250631__i] = arguments[G__250631__i + 0]; ++G__250631__i;}
  args = new cljs.core.IndexedSeq(G__250631__a,0);
} 
return G__250630__delegate.call(this,args);};
G__250630.cljs$lang$maxFixedArity = 0;
G__250630.cljs$lang$applyTo = (function (arglist__250632){
var args = cljs.core.seq(arglist__250632);
return G__250630__delegate(args);
});
G__250630.cljs$core$IFn$_invoke$arity$variadic = G__250630__delegate;
return G__250630;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__250633__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__250633 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__250634__i = 0, G__250634__a = new Array(arguments.length -  0);
while (G__250634__i < G__250634__a.length) {G__250634__a[G__250634__i] = arguments[G__250634__i + 0]; ++G__250634__i;}
  args = new cljs.core.IndexedSeq(G__250634__a,0);
} 
return G__250633__delegate.call(this,args);};
G__250633.cljs$lang$maxFixedArity = 0;
G__250633.cljs$lang$applyTo = (function (arglist__250635){
var args = cljs.core.seq(arglist__250635);
return G__250633__delegate(args);
});
G__250633.cljs$core$IFn$_invoke$arity$variadic = G__250633__delegate;
return G__250633;
})()
;

return null;
});
