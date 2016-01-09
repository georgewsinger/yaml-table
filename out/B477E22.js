goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__148874__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__148874 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__148875__i = 0, G__148875__a = new Array(arguments.length -  0);
while (G__148875__i < G__148875__a.length) {G__148875__a[G__148875__i] = arguments[G__148875__i + 0]; ++G__148875__i;}
  args = new cljs.core.IndexedSeq(G__148875__a,0);
} 
return G__148874__delegate.call(this,args);};
G__148874.cljs$lang$maxFixedArity = 0;
G__148874.cljs$lang$applyTo = (function (arglist__148876){
var args = cljs.core.seq(arglist__148876);
return G__148874__delegate(args);
});
G__148874.cljs$core$IFn$_invoke$arity$variadic = G__148874__delegate;
return G__148874;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__148877__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__148877 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__148878__i = 0, G__148878__a = new Array(arguments.length -  0);
while (G__148878__i < G__148878__a.length) {G__148878__a[G__148878__i] = arguments[G__148878__i + 0]; ++G__148878__i;}
  args = new cljs.core.IndexedSeq(G__148878__a,0);
} 
return G__148877__delegate.call(this,args);};
G__148877.cljs$lang$maxFixedArity = 0;
G__148877.cljs$lang$applyTo = (function (arglist__148879){
var args = cljs.core.seq(arglist__148879);
return G__148877__delegate(args);
});
G__148877.cljs$core$IFn$_invoke$arity$variadic = G__148877__delegate;
return G__148877;
})()
;

return null;
});
