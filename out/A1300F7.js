goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__321227__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__321227 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__321228__i = 0, G__321228__a = new Array(arguments.length -  0);
while (G__321228__i < G__321228__a.length) {G__321228__a[G__321228__i] = arguments[G__321228__i + 0]; ++G__321228__i;}
  args = new cljs.core.IndexedSeq(G__321228__a,0);
} 
return G__321227__delegate.call(this,args);};
G__321227.cljs$lang$maxFixedArity = 0;
G__321227.cljs$lang$applyTo = (function (arglist__321229){
var args = cljs.core.seq(arglist__321229);
return G__321227__delegate(args);
});
G__321227.cljs$core$IFn$_invoke$arity$variadic = G__321227__delegate;
return G__321227;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__321230__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__321230 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__321231__i = 0, G__321231__a = new Array(arguments.length -  0);
while (G__321231__i < G__321231__a.length) {G__321231__a[G__321231__i] = arguments[G__321231__i + 0]; ++G__321231__i;}
  args = new cljs.core.IndexedSeq(G__321231__a,0);
} 
return G__321230__delegate.call(this,args);};
G__321230.cljs$lang$maxFixedArity = 0;
G__321230.cljs$lang$applyTo = (function (arglist__321232){
var args = cljs.core.seq(arglist__321232);
return G__321230__delegate(args);
});
G__321230.cljs$core$IFn$_invoke$arity$variadic = G__321230__delegate;
return G__321230;
})()
;

return null;
});
