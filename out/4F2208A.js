goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__200063__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__200063 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__200064__i = 0, G__200064__a = new Array(arguments.length -  0);
while (G__200064__i < G__200064__a.length) {G__200064__a[G__200064__i] = arguments[G__200064__i + 0]; ++G__200064__i;}
  args = new cljs.core.IndexedSeq(G__200064__a,0);
} 
return G__200063__delegate.call(this,args);};
G__200063.cljs$lang$maxFixedArity = 0;
G__200063.cljs$lang$applyTo = (function (arglist__200065){
var args = cljs.core.seq(arglist__200065);
return G__200063__delegate(args);
});
G__200063.cljs$core$IFn$_invoke$arity$variadic = G__200063__delegate;
return G__200063;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__200066__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__200066 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__200067__i = 0, G__200067__a = new Array(arguments.length -  0);
while (G__200067__i < G__200067__a.length) {G__200067__a[G__200067__i] = arguments[G__200067__i + 0]; ++G__200067__i;}
  args = new cljs.core.IndexedSeq(G__200067__a,0);
} 
return G__200066__delegate.call(this,args);};
G__200066.cljs$lang$maxFixedArity = 0;
G__200066.cljs$lang$applyTo = (function (arglist__200068){
var args = cljs.core.seq(arglist__200068);
return G__200066__delegate(args);
});
G__200066.cljs$core$IFn$_invoke$arity$variadic = G__200066__delegate;
return G__200066;
})()
;

return null;
});
