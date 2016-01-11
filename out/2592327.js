goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__259948__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__259948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__259949__i = 0, G__259949__a = new Array(arguments.length -  0);
while (G__259949__i < G__259949__a.length) {G__259949__a[G__259949__i] = arguments[G__259949__i + 0]; ++G__259949__i;}
  args = new cljs.core.IndexedSeq(G__259949__a,0);
} 
return G__259948__delegate.call(this,args);};
G__259948.cljs$lang$maxFixedArity = 0;
G__259948.cljs$lang$applyTo = (function (arglist__259950){
var args = cljs.core.seq(arglist__259950);
return G__259948__delegate(args);
});
G__259948.cljs$core$IFn$_invoke$arity$variadic = G__259948__delegate;
return G__259948;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__259951__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__259951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__259952__i = 0, G__259952__a = new Array(arguments.length -  0);
while (G__259952__i < G__259952__a.length) {G__259952__a[G__259952__i] = arguments[G__259952__i + 0]; ++G__259952__i;}
  args = new cljs.core.IndexedSeq(G__259952__a,0);
} 
return G__259951__delegate.call(this,args);};
G__259951.cljs$lang$maxFixedArity = 0;
G__259951.cljs$lang$applyTo = (function (arglist__259953){
var args = cljs.core.seq(arglist__259953);
return G__259951__delegate(args);
});
G__259951.cljs$core$IFn$_invoke$arity$variadic = G__259951__delegate;
return G__259951;
})()
;

return null;
});
