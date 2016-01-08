goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34840__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34840 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34841__i = 0, G__34841__a = new Array(arguments.length -  0);
while (G__34841__i < G__34841__a.length) {G__34841__a[G__34841__i] = arguments[G__34841__i + 0]; ++G__34841__i;}
  args = new cljs.core.IndexedSeq(G__34841__a,0);
} 
return G__34840__delegate.call(this,args);};
G__34840.cljs$lang$maxFixedArity = 0;
G__34840.cljs$lang$applyTo = (function (arglist__34842){
var args = cljs.core.seq(arglist__34842);
return G__34840__delegate(args);
});
G__34840.cljs$core$IFn$_invoke$arity$variadic = G__34840__delegate;
return G__34840;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34843__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34843 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34844__i = 0, G__34844__a = new Array(arguments.length -  0);
while (G__34844__i < G__34844__a.length) {G__34844__a[G__34844__i] = arguments[G__34844__i + 0]; ++G__34844__i;}
  args = new cljs.core.IndexedSeq(G__34844__a,0);
} 
return G__34843__delegate.call(this,args);};
G__34843.cljs$lang$maxFixedArity = 0;
G__34843.cljs$lang$applyTo = (function (arglist__34845){
var args = cljs.core.seq(arglist__34845);
return G__34843__delegate(args);
});
G__34843.cljs$core$IFn$_invoke$arity$variadic = G__34843__delegate;
return G__34843;
})()
;

return null;
});
