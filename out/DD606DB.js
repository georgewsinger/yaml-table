goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__64790__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__64790 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64791__i = 0, G__64791__a = new Array(arguments.length -  0);
while (G__64791__i < G__64791__a.length) {G__64791__a[G__64791__i] = arguments[G__64791__i + 0]; ++G__64791__i;}
  args = new cljs.core.IndexedSeq(G__64791__a,0);
} 
return G__64790__delegate.call(this,args);};
G__64790.cljs$lang$maxFixedArity = 0;
G__64790.cljs$lang$applyTo = (function (arglist__64792){
var args = cljs.core.seq(arglist__64792);
return G__64790__delegate(args);
});
G__64790.cljs$core$IFn$_invoke$arity$variadic = G__64790__delegate;
return G__64790;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__64793__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__64793 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64794__i = 0, G__64794__a = new Array(arguments.length -  0);
while (G__64794__i < G__64794__a.length) {G__64794__a[G__64794__i] = arguments[G__64794__i + 0]; ++G__64794__i;}
  args = new cljs.core.IndexedSeq(G__64794__a,0);
} 
return G__64793__delegate.call(this,args);};
G__64793.cljs$lang$maxFixedArity = 0;
G__64793.cljs$lang$applyTo = (function (arglist__64795){
var args = cljs.core.seq(arglist__64795);
return G__64793__delegate(args);
});
G__64793.cljs$core$IFn$_invoke$arity$variadic = G__64793__delegate;
return G__64793;
})()
;

return null;
});
