goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__173192__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__173192 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__173193__i = 0, G__173193__a = new Array(arguments.length -  0);
while (G__173193__i < G__173193__a.length) {G__173193__a[G__173193__i] = arguments[G__173193__i + 0]; ++G__173193__i;}
  args = new cljs.core.IndexedSeq(G__173193__a,0);
} 
return G__173192__delegate.call(this,args);};
G__173192.cljs$lang$maxFixedArity = 0;
G__173192.cljs$lang$applyTo = (function (arglist__173194){
var args = cljs.core.seq(arglist__173194);
return G__173192__delegate(args);
});
G__173192.cljs$core$IFn$_invoke$arity$variadic = G__173192__delegate;
return G__173192;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__173195__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__173195 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__173196__i = 0, G__173196__a = new Array(arguments.length -  0);
while (G__173196__i < G__173196__a.length) {G__173196__a[G__173196__i] = arguments[G__173196__i + 0]; ++G__173196__i;}
  args = new cljs.core.IndexedSeq(G__173196__a,0);
} 
return G__173195__delegate.call(this,args);};
G__173195.cljs$lang$maxFixedArity = 0;
G__173195.cljs$lang$applyTo = (function (arglist__173197){
var args = cljs.core.seq(arglist__173197);
return G__173195__delegate(args);
});
G__173195.cljs$core$IFn$_invoke$arity$variadic = G__173195__delegate;
return G__173195;
})()
;

return null;
});
