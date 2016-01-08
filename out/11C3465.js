goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26764__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26764 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26765__i = 0, G__26765__a = new Array(arguments.length -  0);
while (G__26765__i < G__26765__a.length) {G__26765__a[G__26765__i] = arguments[G__26765__i + 0]; ++G__26765__i;}
  args = new cljs.core.IndexedSeq(G__26765__a,0);
} 
return G__26764__delegate.call(this,args);};
G__26764.cljs$lang$maxFixedArity = 0;
G__26764.cljs$lang$applyTo = (function (arglist__26766){
var args = cljs.core.seq(arglist__26766);
return G__26764__delegate(args);
});
G__26764.cljs$core$IFn$_invoke$arity$variadic = G__26764__delegate;
return G__26764;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26767__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26767 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26768__i = 0, G__26768__a = new Array(arguments.length -  0);
while (G__26768__i < G__26768__a.length) {G__26768__a[G__26768__i] = arguments[G__26768__i + 0]; ++G__26768__i;}
  args = new cljs.core.IndexedSeq(G__26768__a,0);
} 
return G__26767__delegate.call(this,args);};
G__26767.cljs$lang$maxFixedArity = 0;
G__26767.cljs$lang$applyTo = (function (arglist__26769){
var args = cljs.core.seq(arglist__26769);
return G__26767__delegate(args);
});
G__26767.cljs$core$IFn$_invoke$arity$variadic = G__26767__delegate;
return G__26767;
})()
;

return null;
});
