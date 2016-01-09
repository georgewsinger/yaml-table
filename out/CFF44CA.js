goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__135336__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__135336 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__135337__i = 0, G__135337__a = new Array(arguments.length -  0);
while (G__135337__i < G__135337__a.length) {G__135337__a[G__135337__i] = arguments[G__135337__i + 0]; ++G__135337__i;}
  args = new cljs.core.IndexedSeq(G__135337__a,0);
} 
return G__135336__delegate.call(this,args);};
G__135336.cljs$lang$maxFixedArity = 0;
G__135336.cljs$lang$applyTo = (function (arglist__135338){
var args = cljs.core.seq(arglist__135338);
return G__135336__delegate(args);
});
G__135336.cljs$core$IFn$_invoke$arity$variadic = G__135336__delegate;
return G__135336;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__135339__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__135339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__135340__i = 0, G__135340__a = new Array(arguments.length -  0);
while (G__135340__i < G__135340__a.length) {G__135340__a[G__135340__i] = arguments[G__135340__i + 0]; ++G__135340__i;}
  args = new cljs.core.IndexedSeq(G__135340__a,0);
} 
return G__135339__delegate.call(this,args);};
G__135339.cljs$lang$maxFixedArity = 0;
G__135339.cljs$lang$applyTo = (function (arglist__135341){
var args = cljs.core.seq(arglist__135341);
return G__135339__delegate(args);
});
G__135339.cljs$core$IFn$_invoke$arity$variadic = G__135339__delegate;
return G__135339;
})()
;

return null;
});
