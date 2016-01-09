goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__159751__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__159751 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__159752__i = 0, G__159752__a = new Array(arguments.length -  0);
while (G__159752__i < G__159752__a.length) {G__159752__a[G__159752__i] = arguments[G__159752__i + 0]; ++G__159752__i;}
  args = new cljs.core.IndexedSeq(G__159752__a,0);
} 
return G__159751__delegate.call(this,args);};
G__159751.cljs$lang$maxFixedArity = 0;
G__159751.cljs$lang$applyTo = (function (arglist__159753){
var args = cljs.core.seq(arglist__159753);
return G__159751__delegate(args);
});
G__159751.cljs$core$IFn$_invoke$arity$variadic = G__159751__delegate;
return G__159751;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__159754__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__159754 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__159755__i = 0, G__159755__a = new Array(arguments.length -  0);
while (G__159755__i < G__159755__a.length) {G__159755__a[G__159755__i] = arguments[G__159755__i + 0]; ++G__159755__i;}
  args = new cljs.core.IndexedSeq(G__159755__a,0);
} 
return G__159754__delegate.call(this,args);};
G__159754.cljs$lang$maxFixedArity = 0;
G__159754.cljs$lang$applyTo = (function (arglist__159756){
var args = cljs.core.seq(arglist__159756);
return G__159754__delegate(args);
});
G__159754.cljs$core$IFn$_invoke$arity$variadic = G__159754__delegate;
return G__159754;
})()
;

return null;
});
