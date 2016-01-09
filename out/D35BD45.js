goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__151346__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__151346 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__151347__i = 0, G__151347__a = new Array(arguments.length -  0);
while (G__151347__i < G__151347__a.length) {G__151347__a[G__151347__i] = arguments[G__151347__i + 0]; ++G__151347__i;}
  args = new cljs.core.IndexedSeq(G__151347__a,0);
} 
return G__151346__delegate.call(this,args);};
G__151346.cljs$lang$maxFixedArity = 0;
G__151346.cljs$lang$applyTo = (function (arglist__151348){
var args = cljs.core.seq(arglist__151348);
return G__151346__delegate(args);
});
G__151346.cljs$core$IFn$_invoke$arity$variadic = G__151346__delegate;
return G__151346;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__151349__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__151349 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__151350__i = 0, G__151350__a = new Array(arguments.length -  0);
while (G__151350__i < G__151350__a.length) {G__151350__a[G__151350__i] = arguments[G__151350__i + 0]; ++G__151350__i;}
  args = new cljs.core.IndexedSeq(G__151350__a,0);
} 
return G__151349__delegate.call(this,args);};
G__151349.cljs$lang$maxFixedArity = 0;
G__151349.cljs$lang$applyTo = (function (arglist__151351){
var args = cljs.core.seq(arglist__151351);
return G__151349__delegate(args);
});
G__151349.cljs$core$IFn$_invoke$arity$variadic = G__151349__delegate;
return G__151349;
})()
;

return null;
});
