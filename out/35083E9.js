goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39183__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39184__i = 0, G__39184__a = new Array(arguments.length -  0);
while (G__39184__i < G__39184__a.length) {G__39184__a[G__39184__i] = arguments[G__39184__i + 0]; ++G__39184__i;}
  args = new cljs.core.IndexedSeq(G__39184__a,0);
} 
return G__39183__delegate.call(this,args);};
G__39183.cljs$lang$maxFixedArity = 0;
G__39183.cljs$lang$applyTo = (function (arglist__39185){
var args = cljs.core.seq(arglist__39185);
return G__39183__delegate(args);
});
G__39183.cljs$core$IFn$_invoke$arity$variadic = G__39183__delegate;
return G__39183;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39186__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39187__i = 0, G__39187__a = new Array(arguments.length -  0);
while (G__39187__i < G__39187__a.length) {G__39187__a[G__39187__i] = arguments[G__39187__i + 0]; ++G__39187__i;}
  args = new cljs.core.IndexedSeq(G__39187__a,0);
} 
return G__39186__delegate.call(this,args);};
G__39186.cljs$lang$maxFixedArity = 0;
G__39186.cljs$lang$applyTo = (function (arglist__39188){
var args = cljs.core.seq(arglist__39188);
return G__39186__delegate(args);
});
G__39186.cljs$core$IFn$_invoke$arity$variadic = G__39186__delegate;
return G__39186;
})()
;

return null;
});
