goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__192853__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__192853 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__192854__i = 0, G__192854__a = new Array(arguments.length -  0);
while (G__192854__i < G__192854__a.length) {G__192854__a[G__192854__i] = arguments[G__192854__i + 0]; ++G__192854__i;}
  args = new cljs.core.IndexedSeq(G__192854__a,0);
} 
return G__192853__delegate.call(this,args);};
G__192853.cljs$lang$maxFixedArity = 0;
G__192853.cljs$lang$applyTo = (function (arglist__192855){
var args = cljs.core.seq(arglist__192855);
return G__192853__delegate(args);
});
G__192853.cljs$core$IFn$_invoke$arity$variadic = G__192853__delegate;
return G__192853;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__192856__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__192856 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__192857__i = 0, G__192857__a = new Array(arguments.length -  0);
while (G__192857__i < G__192857__a.length) {G__192857__a[G__192857__i] = arguments[G__192857__i + 0]; ++G__192857__i;}
  args = new cljs.core.IndexedSeq(G__192857__a,0);
} 
return G__192856__delegate.call(this,args);};
G__192856.cljs$lang$maxFixedArity = 0;
G__192856.cljs$lang$applyTo = (function (arglist__192858){
var args = cljs.core.seq(arglist__192858);
return G__192856__delegate(args);
});
G__192856.cljs$core$IFn$_invoke$arity$variadic = G__192856__delegate;
return G__192856;
})()
;

return null;
});
