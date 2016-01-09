goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__131715__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__131715 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__131716__i = 0, G__131716__a = new Array(arguments.length -  0);
while (G__131716__i < G__131716__a.length) {G__131716__a[G__131716__i] = arguments[G__131716__i + 0]; ++G__131716__i;}
  args = new cljs.core.IndexedSeq(G__131716__a,0);
} 
return G__131715__delegate.call(this,args);};
G__131715.cljs$lang$maxFixedArity = 0;
G__131715.cljs$lang$applyTo = (function (arglist__131717){
var args = cljs.core.seq(arglist__131717);
return G__131715__delegate(args);
});
G__131715.cljs$core$IFn$_invoke$arity$variadic = G__131715__delegate;
return G__131715;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__131718__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__131718 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__131719__i = 0, G__131719__a = new Array(arguments.length -  0);
while (G__131719__i < G__131719__a.length) {G__131719__a[G__131719__i] = arguments[G__131719__i + 0]; ++G__131719__i;}
  args = new cljs.core.IndexedSeq(G__131719__a,0);
} 
return G__131718__delegate.call(this,args);};
G__131718.cljs$lang$maxFixedArity = 0;
G__131718.cljs$lang$applyTo = (function (arglist__131720){
var args = cljs.core.seq(arglist__131720);
return G__131718__delegate(args);
});
G__131718.cljs$core$IFn$_invoke$arity$variadic = G__131718__delegate;
return G__131718;
})()
;

return null;
});
