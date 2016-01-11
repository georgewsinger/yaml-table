goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__278160__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__278160 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__278161__i = 0, G__278161__a = new Array(arguments.length -  0);
while (G__278161__i < G__278161__a.length) {G__278161__a[G__278161__i] = arguments[G__278161__i + 0]; ++G__278161__i;}
  args = new cljs.core.IndexedSeq(G__278161__a,0);
} 
return G__278160__delegate.call(this,args);};
G__278160.cljs$lang$maxFixedArity = 0;
G__278160.cljs$lang$applyTo = (function (arglist__278162){
var args = cljs.core.seq(arglist__278162);
return G__278160__delegate(args);
});
G__278160.cljs$core$IFn$_invoke$arity$variadic = G__278160__delegate;
return G__278160;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__278163__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__278163 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__278164__i = 0, G__278164__a = new Array(arguments.length -  0);
while (G__278164__i < G__278164__a.length) {G__278164__a[G__278164__i] = arguments[G__278164__i + 0]; ++G__278164__i;}
  args = new cljs.core.IndexedSeq(G__278164__a,0);
} 
return G__278163__delegate.call(this,args);};
G__278163.cljs$lang$maxFixedArity = 0;
G__278163.cljs$lang$applyTo = (function (arglist__278165){
var args = cljs.core.seq(arglist__278165);
return G__278163__delegate(args);
});
G__278163.cljs$core$IFn$_invoke$arity$variadic = G__278163__delegate;
return G__278163;
})()
;

return null;
});
