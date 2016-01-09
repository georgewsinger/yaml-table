// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63987__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63987 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63988__i = 0, G__63988__a = new Array(arguments.length -  0);
while (G__63988__i < G__63988__a.length) {G__63988__a[G__63988__i] = arguments[G__63988__i + 0]; ++G__63988__i;}
  args = new cljs.core.IndexedSeq(G__63988__a,0);
} 
return G__63987__delegate.call(this,args);};
G__63987.cljs$lang$maxFixedArity = 0;
G__63987.cljs$lang$applyTo = (function (arglist__63989){
var args = cljs.core.seq(arglist__63989);
return G__63987__delegate(args);
});
G__63987.cljs$core$IFn$_invoke$arity$variadic = G__63987__delegate;
return G__63987;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63990__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63990 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63991__i = 0, G__63991__a = new Array(arguments.length -  0);
while (G__63991__i < G__63991__a.length) {G__63991__a[G__63991__i] = arguments[G__63991__i + 0]; ++G__63991__i;}
  args = new cljs.core.IndexedSeq(G__63991__a,0);
} 
return G__63990__delegate.call(this,args);};
G__63990.cljs$lang$maxFixedArity = 0;
G__63990.cljs$lang$applyTo = (function (arglist__63992){
var args = cljs.core.seq(arglist__63992);
return G__63990__delegate(args);
});
G__63990.cljs$core$IFn$_invoke$arity$variadic = G__63990__delegate;
return G__63990;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map