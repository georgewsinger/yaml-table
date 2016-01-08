goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31838__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31838 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31839__i = 0, G__31839__a = new Array(arguments.length -  0);
while (G__31839__i < G__31839__a.length) {G__31839__a[G__31839__i] = arguments[G__31839__i + 0]; ++G__31839__i;}
  args = new cljs.core.IndexedSeq(G__31839__a,0);
} 
return G__31838__delegate.call(this,args);};
G__31838.cljs$lang$maxFixedArity = 0;
G__31838.cljs$lang$applyTo = (function (arglist__31840){
var args = cljs.core.seq(arglist__31840);
return G__31838__delegate(args);
});
G__31838.cljs$core$IFn$_invoke$arity$variadic = G__31838__delegate;
return G__31838;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31841__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31841 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31842__i = 0, G__31842__a = new Array(arguments.length -  0);
while (G__31842__i < G__31842__a.length) {G__31842__a[G__31842__i] = arguments[G__31842__i + 0]; ++G__31842__i;}
  args = new cljs.core.IndexedSeq(G__31842__a,0);
} 
return G__31841__delegate.call(this,args);};
G__31841.cljs$lang$maxFixedArity = 0;
G__31841.cljs$lang$applyTo = (function (arglist__31843){
var args = cljs.core.seq(arglist__31843);
return G__31841__delegate(args);
});
G__31841.cljs$core$IFn$_invoke$arity$variadic = G__31841__delegate;
return G__31841;
})()
;

return null;
});
