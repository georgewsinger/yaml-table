goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__77882__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__77882 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77883__i = 0, G__77883__a = new Array(arguments.length -  0);
while (G__77883__i < G__77883__a.length) {G__77883__a[G__77883__i] = arguments[G__77883__i + 0]; ++G__77883__i;}
  args = new cljs.core.IndexedSeq(G__77883__a,0);
} 
return G__77882__delegate.call(this,args);};
G__77882.cljs$lang$maxFixedArity = 0;
G__77882.cljs$lang$applyTo = (function (arglist__77884){
var args = cljs.core.seq(arglist__77884);
return G__77882__delegate(args);
});
G__77882.cljs$core$IFn$_invoke$arity$variadic = G__77882__delegate;
return G__77882;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__77885__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__77885 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77886__i = 0, G__77886__a = new Array(arguments.length -  0);
while (G__77886__i < G__77886__a.length) {G__77886__a[G__77886__i] = arguments[G__77886__i + 0]; ++G__77886__i;}
  args = new cljs.core.IndexedSeq(G__77886__a,0);
} 
return G__77885__delegate.call(this,args);};
G__77885.cljs$lang$maxFixedArity = 0;
G__77885.cljs$lang$applyTo = (function (arglist__77887){
var args = cljs.core.seq(arglist__77887);
return G__77885__delegate(args);
});
G__77885.cljs$core$IFn$_invoke$arity$variadic = G__77885__delegate;
return G__77885;
})()
;

return null;
});
