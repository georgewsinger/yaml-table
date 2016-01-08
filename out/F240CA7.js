goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34851__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34851 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34852__i = 0, G__34852__a = new Array(arguments.length -  0);
while (G__34852__i < G__34852__a.length) {G__34852__a[G__34852__i] = arguments[G__34852__i + 0]; ++G__34852__i;}
  args = new cljs.core.IndexedSeq(G__34852__a,0);
} 
return G__34851__delegate.call(this,args);};
G__34851.cljs$lang$maxFixedArity = 0;
G__34851.cljs$lang$applyTo = (function (arglist__34853){
var args = cljs.core.seq(arglist__34853);
return G__34851__delegate(args);
});
G__34851.cljs$core$IFn$_invoke$arity$variadic = G__34851__delegate;
return G__34851;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34854__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34854 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34855__i = 0, G__34855__a = new Array(arguments.length -  0);
while (G__34855__i < G__34855__a.length) {G__34855__a[G__34855__i] = arguments[G__34855__i + 0]; ++G__34855__i;}
  args = new cljs.core.IndexedSeq(G__34855__a,0);
} 
return G__34854__delegate.call(this,args);};
G__34854.cljs$lang$maxFixedArity = 0;
G__34854.cljs$lang$applyTo = (function (arglist__34856){
var args = cljs.core.seq(arglist__34856);
return G__34854__delegate(args);
});
G__34854.cljs$core$IFn$_invoke$arity$variadic = G__34854__delegate;
return G__34854;
})()
;

return null;
});
