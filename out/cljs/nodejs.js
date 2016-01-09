// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__159762__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__159762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__159763__i = 0, G__159763__a = new Array(arguments.length -  0);
while (G__159763__i < G__159763__a.length) {G__159763__a[G__159763__i] = arguments[G__159763__i + 0]; ++G__159763__i;}
  args = new cljs.core.IndexedSeq(G__159763__a,0);
} 
return G__159762__delegate.call(this,args);};
G__159762.cljs$lang$maxFixedArity = 0;
G__159762.cljs$lang$applyTo = (function (arglist__159764){
var args = cljs.core.seq(arglist__159764);
return G__159762__delegate(args);
});
G__159762.cljs$core$IFn$_invoke$arity$variadic = G__159762__delegate;
return G__159762;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__159765__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__159765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__159766__i = 0, G__159766__a = new Array(arguments.length -  0);
while (G__159766__i < G__159766__a.length) {G__159766__a[G__159766__i] = arguments[G__159766__i + 0]; ++G__159766__i;}
  args = new cljs.core.IndexedSeq(G__159766__a,0);
} 
return G__159765__delegate.call(this,args);};
G__159765.cljs$lang$maxFixedArity = 0;
G__159765.cljs$lang$applyTo = (function (arglist__159767){
var args = cljs.core.seq(arglist__159767);
return G__159765__delegate(args);
});
G__159765.cljs$core$IFn$_invoke$arity$variadic = G__159765__delegate;
return G__159765;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map