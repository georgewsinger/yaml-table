goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__363960__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__363960 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__363961__i = 0, G__363961__a = new Array(arguments.length -  0);
while (G__363961__i < G__363961__a.length) {G__363961__a[G__363961__i] = arguments[G__363961__i + 0]; ++G__363961__i;}
  args = new cljs.core.IndexedSeq(G__363961__a,0);
} 
return G__363960__delegate.call(this,args);};
G__363960.cljs$lang$maxFixedArity = 0;
G__363960.cljs$lang$applyTo = (function (arglist__363962){
var args = cljs.core.seq(arglist__363962);
return G__363960__delegate(args);
});
G__363960.cljs$core$IFn$_invoke$arity$variadic = G__363960__delegate;
return G__363960;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__363963__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__363963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__363964__i = 0, G__363964__a = new Array(arguments.length -  0);
while (G__363964__i < G__363964__a.length) {G__363964__a[G__363964__i] = arguments[G__363964__i + 0]; ++G__363964__i;}
  args = new cljs.core.IndexedSeq(G__363964__a,0);
} 
return G__363963__delegate.call(this,args);};
G__363963.cljs$lang$maxFixedArity = 0;
G__363963.cljs$lang$applyTo = (function (arglist__363965){
var args = cljs.core.seq(arglist__363965);
return G__363963__delegate(args);
});
G__363963.cljs$core$IFn$_invoke$arity$variadic = G__363963__delegate;
return G__363963;
})()
;

return null;
});
