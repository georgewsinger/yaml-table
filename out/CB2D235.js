goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__171913__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__171913 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__171914__i = 0, G__171914__a = new Array(arguments.length -  0);
while (G__171914__i < G__171914__a.length) {G__171914__a[G__171914__i] = arguments[G__171914__i + 0]; ++G__171914__i;}
  args = new cljs.core.IndexedSeq(G__171914__a,0);
} 
return G__171913__delegate.call(this,args);};
G__171913.cljs$lang$maxFixedArity = 0;
G__171913.cljs$lang$applyTo = (function (arglist__171915){
var args = cljs.core.seq(arglist__171915);
return G__171913__delegate(args);
});
G__171913.cljs$core$IFn$_invoke$arity$variadic = G__171913__delegate;
return G__171913;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__171916__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__171916 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__171917__i = 0, G__171917__a = new Array(arguments.length -  0);
while (G__171917__i < G__171917__a.length) {G__171917__a[G__171917__i] = arguments[G__171917__i + 0]; ++G__171917__i;}
  args = new cljs.core.IndexedSeq(G__171917__a,0);
} 
return G__171916__delegate.call(this,args);};
G__171916.cljs$lang$maxFixedArity = 0;
G__171916.cljs$lang$applyTo = (function (arglist__171918){
var args = cljs.core.seq(arglist__171918);
return G__171916__delegate(args);
});
G__171916.cljs$core$IFn$_invoke$arity$variadic = G__171916__delegate;
return G__171916;
})()
;

return null;
});
