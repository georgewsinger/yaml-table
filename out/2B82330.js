goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__71463__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__71463 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71464__i = 0, G__71464__a = new Array(arguments.length -  0);
while (G__71464__i < G__71464__a.length) {G__71464__a[G__71464__i] = arguments[G__71464__i + 0]; ++G__71464__i;}
  args = new cljs.core.IndexedSeq(G__71464__a,0);
} 
return G__71463__delegate.call(this,args);};
G__71463.cljs$lang$maxFixedArity = 0;
G__71463.cljs$lang$applyTo = (function (arglist__71465){
var args = cljs.core.seq(arglist__71465);
return G__71463__delegate(args);
});
G__71463.cljs$core$IFn$_invoke$arity$variadic = G__71463__delegate;
return G__71463;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__71466__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__71466 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71467__i = 0, G__71467__a = new Array(arguments.length -  0);
while (G__71467__i < G__71467__a.length) {G__71467__a[G__71467__i] = arguments[G__71467__i + 0]; ++G__71467__i;}
  args = new cljs.core.IndexedSeq(G__71467__a,0);
} 
return G__71466__delegate.call(this,args);};
G__71466.cljs$lang$maxFixedArity = 0;
G__71466.cljs$lang$applyTo = (function (arglist__71468){
var args = cljs.core.seq(arglist__71468);
return G__71466__delegate(args);
});
G__71466.cljs$core$IFn$_invoke$arity$variadic = G__71466__delegate;
return G__71466;
})()
;

return null;
});
