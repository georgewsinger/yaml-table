goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__326314__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__326314 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__326315__i = 0, G__326315__a = new Array(arguments.length -  0);
while (G__326315__i < G__326315__a.length) {G__326315__a[G__326315__i] = arguments[G__326315__i + 0]; ++G__326315__i;}
  args = new cljs.core.IndexedSeq(G__326315__a,0);
} 
return G__326314__delegate.call(this,args);};
G__326314.cljs$lang$maxFixedArity = 0;
G__326314.cljs$lang$applyTo = (function (arglist__326316){
var args = cljs.core.seq(arglist__326316);
return G__326314__delegate(args);
});
G__326314.cljs$core$IFn$_invoke$arity$variadic = G__326314__delegate;
return G__326314;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__326317__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__326317 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__326318__i = 0, G__326318__a = new Array(arguments.length -  0);
while (G__326318__i < G__326318__a.length) {G__326318__a[G__326318__i] = arguments[G__326318__i + 0]; ++G__326318__i;}
  args = new cljs.core.IndexedSeq(G__326318__a,0);
} 
return G__326317__delegate.call(this,args);};
G__326317.cljs$lang$maxFixedArity = 0;
G__326317.cljs$lang$applyTo = (function (arglist__326319){
var args = cljs.core.seq(arglist__326319);
return G__326317__delegate(args);
});
G__326317.cljs$core$IFn$_invoke$arity$variadic = G__326317__delegate;
return G__326317;
})()
;

return null;
});
