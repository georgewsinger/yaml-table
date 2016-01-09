goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__68979__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__68979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68980__i = 0, G__68980__a = new Array(arguments.length -  0);
while (G__68980__i < G__68980__a.length) {G__68980__a[G__68980__i] = arguments[G__68980__i + 0]; ++G__68980__i;}
  args = new cljs.core.IndexedSeq(G__68980__a,0);
} 
return G__68979__delegate.call(this,args);};
G__68979.cljs$lang$maxFixedArity = 0;
G__68979.cljs$lang$applyTo = (function (arglist__68981){
var args = cljs.core.seq(arglist__68981);
return G__68979__delegate(args);
});
G__68979.cljs$core$IFn$_invoke$arity$variadic = G__68979__delegate;
return G__68979;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__68982__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__68982 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68983__i = 0, G__68983__a = new Array(arguments.length -  0);
while (G__68983__i < G__68983__a.length) {G__68983__a[G__68983__i] = arguments[G__68983__i + 0]; ++G__68983__i;}
  args = new cljs.core.IndexedSeq(G__68983__a,0);
} 
return G__68982__delegate.call(this,args);};
G__68982.cljs$lang$maxFixedArity = 0;
G__68982.cljs$lang$applyTo = (function (arglist__68984){
var args = cljs.core.seq(arglist__68984);
return G__68982__delegate(args);
});
G__68982.cljs$core$IFn$_invoke$arity$variadic = G__68982__delegate;
return G__68982;
})()
;

return null;
});
