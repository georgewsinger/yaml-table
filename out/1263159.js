goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67503__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67503 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67504__i = 0, G__67504__a = new Array(arguments.length -  0);
while (G__67504__i < G__67504__a.length) {G__67504__a[G__67504__i] = arguments[G__67504__i + 0]; ++G__67504__i;}
  args = new cljs.core.IndexedSeq(G__67504__a,0);
} 
return G__67503__delegate.call(this,args);};
G__67503.cljs$lang$maxFixedArity = 0;
G__67503.cljs$lang$applyTo = (function (arglist__67505){
var args = cljs.core.seq(arglist__67505);
return G__67503__delegate(args);
});
G__67503.cljs$core$IFn$_invoke$arity$variadic = G__67503__delegate;
return G__67503;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67506__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67506 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67507__i = 0, G__67507__a = new Array(arguments.length -  0);
while (G__67507__i < G__67507__a.length) {G__67507__a[G__67507__i] = arguments[G__67507__i + 0]; ++G__67507__i;}
  args = new cljs.core.IndexedSeq(G__67507__a,0);
} 
return G__67506__delegate.call(this,args);};
G__67506.cljs$lang$maxFixedArity = 0;
G__67506.cljs$lang$applyTo = (function (arglist__67508){
var args = cljs.core.seq(arglist__67508);
return G__67506__delegate(args);
});
G__67506.cljs$core$IFn$_invoke$arity$variadic = G__67506__delegate;
return G__67506;
})()
;

return null;
});
