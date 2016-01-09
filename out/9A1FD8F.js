goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__72736__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__72736 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72737__i = 0, G__72737__a = new Array(arguments.length -  0);
while (G__72737__i < G__72737__a.length) {G__72737__a[G__72737__i] = arguments[G__72737__i + 0]; ++G__72737__i;}
  args = new cljs.core.IndexedSeq(G__72737__a,0);
} 
return G__72736__delegate.call(this,args);};
G__72736.cljs$lang$maxFixedArity = 0;
G__72736.cljs$lang$applyTo = (function (arglist__72738){
var args = cljs.core.seq(arglist__72738);
return G__72736__delegate(args);
});
G__72736.cljs$core$IFn$_invoke$arity$variadic = G__72736__delegate;
return G__72736;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__72739__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__72739 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72740__i = 0, G__72740__a = new Array(arguments.length -  0);
while (G__72740__i < G__72740__a.length) {G__72740__a[G__72740__i] = arguments[G__72740__i + 0]; ++G__72740__i;}
  args = new cljs.core.IndexedSeq(G__72740__a,0);
} 
return G__72739__delegate.call(this,args);};
G__72739.cljs$lang$maxFixedArity = 0;
G__72739.cljs$lang$applyTo = (function (arglist__72741){
var args = cljs.core.seq(arglist__72741);
return G__72739__delegate(args);
});
G__72739.cljs$core$IFn$_invoke$arity$variadic = G__72739__delegate;
return G__72739;
})()
;

return null;
});
