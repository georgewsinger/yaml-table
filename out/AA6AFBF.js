goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__52899__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__52899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52900__i = 0, G__52900__a = new Array(arguments.length -  0);
while (G__52900__i < G__52900__a.length) {G__52900__a[G__52900__i] = arguments[G__52900__i + 0]; ++G__52900__i;}
  args = new cljs.core.IndexedSeq(G__52900__a,0);
} 
return G__52899__delegate.call(this,args);};
G__52899.cljs$lang$maxFixedArity = 0;
G__52899.cljs$lang$applyTo = (function (arglist__52901){
var args = cljs.core.seq(arglist__52901);
return G__52899__delegate(args);
});
G__52899.cljs$core$IFn$_invoke$arity$variadic = G__52899__delegate;
return G__52899;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__52902__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__52902 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52903__i = 0, G__52903__a = new Array(arguments.length -  0);
while (G__52903__i < G__52903__a.length) {G__52903__a[G__52903__i] = arguments[G__52903__i + 0]; ++G__52903__i;}
  args = new cljs.core.IndexedSeq(G__52903__a,0);
} 
return G__52902__delegate.call(this,args);};
G__52902.cljs$lang$maxFixedArity = 0;
G__52902.cljs$lang$applyTo = (function (arglist__52904){
var args = cljs.core.seq(arglist__52904);
return G__52902__delegate(args);
});
G__52902.cljs$core$IFn$_invoke$arity$variadic = G__52902__delegate;
return G__52902;
})()
;

return null;
});
