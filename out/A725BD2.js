goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61238__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61239__i = 0, G__61239__a = new Array(arguments.length -  0);
while (G__61239__i < G__61239__a.length) {G__61239__a[G__61239__i] = arguments[G__61239__i + 0]; ++G__61239__i;}
  args = new cljs.core.IndexedSeq(G__61239__a,0);
} 
return G__61238__delegate.call(this,args);};
G__61238.cljs$lang$maxFixedArity = 0;
G__61238.cljs$lang$applyTo = (function (arglist__61240){
var args = cljs.core.seq(arglist__61240);
return G__61238__delegate(args);
});
G__61238.cljs$core$IFn$_invoke$arity$variadic = G__61238__delegate;
return G__61238;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61241__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61242__i = 0, G__61242__a = new Array(arguments.length -  0);
while (G__61242__i < G__61242__a.length) {G__61242__a[G__61242__i] = arguments[G__61242__i + 0]; ++G__61242__i;}
  args = new cljs.core.IndexedSeq(G__61242__a,0);
} 
return G__61241__delegate.call(this,args);};
G__61241.cljs$lang$maxFixedArity = 0;
G__61241.cljs$lang$applyTo = (function (arglist__61243){
var args = cljs.core.seq(arglist__61243);
return G__61241__delegate(args);
});
G__61241.cljs$core$IFn$_invoke$arity$variadic = G__61241__delegate;
return G__61241;
})()
;

return null;
});
