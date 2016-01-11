goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__342420__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__342420 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__342421__i = 0, G__342421__a = new Array(arguments.length -  0);
while (G__342421__i < G__342421__a.length) {G__342421__a[G__342421__i] = arguments[G__342421__i + 0]; ++G__342421__i;}
  args = new cljs.core.IndexedSeq(G__342421__a,0);
} 
return G__342420__delegate.call(this,args);};
G__342420.cljs$lang$maxFixedArity = 0;
G__342420.cljs$lang$applyTo = (function (arglist__342422){
var args = cljs.core.seq(arglist__342422);
return G__342420__delegate(args);
});
G__342420.cljs$core$IFn$_invoke$arity$variadic = G__342420__delegate;
return G__342420;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__342423__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__342423 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__342424__i = 0, G__342424__a = new Array(arguments.length -  0);
while (G__342424__i < G__342424__a.length) {G__342424__a[G__342424__i] = arguments[G__342424__i + 0]; ++G__342424__i;}
  args = new cljs.core.IndexedSeq(G__342424__a,0);
} 
return G__342423__delegate.call(this,args);};
G__342423.cljs$lang$maxFixedArity = 0;
G__342423.cljs$lang$applyTo = (function (arglist__342425){
var args = cljs.core.seq(arglist__342425);
return G__342423__delegate(args);
});
G__342423.cljs$core$IFn$_invoke$arity$variadic = G__342423__delegate;
return G__342423;
})()
;

return null;
});
