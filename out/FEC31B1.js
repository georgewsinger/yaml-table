goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__110935__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__110935 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__110936__i = 0, G__110936__a = new Array(arguments.length -  0);
while (G__110936__i < G__110936__a.length) {G__110936__a[G__110936__i] = arguments[G__110936__i + 0]; ++G__110936__i;}
  args = new cljs.core.IndexedSeq(G__110936__a,0);
} 
return G__110935__delegate.call(this,args);};
G__110935.cljs$lang$maxFixedArity = 0;
G__110935.cljs$lang$applyTo = (function (arglist__110937){
var args = cljs.core.seq(arglist__110937);
return G__110935__delegate(args);
});
G__110935.cljs$core$IFn$_invoke$arity$variadic = G__110935__delegate;
return G__110935;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__110938__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__110938 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__110939__i = 0, G__110939__a = new Array(arguments.length -  0);
while (G__110939__i < G__110939__a.length) {G__110939__a[G__110939__i] = arguments[G__110939__i + 0]; ++G__110939__i;}
  args = new cljs.core.IndexedSeq(G__110939__a,0);
} 
return G__110938__delegate.call(this,args);};
G__110938.cljs$lang$maxFixedArity = 0;
G__110938.cljs$lang$applyTo = (function (arglist__110940){
var args = cljs.core.seq(arglist__110940);
return G__110938__delegate(args);
});
G__110938.cljs$core$IFn$_invoke$arity$variadic = G__110938__delegate;
return G__110938;
})()
;

return null;
});
