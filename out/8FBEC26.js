goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63427__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63427 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63428__i = 0, G__63428__a = new Array(arguments.length -  0);
while (G__63428__i < G__63428__a.length) {G__63428__a[G__63428__i] = arguments[G__63428__i + 0]; ++G__63428__i;}
  args = new cljs.core.IndexedSeq(G__63428__a,0);
} 
return G__63427__delegate.call(this,args);};
G__63427.cljs$lang$maxFixedArity = 0;
G__63427.cljs$lang$applyTo = (function (arglist__63429){
var args = cljs.core.seq(arglist__63429);
return G__63427__delegate(args);
});
G__63427.cljs$core$IFn$_invoke$arity$variadic = G__63427__delegate;
return G__63427;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63430__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63430 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63431__i = 0, G__63431__a = new Array(arguments.length -  0);
while (G__63431__i < G__63431__a.length) {G__63431__a[G__63431__i] = arguments[G__63431__i + 0]; ++G__63431__i;}
  args = new cljs.core.IndexedSeq(G__63431__a,0);
} 
return G__63430__delegate.call(this,args);};
G__63430.cljs$lang$maxFixedArity = 0;
G__63430.cljs$lang$applyTo = (function (arglist__63432){
var args = cljs.core.seq(arglist__63432);
return G__63430__delegate(args);
});
G__63430.cljs$core$IFn$_invoke$arity$variadic = G__63430__delegate;
return G__63430;
})()
;

return null;
});
