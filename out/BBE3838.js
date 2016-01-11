goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__324463__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__324463 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__324464__i = 0, G__324464__a = new Array(arguments.length -  0);
while (G__324464__i < G__324464__a.length) {G__324464__a[G__324464__i] = arguments[G__324464__i + 0]; ++G__324464__i;}
  args = new cljs.core.IndexedSeq(G__324464__a,0);
} 
return G__324463__delegate.call(this,args);};
G__324463.cljs$lang$maxFixedArity = 0;
G__324463.cljs$lang$applyTo = (function (arglist__324465){
var args = cljs.core.seq(arglist__324465);
return G__324463__delegate(args);
});
G__324463.cljs$core$IFn$_invoke$arity$variadic = G__324463__delegate;
return G__324463;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__324466__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__324466 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__324467__i = 0, G__324467__a = new Array(arguments.length -  0);
while (G__324467__i < G__324467__a.length) {G__324467__a[G__324467__i] = arguments[G__324467__i + 0]; ++G__324467__i;}
  args = new cljs.core.IndexedSeq(G__324467__a,0);
} 
return G__324466__delegate.call(this,args);};
G__324466.cljs$lang$maxFixedArity = 0;
G__324466.cljs$lang$applyTo = (function (arglist__324468){
var args = cljs.core.seq(arglist__324468);
return G__324466__delegate(args);
});
G__324466.cljs$core$IFn$_invoke$arity$variadic = G__324466__delegate;
return G__324466;
})()
;

return null;
});
