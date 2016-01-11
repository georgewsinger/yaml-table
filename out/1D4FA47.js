goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__347180__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__347180 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__347181__i = 0, G__347181__a = new Array(arguments.length -  0);
while (G__347181__i < G__347181__a.length) {G__347181__a[G__347181__i] = arguments[G__347181__i + 0]; ++G__347181__i;}
  args = new cljs.core.IndexedSeq(G__347181__a,0);
} 
return G__347180__delegate.call(this,args);};
G__347180.cljs$lang$maxFixedArity = 0;
G__347180.cljs$lang$applyTo = (function (arglist__347182){
var args = cljs.core.seq(arglist__347182);
return G__347180__delegate(args);
});
G__347180.cljs$core$IFn$_invoke$arity$variadic = G__347180__delegate;
return G__347180;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__347183__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__347183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__347184__i = 0, G__347184__a = new Array(arguments.length -  0);
while (G__347184__i < G__347184__a.length) {G__347184__a[G__347184__i] = arguments[G__347184__i + 0]; ++G__347184__i;}
  args = new cljs.core.IndexedSeq(G__347184__a,0);
} 
return G__347183__delegate.call(this,args);};
G__347183.cljs$lang$maxFixedArity = 0;
G__347183.cljs$lang$applyTo = (function (arglist__347185){
var args = cljs.core.seq(arglist__347185);
return G__347183__delegate(args);
});
G__347183.cljs$core$IFn$_invoke$arity$variadic = G__347183__delegate;
return G__347183;
})()
;

return null;
});
