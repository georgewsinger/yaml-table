goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__281758__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__281758 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__281759__i = 0, G__281759__a = new Array(arguments.length -  0);
while (G__281759__i < G__281759__a.length) {G__281759__a[G__281759__i] = arguments[G__281759__i + 0]; ++G__281759__i;}
  args = new cljs.core.IndexedSeq(G__281759__a,0);
} 
return G__281758__delegate.call(this,args);};
G__281758.cljs$lang$maxFixedArity = 0;
G__281758.cljs$lang$applyTo = (function (arglist__281760){
var args = cljs.core.seq(arglist__281760);
return G__281758__delegate(args);
});
G__281758.cljs$core$IFn$_invoke$arity$variadic = G__281758__delegate;
return G__281758;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__281761__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__281761 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__281762__i = 0, G__281762__a = new Array(arguments.length -  0);
while (G__281762__i < G__281762__a.length) {G__281762__a[G__281762__i] = arguments[G__281762__i + 0]; ++G__281762__i;}
  args = new cljs.core.IndexedSeq(G__281762__a,0);
} 
return G__281761__delegate.call(this,args);};
G__281761.cljs$lang$maxFixedArity = 0;
G__281761.cljs$lang$applyTo = (function (arglist__281763){
var args = cljs.core.seq(arglist__281763);
return G__281761__delegate(args);
});
G__281761.cljs$core$IFn$_invoke$arity$variadic = G__281761__delegate;
return G__281761;
})()
;

return null;
});
