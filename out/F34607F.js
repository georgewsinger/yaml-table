goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__6780__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6780 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6781__i = 0, G__6781__a = new Array(arguments.length -  0);
while (G__6781__i < G__6781__a.length) {G__6781__a[G__6781__i] = arguments[G__6781__i + 0]; ++G__6781__i;}
  args = new cljs.core.IndexedSeq(G__6781__a,0);
} 
return G__6780__delegate.call(this,args);};
G__6780.cljs$lang$maxFixedArity = 0;
G__6780.cljs$lang$applyTo = (function (arglist__6782){
var args = cljs.core.seq(arglist__6782);
return G__6780__delegate(args);
});
G__6780.cljs$core$IFn$_invoke$arity$variadic = G__6780__delegate;
return G__6780;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__6783__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__6783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6784__i = 0, G__6784__a = new Array(arguments.length -  0);
while (G__6784__i < G__6784__a.length) {G__6784__a[G__6784__i] = arguments[G__6784__i + 0]; ++G__6784__i;}
  args = new cljs.core.IndexedSeq(G__6784__a,0);
} 
return G__6783__delegate.call(this,args);};
G__6783.cljs$lang$maxFixedArity = 0;
G__6783.cljs$lang$applyTo = (function (arglist__6785){
var args = cljs.core.seq(arglist__6785);
return G__6783__delegate(args);
});
G__6783.cljs$core$IFn$_invoke$arity$variadic = G__6783__delegate;
return G__6783;
})()
;

return null;
});
