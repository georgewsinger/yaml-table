goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__345672__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__345672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__345673__i = 0, G__345673__a = new Array(arguments.length -  0);
while (G__345673__i < G__345673__a.length) {G__345673__a[G__345673__i] = arguments[G__345673__i + 0]; ++G__345673__i;}
  args = new cljs.core.IndexedSeq(G__345673__a,0);
} 
return G__345672__delegate.call(this,args);};
G__345672.cljs$lang$maxFixedArity = 0;
G__345672.cljs$lang$applyTo = (function (arglist__345674){
var args = cljs.core.seq(arglist__345674);
return G__345672__delegate(args);
});
G__345672.cljs$core$IFn$_invoke$arity$variadic = G__345672__delegate;
return G__345672;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__345675__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__345675 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__345676__i = 0, G__345676__a = new Array(arguments.length -  0);
while (G__345676__i < G__345676__a.length) {G__345676__a[G__345676__i] = arguments[G__345676__i + 0]; ++G__345676__i;}
  args = new cljs.core.IndexedSeq(G__345676__a,0);
} 
return G__345675__delegate.call(this,args);};
G__345675.cljs$lang$maxFixedArity = 0;
G__345675.cljs$lang$applyTo = (function (arglist__345677){
var args = cljs.core.seq(arglist__345677);
return G__345675__delegate(args);
});
G__345675.cljs$core$IFn$_invoke$arity$variadic = G__345675__delegate;
return G__345675;
})()
;

return null;
});
