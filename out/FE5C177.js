goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__333718__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__333718 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__333719__i = 0, G__333719__a = new Array(arguments.length -  0);
while (G__333719__i < G__333719__a.length) {G__333719__a[G__333719__i] = arguments[G__333719__i + 0]; ++G__333719__i;}
  args = new cljs.core.IndexedSeq(G__333719__a,0);
} 
return G__333718__delegate.call(this,args);};
G__333718.cljs$lang$maxFixedArity = 0;
G__333718.cljs$lang$applyTo = (function (arglist__333720){
var args = cljs.core.seq(arglist__333720);
return G__333718__delegate(args);
});
G__333718.cljs$core$IFn$_invoke$arity$variadic = G__333718__delegate;
return G__333718;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__333721__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__333721 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__333722__i = 0, G__333722__a = new Array(arguments.length -  0);
while (G__333722__i < G__333722__a.length) {G__333722__a[G__333722__i] = arguments[G__333722__i + 0]; ++G__333722__i;}
  args = new cljs.core.IndexedSeq(G__333722__a,0);
} 
return G__333721__delegate.call(this,args);};
G__333721.cljs$lang$maxFixedArity = 0;
G__333721.cljs$lang$applyTo = (function (arglist__333723){
var args = cljs.core.seq(arglist__333723);
return G__333721__delegate(args);
});
G__333721.cljs$core$IFn$_invoke$arity$variadic = G__333721__delegate;
return G__333721;
})()
;

return null;
});
