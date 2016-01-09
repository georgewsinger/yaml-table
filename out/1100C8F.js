goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__168285__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__168285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__168286__i = 0, G__168286__a = new Array(arguments.length -  0);
while (G__168286__i < G__168286__a.length) {G__168286__a[G__168286__i] = arguments[G__168286__i + 0]; ++G__168286__i;}
  args = new cljs.core.IndexedSeq(G__168286__a,0);
} 
return G__168285__delegate.call(this,args);};
G__168285.cljs$lang$maxFixedArity = 0;
G__168285.cljs$lang$applyTo = (function (arglist__168287){
var args = cljs.core.seq(arglist__168287);
return G__168285__delegate(args);
});
G__168285.cljs$core$IFn$_invoke$arity$variadic = G__168285__delegate;
return G__168285;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__168288__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__168288 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__168289__i = 0, G__168289__a = new Array(arguments.length -  0);
while (G__168289__i < G__168289__a.length) {G__168289__a[G__168289__i] = arguments[G__168289__i + 0]; ++G__168289__i;}
  args = new cljs.core.IndexedSeq(G__168289__a,0);
} 
return G__168288__delegate.call(this,args);};
G__168288.cljs$lang$maxFixedArity = 0;
G__168288.cljs$lang$applyTo = (function (arglist__168290){
var args = cljs.core.seq(arglist__168290);
return G__168288__delegate(args);
});
G__168288.cljs$core$IFn$_invoke$arity$variadic = G__168288__delegate;
return G__168288;
})()
;

return null;
});
