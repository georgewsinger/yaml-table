goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__142476__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__142476 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__142477__i = 0, G__142477__a = new Array(arguments.length -  0);
while (G__142477__i < G__142477__a.length) {G__142477__a[G__142477__i] = arguments[G__142477__i + 0]; ++G__142477__i;}
  args = new cljs.core.IndexedSeq(G__142477__a,0);
} 
return G__142476__delegate.call(this,args);};
G__142476.cljs$lang$maxFixedArity = 0;
G__142476.cljs$lang$applyTo = (function (arglist__142478){
var args = cljs.core.seq(arglist__142478);
return G__142476__delegate(args);
});
G__142476.cljs$core$IFn$_invoke$arity$variadic = G__142476__delegate;
return G__142476;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__142479__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__142479 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__142480__i = 0, G__142480__a = new Array(arguments.length -  0);
while (G__142480__i < G__142480__a.length) {G__142480__a[G__142480__i] = arguments[G__142480__i + 0]; ++G__142480__i;}
  args = new cljs.core.IndexedSeq(G__142480__a,0);
} 
return G__142479__delegate.call(this,args);};
G__142479.cljs$lang$maxFixedArity = 0;
G__142479.cljs$lang$applyTo = (function (arglist__142481){
var args = cljs.core.seq(arglist__142481);
return G__142479__delegate(args);
});
G__142479.cljs$core$IFn$_invoke$arity$variadic = G__142479__delegate;
return G__142479;
})()
;

return null;
});
