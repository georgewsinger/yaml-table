goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54795__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54795 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54796__i = 0, G__54796__a = new Array(arguments.length -  0);
while (G__54796__i < G__54796__a.length) {G__54796__a[G__54796__i] = arguments[G__54796__i + 0]; ++G__54796__i;}
  args = new cljs.core.IndexedSeq(G__54796__a,0);
} 
return G__54795__delegate.call(this,args);};
G__54795.cljs$lang$maxFixedArity = 0;
G__54795.cljs$lang$applyTo = (function (arglist__54797){
var args = cljs.core.seq(arglist__54797);
return G__54795__delegate(args);
});
G__54795.cljs$core$IFn$_invoke$arity$variadic = G__54795__delegate;
return G__54795;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54798__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54798 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54799__i = 0, G__54799__a = new Array(arguments.length -  0);
while (G__54799__i < G__54799__a.length) {G__54799__a[G__54799__i] = arguments[G__54799__i + 0]; ++G__54799__i;}
  args = new cljs.core.IndexedSeq(G__54799__a,0);
} 
return G__54798__delegate.call(this,args);};
G__54798.cljs$lang$maxFixedArity = 0;
G__54798.cljs$lang$applyTo = (function (arglist__54800){
var args = cljs.core.seq(arglist__54800);
return G__54798__delegate(args);
});
G__54798.cljs$core$IFn$_invoke$arity$variadic = G__54798__delegate;
return G__54798;
})()
;

return null;
});
