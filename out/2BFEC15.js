goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__206902__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__206902 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__206903__i = 0, G__206903__a = new Array(arguments.length -  0);
while (G__206903__i < G__206903__a.length) {G__206903__a[G__206903__i] = arguments[G__206903__i + 0]; ++G__206903__i;}
  args = new cljs.core.IndexedSeq(G__206903__a,0);
} 
return G__206902__delegate.call(this,args);};
G__206902.cljs$lang$maxFixedArity = 0;
G__206902.cljs$lang$applyTo = (function (arglist__206904){
var args = cljs.core.seq(arglist__206904);
return G__206902__delegate(args);
});
G__206902.cljs$core$IFn$_invoke$arity$variadic = G__206902__delegate;
return G__206902;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__206905__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__206905 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__206906__i = 0, G__206906__a = new Array(arguments.length -  0);
while (G__206906__i < G__206906__a.length) {G__206906__a[G__206906__i] = arguments[G__206906__i + 0]; ++G__206906__i;}
  args = new cljs.core.IndexedSeq(G__206906__a,0);
} 
return G__206905__delegate.call(this,args);};
G__206905.cljs$lang$maxFixedArity = 0;
G__206905.cljs$lang$applyTo = (function (arglist__206907){
var args = cljs.core.seq(arglist__206907);
return G__206905__delegate(args);
});
G__206905.cljs$core$IFn$_invoke$arity$variadic = G__206905__delegate;
return G__206905;
})()
;

return null;
});
