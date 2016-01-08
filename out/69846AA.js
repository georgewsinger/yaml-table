goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32329__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32329 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32330__i = 0, G__32330__a = new Array(arguments.length -  0);
while (G__32330__i < G__32330__a.length) {G__32330__a[G__32330__i] = arguments[G__32330__i + 0]; ++G__32330__i;}
  args = new cljs.core.IndexedSeq(G__32330__a,0);
} 
return G__32329__delegate.call(this,args);};
G__32329.cljs$lang$maxFixedArity = 0;
G__32329.cljs$lang$applyTo = (function (arglist__32331){
var args = cljs.core.seq(arglist__32331);
return G__32329__delegate(args);
});
G__32329.cljs$core$IFn$_invoke$arity$variadic = G__32329__delegate;
return G__32329;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32332__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32332 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32333__i = 0, G__32333__a = new Array(arguments.length -  0);
while (G__32333__i < G__32333__a.length) {G__32333__a[G__32333__i] = arguments[G__32333__i + 0]; ++G__32333__i;}
  args = new cljs.core.IndexedSeq(G__32333__a,0);
} 
return G__32332__delegate.call(this,args);};
G__32332.cljs$lang$maxFixedArity = 0;
G__32332.cljs$lang$applyTo = (function (arglist__32334){
var args = cljs.core.seq(arglist__32334);
return G__32332__delegate(args);
});
G__32332.cljs$core$IFn$_invoke$arity$variadic = G__32332__delegate;
return G__32332;
})()
;

return null;
});
