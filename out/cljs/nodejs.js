// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15799__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15799 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15800__i = 0, G__15800__a = new Array(arguments.length -  0);
while (G__15800__i < G__15800__a.length) {G__15800__a[G__15800__i] = arguments[G__15800__i + 0]; ++G__15800__i;}
  args = new cljs.core.IndexedSeq(G__15800__a,0);
} 
return G__15799__delegate.call(this,args);};
G__15799.cljs$lang$maxFixedArity = 0;
G__15799.cljs$lang$applyTo = (function (arglist__15801){
var args = cljs.core.seq(arglist__15801);
return G__15799__delegate(args);
});
G__15799.cljs$core$IFn$_invoke$arity$variadic = G__15799__delegate;
return G__15799;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15802__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15802 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15803__i = 0, G__15803__a = new Array(arguments.length -  0);
while (G__15803__i < G__15803__a.length) {G__15803__a[G__15803__i] = arguments[G__15803__i + 0]; ++G__15803__i;}
  args = new cljs.core.IndexedSeq(G__15803__a,0);
} 
return G__15802__delegate.call(this,args);};
G__15802.cljs$lang$maxFixedArity = 0;
G__15802.cljs$lang$applyTo = (function (arglist__15804){
var args = cljs.core.seq(arglist__15804);
return G__15802__delegate(args);
});
G__15802.cljs$core$IFn$_invoke$arity$variadic = G__15802__delegate;
return G__15802;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map