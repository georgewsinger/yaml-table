goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__217565__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__217565 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__217566__i = 0, G__217566__a = new Array(arguments.length -  0);
while (G__217566__i < G__217566__a.length) {G__217566__a[G__217566__i] = arguments[G__217566__i + 0]; ++G__217566__i;}
  args = new cljs.core.IndexedSeq(G__217566__a,0);
} 
return G__217565__delegate.call(this,args);};
G__217565.cljs$lang$maxFixedArity = 0;
G__217565.cljs$lang$applyTo = (function (arglist__217567){
var args = cljs.core.seq(arglist__217567);
return G__217565__delegate(args);
});
G__217565.cljs$core$IFn$_invoke$arity$variadic = G__217565__delegate;
return G__217565;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__217568__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__217568 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__217569__i = 0, G__217569__a = new Array(arguments.length -  0);
while (G__217569__i < G__217569__a.length) {G__217569__a[G__217569__i] = arguments[G__217569__i + 0]; ++G__217569__i;}
  args = new cljs.core.IndexedSeq(G__217569__a,0);
} 
return G__217568__delegate.call(this,args);};
G__217568.cljs$lang$maxFixedArity = 0;
G__217568.cljs$lang$applyTo = (function (arglist__217570){
var args = cljs.core.seq(arglist__217570);
return G__217568__delegate(args);
});
G__217568.cljs$core$IFn$_invoke$arity$variadic = G__217568__delegate;
return G__217568;
})()
;

return null;
});
