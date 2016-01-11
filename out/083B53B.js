goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__307531__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__307531 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__307532__i = 0, G__307532__a = new Array(arguments.length -  0);
while (G__307532__i < G__307532__a.length) {G__307532__a[G__307532__i] = arguments[G__307532__i + 0]; ++G__307532__i;}
  args = new cljs.core.IndexedSeq(G__307532__a,0);
} 
return G__307531__delegate.call(this,args);};
G__307531.cljs$lang$maxFixedArity = 0;
G__307531.cljs$lang$applyTo = (function (arglist__307533){
var args = cljs.core.seq(arglist__307533);
return G__307531__delegate(args);
});
G__307531.cljs$core$IFn$_invoke$arity$variadic = G__307531__delegate;
return G__307531;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__307534__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__307534 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__307535__i = 0, G__307535__a = new Array(arguments.length -  0);
while (G__307535__i < G__307535__a.length) {G__307535__a[G__307535__i] = arguments[G__307535__i + 0]; ++G__307535__i;}
  args = new cljs.core.IndexedSeq(G__307535__a,0);
} 
return G__307534__delegate.call(this,args);};
G__307534.cljs$lang$maxFixedArity = 0;
G__307534.cljs$lang$applyTo = (function (arglist__307536){
var args = cljs.core.seq(arglist__307536);
return G__307534__delegate(args);
});
G__307534.cljs$core$IFn$_invoke$arity$variadic = G__307534__delegate;
return G__307534;
})()
;

return null;
});
