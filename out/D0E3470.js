goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58349__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58349 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58350__i = 0, G__58350__a = new Array(arguments.length -  0);
while (G__58350__i < G__58350__a.length) {G__58350__a[G__58350__i] = arguments[G__58350__i + 0]; ++G__58350__i;}
  args = new cljs.core.IndexedSeq(G__58350__a,0);
} 
return G__58349__delegate.call(this,args);};
G__58349.cljs$lang$maxFixedArity = 0;
G__58349.cljs$lang$applyTo = (function (arglist__58351){
var args = cljs.core.seq(arglist__58351);
return G__58349__delegate(args);
});
G__58349.cljs$core$IFn$_invoke$arity$variadic = G__58349__delegate;
return G__58349;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58352__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58352 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58353__i = 0, G__58353__a = new Array(arguments.length -  0);
while (G__58353__i < G__58353__a.length) {G__58353__a[G__58353__i] = arguments[G__58353__i + 0]; ++G__58353__i;}
  args = new cljs.core.IndexedSeq(G__58353__a,0);
} 
return G__58352__delegate.call(this,args);};
G__58352.cljs$lang$maxFixedArity = 0;
G__58352.cljs$lang$applyTo = (function (arglist__58354){
var args = cljs.core.seq(arglist__58354);
return G__58352__delegate(args);
});
G__58352.cljs$core$IFn$_invoke$arity$variadic = G__58352__delegate;
return G__58352;
})()
;

return null;
});
