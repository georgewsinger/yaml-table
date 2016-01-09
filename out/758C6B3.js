goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__87014__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__87014 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87015__i = 0, G__87015__a = new Array(arguments.length -  0);
while (G__87015__i < G__87015__a.length) {G__87015__a[G__87015__i] = arguments[G__87015__i + 0]; ++G__87015__i;}
  args = new cljs.core.IndexedSeq(G__87015__a,0);
} 
return G__87014__delegate.call(this,args);};
G__87014.cljs$lang$maxFixedArity = 0;
G__87014.cljs$lang$applyTo = (function (arglist__87016){
var args = cljs.core.seq(arglist__87016);
return G__87014__delegate(args);
});
G__87014.cljs$core$IFn$_invoke$arity$variadic = G__87014__delegate;
return G__87014;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__87017__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__87017 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87018__i = 0, G__87018__a = new Array(arguments.length -  0);
while (G__87018__i < G__87018__a.length) {G__87018__a[G__87018__i] = arguments[G__87018__i + 0]; ++G__87018__i;}
  args = new cljs.core.IndexedSeq(G__87018__a,0);
} 
return G__87017__delegate.call(this,args);};
G__87017.cljs$lang$maxFixedArity = 0;
G__87017.cljs$lang$applyTo = (function (arglist__87019){
var args = cljs.core.seq(arglist__87019);
return G__87017__delegate(args);
});
G__87017.cljs$core$IFn$_invoke$arity$variadic = G__87017__delegate;
return G__87017;
})()
;

return null;
});
