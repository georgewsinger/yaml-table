goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__330385__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__330385 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__330386__i = 0, G__330386__a = new Array(arguments.length -  0);
while (G__330386__i < G__330386__a.length) {G__330386__a[G__330386__i] = arguments[G__330386__i + 0]; ++G__330386__i;}
  args = new cljs.core.IndexedSeq(G__330386__a,0);
} 
return G__330385__delegate.call(this,args);};
G__330385.cljs$lang$maxFixedArity = 0;
G__330385.cljs$lang$applyTo = (function (arglist__330387){
var args = cljs.core.seq(arglist__330387);
return G__330385__delegate(args);
});
G__330385.cljs$core$IFn$_invoke$arity$variadic = G__330385__delegate;
return G__330385;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__330388__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__330388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__330389__i = 0, G__330389__a = new Array(arguments.length -  0);
while (G__330389__i < G__330389__a.length) {G__330389__a[G__330389__i] = arguments[G__330389__i + 0]; ++G__330389__i;}
  args = new cljs.core.IndexedSeq(G__330389__a,0);
} 
return G__330388__delegate.call(this,args);};
G__330388.cljs$lang$maxFixedArity = 0;
G__330388.cljs$lang$applyTo = (function (arglist__330390){
var args = cljs.core.seq(arglist__330390);
return G__330388__delegate(args);
});
G__330388.cljs$core$IFn$_invoke$arity$variadic = G__330388__delegate;
return G__330388;
})()
;

return null;
});
