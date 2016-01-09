goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__55621__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__55621 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55622__i = 0, G__55622__a = new Array(arguments.length -  0);
while (G__55622__i < G__55622__a.length) {G__55622__a[G__55622__i] = arguments[G__55622__i + 0]; ++G__55622__i;}
  args = new cljs.core.IndexedSeq(G__55622__a,0);
} 
return G__55621__delegate.call(this,args);};
G__55621.cljs$lang$maxFixedArity = 0;
G__55621.cljs$lang$applyTo = (function (arglist__55623){
var args = cljs.core.seq(arglist__55623);
return G__55621__delegate(args);
});
G__55621.cljs$core$IFn$_invoke$arity$variadic = G__55621__delegate;
return G__55621;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__55624__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__55624 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55625__i = 0, G__55625__a = new Array(arguments.length -  0);
while (G__55625__i < G__55625__a.length) {G__55625__a[G__55625__i] = arguments[G__55625__i + 0]; ++G__55625__i;}
  args = new cljs.core.IndexedSeq(G__55625__a,0);
} 
return G__55624__delegate.call(this,args);};
G__55624.cljs$lang$maxFixedArity = 0;
G__55624.cljs$lang$applyTo = (function (arglist__55626){
var args = cljs.core.seq(arglist__55626);
return G__55624__delegate(args);
});
G__55624.cljs$core$IFn$_invoke$arity$variadic = G__55624__delegate;
return G__55624;
})()
;

return null;
});
