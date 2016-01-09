goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43916__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43916 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43917__i = 0, G__43917__a = new Array(arguments.length -  0);
while (G__43917__i < G__43917__a.length) {G__43917__a[G__43917__i] = arguments[G__43917__i + 0]; ++G__43917__i;}
  args = new cljs.core.IndexedSeq(G__43917__a,0);
} 
return G__43916__delegate.call(this,args);};
G__43916.cljs$lang$maxFixedArity = 0;
G__43916.cljs$lang$applyTo = (function (arglist__43918){
var args = cljs.core.seq(arglist__43918);
return G__43916__delegate(args);
});
G__43916.cljs$core$IFn$_invoke$arity$variadic = G__43916__delegate;
return G__43916;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43919__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43919 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43920__i = 0, G__43920__a = new Array(arguments.length -  0);
while (G__43920__i < G__43920__a.length) {G__43920__a[G__43920__i] = arguments[G__43920__i + 0]; ++G__43920__i;}
  args = new cljs.core.IndexedSeq(G__43920__a,0);
} 
return G__43919__delegate.call(this,args);};
G__43919.cljs$lang$maxFixedArity = 0;
G__43919.cljs$lang$applyTo = (function (arglist__43921){
var args = cljs.core.seq(arglist__43921);
return G__43919__delegate(args);
});
G__43919.cljs$core$IFn$_invoke$arity$variadic = G__43919__delegate;
return G__43919;
})()
;

return null;
});
