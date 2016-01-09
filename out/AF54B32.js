goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__165136__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__165136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__165137__i = 0, G__165137__a = new Array(arguments.length -  0);
while (G__165137__i < G__165137__a.length) {G__165137__a[G__165137__i] = arguments[G__165137__i + 0]; ++G__165137__i;}
  args = new cljs.core.IndexedSeq(G__165137__a,0);
} 
return G__165136__delegate.call(this,args);};
G__165136.cljs$lang$maxFixedArity = 0;
G__165136.cljs$lang$applyTo = (function (arglist__165138){
var args = cljs.core.seq(arglist__165138);
return G__165136__delegate(args);
});
G__165136.cljs$core$IFn$_invoke$arity$variadic = G__165136__delegate;
return G__165136;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__165139__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__165139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__165140__i = 0, G__165140__a = new Array(arguments.length -  0);
while (G__165140__i < G__165140__a.length) {G__165140__a[G__165140__i] = arguments[G__165140__i + 0]; ++G__165140__i;}
  args = new cljs.core.IndexedSeq(G__165140__a,0);
} 
return G__165139__delegate.call(this,args);};
G__165139.cljs$lang$maxFixedArity = 0;
G__165139.cljs$lang$applyTo = (function (arglist__165141){
var args = cljs.core.seq(arglist__165141);
return G__165139__delegate(args);
});
G__165139.cljs$core$IFn$_invoke$arity$variadic = G__165139__delegate;
return G__165139;
})()
;

return null;
});
