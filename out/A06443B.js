goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__120695__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__120695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__120696__i = 0, G__120696__a = new Array(arguments.length -  0);
while (G__120696__i < G__120696__a.length) {G__120696__a[G__120696__i] = arguments[G__120696__i + 0]; ++G__120696__i;}
  args = new cljs.core.IndexedSeq(G__120696__a,0);
} 
return G__120695__delegate.call(this,args);};
G__120695.cljs$lang$maxFixedArity = 0;
G__120695.cljs$lang$applyTo = (function (arglist__120697){
var args = cljs.core.seq(arglist__120697);
return G__120695__delegate(args);
});
G__120695.cljs$core$IFn$_invoke$arity$variadic = G__120695__delegate;
return G__120695;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__120698__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__120698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__120699__i = 0, G__120699__a = new Array(arguments.length -  0);
while (G__120699__i < G__120699__a.length) {G__120699__a[G__120699__i] = arguments[G__120699__i + 0]; ++G__120699__i;}
  args = new cljs.core.IndexedSeq(G__120699__a,0);
} 
return G__120698__delegate.call(this,args);};
G__120698.cljs$lang$maxFixedArity = 0;
G__120698.cljs$lang$applyTo = (function (arglist__120700){
var args = cljs.core.seq(arglist__120700);
return G__120698__delegate(args);
});
G__120698.cljs$core$IFn$_invoke$arity$variadic = G__120698__delegate;
return G__120698;
})()
;

return null;
});
