goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__162552__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__162552 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__162553__i = 0, G__162553__a = new Array(arguments.length -  0);
while (G__162553__i < G__162553__a.length) {G__162553__a[G__162553__i] = arguments[G__162553__i + 0]; ++G__162553__i;}
  args = new cljs.core.IndexedSeq(G__162553__a,0);
} 
return G__162552__delegate.call(this,args);};
G__162552.cljs$lang$maxFixedArity = 0;
G__162552.cljs$lang$applyTo = (function (arglist__162554){
var args = cljs.core.seq(arglist__162554);
return G__162552__delegate(args);
});
G__162552.cljs$core$IFn$_invoke$arity$variadic = G__162552__delegate;
return G__162552;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__162555__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__162555 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__162556__i = 0, G__162556__a = new Array(arguments.length -  0);
while (G__162556__i < G__162556__a.length) {G__162556__a[G__162556__i] = arguments[G__162556__i + 0]; ++G__162556__i;}
  args = new cljs.core.IndexedSeq(G__162556__a,0);
} 
return G__162555__delegate.call(this,args);};
G__162555.cljs$lang$maxFixedArity = 0;
G__162555.cljs$lang$applyTo = (function (arglist__162557){
var args = cljs.core.seq(arglist__162557);
return G__162555__delegate(args);
});
G__162555.cljs$core$IFn$_invoke$arity$variadic = G__162555__delegate;
return G__162555;
})()
;

return null;
});
