goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28515__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28515 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28516__i = 0, G__28516__a = new Array(arguments.length -  0);
while (G__28516__i < G__28516__a.length) {G__28516__a[G__28516__i] = arguments[G__28516__i + 0]; ++G__28516__i;}
  args = new cljs.core.IndexedSeq(G__28516__a,0);
} 
return G__28515__delegate.call(this,args);};
G__28515.cljs$lang$maxFixedArity = 0;
G__28515.cljs$lang$applyTo = (function (arglist__28517){
var args = cljs.core.seq(arglist__28517);
return G__28515__delegate(args);
});
G__28515.cljs$core$IFn$_invoke$arity$variadic = G__28515__delegate;
return G__28515;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28518__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28518 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28519__i = 0, G__28519__a = new Array(arguments.length -  0);
while (G__28519__i < G__28519__a.length) {G__28519__a[G__28519__i] = arguments[G__28519__i + 0]; ++G__28519__i;}
  args = new cljs.core.IndexedSeq(G__28519__a,0);
} 
return G__28518__delegate.call(this,args);};
G__28518.cljs$lang$maxFixedArity = 0;
G__28518.cljs$lang$applyTo = (function (arglist__28520){
var args = cljs.core.seq(arglist__28520);
return G__28518__delegate(args);
});
G__28518.cljs$core$IFn$_invoke$arity$variadic = G__28518__delegate;
return G__28518;
})()
;

return null;
});
