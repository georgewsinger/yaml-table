goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__330670__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__330670 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__330671__i = 0, G__330671__a = new Array(arguments.length -  0);
while (G__330671__i < G__330671__a.length) {G__330671__a[G__330671__i] = arguments[G__330671__i + 0]; ++G__330671__i;}
  args = new cljs.core.IndexedSeq(G__330671__a,0);
} 
return G__330670__delegate.call(this,args);};
G__330670.cljs$lang$maxFixedArity = 0;
G__330670.cljs$lang$applyTo = (function (arglist__330672){
var args = cljs.core.seq(arglist__330672);
return G__330670__delegate(args);
});
G__330670.cljs$core$IFn$_invoke$arity$variadic = G__330670__delegate;
return G__330670;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__330673__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__330673 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__330674__i = 0, G__330674__a = new Array(arguments.length -  0);
while (G__330674__i < G__330674__a.length) {G__330674__a[G__330674__i] = arguments[G__330674__i + 0]; ++G__330674__i;}
  args = new cljs.core.IndexedSeq(G__330674__a,0);
} 
return G__330673__delegate.call(this,args);};
G__330673.cljs$lang$maxFixedArity = 0;
G__330673.cljs$lang$applyTo = (function (arglist__330675){
var args = cljs.core.seq(arglist__330675);
return G__330673__delegate(args);
});
G__330673.cljs$core$IFn$_invoke$arity$variadic = G__330673__delegate;
return G__330673;
})()
;

return null;
});
