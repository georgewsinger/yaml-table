goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__87640__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__87640 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87641__i = 0, G__87641__a = new Array(arguments.length -  0);
while (G__87641__i < G__87641__a.length) {G__87641__a[G__87641__i] = arguments[G__87641__i + 0]; ++G__87641__i;}
  args = new cljs.core.IndexedSeq(G__87641__a,0);
} 
return G__87640__delegate.call(this,args);};
G__87640.cljs$lang$maxFixedArity = 0;
G__87640.cljs$lang$applyTo = (function (arglist__87642){
var args = cljs.core.seq(arglist__87642);
return G__87640__delegate(args);
});
G__87640.cljs$core$IFn$_invoke$arity$variadic = G__87640__delegate;
return G__87640;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__87643__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__87643 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87644__i = 0, G__87644__a = new Array(arguments.length -  0);
while (G__87644__i < G__87644__a.length) {G__87644__a[G__87644__i] = arguments[G__87644__i + 0]; ++G__87644__i;}
  args = new cljs.core.IndexedSeq(G__87644__a,0);
} 
return G__87643__delegate.call(this,args);};
G__87643.cljs$lang$maxFixedArity = 0;
G__87643.cljs$lang$applyTo = (function (arglist__87645){
var args = cljs.core.seq(arglist__87645);
return G__87643__delegate(args);
});
G__87643.cljs$core$IFn$_invoke$arity$variadic = G__87643__delegate;
return G__87643;
})()
;

return null;
});
