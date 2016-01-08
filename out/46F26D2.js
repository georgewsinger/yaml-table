goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24842__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24842 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24843__i = 0, G__24843__a = new Array(arguments.length -  0);
while (G__24843__i < G__24843__a.length) {G__24843__a[G__24843__i] = arguments[G__24843__i + 0]; ++G__24843__i;}
  args = new cljs.core.IndexedSeq(G__24843__a,0);
} 
return G__24842__delegate.call(this,args);};
G__24842.cljs$lang$maxFixedArity = 0;
G__24842.cljs$lang$applyTo = (function (arglist__24844){
var args = cljs.core.seq(arglist__24844);
return G__24842__delegate(args);
});
G__24842.cljs$core$IFn$_invoke$arity$variadic = G__24842__delegate;
return G__24842;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24845__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24845 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24846__i = 0, G__24846__a = new Array(arguments.length -  0);
while (G__24846__i < G__24846__a.length) {G__24846__a[G__24846__i] = arguments[G__24846__i + 0]; ++G__24846__i;}
  args = new cljs.core.IndexedSeq(G__24846__a,0);
} 
return G__24845__delegate.call(this,args);};
G__24845.cljs$lang$maxFixedArity = 0;
G__24845.cljs$lang$applyTo = (function (arglist__24847){
var args = cljs.core.seq(arglist__24847);
return G__24845__delegate(args);
});
G__24845.cljs$core$IFn$_invoke$arity$variadic = G__24845__delegate;
return G__24845;
})()
;

return null;
});
