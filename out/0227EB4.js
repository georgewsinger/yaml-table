goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__217278__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__217278 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__217279__i = 0, G__217279__a = new Array(arguments.length -  0);
while (G__217279__i < G__217279__a.length) {G__217279__a[G__217279__i] = arguments[G__217279__i + 0]; ++G__217279__i;}
  args = new cljs.core.IndexedSeq(G__217279__a,0);
} 
return G__217278__delegate.call(this,args);};
G__217278.cljs$lang$maxFixedArity = 0;
G__217278.cljs$lang$applyTo = (function (arglist__217280){
var args = cljs.core.seq(arglist__217280);
return G__217278__delegate(args);
});
G__217278.cljs$core$IFn$_invoke$arity$variadic = G__217278__delegate;
return G__217278;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__217281__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__217281 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__217282__i = 0, G__217282__a = new Array(arguments.length -  0);
while (G__217282__i < G__217282__a.length) {G__217282__a[G__217282__i] = arguments[G__217282__i + 0]; ++G__217282__i;}
  args = new cljs.core.IndexedSeq(G__217282__a,0);
} 
return G__217281__delegate.call(this,args);};
G__217281.cljs$lang$maxFixedArity = 0;
G__217281.cljs$lang$applyTo = (function (arglist__217283){
var args = cljs.core.seq(arglist__217283);
return G__217281__delegate(args);
});
G__217281.cljs$core$IFn$_invoke$arity$variadic = G__217281__delegate;
return G__217281;
})()
;

return null;
});
