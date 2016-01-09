goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__57724__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__57724 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57725__i = 0, G__57725__a = new Array(arguments.length -  0);
while (G__57725__i < G__57725__a.length) {G__57725__a[G__57725__i] = arguments[G__57725__i + 0]; ++G__57725__i;}
  args = new cljs.core.IndexedSeq(G__57725__a,0);
} 
return G__57724__delegate.call(this,args);};
G__57724.cljs$lang$maxFixedArity = 0;
G__57724.cljs$lang$applyTo = (function (arglist__57726){
var args = cljs.core.seq(arglist__57726);
return G__57724__delegate(args);
});
G__57724.cljs$core$IFn$_invoke$arity$variadic = G__57724__delegate;
return G__57724;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__57727__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__57727 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57728__i = 0, G__57728__a = new Array(arguments.length -  0);
while (G__57728__i < G__57728__a.length) {G__57728__a[G__57728__i] = arguments[G__57728__i + 0]; ++G__57728__i;}
  args = new cljs.core.IndexedSeq(G__57728__a,0);
} 
return G__57727__delegate.call(this,args);};
G__57727.cljs$lang$maxFixedArity = 0;
G__57727.cljs$lang$applyTo = (function (arglist__57729){
var args = cljs.core.seq(arglist__57729);
return G__57727__delegate(args);
});
G__57727.cljs$core$IFn$_invoke$arity$variadic = G__57727__delegate;
return G__57727;
})()
;

return null;
});
