goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43083__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43083 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43084__i = 0, G__43084__a = new Array(arguments.length -  0);
while (G__43084__i < G__43084__a.length) {G__43084__a[G__43084__i] = arguments[G__43084__i + 0]; ++G__43084__i;}
  args = new cljs.core.IndexedSeq(G__43084__a,0);
} 
return G__43083__delegate.call(this,args);};
G__43083.cljs$lang$maxFixedArity = 0;
G__43083.cljs$lang$applyTo = (function (arglist__43085){
var args = cljs.core.seq(arglist__43085);
return G__43083__delegate(args);
});
G__43083.cljs$core$IFn$_invoke$arity$variadic = G__43083__delegate;
return G__43083;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43086__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43086 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43087__i = 0, G__43087__a = new Array(arguments.length -  0);
while (G__43087__i < G__43087__a.length) {G__43087__a[G__43087__i] = arguments[G__43087__i + 0]; ++G__43087__i;}
  args = new cljs.core.IndexedSeq(G__43087__a,0);
} 
return G__43086__delegate.call(this,args);};
G__43086.cljs$lang$maxFixedArity = 0;
G__43086.cljs$lang$applyTo = (function (arglist__43088){
var args = cljs.core.seq(arglist__43088);
return G__43086__delegate(args);
});
G__43086.cljs$core$IFn$_invoke$arity$variadic = G__43086__delegate;
return G__43086;
})()
;

return null;
});
