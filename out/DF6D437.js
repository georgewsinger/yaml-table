goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__94780__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__94780 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__94781__i = 0, G__94781__a = new Array(arguments.length -  0);
while (G__94781__i < G__94781__a.length) {G__94781__a[G__94781__i] = arguments[G__94781__i + 0]; ++G__94781__i;}
  args = new cljs.core.IndexedSeq(G__94781__a,0);
} 
return G__94780__delegate.call(this,args);};
G__94780.cljs$lang$maxFixedArity = 0;
G__94780.cljs$lang$applyTo = (function (arglist__94782){
var args = cljs.core.seq(arglist__94782);
return G__94780__delegate(args);
});
G__94780.cljs$core$IFn$_invoke$arity$variadic = G__94780__delegate;
return G__94780;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__94783__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__94783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__94784__i = 0, G__94784__a = new Array(arguments.length -  0);
while (G__94784__i < G__94784__a.length) {G__94784__a[G__94784__i] = arguments[G__94784__i + 0]; ++G__94784__i;}
  args = new cljs.core.IndexedSeq(G__94784__a,0);
} 
return G__94783__delegate.call(this,args);};
G__94783.cljs$lang$maxFixedArity = 0;
G__94783.cljs$lang$applyTo = (function (arglist__94785){
var args = cljs.core.seq(arglist__94785);
return G__94783__delegate(args);
});
G__94783.cljs$core$IFn$_invoke$arity$variadic = G__94783__delegate;
return G__94783;
})()
;

return null;
});
