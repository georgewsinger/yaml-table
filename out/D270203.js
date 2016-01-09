goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__109912__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__109912 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__109913__i = 0, G__109913__a = new Array(arguments.length -  0);
while (G__109913__i < G__109913__a.length) {G__109913__a[G__109913__i] = arguments[G__109913__i + 0]; ++G__109913__i;}
  args = new cljs.core.IndexedSeq(G__109913__a,0);
} 
return G__109912__delegate.call(this,args);};
G__109912.cljs$lang$maxFixedArity = 0;
G__109912.cljs$lang$applyTo = (function (arglist__109914){
var args = cljs.core.seq(arglist__109914);
return G__109912__delegate(args);
});
G__109912.cljs$core$IFn$_invoke$arity$variadic = G__109912__delegate;
return G__109912;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__109915__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__109915 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__109916__i = 0, G__109916__a = new Array(arguments.length -  0);
while (G__109916__i < G__109916__a.length) {G__109916__a[G__109916__i] = arguments[G__109916__i + 0]; ++G__109916__i;}
  args = new cljs.core.IndexedSeq(G__109916__a,0);
} 
return G__109915__delegate.call(this,args);};
G__109915.cljs$lang$maxFixedArity = 0;
G__109915.cljs$lang$applyTo = (function (arglist__109917){
var args = cljs.core.seq(arglist__109917);
return G__109915__delegate(args);
});
G__109915.cljs$core$IFn$_invoke$arity$variadic = G__109915__delegate;
return G__109915;
})()
;

return null;
});
