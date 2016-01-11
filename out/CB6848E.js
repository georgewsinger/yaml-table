goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__330003__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__330003 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__330004__i = 0, G__330004__a = new Array(arguments.length -  0);
while (G__330004__i < G__330004__a.length) {G__330004__a[G__330004__i] = arguments[G__330004__i + 0]; ++G__330004__i;}
  args = new cljs.core.IndexedSeq(G__330004__a,0);
} 
return G__330003__delegate.call(this,args);};
G__330003.cljs$lang$maxFixedArity = 0;
G__330003.cljs$lang$applyTo = (function (arglist__330005){
var args = cljs.core.seq(arglist__330005);
return G__330003__delegate(args);
});
G__330003.cljs$core$IFn$_invoke$arity$variadic = G__330003__delegate;
return G__330003;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__330006__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__330006 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__330007__i = 0, G__330007__a = new Array(arguments.length -  0);
while (G__330007__i < G__330007__a.length) {G__330007__a[G__330007__i] = arguments[G__330007__i + 0]; ++G__330007__i;}
  args = new cljs.core.IndexedSeq(G__330007__a,0);
} 
return G__330006__delegate.call(this,args);};
G__330006.cljs$lang$maxFixedArity = 0;
G__330006.cljs$lang$applyTo = (function (arglist__330008){
var args = cljs.core.seq(arglist__330008);
return G__330006__delegate(args);
});
G__330006.cljs$core$IFn$_invoke$arity$variadic = G__330006__delegate;
return G__330006;
})()
;

return null;
});
