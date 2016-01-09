// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__65974__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__65974 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65975__i = 0, G__65975__a = new Array(arguments.length -  0);
while (G__65975__i < G__65975__a.length) {G__65975__a[G__65975__i] = arguments[G__65975__i + 0]; ++G__65975__i;}
  args = new cljs.core.IndexedSeq(G__65975__a,0);
} 
return G__65974__delegate.call(this,args);};
G__65974.cljs$lang$maxFixedArity = 0;
G__65974.cljs$lang$applyTo = (function (arglist__65976){
var args = cljs.core.seq(arglist__65976);
return G__65974__delegate(args);
});
G__65974.cljs$core$IFn$_invoke$arity$variadic = G__65974__delegate;
return G__65974;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__65977__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__65977 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65978__i = 0, G__65978__a = new Array(arguments.length -  0);
while (G__65978__i < G__65978__a.length) {G__65978__a[G__65978__i] = arguments[G__65978__i + 0]; ++G__65978__i;}
  args = new cljs.core.IndexedSeq(G__65978__a,0);
} 
return G__65977__delegate.call(this,args);};
G__65977.cljs$lang$maxFixedArity = 0;
G__65977.cljs$lang$applyTo = (function (arglist__65979){
var args = cljs.core.seq(arglist__65979);
return G__65977__delegate(args);
});
G__65977.cljs$core$IFn$_invoke$arity$variadic = G__65977__delegate;
return G__65977;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map