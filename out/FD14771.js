goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__210813__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__210813 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__210814__i = 0, G__210814__a = new Array(arguments.length -  0);
while (G__210814__i < G__210814__a.length) {G__210814__a[G__210814__i] = arguments[G__210814__i + 0]; ++G__210814__i;}
  args = new cljs.core.IndexedSeq(G__210814__a,0);
} 
return G__210813__delegate.call(this,args);};
G__210813.cljs$lang$maxFixedArity = 0;
G__210813.cljs$lang$applyTo = (function (arglist__210815){
var args = cljs.core.seq(arglist__210815);
return G__210813__delegate(args);
});
G__210813.cljs$core$IFn$_invoke$arity$variadic = G__210813__delegate;
return G__210813;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__210816__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__210816 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__210817__i = 0, G__210817__a = new Array(arguments.length -  0);
while (G__210817__i < G__210817__a.length) {G__210817__a[G__210817__i] = arguments[G__210817__i + 0]; ++G__210817__i;}
  args = new cljs.core.IndexedSeq(G__210817__a,0);
} 
return G__210816__delegate.call(this,args);};
G__210816.cljs$lang$maxFixedArity = 0;
G__210816.cljs$lang$applyTo = (function (arglist__210818){
var args = cljs.core.seq(arglist__210818);
return G__210816__delegate(args);
});
G__210816.cljs$core$IFn$_invoke$arity$variadic = G__210816__delegate;
return G__210816;
})()
;

return null;
});
