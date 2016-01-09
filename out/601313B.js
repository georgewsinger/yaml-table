goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__130463__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__130463 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__130464__i = 0, G__130464__a = new Array(arguments.length -  0);
while (G__130464__i < G__130464__a.length) {G__130464__a[G__130464__i] = arguments[G__130464__i + 0]; ++G__130464__i;}
  args = new cljs.core.IndexedSeq(G__130464__a,0);
} 
return G__130463__delegate.call(this,args);};
G__130463.cljs$lang$maxFixedArity = 0;
G__130463.cljs$lang$applyTo = (function (arglist__130465){
var args = cljs.core.seq(arglist__130465);
return G__130463__delegate(args);
});
G__130463.cljs$core$IFn$_invoke$arity$variadic = G__130463__delegate;
return G__130463;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__130466__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__130466 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__130467__i = 0, G__130467__a = new Array(arguments.length -  0);
while (G__130467__i < G__130467__a.length) {G__130467__a[G__130467__i] = arguments[G__130467__i + 0]; ++G__130467__i;}
  args = new cljs.core.IndexedSeq(G__130467__a,0);
} 
return G__130466__delegate.call(this,args);};
G__130466.cljs$lang$maxFixedArity = 0;
G__130466.cljs$lang$applyTo = (function (arglist__130468){
var args = cljs.core.seq(arglist__130468);
return G__130466__delegate(args);
});
G__130466.cljs$core$IFn$_invoke$arity$variadic = G__130466__delegate;
return G__130466;
})()
;

return null;
});
