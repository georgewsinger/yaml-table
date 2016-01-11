goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__210151__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__210151 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__210152__i = 0, G__210152__a = new Array(arguments.length -  0);
while (G__210152__i < G__210152__a.length) {G__210152__a[G__210152__i] = arguments[G__210152__i + 0]; ++G__210152__i;}
  args = new cljs.core.IndexedSeq(G__210152__a,0);
} 
return G__210151__delegate.call(this,args);};
G__210151.cljs$lang$maxFixedArity = 0;
G__210151.cljs$lang$applyTo = (function (arglist__210153){
var args = cljs.core.seq(arglist__210153);
return G__210151__delegate(args);
});
G__210151.cljs$core$IFn$_invoke$arity$variadic = G__210151__delegate;
return G__210151;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__210154__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__210154 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__210155__i = 0, G__210155__a = new Array(arguments.length -  0);
while (G__210155__i < G__210155__a.length) {G__210155__a[G__210155__i] = arguments[G__210155__i + 0]; ++G__210155__i;}
  args = new cljs.core.IndexedSeq(G__210155__a,0);
} 
return G__210154__delegate.call(this,args);};
G__210154.cljs$lang$maxFixedArity = 0;
G__210154.cljs$lang$applyTo = (function (arglist__210156){
var args = cljs.core.seq(arglist__210156);
return G__210154__delegate(args);
});
G__210154.cljs$core$IFn$_invoke$arity$variadic = G__210154__delegate;
return G__210154;
})()
;

return null;
});
