goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__142225__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__142225 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__142226__i = 0, G__142226__a = new Array(arguments.length -  0);
while (G__142226__i < G__142226__a.length) {G__142226__a[G__142226__i] = arguments[G__142226__i + 0]; ++G__142226__i;}
  args = new cljs.core.IndexedSeq(G__142226__a,0);
} 
return G__142225__delegate.call(this,args);};
G__142225.cljs$lang$maxFixedArity = 0;
G__142225.cljs$lang$applyTo = (function (arglist__142227){
var args = cljs.core.seq(arglist__142227);
return G__142225__delegate(args);
});
G__142225.cljs$core$IFn$_invoke$arity$variadic = G__142225__delegate;
return G__142225;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__142228__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__142228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__142229__i = 0, G__142229__a = new Array(arguments.length -  0);
while (G__142229__i < G__142229__a.length) {G__142229__a[G__142229__i] = arguments[G__142229__i + 0]; ++G__142229__i;}
  args = new cljs.core.IndexedSeq(G__142229__a,0);
} 
return G__142228__delegate.call(this,args);};
G__142228.cljs$lang$maxFixedArity = 0;
G__142228.cljs$lang$applyTo = (function (arglist__142230){
var args = cljs.core.seq(arglist__142230);
return G__142228__delegate(args);
});
G__142228.cljs$core$IFn$_invoke$arity$variadic = G__142228__delegate;
return G__142228;
})()
;

return null;
});
