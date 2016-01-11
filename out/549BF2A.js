goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__196458__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__196458 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__196459__i = 0, G__196459__a = new Array(arguments.length -  0);
while (G__196459__i < G__196459__a.length) {G__196459__a[G__196459__i] = arguments[G__196459__i + 0]; ++G__196459__i;}
  args = new cljs.core.IndexedSeq(G__196459__a,0);
} 
return G__196458__delegate.call(this,args);};
G__196458.cljs$lang$maxFixedArity = 0;
G__196458.cljs$lang$applyTo = (function (arglist__196460){
var args = cljs.core.seq(arglist__196460);
return G__196458__delegate(args);
});
G__196458.cljs$core$IFn$_invoke$arity$variadic = G__196458__delegate;
return G__196458;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__196461__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__196461 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__196462__i = 0, G__196462__a = new Array(arguments.length -  0);
while (G__196462__i < G__196462__a.length) {G__196462__a[G__196462__i] = arguments[G__196462__i + 0]; ++G__196462__i;}
  args = new cljs.core.IndexedSeq(G__196462__a,0);
} 
return G__196461__delegate.call(this,args);};
G__196461.cljs$lang$maxFixedArity = 0;
G__196461.cljs$lang$applyTo = (function (arglist__196463){
var args = cljs.core.seq(arglist__196463);
return G__196461__delegate(args);
});
G__196461.cljs$core$IFn$_invoke$arity$variadic = G__196461__delegate;
return G__196461;
})()
;

return null;
});
