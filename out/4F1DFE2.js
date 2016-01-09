goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__156695__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__156695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__156696__i = 0, G__156696__a = new Array(arguments.length -  0);
while (G__156696__i < G__156696__a.length) {G__156696__a[G__156696__i] = arguments[G__156696__i + 0]; ++G__156696__i;}
  args = new cljs.core.IndexedSeq(G__156696__a,0);
} 
return G__156695__delegate.call(this,args);};
G__156695.cljs$lang$maxFixedArity = 0;
G__156695.cljs$lang$applyTo = (function (arglist__156697){
var args = cljs.core.seq(arglist__156697);
return G__156695__delegate(args);
});
G__156695.cljs$core$IFn$_invoke$arity$variadic = G__156695__delegate;
return G__156695;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__156698__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__156698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__156699__i = 0, G__156699__a = new Array(arguments.length -  0);
while (G__156699__i < G__156699__a.length) {G__156699__a[G__156699__i] = arguments[G__156699__i + 0]; ++G__156699__i;}
  args = new cljs.core.IndexedSeq(G__156699__a,0);
} 
return G__156698__delegate.call(this,args);};
G__156698.cljs$lang$maxFixedArity = 0;
G__156698.cljs$lang$applyTo = (function (arglist__156700){
var args = cljs.core.seq(arglist__156700);
return G__156698__delegate(args);
});
G__156698.cljs$core$IFn$_invoke$arity$variadic = G__156698__delegate;
return G__156698;
})()
;

return null;
});
