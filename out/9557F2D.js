goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__47067__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__47067 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47068__i = 0, G__47068__a = new Array(arguments.length -  0);
while (G__47068__i < G__47068__a.length) {G__47068__a[G__47068__i] = arguments[G__47068__i + 0]; ++G__47068__i;}
  args = new cljs.core.IndexedSeq(G__47068__a,0);
} 
return G__47067__delegate.call(this,args);};
G__47067.cljs$lang$maxFixedArity = 0;
G__47067.cljs$lang$applyTo = (function (arglist__47069){
var args = cljs.core.seq(arglist__47069);
return G__47067__delegate(args);
});
G__47067.cljs$core$IFn$_invoke$arity$variadic = G__47067__delegate;
return G__47067;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__47070__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__47070 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47071__i = 0, G__47071__a = new Array(arguments.length -  0);
while (G__47071__i < G__47071__a.length) {G__47071__a[G__47071__i] = arguments[G__47071__i + 0]; ++G__47071__i;}
  args = new cljs.core.IndexedSeq(G__47071__a,0);
} 
return G__47070__delegate.call(this,args);};
G__47070.cljs$lang$maxFixedArity = 0;
G__47070.cljs$lang$applyTo = (function (arglist__47072){
var args = cljs.core.seq(arglist__47072);
return G__47070__delegate(args);
});
G__47070.cljs$core$IFn$_invoke$arity$variadic = G__47070__delegate;
return G__47070;
})()
;

return null;
});
