goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__51365__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__51365 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51366__i = 0, G__51366__a = new Array(arguments.length -  0);
while (G__51366__i < G__51366__a.length) {G__51366__a[G__51366__i] = arguments[G__51366__i + 0]; ++G__51366__i;}
  args = new cljs.core.IndexedSeq(G__51366__a,0);
} 
return G__51365__delegate.call(this,args);};
G__51365.cljs$lang$maxFixedArity = 0;
G__51365.cljs$lang$applyTo = (function (arglist__51367){
var args = cljs.core.seq(arglist__51367);
return G__51365__delegate(args);
});
G__51365.cljs$core$IFn$_invoke$arity$variadic = G__51365__delegate;
return G__51365;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__51368__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__51368 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51369__i = 0, G__51369__a = new Array(arguments.length -  0);
while (G__51369__i < G__51369__a.length) {G__51369__a[G__51369__i] = arguments[G__51369__i + 0]; ++G__51369__i;}
  args = new cljs.core.IndexedSeq(G__51369__a,0);
} 
return G__51368__delegate.call(this,args);};
G__51368.cljs$lang$maxFixedArity = 0;
G__51368.cljs$lang$applyTo = (function (arglist__51370){
var args = cljs.core.seq(arglist__51370);
return G__51368__delegate(args);
});
G__51368.cljs$core$IFn$_invoke$arity$variadic = G__51368__delegate;
return G__51368;
})()
;

return null;
});
