// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16475__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16476__i = 0, G__16476__a = new Array(arguments.length -  0);
while (G__16476__i < G__16476__a.length) {G__16476__a[G__16476__i] = arguments[G__16476__i + 0]; ++G__16476__i;}
  args = new cljs.core.IndexedSeq(G__16476__a,0);
} 
return G__16475__delegate.call(this,args);};
G__16475.cljs$lang$maxFixedArity = 0;
G__16475.cljs$lang$applyTo = (function (arglist__16477){
var args = cljs.core.seq(arglist__16477);
return G__16475__delegate(args);
});
G__16475.cljs$core$IFn$_invoke$arity$variadic = G__16475__delegate;
return G__16475;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16478__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16478 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16479__i = 0, G__16479__a = new Array(arguments.length -  0);
while (G__16479__i < G__16479__a.length) {G__16479__a[G__16479__i] = arguments[G__16479__i + 0]; ++G__16479__i;}
  args = new cljs.core.IndexedSeq(G__16479__a,0);
} 
return G__16478__delegate.call(this,args);};
G__16478.cljs$lang$maxFixedArity = 0;
G__16478.cljs$lang$applyTo = (function (arglist__16480){
var args = cljs.core.seq(arglist__16480);
return G__16478__delegate(args);
});
G__16478.cljs$core$IFn$_invoke$arity$variadic = G__16478__delegate;
return G__16478;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map