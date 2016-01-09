goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__57155__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__57155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57156__i = 0, G__57156__a = new Array(arguments.length -  0);
while (G__57156__i < G__57156__a.length) {G__57156__a[G__57156__i] = arguments[G__57156__i + 0]; ++G__57156__i;}
  args = new cljs.core.IndexedSeq(G__57156__a,0);
} 
return G__57155__delegate.call(this,args);};
G__57155.cljs$lang$maxFixedArity = 0;
G__57155.cljs$lang$applyTo = (function (arglist__57157){
var args = cljs.core.seq(arglist__57157);
return G__57155__delegate(args);
});
G__57155.cljs$core$IFn$_invoke$arity$variadic = G__57155__delegate;
return G__57155;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__57158__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__57158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57159__i = 0, G__57159__a = new Array(arguments.length -  0);
while (G__57159__i < G__57159__a.length) {G__57159__a[G__57159__i] = arguments[G__57159__i + 0]; ++G__57159__i;}
  args = new cljs.core.IndexedSeq(G__57159__a,0);
} 
return G__57158__delegate.call(this,args);};
G__57158.cljs$lang$maxFixedArity = 0;
G__57158.cljs$lang$applyTo = (function (arglist__57160){
var args = cljs.core.seq(arglist__57160);
return G__57158__delegate(args);
});
G__57158.cljs$core$IFn$_invoke$arity$variadic = G__57158__delegate;
return G__57158;
})()
;

return null;
});
