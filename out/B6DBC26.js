goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__171183__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__171183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__171184__i = 0, G__171184__a = new Array(arguments.length -  0);
while (G__171184__i < G__171184__a.length) {G__171184__a[G__171184__i] = arguments[G__171184__i + 0]; ++G__171184__i;}
  args = new cljs.core.IndexedSeq(G__171184__a,0);
} 
return G__171183__delegate.call(this,args);};
G__171183.cljs$lang$maxFixedArity = 0;
G__171183.cljs$lang$applyTo = (function (arglist__171185){
var args = cljs.core.seq(arglist__171185);
return G__171183__delegate(args);
});
G__171183.cljs$core$IFn$_invoke$arity$variadic = G__171183__delegate;
return G__171183;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__171186__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__171186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__171187__i = 0, G__171187__a = new Array(arguments.length -  0);
while (G__171187__i < G__171187__a.length) {G__171187__a[G__171187__i] = arguments[G__171187__i + 0]; ++G__171187__i;}
  args = new cljs.core.IndexedSeq(G__171187__a,0);
} 
return G__171186__delegate.call(this,args);};
G__171186.cljs$lang$maxFixedArity = 0;
G__171186.cljs$lang$applyTo = (function (arglist__171188){
var args = cljs.core.seq(arglist__171188);
return G__171186__delegate(args);
});
G__171186.cljs$core$IFn$_invoke$arity$variadic = G__171186__delegate;
return G__171186;
})()
;

return null;
});
