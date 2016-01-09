goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__166705__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__166705 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__166706__i = 0, G__166706__a = new Array(arguments.length -  0);
while (G__166706__i < G__166706__a.length) {G__166706__a[G__166706__i] = arguments[G__166706__i + 0]; ++G__166706__i;}
  args = new cljs.core.IndexedSeq(G__166706__a,0);
} 
return G__166705__delegate.call(this,args);};
G__166705.cljs$lang$maxFixedArity = 0;
G__166705.cljs$lang$applyTo = (function (arglist__166707){
var args = cljs.core.seq(arglist__166707);
return G__166705__delegate(args);
});
G__166705.cljs$core$IFn$_invoke$arity$variadic = G__166705__delegate;
return G__166705;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__166708__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__166708 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__166709__i = 0, G__166709__a = new Array(arguments.length -  0);
while (G__166709__i < G__166709__a.length) {G__166709__a[G__166709__i] = arguments[G__166709__i + 0]; ++G__166709__i;}
  args = new cljs.core.IndexedSeq(G__166709__a,0);
} 
return G__166708__delegate.call(this,args);};
G__166708.cljs$lang$maxFixedArity = 0;
G__166708.cljs$lang$applyTo = (function (arglist__166710){
var args = cljs.core.seq(arglist__166710);
return G__166708__delegate(args);
});
G__166708.cljs$core$IFn$_invoke$arity$variadic = G__166708__delegate;
return G__166708;
})()
;

return null;
});
