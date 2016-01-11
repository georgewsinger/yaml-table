goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__189693__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__189693 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__189694__i = 0, G__189694__a = new Array(arguments.length -  0);
while (G__189694__i < G__189694__a.length) {G__189694__a[G__189694__i] = arguments[G__189694__i + 0]; ++G__189694__i;}
  args = new cljs.core.IndexedSeq(G__189694__a,0);
} 
return G__189693__delegate.call(this,args);};
G__189693.cljs$lang$maxFixedArity = 0;
G__189693.cljs$lang$applyTo = (function (arglist__189695){
var args = cljs.core.seq(arglist__189695);
return G__189693__delegate(args);
});
G__189693.cljs$core$IFn$_invoke$arity$variadic = G__189693__delegate;
return G__189693;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__189696__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__189696 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__189697__i = 0, G__189697__a = new Array(arguments.length -  0);
while (G__189697__i < G__189697__a.length) {G__189697__a[G__189697__i] = arguments[G__189697__i + 0]; ++G__189697__i;}
  args = new cljs.core.IndexedSeq(G__189697__a,0);
} 
return G__189696__delegate.call(this,args);};
G__189696.cljs$lang$maxFixedArity = 0;
G__189696.cljs$lang$applyTo = (function (arglist__189698){
var args = cljs.core.seq(arglist__189698);
return G__189696__delegate(args);
});
G__189696.cljs$core$IFn$_invoke$arity$variadic = G__189696__delegate;
return G__189696;
})()
;

return null;
});
