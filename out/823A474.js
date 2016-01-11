goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__290555__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__290555 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__290556__i = 0, G__290556__a = new Array(arguments.length -  0);
while (G__290556__i < G__290556__a.length) {G__290556__a[G__290556__i] = arguments[G__290556__i + 0]; ++G__290556__i;}
  args = new cljs.core.IndexedSeq(G__290556__a,0);
} 
return G__290555__delegate.call(this,args);};
G__290555.cljs$lang$maxFixedArity = 0;
G__290555.cljs$lang$applyTo = (function (arglist__290557){
var args = cljs.core.seq(arglist__290557);
return G__290555__delegate(args);
});
G__290555.cljs$core$IFn$_invoke$arity$variadic = G__290555__delegate;
return G__290555;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__290558__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__290558 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__290559__i = 0, G__290559__a = new Array(arguments.length -  0);
while (G__290559__i < G__290559__a.length) {G__290559__a[G__290559__i] = arguments[G__290559__i + 0]; ++G__290559__i;}
  args = new cljs.core.IndexedSeq(G__290559__a,0);
} 
return G__290558__delegate.call(this,args);};
G__290558.cljs$lang$maxFixedArity = 0;
G__290558.cljs$lang$applyTo = (function (arglist__290560){
var args = cljs.core.seq(arglist__290560);
return G__290558__delegate(args);
});
G__290558.cljs$core$IFn$_invoke$arity$variadic = G__290558__delegate;
return G__290558;
})()
;

return null;
});
