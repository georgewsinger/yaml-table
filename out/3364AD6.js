goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41850__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41850 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41851__i = 0, G__41851__a = new Array(arguments.length -  0);
while (G__41851__i < G__41851__a.length) {G__41851__a[G__41851__i] = arguments[G__41851__i + 0]; ++G__41851__i;}
  args = new cljs.core.IndexedSeq(G__41851__a,0);
} 
return G__41850__delegate.call(this,args);};
G__41850.cljs$lang$maxFixedArity = 0;
G__41850.cljs$lang$applyTo = (function (arglist__41852){
var args = cljs.core.seq(arglist__41852);
return G__41850__delegate(args);
});
G__41850.cljs$core$IFn$_invoke$arity$variadic = G__41850__delegate;
return G__41850;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41853__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41853 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41854__i = 0, G__41854__a = new Array(arguments.length -  0);
while (G__41854__i < G__41854__a.length) {G__41854__a[G__41854__i] = arguments[G__41854__i + 0]; ++G__41854__i;}
  args = new cljs.core.IndexedSeq(G__41854__a,0);
} 
return G__41853__delegate.call(this,args);};
G__41853.cljs$lang$maxFixedArity = 0;
G__41853.cljs$lang$applyTo = (function (arglist__41855){
var args = cljs.core.seq(arglist__41855);
return G__41853__delegate(args);
});
G__41853.cljs$core$IFn$_invoke$arity$variadic = G__41853__delegate;
return G__41853;
})()
;

return null;
});
