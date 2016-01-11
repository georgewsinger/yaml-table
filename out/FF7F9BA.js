goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__285615__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__285615 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__285616__i = 0, G__285616__a = new Array(arguments.length -  0);
while (G__285616__i < G__285616__a.length) {G__285616__a[G__285616__i] = arguments[G__285616__i + 0]; ++G__285616__i;}
  args = new cljs.core.IndexedSeq(G__285616__a,0);
} 
return G__285615__delegate.call(this,args);};
G__285615.cljs$lang$maxFixedArity = 0;
G__285615.cljs$lang$applyTo = (function (arglist__285617){
var args = cljs.core.seq(arglist__285617);
return G__285615__delegate(args);
});
G__285615.cljs$core$IFn$_invoke$arity$variadic = G__285615__delegate;
return G__285615;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__285618__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__285618 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__285619__i = 0, G__285619__a = new Array(arguments.length -  0);
while (G__285619__i < G__285619__a.length) {G__285619__a[G__285619__i] = arguments[G__285619__i + 0]; ++G__285619__i;}
  args = new cljs.core.IndexedSeq(G__285619__a,0);
} 
return G__285618__delegate.call(this,args);};
G__285618.cljs$lang$maxFixedArity = 0;
G__285618.cljs$lang$applyTo = (function (arglist__285620){
var args = cljs.core.seq(arglist__285620);
return G__285618__delegate(args);
});
G__285618.cljs$core$IFn$_invoke$arity$variadic = G__285618__delegate;
return G__285618;
})()
;

return null;
});
