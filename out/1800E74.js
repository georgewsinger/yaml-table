goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__150899__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__150899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__150900__i = 0, G__150900__a = new Array(arguments.length -  0);
while (G__150900__i < G__150900__a.length) {G__150900__a[G__150900__i] = arguments[G__150900__i + 0]; ++G__150900__i;}
  args = new cljs.core.IndexedSeq(G__150900__a,0);
} 
return G__150899__delegate.call(this,args);};
G__150899.cljs$lang$maxFixedArity = 0;
G__150899.cljs$lang$applyTo = (function (arglist__150901){
var args = cljs.core.seq(arglist__150901);
return G__150899__delegate(args);
});
G__150899.cljs$core$IFn$_invoke$arity$variadic = G__150899__delegate;
return G__150899;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__150902__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__150902 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__150903__i = 0, G__150903__a = new Array(arguments.length -  0);
while (G__150903__i < G__150903__a.length) {G__150903__a[G__150903__i] = arguments[G__150903__i + 0]; ++G__150903__i;}
  args = new cljs.core.IndexedSeq(G__150903__a,0);
} 
return G__150902__delegate.call(this,args);};
G__150902.cljs$lang$maxFixedArity = 0;
G__150902.cljs$lang$applyTo = (function (arglist__150904){
var args = cljs.core.seq(arglist__150904);
return G__150902__delegate(args);
});
G__150902.cljs$core$IFn$_invoke$arity$variadic = G__150902__delegate;
return G__150902;
})()
;

return null;
});
