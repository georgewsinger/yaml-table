goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__153868__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__153868 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__153869__i = 0, G__153869__a = new Array(arguments.length -  0);
while (G__153869__i < G__153869__a.length) {G__153869__a[G__153869__i] = arguments[G__153869__i + 0]; ++G__153869__i;}
  args = new cljs.core.IndexedSeq(G__153869__a,0);
} 
return G__153868__delegate.call(this,args);};
G__153868.cljs$lang$maxFixedArity = 0;
G__153868.cljs$lang$applyTo = (function (arglist__153870){
var args = cljs.core.seq(arglist__153870);
return G__153868__delegate(args);
});
G__153868.cljs$core$IFn$_invoke$arity$variadic = G__153868__delegate;
return G__153868;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__153871__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__153871 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__153872__i = 0, G__153872__a = new Array(arguments.length -  0);
while (G__153872__i < G__153872__a.length) {G__153872__a[G__153872__i] = arguments[G__153872__i + 0]; ++G__153872__i;}
  args = new cljs.core.IndexedSeq(G__153872__a,0);
} 
return G__153871__delegate.call(this,args);};
G__153871.cljs$lang$maxFixedArity = 0;
G__153871.cljs$lang$applyTo = (function (arglist__153873){
var args = cljs.core.seq(arglist__153873);
return G__153871__delegate(args);
});
G__153871.cljs$core$IFn$_invoke$arity$variadic = G__153871__delegate;
return G__153871;
})()
;

return null;
});
