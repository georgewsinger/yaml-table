goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__60072__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__60072 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60073__i = 0, G__60073__a = new Array(arguments.length -  0);
while (G__60073__i < G__60073__a.length) {G__60073__a[G__60073__i] = arguments[G__60073__i + 0]; ++G__60073__i;}
  args = new cljs.core.IndexedSeq(G__60073__a,0);
} 
return G__60072__delegate.call(this,args);};
G__60072.cljs$lang$maxFixedArity = 0;
G__60072.cljs$lang$applyTo = (function (arglist__60074){
var args = cljs.core.seq(arglist__60074);
return G__60072__delegate(args);
});
G__60072.cljs$core$IFn$_invoke$arity$variadic = G__60072__delegate;
return G__60072;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__60075__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__60075 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60076__i = 0, G__60076__a = new Array(arguments.length -  0);
while (G__60076__i < G__60076__a.length) {G__60076__a[G__60076__i] = arguments[G__60076__i + 0]; ++G__60076__i;}
  args = new cljs.core.IndexedSeq(G__60076__a,0);
} 
return G__60075__delegate.call(this,args);};
G__60075.cljs$lang$maxFixedArity = 0;
G__60075.cljs$lang$applyTo = (function (arglist__60077){
var args = cljs.core.seq(arglist__60077);
return G__60075__delegate(args);
});
G__60075.cljs$core$IFn$_invoke$arity$variadic = G__60075__delegate;
return G__60075;
})()
;

return null;
});
