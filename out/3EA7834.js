goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__108911__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__108911 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__108912__i = 0, G__108912__a = new Array(arguments.length -  0);
while (G__108912__i < G__108912__a.length) {G__108912__a[G__108912__i] = arguments[G__108912__i + 0]; ++G__108912__i;}
  args = new cljs.core.IndexedSeq(G__108912__a,0);
} 
return G__108911__delegate.call(this,args);};
G__108911.cljs$lang$maxFixedArity = 0;
G__108911.cljs$lang$applyTo = (function (arglist__108913){
var args = cljs.core.seq(arglist__108913);
return G__108911__delegate(args);
});
G__108911.cljs$core$IFn$_invoke$arity$variadic = G__108911__delegate;
return G__108911;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__108914__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__108914 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__108915__i = 0, G__108915__a = new Array(arguments.length -  0);
while (G__108915__i < G__108915__a.length) {G__108915__a[G__108915__i] = arguments[G__108915__i + 0]; ++G__108915__i;}
  args = new cljs.core.IndexedSeq(G__108915__a,0);
} 
return G__108914__delegate.call(this,args);};
G__108914.cljs$lang$maxFixedArity = 0;
G__108914.cljs$lang$applyTo = (function (arglist__108916){
var args = cljs.core.seq(arglist__108916);
return G__108914__delegate(args);
});
G__108914.cljs$core$IFn$_invoke$arity$variadic = G__108914__delegate;
return G__108914;
})()
;

return null;
});
