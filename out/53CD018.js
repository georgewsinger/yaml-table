goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__333347__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__333347 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__333348__i = 0, G__333348__a = new Array(arguments.length -  0);
while (G__333348__i < G__333348__a.length) {G__333348__a[G__333348__i] = arguments[G__333348__i + 0]; ++G__333348__i;}
  args = new cljs.core.IndexedSeq(G__333348__a,0);
} 
return G__333347__delegate.call(this,args);};
G__333347.cljs$lang$maxFixedArity = 0;
G__333347.cljs$lang$applyTo = (function (arglist__333349){
var args = cljs.core.seq(arglist__333349);
return G__333347__delegate(args);
});
G__333347.cljs$core$IFn$_invoke$arity$variadic = G__333347__delegate;
return G__333347;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__333350__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__333350 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__333351__i = 0, G__333351__a = new Array(arguments.length -  0);
while (G__333351__i < G__333351__a.length) {G__333351__a[G__333351__i] = arguments[G__333351__i + 0]; ++G__333351__i;}
  args = new cljs.core.IndexedSeq(G__333351__a,0);
} 
return G__333350__delegate.call(this,args);};
G__333350.cljs$lang$maxFixedArity = 0;
G__333350.cljs$lang$applyTo = (function (arglist__333352){
var args = cljs.core.seq(arglist__333352);
return G__333350__delegate(args);
});
G__333350.cljs$core$IFn$_invoke$arity$variadic = G__333350__delegate;
return G__333350;
})()
;

return null;
});
