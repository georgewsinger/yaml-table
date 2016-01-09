goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__166716__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__166716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__166717__i = 0, G__166717__a = new Array(arguments.length -  0);
while (G__166717__i < G__166717__a.length) {G__166717__a[G__166717__i] = arguments[G__166717__i + 0]; ++G__166717__i;}
  args = new cljs.core.IndexedSeq(G__166717__a,0);
} 
return G__166716__delegate.call(this,args);};
G__166716.cljs$lang$maxFixedArity = 0;
G__166716.cljs$lang$applyTo = (function (arglist__166718){
var args = cljs.core.seq(arglist__166718);
return G__166716__delegate(args);
});
G__166716.cljs$core$IFn$_invoke$arity$variadic = G__166716__delegate;
return G__166716;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__166719__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__166719 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__166720__i = 0, G__166720__a = new Array(arguments.length -  0);
while (G__166720__i < G__166720__a.length) {G__166720__a[G__166720__i] = arguments[G__166720__i + 0]; ++G__166720__i;}
  args = new cljs.core.IndexedSeq(G__166720__a,0);
} 
return G__166719__delegate.call(this,args);};
G__166719.cljs$lang$maxFixedArity = 0;
G__166719.cljs$lang$applyTo = (function (arglist__166721){
var args = cljs.core.seq(arglist__166721);
return G__166719__delegate(args);
});
G__166719.cljs$core$IFn$_invoke$arity$variadic = G__166719__delegate;
return G__166719;
})()
;

return null;
});
