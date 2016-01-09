goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__95155__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__95155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95156__i = 0, G__95156__a = new Array(arguments.length -  0);
while (G__95156__i < G__95156__a.length) {G__95156__a[G__95156__i] = arguments[G__95156__i + 0]; ++G__95156__i;}
  args = new cljs.core.IndexedSeq(G__95156__a,0);
} 
return G__95155__delegate.call(this,args);};
G__95155.cljs$lang$maxFixedArity = 0;
G__95155.cljs$lang$applyTo = (function (arglist__95157){
var args = cljs.core.seq(arglist__95157);
return G__95155__delegate(args);
});
G__95155.cljs$core$IFn$_invoke$arity$variadic = G__95155__delegate;
return G__95155;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__95158__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__95158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95159__i = 0, G__95159__a = new Array(arguments.length -  0);
while (G__95159__i < G__95159__a.length) {G__95159__a[G__95159__i] = arguments[G__95159__i + 0]; ++G__95159__i;}
  args = new cljs.core.IndexedSeq(G__95159__a,0);
} 
return G__95158__delegate.call(this,args);};
G__95158.cljs$lang$maxFixedArity = 0;
G__95158.cljs$lang$applyTo = (function (arglist__95160){
var args = cljs.core.seq(arglist__95160);
return G__95158__delegate(args);
});
G__95158.cljs$core$IFn$_invoke$arity$variadic = G__95158__delegate;
return G__95158;
})()
;

return null;
});
