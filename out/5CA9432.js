goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__218480__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__218480 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__218481__i = 0, G__218481__a = new Array(arguments.length -  0);
while (G__218481__i < G__218481__a.length) {G__218481__a[G__218481__i] = arguments[G__218481__i + 0]; ++G__218481__i;}
  args = new cljs.core.IndexedSeq(G__218481__a,0);
} 
return G__218480__delegate.call(this,args);};
G__218480.cljs$lang$maxFixedArity = 0;
G__218480.cljs$lang$applyTo = (function (arglist__218482){
var args = cljs.core.seq(arglist__218482);
return G__218480__delegate(args);
});
G__218480.cljs$core$IFn$_invoke$arity$variadic = G__218480__delegate;
return G__218480;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__218483__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__218483 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__218484__i = 0, G__218484__a = new Array(arguments.length -  0);
while (G__218484__i < G__218484__a.length) {G__218484__a[G__218484__i] = arguments[G__218484__i + 0]; ++G__218484__i;}
  args = new cljs.core.IndexedSeq(G__218484__a,0);
} 
return G__218483__delegate.call(this,args);};
G__218483.cljs$lang$maxFixedArity = 0;
G__218483.cljs$lang$applyTo = (function (arglist__218485){
var args = cljs.core.seq(arglist__218485);
return G__218483__delegate(args);
});
G__218483.cljs$core$IFn$_invoke$arity$variadic = G__218483__delegate;
return G__218483;
})()
;

return null;
});
