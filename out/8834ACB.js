goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__233348__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__233348 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__233349__i = 0, G__233349__a = new Array(arguments.length -  0);
while (G__233349__i < G__233349__a.length) {G__233349__a[G__233349__i] = arguments[G__233349__i + 0]; ++G__233349__i;}
  args = new cljs.core.IndexedSeq(G__233349__a,0);
} 
return G__233348__delegate.call(this,args);};
G__233348.cljs$lang$maxFixedArity = 0;
G__233348.cljs$lang$applyTo = (function (arglist__233350){
var args = cljs.core.seq(arglist__233350);
return G__233348__delegate(args);
});
G__233348.cljs$core$IFn$_invoke$arity$variadic = G__233348__delegate;
return G__233348;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__233351__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__233351 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__233352__i = 0, G__233352__a = new Array(arguments.length -  0);
while (G__233352__i < G__233352__a.length) {G__233352__a[G__233352__i] = arguments[G__233352__i + 0]; ++G__233352__i;}
  args = new cljs.core.IndexedSeq(G__233352__a,0);
} 
return G__233351__delegate.call(this,args);};
G__233351.cljs$lang$maxFixedArity = 0;
G__233351.cljs$lang$applyTo = (function (arglist__233353){
var args = cljs.core.seq(arglist__233353);
return G__233351__delegate(args);
});
G__233351.cljs$core$IFn$_invoke$arity$variadic = G__233351__delegate;
return G__233351;
})()
;

return null;
});
