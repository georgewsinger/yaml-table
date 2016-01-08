goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31126__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31126 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31127__i = 0, G__31127__a = new Array(arguments.length -  0);
while (G__31127__i < G__31127__a.length) {G__31127__a[G__31127__i] = arguments[G__31127__i + 0]; ++G__31127__i;}
  args = new cljs.core.IndexedSeq(G__31127__a,0);
} 
return G__31126__delegate.call(this,args);};
G__31126.cljs$lang$maxFixedArity = 0;
G__31126.cljs$lang$applyTo = (function (arglist__31128){
var args = cljs.core.seq(arglist__31128);
return G__31126__delegate(args);
});
G__31126.cljs$core$IFn$_invoke$arity$variadic = G__31126__delegate;
return G__31126;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31129__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31130__i = 0, G__31130__a = new Array(arguments.length -  0);
while (G__31130__i < G__31130__a.length) {G__31130__a[G__31130__i] = arguments[G__31130__i + 0]; ++G__31130__i;}
  args = new cljs.core.IndexedSeq(G__31130__a,0);
} 
return G__31129__delegate.call(this,args);};
G__31129.cljs$lang$maxFixedArity = 0;
G__31129.cljs$lang$applyTo = (function (arglist__31131){
var args = cljs.core.seq(arglist__31131);
return G__31129__delegate(args);
});
G__31129.cljs$core$IFn$_invoke$arity$variadic = G__31129__delegate;
return G__31129;
})()
;

return null;
});
