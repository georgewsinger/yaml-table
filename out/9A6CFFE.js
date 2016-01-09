goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__81879__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__81879 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81880__i = 0, G__81880__a = new Array(arguments.length -  0);
while (G__81880__i < G__81880__a.length) {G__81880__a[G__81880__i] = arguments[G__81880__i + 0]; ++G__81880__i;}
  args = new cljs.core.IndexedSeq(G__81880__a,0);
} 
return G__81879__delegate.call(this,args);};
G__81879.cljs$lang$maxFixedArity = 0;
G__81879.cljs$lang$applyTo = (function (arglist__81881){
var args = cljs.core.seq(arglist__81881);
return G__81879__delegate(args);
});
G__81879.cljs$core$IFn$_invoke$arity$variadic = G__81879__delegate;
return G__81879;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__81882__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__81882 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81883__i = 0, G__81883__a = new Array(arguments.length -  0);
while (G__81883__i < G__81883__a.length) {G__81883__a[G__81883__i] = arguments[G__81883__i + 0]; ++G__81883__i;}
  args = new cljs.core.IndexedSeq(G__81883__a,0);
} 
return G__81882__delegate.call(this,args);};
G__81882.cljs$lang$maxFixedArity = 0;
G__81882.cljs$lang$applyTo = (function (arglist__81884){
var args = cljs.core.seq(arglist__81884);
return G__81882__delegate(args);
});
G__81882.cljs$core$IFn$_invoke$arity$variadic = G__81882__delegate;
return G__81882;
})()
;

return null;
});
