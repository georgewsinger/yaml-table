goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__258922__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__258922 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__258923__i = 0, G__258923__a = new Array(arguments.length -  0);
while (G__258923__i < G__258923__a.length) {G__258923__a[G__258923__i] = arguments[G__258923__i + 0]; ++G__258923__i;}
  args = new cljs.core.IndexedSeq(G__258923__a,0);
} 
return G__258922__delegate.call(this,args);};
G__258922.cljs$lang$maxFixedArity = 0;
G__258922.cljs$lang$applyTo = (function (arglist__258924){
var args = cljs.core.seq(arglist__258924);
return G__258922__delegate(args);
});
G__258922.cljs$core$IFn$_invoke$arity$variadic = G__258922__delegate;
return G__258922;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__258925__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__258925 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__258926__i = 0, G__258926__a = new Array(arguments.length -  0);
while (G__258926__i < G__258926__a.length) {G__258926__a[G__258926__i] = arguments[G__258926__i + 0]; ++G__258926__i;}
  args = new cljs.core.IndexedSeq(G__258926__a,0);
} 
return G__258925__delegate.call(this,args);};
G__258925.cljs$lang$maxFixedArity = 0;
G__258925.cljs$lang$applyTo = (function (arglist__258927){
var args = cljs.core.seq(arglist__258927);
return G__258925__delegate(args);
});
G__258925.cljs$core$IFn$_invoke$arity$variadic = G__258925__delegate;
return G__258925;
})()
;

return null;
});
