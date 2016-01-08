goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28012__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28013__i = 0, G__28013__a = new Array(arguments.length -  0);
while (G__28013__i < G__28013__a.length) {G__28013__a[G__28013__i] = arguments[G__28013__i + 0]; ++G__28013__i;}
  args = new cljs.core.IndexedSeq(G__28013__a,0);
} 
return G__28012__delegate.call(this,args);};
G__28012.cljs$lang$maxFixedArity = 0;
G__28012.cljs$lang$applyTo = (function (arglist__28014){
var args = cljs.core.seq(arglist__28014);
return G__28012__delegate(args);
});
G__28012.cljs$core$IFn$_invoke$arity$variadic = G__28012__delegate;
return G__28012;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28015__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28015 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28016__i = 0, G__28016__a = new Array(arguments.length -  0);
while (G__28016__i < G__28016__a.length) {G__28016__a[G__28016__i] = arguments[G__28016__i + 0]; ++G__28016__i;}
  args = new cljs.core.IndexedSeq(G__28016__a,0);
} 
return G__28015__delegate.call(this,args);};
G__28015.cljs$lang$maxFixedArity = 0;
G__28015.cljs$lang$applyTo = (function (arglist__28017){
var args = cljs.core.seq(arglist__28017);
return G__28015__delegate(args);
});
G__28015.cljs$core$IFn$_invoke$arity$variadic = G__28015__delegate;
return G__28015;
})()
;

return null;
});
