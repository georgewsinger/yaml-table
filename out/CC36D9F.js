goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__180713__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__180713 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__180714__i = 0, G__180714__a = new Array(arguments.length -  0);
while (G__180714__i < G__180714__a.length) {G__180714__a[G__180714__i] = arguments[G__180714__i + 0]; ++G__180714__i;}
  args = new cljs.core.IndexedSeq(G__180714__a,0);
} 
return G__180713__delegate.call(this,args);};
G__180713.cljs$lang$maxFixedArity = 0;
G__180713.cljs$lang$applyTo = (function (arglist__180715){
var args = cljs.core.seq(arglist__180715);
return G__180713__delegate(args);
});
G__180713.cljs$core$IFn$_invoke$arity$variadic = G__180713__delegate;
return G__180713;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__180716__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__180716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__180717__i = 0, G__180717__a = new Array(arguments.length -  0);
while (G__180717__i < G__180717__a.length) {G__180717__a[G__180717__i] = arguments[G__180717__i + 0]; ++G__180717__i;}
  args = new cljs.core.IndexedSeq(G__180717__a,0);
} 
return G__180716__delegate.call(this,args);};
G__180716.cljs$lang$maxFixedArity = 0;
G__180716.cljs$lang$applyTo = (function (arglist__180718){
var args = cljs.core.seq(arglist__180718);
return G__180716__delegate(args);
});
G__180716.cljs$core$IFn$_invoke$arity$variadic = G__180716__delegate;
return G__180716;
})()
;

return null;
});
