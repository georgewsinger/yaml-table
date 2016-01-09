goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__151440__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__151440 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__151441__i = 0, G__151441__a = new Array(arguments.length -  0);
while (G__151441__i < G__151441__a.length) {G__151441__a[G__151441__i] = arguments[G__151441__i + 0]; ++G__151441__i;}
  args = new cljs.core.IndexedSeq(G__151441__a,0);
} 
return G__151440__delegate.call(this,args);};
G__151440.cljs$lang$maxFixedArity = 0;
G__151440.cljs$lang$applyTo = (function (arglist__151442){
var args = cljs.core.seq(arglist__151442);
return G__151440__delegate(args);
});
G__151440.cljs$core$IFn$_invoke$arity$variadic = G__151440__delegate;
return G__151440;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__151443__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__151443 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__151444__i = 0, G__151444__a = new Array(arguments.length -  0);
while (G__151444__i < G__151444__a.length) {G__151444__a[G__151444__i] = arguments[G__151444__i + 0]; ++G__151444__i;}
  args = new cljs.core.IndexedSeq(G__151444__a,0);
} 
return G__151443__delegate.call(this,args);};
G__151443.cljs$lang$maxFixedArity = 0;
G__151443.cljs$lang$applyTo = (function (arglist__151445){
var args = cljs.core.seq(arglist__151445);
return G__151443__delegate(args);
});
G__151443.cljs$core$IFn$_invoke$arity$variadic = G__151443__delegate;
return G__151443;
})()
;

return null;
});
