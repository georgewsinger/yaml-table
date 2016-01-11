goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__329621__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__329621 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__329622__i = 0, G__329622__a = new Array(arguments.length -  0);
while (G__329622__i < G__329622__a.length) {G__329622__a[G__329622__i] = arguments[G__329622__i + 0]; ++G__329622__i;}
  args = new cljs.core.IndexedSeq(G__329622__a,0);
} 
return G__329621__delegate.call(this,args);};
G__329621.cljs$lang$maxFixedArity = 0;
G__329621.cljs$lang$applyTo = (function (arglist__329623){
var args = cljs.core.seq(arglist__329623);
return G__329621__delegate(args);
});
G__329621.cljs$core$IFn$_invoke$arity$variadic = G__329621__delegate;
return G__329621;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__329624__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__329624 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__329625__i = 0, G__329625__a = new Array(arguments.length -  0);
while (G__329625__i < G__329625__a.length) {G__329625__a[G__329625__i] = arguments[G__329625__i + 0]; ++G__329625__i;}
  args = new cljs.core.IndexedSeq(G__329625__a,0);
} 
return G__329624__delegate.call(this,args);};
G__329624.cljs$lang$maxFixedArity = 0;
G__329624.cljs$lang$applyTo = (function (arglist__329626){
var args = cljs.core.seq(arglist__329626);
return G__329624__delegate(args);
});
G__329624.cljs$core$IFn$_invoke$arity$variadic = G__329624__delegate;
return G__329624;
})()
;

return null;
});
