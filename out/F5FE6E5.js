goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25476__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25476 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25477__i = 0, G__25477__a = new Array(arguments.length -  0);
while (G__25477__i < G__25477__a.length) {G__25477__a[G__25477__i] = arguments[G__25477__i + 0]; ++G__25477__i;}
  args = new cljs.core.IndexedSeq(G__25477__a,0);
} 
return G__25476__delegate.call(this,args);};
G__25476.cljs$lang$maxFixedArity = 0;
G__25476.cljs$lang$applyTo = (function (arglist__25478){
var args = cljs.core.seq(arglist__25478);
return G__25476__delegate(args);
});
G__25476.cljs$core$IFn$_invoke$arity$variadic = G__25476__delegate;
return G__25476;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25479__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25479 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25480__i = 0, G__25480__a = new Array(arguments.length -  0);
while (G__25480__i < G__25480__a.length) {G__25480__a[G__25480__i] = arguments[G__25480__i + 0]; ++G__25480__i;}
  args = new cljs.core.IndexedSeq(G__25480__a,0);
} 
return G__25479__delegate.call(this,args);};
G__25479.cljs$lang$maxFixedArity = 0;
G__25479.cljs$lang$applyTo = (function (arglist__25481){
var args = cljs.core.seq(arglist__25481);
return G__25479__delegate(args);
});
G__25479.cljs$core$IFn$_invoke$arity$variadic = G__25479__delegate;
return G__25479;
})()
;

return null;
});
