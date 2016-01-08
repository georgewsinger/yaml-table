goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21702__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21702 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21703__i = 0, G__21703__a = new Array(arguments.length -  0);
while (G__21703__i < G__21703__a.length) {G__21703__a[G__21703__i] = arguments[G__21703__i + 0]; ++G__21703__i;}
  args = new cljs.core.IndexedSeq(G__21703__a,0);
} 
return G__21702__delegate.call(this,args);};
G__21702.cljs$lang$maxFixedArity = 0;
G__21702.cljs$lang$applyTo = (function (arglist__21704){
var args = cljs.core.seq(arglist__21704);
return G__21702__delegate(args);
});
G__21702.cljs$core$IFn$_invoke$arity$variadic = G__21702__delegate;
return G__21702;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21705__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21705 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21706__i = 0, G__21706__a = new Array(arguments.length -  0);
while (G__21706__i < G__21706__a.length) {G__21706__a[G__21706__i] = arguments[G__21706__i + 0]; ++G__21706__i;}
  args = new cljs.core.IndexedSeq(G__21706__a,0);
} 
return G__21705__delegate.call(this,args);};
G__21705.cljs$lang$maxFixedArity = 0;
G__21705.cljs$lang$applyTo = (function (arglist__21707){
var args = cljs.core.seq(arglist__21707);
return G__21705__delegate(args);
});
G__21705.cljs$core$IFn$_invoke$arity$variadic = G__21705__delegate;
return G__21705;
})()
;

return null;
});
