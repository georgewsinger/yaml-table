goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__332702__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__332702 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__332703__i = 0, G__332703__a = new Array(arguments.length -  0);
while (G__332703__i < G__332703__a.length) {G__332703__a[G__332703__i] = arguments[G__332703__i + 0]; ++G__332703__i;}
  args = new cljs.core.IndexedSeq(G__332703__a,0);
} 
return G__332702__delegate.call(this,args);};
G__332702.cljs$lang$maxFixedArity = 0;
G__332702.cljs$lang$applyTo = (function (arglist__332704){
var args = cljs.core.seq(arglist__332704);
return G__332702__delegate(args);
});
G__332702.cljs$core$IFn$_invoke$arity$variadic = G__332702__delegate;
return G__332702;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__332705__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__332705 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__332706__i = 0, G__332706__a = new Array(arguments.length -  0);
while (G__332706__i < G__332706__a.length) {G__332706__a[G__332706__i] = arguments[G__332706__i + 0]; ++G__332706__i;}
  args = new cljs.core.IndexedSeq(G__332706__a,0);
} 
return G__332705__delegate.call(this,args);};
G__332705.cljs$lang$maxFixedArity = 0;
G__332705.cljs$lang$applyTo = (function (arglist__332707){
var args = cljs.core.seq(arglist__332707);
return G__332705__delegate(args);
});
G__332705.cljs$core$IFn$_invoke$arity$variadic = G__332705__delegate;
return G__332705;
})()
;

return null;
});
