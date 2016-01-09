goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__72100__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__72100 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72101__i = 0, G__72101__a = new Array(arguments.length -  0);
while (G__72101__i < G__72101__a.length) {G__72101__a[G__72101__i] = arguments[G__72101__i + 0]; ++G__72101__i;}
  args = new cljs.core.IndexedSeq(G__72101__a,0);
} 
return G__72100__delegate.call(this,args);};
G__72100.cljs$lang$maxFixedArity = 0;
G__72100.cljs$lang$applyTo = (function (arglist__72102){
var args = cljs.core.seq(arglist__72102);
return G__72100__delegate(args);
});
G__72100.cljs$core$IFn$_invoke$arity$variadic = G__72100__delegate;
return G__72100;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__72103__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__72103 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72104__i = 0, G__72104__a = new Array(arguments.length -  0);
while (G__72104__i < G__72104__a.length) {G__72104__a[G__72104__i] = arguments[G__72104__i + 0]; ++G__72104__i;}
  args = new cljs.core.IndexedSeq(G__72104__a,0);
} 
return G__72103__delegate.call(this,args);};
G__72103.cljs$lang$maxFixedArity = 0;
G__72103.cljs$lang$applyTo = (function (arglist__72105){
var args = cljs.core.seq(arglist__72105);
return G__72103__delegate(args);
});
G__72103.cljs$core$IFn$_invoke$arity$variadic = G__72103__delegate;
return G__72103;
})()
;

return null;
});
