goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67492__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67492 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67493__i = 0, G__67493__a = new Array(arguments.length -  0);
while (G__67493__i < G__67493__a.length) {G__67493__a[G__67493__i] = arguments[G__67493__i + 0]; ++G__67493__i;}
  args = new cljs.core.IndexedSeq(G__67493__a,0);
} 
return G__67492__delegate.call(this,args);};
G__67492.cljs$lang$maxFixedArity = 0;
G__67492.cljs$lang$applyTo = (function (arglist__67494){
var args = cljs.core.seq(arglist__67494);
return G__67492__delegate(args);
});
G__67492.cljs$core$IFn$_invoke$arity$variadic = G__67492__delegate;
return G__67492;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67495__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67495 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67496__i = 0, G__67496__a = new Array(arguments.length -  0);
while (G__67496__i < G__67496__a.length) {G__67496__a[G__67496__i] = arguments[G__67496__i + 0]; ++G__67496__i;}
  args = new cljs.core.IndexedSeq(G__67496__a,0);
} 
return G__67495__delegate.call(this,args);};
G__67495.cljs$lang$maxFixedArity = 0;
G__67495.cljs$lang$applyTo = (function (arglist__67497){
var args = cljs.core.seq(arglist__67497);
return G__67495__delegate(args);
});
G__67495.cljs$core$IFn$_invoke$arity$variadic = G__67495__delegate;
return G__67495;
})()
;

return null;
});
