goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29634__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29634 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29635__i = 0, G__29635__a = new Array(arguments.length -  0);
while (G__29635__i < G__29635__a.length) {G__29635__a[G__29635__i] = arguments[G__29635__i + 0]; ++G__29635__i;}
  args = new cljs.core.IndexedSeq(G__29635__a,0);
} 
return G__29634__delegate.call(this,args);};
G__29634.cljs$lang$maxFixedArity = 0;
G__29634.cljs$lang$applyTo = (function (arglist__29636){
var args = cljs.core.seq(arglist__29636);
return G__29634__delegate(args);
});
G__29634.cljs$core$IFn$_invoke$arity$variadic = G__29634__delegate;
return G__29634;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29637__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29637 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29638__i = 0, G__29638__a = new Array(arguments.length -  0);
while (G__29638__i < G__29638__a.length) {G__29638__a[G__29638__i] = arguments[G__29638__i + 0]; ++G__29638__i;}
  args = new cljs.core.IndexedSeq(G__29638__a,0);
} 
return G__29637__delegate.call(this,args);};
G__29637.cljs$lang$maxFixedArity = 0;
G__29637.cljs$lang$applyTo = (function (arglist__29639){
var args = cljs.core.seq(arglist__29639);
return G__29637__delegate(args);
});
G__29637.cljs$core$IFn$_invoke$arity$variadic = G__29637__delegate;
return G__29637;
})()
;

return null;
});
