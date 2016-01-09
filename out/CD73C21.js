goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__88277__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__88277 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__88278__i = 0, G__88278__a = new Array(arguments.length -  0);
while (G__88278__i < G__88278__a.length) {G__88278__a[G__88278__i] = arguments[G__88278__i + 0]; ++G__88278__i;}
  args = new cljs.core.IndexedSeq(G__88278__a,0);
} 
return G__88277__delegate.call(this,args);};
G__88277.cljs$lang$maxFixedArity = 0;
G__88277.cljs$lang$applyTo = (function (arglist__88279){
var args = cljs.core.seq(arglist__88279);
return G__88277__delegate(args);
});
G__88277.cljs$core$IFn$_invoke$arity$variadic = G__88277__delegate;
return G__88277;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__88280__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__88280 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__88281__i = 0, G__88281__a = new Array(arguments.length -  0);
while (G__88281__i < G__88281__a.length) {G__88281__a[G__88281__i] = arguments[G__88281__i + 0]; ++G__88281__i;}
  args = new cljs.core.IndexedSeq(G__88281__a,0);
} 
return G__88280__delegate.call(this,args);};
G__88280.cljs$lang$maxFixedArity = 0;
G__88280.cljs$lang$applyTo = (function (arglist__88282){
var args = cljs.core.seq(arglist__88282);
return G__88280__delegate(args);
});
G__88280.cljs$core$IFn$_invoke$arity$variadic = G__88280__delegate;
return G__88280;
})()
;

return null;
});
