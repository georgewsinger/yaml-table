goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__82505__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__82505 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__82506__i = 0, G__82506__a = new Array(arguments.length -  0);
while (G__82506__i < G__82506__a.length) {G__82506__a[G__82506__i] = arguments[G__82506__i + 0]; ++G__82506__i;}
  args = new cljs.core.IndexedSeq(G__82506__a,0);
} 
return G__82505__delegate.call(this,args);};
G__82505.cljs$lang$maxFixedArity = 0;
G__82505.cljs$lang$applyTo = (function (arglist__82507){
var args = cljs.core.seq(arglist__82507);
return G__82505__delegate(args);
});
G__82505.cljs$core$IFn$_invoke$arity$variadic = G__82505__delegate;
return G__82505;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__82508__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__82508 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__82509__i = 0, G__82509__a = new Array(arguments.length -  0);
while (G__82509__i < G__82509__a.length) {G__82509__a[G__82509__i] = arguments[G__82509__i + 0]; ++G__82509__i;}
  args = new cljs.core.IndexedSeq(G__82509__a,0);
} 
return G__82508__delegate.call(this,args);};
G__82508.cljs$lang$maxFixedArity = 0;
G__82508.cljs$lang$applyTo = (function (arglist__82510){
var args = cljs.core.seq(arglist__82510);
return G__82508__delegate(args);
});
G__82508.cljs$core$IFn$_invoke$arity$variadic = G__82508__delegate;
return G__82508;
})()
;

return null;
});
