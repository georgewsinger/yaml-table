goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__172187__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__172187 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__172188__i = 0, G__172188__a = new Array(arguments.length -  0);
while (G__172188__i < G__172188__a.length) {G__172188__a[G__172188__i] = arguments[G__172188__i + 0]; ++G__172188__i;}
  args = new cljs.core.IndexedSeq(G__172188__a,0);
} 
return G__172187__delegate.call(this,args);};
G__172187.cljs$lang$maxFixedArity = 0;
G__172187.cljs$lang$applyTo = (function (arglist__172189){
var args = cljs.core.seq(arglist__172189);
return G__172187__delegate(args);
});
G__172187.cljs$core$IFn$_invoke$arity$variadic = G__172187__delegate;
return G__172187;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__172190__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__172190 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__172191__i = 0, G__172191__a = new Array(arguments.length -  0);
while (G__172191__i < G__172191__a.length) {G__172191__a[G__172191__i] = arguments[G__172191__i + 0]; ++G__172191__i;}
  args = new cljs.core.IndexedSeq(G__172191__a,0);
} 
return G__172190__delegate.call(this,args);};
G__172190.cljs$lang$maxFixedArity = 0;
G__172190.cljs$lang$applyTo = (function (arglist__172192){
var args = cljs.core.seq(arglist__172192);
return G__172190__delegate(args);
});
G__172190.cljs$core$IFn$_invoke$arity$variadic = G__172190__delegate;
return G__172190;
})()
;

return null;
});
