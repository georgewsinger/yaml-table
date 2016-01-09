goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__143874__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__143874 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__143875__i = 0, G__143875__a = new Array(arguments.length -  0);
while (G__143875__i < G__143875__a.length) {G__143875__a[G__143875__i] = arguments[G__143875__i + 0]; ++G__143875__i;}
  args = new cljs.core.IndexedSeq(G__143875__a,0);
} 
return G__143874__delegate.call(this,args);};
G__143874.cljs$lang$maxFixedArity = 0;
G__143874.cljs$lang$applyTo = (function (arglist__143876){
var args = cljs.core.seq(arglist__143876);
return G__143874__delegate(args);
});
G__143874.cljs$core$IFn$_invoke$arity$variadic = G__143874__delegate;
return G__143874;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__143877__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__143877 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__143878__i = 0, G__143878__a = new Array(arguments.length -  0);
while (G__143878__i < G__143878__a.length) {G__143878__a[G__143878__i] = arguments[G__143878__i + 0]; ++G__143878__i;}
  args = new cljs.core.IndexedSeq(G__143878__a,0);
} 
return G__143877__delegate.call(this,args);};
G__143877.cljs$lang$maxFixedArity = 0;
G__143877.cljs$lang$applyTo = (function (arglist__143879){
var args = cljs.core.seq(arglist__143879);
return G__143877__delegate(args);
});
G__143877.cljs$core$IFn$_invoke$arity$variadic = G__143877__delegate;
return G__143877;
})()
;

return null;
});
