goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24454__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24454 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24455__i = 0, G__24455__a = new Array(arguments.length -  0);
while (G__24455__i < G__24455__a.length) {G__24455__a[G__24455__i] = arguments[G__24455__i + 0]; ++G__24455__i;}
  args = new cljs.core.IndexedSeq(G__24455__a,0);
} 
return G__24454__delegate.call(this,args);};
G__24454.cljs$lang$maxFixedArity = 0;
G__24454.cljs$lang$applyTo = (function (arglist__24456){
var args = cljs.core.seq(arglist__24456);
return G__24454__delegate(args);
});
G__24454.cljs$core$IFn$_invoke$arity$variadic = G__24454__delegate;
return G__24454;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24457__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24457 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24458__i = 0, G__24458__a = new Array(arguments.length -  0);
while (G__24458__i < G__24458__a.length) {G__24458__a[G__24458__i] = arguments[G__24458__i + 0]; ++G__24458__i;}
  args = new cljs.core.IndexedSeq(G__24458__a,0);
} 
return G__24457__delegate.call(this,args);};
G__24457.cljs$lang$maxFixedArity = 0;
G__24457.cljs$lang$applyTo = (function (arglist__24459){
var args = cljs.core.seq(arglist__24459);
return G__24457__delegate(args);
});
G__24457.cljs$core$IFn$_invoke$arity$variadic = G__24457__delegate;
return G__24457;
})()
;

return null;
});
