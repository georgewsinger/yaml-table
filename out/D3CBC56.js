goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__143237__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__143237 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__143238__i = 0, G__143238__a = new Array(arguments.length -  0);
while (G__143238__i < G__143238__a.length) {G__143238__a[G__143238__i] = arguments[G__143238__i + 0]; ++G__143238__i;}
  args = new cljs.core.IndexedSeq(G__143238__a,0);
} 
return G__143237__delegate.call(this,args);};
G__143237.cljs$lang$maxFixedArity = 0;
G__143237.cljs$lang$applyTo = (function (arglist__143239){
var args = cljs.core.seq(arglist__143239);
return G__143237__delegate(args);
});
G__143237.cljs$core$IFn$_invoke$arity$variadic = G__143237__delegate;
return G__143237;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__143240__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__143240 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__143241__i = 0, G__143241__a = new Array(arguments.length -  0);
while (G__143241__i < G__143241__a.length) {G__143241__a[G__143241__i] = arguments[G__143241__i + 0]; ++G__143241__i;}
  args = new cljs.core.IndexedSeq(G__143241__a,0);
} 
return G__143240__delegate.call(this,args);};
G__143240.cljs$lang$maxFixedArity = 0;
G__143240.cljs$lang$applyTo = (function (arglist__143242){
var args = cljs.core.seq(arglist__143242);
return G__143240__delegate(args);
});
G__143240.cljs$core$IFn$_invoke$arity$variadic = G__143240__delegate;
return G__143240;
})()
;

return null;
});
