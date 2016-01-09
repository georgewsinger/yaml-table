goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__152560__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__152560 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__152561__i = 0, G__152561__a = new Array(arguments.length -  0);
while (G__152561__i < G__152561__a.length) {G__152561__a[G__152561__i] = arguments[G__152561__i + 0]; ++G__152561__i;}
  args = new cljs.core.IndexedSeq(G__152561__a,0);
} 
return G__152560__delegate.call(this,args);};
G__152560.cljs$lang$maxFixedArity = 0;
G__152560.cljs$lang$applyTo = (function (arglist__152562){
var args = cljs.core.seq(arglist__152562);
return G__152560__delegate(args);
});
G__152560.cljs$core$IFn$_invoke$arity$variadic = G__152560__delegate;
return G__152560;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__152563__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__152563 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__152564__i = 0, G__152564__a = new Array(arguments.length -  0);
while (G__152564__i < G__152564__a.length) {G__152564__a[G__152564__i] = arguments[G__152564__i + 0]; ++G__152564__i;}
  args = new cljs.core.IndexedSeq(G__152564__a,0);
} 
return G__152563__delegate.call(this,args);};
G__152563.cljs$lang$maxFixedArity = 0;
G__152563.cljs$lang$applyTo = (function (arglist__152565){
var args = cljs.core.seq(arglist__152565);
return G__152563__delegate(args);
});
G__152563.cljs$core$IFn$_invoke$arity$variadic = G__152563__delegate;
return G__152563;
})()
;

return null;
});
