goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__157539__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__157539 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__157540__i = 0, G__157540__a = new Array(arguments.length -  0);
while (G__157540__i < G__157540__a.length) {G__157540__a[G__157540__i] = arguments[G__157540__i + 0]; ++G__157540__i;}
  args = new cljs.core.IndexedSeq(G__157540__a,0);
} 
return G__157539__delegate.call(this,args);};
G__157539.cljs$lang$maxFixedArity = 0;
G__157539.cljs$lang$applyTo = (function (arglist__157541){
var args = cljs.core.seq(arglist__157541);
return G__157539__delegate(args);
});
G__157539.cljs$core$IFn$_invoke$arity$variadic = G__157539__delegate;
return G__157539;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__157542__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__157542 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__157543__i = 0, G__157543__a = new Array(arguments.length -  0);
while (G__157543__i < G__157543__a.length) {G__157543__a[G__157543__i] = arguments[G__157543__i + 0]; ++G__157543__i;}
  args = new cljs.core.IndexedSeq(G__157543__a,0);
} 
return G__157542__delegate.call(this,args);};
G__157542.cljs$lang$maxFixedArity = 0;
G__157542.cljs$lang$applyTo = (function (arglist__157544){
var args = cljs.core.seq(arglist__157544);
return G__157542__delegate(args);
});
G__157542.cljs$core$IFn$_invoke$arity$variadic = G__157542__delegate;
return G__157542;
})()
;

return null;
});
