goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__169529__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__169529 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__169530__i = 0, G__169530__a = new Array(arguments.length -  0);
while (G__169530__i < G__169530__a.length) {G__169530__a[G__169530__i] = arguments[G__169530__i + 0]; ++G__169530__i;}
  args = new cljs.core.IndexedSeq(G__169530__a,0);
} 
return G__169529__delegate.call(this,args);};
G__169529.cljs$lang$maxFixedArity = 0;
G__169529.cljs$lang$applyTo = (function (arglist__169531){
var args = cljs.core.seq(arglist__169531);
return G__169529__delegate(args);
});
G__169529.cljs$core$IFn$_invoke$arity$variadic = G__169529__delegate;
return G__169529;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__169532__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__169532 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__169533__i = 0, G__169533__a = new Array(arguments.length -  0);
while (G__169533__i < G__169533__a.length) {G__169533__a[G__169533__i] = arguments[G__169533__i + 0]; ++G__169533__i;}
  args = new cljs.core.IndexedSeq(G__169533__a,0);
} 
return G__169532__delegate.call(this,args);};
G__169532.cljs$lang$maxFixedArity = 0;
G__169532.cljs$lang$applyTo = (function (arglist__169534){
var args = cljs.core.seq(arglist__169534);
return G__169532__delegate(args);
});
G__169532.cljs$core$IFn$_invoke$arity$variadic = G__169532__delegate;
return G__169532;
})()
;

return null;
});
