goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__355208__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__355208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__355209__i = 0, G__355209__a = new Array(arguments.length -  0);
while (G__355209__i < G__355209__a.length) {G__355209__a[G__355209__i] = arguments[G__355209__i + 0]; ++G__355209__i;}
  args = new cljs.core.IndexedSeq(G__355209__a,0);
} 
return G__355208__delegate.call(this,args);};
G__355208.cljs$lang$maxFixedArity = 0;
G__355208.cljs$lang$applyTo = (function (arglist__355210){
var args = cljs.core.seq(arglist__355210);
return G__355208__delegate(args);
});
G__355208.cljs$core$IFn$_invoke$arity$variadic = G__355208__delegate;
return G__355208;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__355211__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__355211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__355212__i = 0, G__355212__a = new Array(arguments.length -  0);
while (G__355212__i < G__355212__a.length) {G__355212__a[G__355212__i] = arguments[G__355212__i + 0]; ++G__355212__i;}
  args = new cljs.core.IndexedSeq(G__355212__a,0);
} 
return G__355211__delegate.call(this,args);};
G__355211.cljs$lang$maxFixedArity = 0;
G__355211.cljs$lang$applyTo = (function (arglist__355213){
var args = cljs.core.seq(arglist__355213);
return G__355211__delegate(args);
});
G__355211.cljs$core$IFn$_invoke$arity$variadic = G__355211__delegate;
return G__355211;
})()
;

return null;
});
