goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__169164__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__169164 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__169165__i = 0, G__169165__a = new Array(arguments.length -  0);
while (G__169165__i < G__169165__a.length) {G__169165__a[G__169165__i] = arguments[G__169165__i + 0]; ++G__169165__i;}
  args = new cljs.core.IndexedSeq(G__169165__a,0);
} 
return G__169164__delegate.call(this,args);};
G__169164.cljs$lang$maxFixedArity = 0;
G__169164.cljs$lang$applyTo = (function (arglist__169166){
var args = cljs.core.seq(arglist__169166);
return G__169164__delegate(args);
});
G__169164.cljs$core$IFn$_invoke$arity$variadic = G__169164__delegate;
return G__169164;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__169167__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__169167 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__169168__i = 0, G__169168__a = new Array(arguments.length -  0);
while (G__169168__i < G__169168__a.length) {G__169168__a[G__169168__i] = arguments[G__169168__i + 0]; ++G__169168__i;}
  args = new cljs.core.IndexedSeq(G__169168__a,0);
} 
return G__169167__delegate.call(this,args);};
G__169167.cljs$lang$maxFixedArity = 0;
G__169167.cljs$lang$applyTo = (function (arglist__169169){
var args = cljs.core.seq(arglist__169169);
return G__169167__delegate(args);
});
G__169167.cljs$core$IFn$_invoke$arity$variadic = G__169167__delegate;
return G__169167;
})()
;

return null;
});
