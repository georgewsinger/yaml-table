goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__155760__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__155760 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__155761__i = 0, G__155761__a = new Array(arguments.length -  0);
while (G__155761__i < G__155761__a.length) {G__155761__a[G__155761__i] = arguments[G__155761__i + 0]; ++G__155761__i;}
  args = new cljs.core.IndexedSeq(G__155761__a,0);
} 
return G__155760__delegate.call(this,args);};
G__155760.cljs$lang$maxFixedArity = 0;
G__155760.cljs$lang$applyTo = (function (arglist__155762){
var args = cljs.core.seq(arglist__155762);
return G__155760__delegate(args);
});
G__155760.cljs$core$IFn$_invoke$arity$variadic = G__155760__delegate;
return G__155760;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__155763__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__155763 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__155764__i = 0, G__155764__a = new Array(arguments.length -  0);
while (G__155764__i < G__155764__a.length) {G__155764__a[G__155764__i] = arguments[G__155764__i + 0]; ++G__155764__i;}
  args = new cljs.core.IndexedSeq(G__155764__a,0);
} 
return G__155763__delegate.call(this,args);};
G__155763.cljs$lang$maxFixedArity = 0;
G__155763.cljs$lang$applyTo = (function (arglist__155765){
var args = cljs.core.seq(arglist__155765);
return G__155763__delegate(args);
});
G__155763.cljs$core$IFn$_invoke$arity$variadic = G__155763__delegate;
return G__155763;
})()
;

return null;
});
