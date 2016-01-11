goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__286601__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__286601 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__286602__i = 0, G__286602__a = new Array(arguments.length -  0);
while (G__286602__i < G__286602__a.length) {G__286602__a[G__286602__i] = arguments[G__286602__i + 0]; ++G__286602__i;}
  args = new cljs.core.IndexedSeq(G__286602__a,0);
} 
return G__286601__delegate.call(this,args);};
G__286601.cljs$lang$maxFixedArity = 0;
G__286601.cljs$lang$applyTo = (function (arglist__286603){
var args = cljs.core.seq(arglist__286603);
return G__286601__delegate(args);
});
G__286601.cljs$core$IFn$_invoke$arity$variadic = G__286601__delegate;
return G__286601;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__286604__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__286604 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__286605__i = 0, G__286605__a = new Array(arguments.length -  0);
while (G__286605__i < G__286605__a.length) {G__286605__a[G__286605__i] = arguments[G__286605__i + 0]; ++G__286605__i;}
  args = new cljs.core.IndexedSeq(G__286605__a,0);
} 
return G__286604__delegate.call(this,args);};
G__286604.cljs$lang$maxFixedArity = 0;
G__286604.cljs$lang$applyTo = (function (arglist__286606){
var args = cljs.core.seq(arglist__286606);
return G__286604__delegate(args);
});
G__286604.cljs$core$IFn$_invoke$arity$variadic = G__286604__delegate;
return G__286604;
})()
;

return null;
});
