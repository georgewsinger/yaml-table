goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__149249__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__149249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__149250__i = 0, G__149250__a = new Array(arguments.length -  0);
while (G__149250__i < G__149250__a.length) {G__149250__a[G__149250__i] = arguments[G__149250__i + 0]; ++G__149250__i;}
  args = new cljs.core.IndexedSeq(G__149250__a,0);
} 
return G__149249__delegate.call(this,args);};
G__149249.cljs$lang$maxFixedArity = 0;
G__149249.cljs$lang$applyTo = (function (arglist__149251){
var args = cljs.core.seq(arglist__149251);
return G__149249__delegate(args);
});
G__149249.cljs$core$IFn$_invoke$arity$variadic = G__149249__delegate;
return G__149249;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__149252__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__149252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__149253__i = 0, G__149253__a = new Array(arguments.length -  0);
while (G__149253__i < G__149253__a.length) {G__149253__a[G__149253__i] = arguments[G__149253__i + 0]; ++G__149253__i;}
  args = new cljs.core.IndexedSeq(G__149253__a,0);
} 
return G__149252__delegate.call(this,args);};
G__149252.cljs$lang$maxFixedArity = 0;
G__149252.cljs$lang$applyTo = (function (arglist__149254){
var args = cljs.core.seq(arglist__149254);
return G__149252__delegate(args);
});
G__149252.cljs$core$IFn$_invoke$arity$variadic = G__149252__delegate;
return G__149252;
})()
;

return null;
});
