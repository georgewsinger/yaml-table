goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__166009__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__166009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__166010__i = 0, G__166010__a = new Array(arguments.length -  0);
while (G__166010__i < G__166010__a.length) {G__166010__a[G__166010__i] = arguments[G__166010__i + 0]; ++G__166010__i;}
  args = new cljs.core.IndexedSeq(G__166010__a,0);
} 
return G__166009__delegate.call(this,args);};
G__166009.cljs$lang$maxFixedArity = 0;
G__166009.cljs$lang$applyTo = (function (arglist__166011){
var args = cljs.core.seq(arglist__166011);
return G__166009__delegate(args);
});
G__166009.cljs$core$IFn$_invoke$arity$variadic = G__166009__delegate;
return G__166009;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__166012__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__166012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__166013__i = 0, G__166013__a = new Array(arguments.length -  0);
while (G__166013__i < G__166013__a.length) {G__166013__a[G__166013__i] = arguments[G__166013__i + 0]; ++G__166013__i;}
  args = new cljs.core.IndexedSeq(G__166013__a,0);
} 
return G__166012__delegate.call(this,args);};
G__166012.cljs$lang$maxFixedArity = 0;
G__166012.cljs$lang$applyTo = (function (arglist__166014){
var args = cljs.core.seq(arglist__166014);
return G__166012__delegate(args);
});
G__166012.cljs$core$IFn$_invoke$arity$variadic = G__166012__delegate;
return G__166012;
})()
;

return null;
});
