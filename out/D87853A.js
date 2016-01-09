goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__117449__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__117449 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__117450__i = 0, G__117450__a = new Array(arguments.length -  0);
while (G__117450__i < G__117450__a.length) {G__117450__a[G__117450__i] = arguments[G__117450__i + 0]; ++G__117450__i;}
  args = new cljs.core.IndexedSeq(G__117450__a,0);
} 
return G__117449__delegate.call(this,args);};
G__117449.cljs$lang$maxFixedArity = 0;
G__117449.cljs$lang$applyTo = (function (arglist__117451){
var args = cljs.core.seq(arglist__117451);
return G__117449__delegate(args);
});
G__117449.cljs$core$IFn$_invoke$arity$variadic = G__117449__delegate;
return G__117449;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__117452__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__117452 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__117453__i = 0, G__117453__a = new Array(arguments.length -  0);
while (G__117453__i < G__117453__a.length) {G__117453__a[G__117453__i] = arguments[G__117453__i + 0]; ++G__117453__i;}
  args = new cljs.core.IndexedSeq(G__117453__a,0);
} 
return G__117452__delegate.call(this,args);};
G__117452.cljs$lang$maxFixedArity = 0;
G__117452.cljs$lang$applyTo = (function (arglist__117454){
var args = cljs.core.seq(arglist__117454);
return G__117452__delegate(args);
});
G__117452.cljs$core$IFn$_invoke$arity$variadic = G__117452__delegate;
return G__117452;
})()
;

return null;
});
