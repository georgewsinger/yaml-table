goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__83131__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__83131 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__83132__i = 0, G__83132__a = new Array(arguments.length -  0);
while (G__83132__i < G__83132__a.length) {G__83132__a[G__83132__i] = arguments[G__83132__i + 0]; ++G__83132__i;}
  args = new cljs.core.IndexedSeq(G__83132__a,0);
} 
return G__83131__delegate.call(this,args);};
G__83131.cljs$lang$maxFixedArity = 0;
G__83131.cljs$lang$applyTo = (function (arglist__83133){
var args = cljs.core.seq(arglist__83133);
return G__83131__delegate(args);
});
G__83131.cljs$core$IFn$_invoke$arity$variadic = G__83131__delegate;
return G__83131;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__83134__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__83134 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__83135__i = 0, G__83135__a = new Array(arguments.length -  0);
while (G__83135__i < G__83135__a.length) {G__83135__a[G__83135__i] = arguments[G__83135__i + 0]; ++G__83135__i;}
  args = new cljs.core.IndexedSeq(G__83135__a,0);
} 
return G__83134__delegate.call(this,args);};
G__83134.cljs$lang$maxFixedArity = 0;
G__83134.cljs$lang$applyTo = (function (arglist__83136){
var args = cljs.core.seq(arglist__83136);
return G__83134__delegate(args);
});
G__83134.cljs$core$IFn$_invoke$arity$variadic = G__83134__delegate;
return G__83134;
})()
;

return null;
});
