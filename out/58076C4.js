goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__171548__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__171548 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__171549__i = 0, G__171549__a = new Array(arguments.length -  0);
while (G__171549__i < G__171549__a.length) {G__171549__a[G__171549__i] = arguments[G__171549__i + 0]; ++G__171549__i;}
  args = new cljs.core.IndexedSeq(G__171549__a,0);
} 
return G__171548__delegate.call(this,args);};
G__171548.cljs$lang$maxFixedArity = 0;
G__171548.cljs$lang$applyTo = (function (arglist__171550){
var args = cljs.core.seq(arglist__171550);
return G__171548__delegate(args);
});
G__171548.cljs$core$IFn$_invoke$arity$variadic = G__171548__delegate;
return G__171548;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__171551__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__171551 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__171552__i = 0, G__171552__a = new Array(arguments.length -  0);
while (G__171552__i < G__171552__a.length) {G__171552__a[G__171552__i] = arguments[G__171552__i + 0]; ++G__171552__i;}
  args = new cljs.core.IndexedSeq(G__171552__a,0);
} 
return G__171551__delegate.call(this,args);};
G__171551.cljs$lang$maxFixedArity = 0;
G__171551.cljs$lang$applyTo = (function (arglist__171553){
var args = cljs.core.seq(arglist__171553);
return G__171551__delegate(args);
});
G__171551.cljs$core$IFn$_invoke$arity$variadic = G__171551__delegate;
return G__171551;
})()
;

return null;
});
