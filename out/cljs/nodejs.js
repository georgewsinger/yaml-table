// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__142873__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__142873 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__142874__i = 0, G__142874__a = new Array(arguments.length -  0);
while (G__142874__i < G__142874__a.length) {G__142874__a[G__142874__i] = arguments[G__142874__i + 0]; ++G__142874__i;}
  args = new cljs.core.IndexedSeq(G__142874__a,0);
} 
return G__142873__delegate.call(this,args);};
G__142873.cljs$lang$maxFixedArity = 0;
G__142873.cljs$lang$applyTo = (function (arglist__142875){
var args = cljs.core.seq(arglist__142875);
return G__142873__delegate(args);
});
G__142873.cljs$core$IFn$_invoke$arity$variadic = G__142873__delegate;
return G__142873;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__142876__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__142876 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__142877__i = 0, G__142877__a = new Array(arguments.length -  0);
while (G__142877__i < G__142877__a.length) {G__142877__a[G__142877__i] = arguments[G__142877__i + 0]; ++G__142877__i;}
  args = new cljs.core.IndexedSeq(G__142877__a,0);
} 
return G__142876__delegate.call(this,args);};
G__142876.cljs$lang$maxFixedArity = 0;
G__142876.cljs$lang$applyTo = (function (arglist__142878){
var args = cljs.core.seq(arglist__142878);
return G__142876__delegate(args);
});
G__142876.cljs$core$IFn$_invoke$arity$variadic = G__142876__delegate;
return G__142876;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map