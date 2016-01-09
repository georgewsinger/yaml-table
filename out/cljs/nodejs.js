// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__172838__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__172838 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__172839__i = 0, G__172839__a = new Array(arguments.length -  0);
while (G__172839__i < G__172839__a.length) {G__172839__a[G__172839__i] = arguments[G__172839__i + 0]; ++G__172839__i;}
  args = new cljs.core.IndexedSeq(G__172839__a,0);
} 
return G__172838__delegate.call(this,args);};
G__172838.cljs$lang$maxFixedArity = 0;
G__172838.cljs$lang$applyTo = (function (arglist__172840){
var args = cljs.core.seq(arglist__172840);
return G__172838__delegate(args);
});
G__172838.cljs$core$IFn$_invoke$arity$variadic = G__172838__delegate;
return G__172838;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__172841__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__172841 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__172842__i = 0, G__172842__a = new Array(arguments.length -  0);
while (G__172842__i < G__172842__a.length) {G__172842__a[G__172842__i] = arguments[G__172842__i + 0]; ++G__172842__i;}
  args = new cljs.core.IndexedSeq(G__172842__a,0);
} 
return G__172841__delegate.call(this,args);};
G__172841.cljs$lang$maxFixedArity = 0;
G__172841.cljs$lang$applyTo = (function (arglist__172843){
var args = cljs.core.seq(arglist__172843);
return G__172841__delegate(args);
});
G__172841.cljs$core$IFn$_invoke$arity$variadic = G__172841__delegate;
return G__172841;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map