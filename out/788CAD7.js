goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__259309__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__259309 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__259310__i = 0, G__259310__a = new Array(arguments.length -  0);
while (G__259310__i < G__259310__a.length) {G__259310__a[G__259310__i] = arguments[G__259310__i + 0]; ++G__259310__i;}
  args = new cljs.core.IndexedSeq(G__259310__a,0);
} 
return G__259309__delegate.call(this,args);};
G__259309.cljs$lang$maxFixedArity = 0;
G__259309.cljs$lang$applyTo = (function (arglist__259311){
var args = cljs.core.seq(arglist__259311);
return G__259309__delegate(args);
});
G__259309.cljs$core$IFn$_invoke$arity$variadic = G__259309__delegate;
return G__259309;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__259312__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__259312 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__259313__i = 0, G__259313__a = new Array(arguments.length -  0);
while (G__259313__i < G__259313__a.length) {G__259313__a[G__259313__i] = arguments[G__259313__i + 0]; ++G__259313__i;}
  args = new cljs.core.IndexedSeq(G__259313__a,0);
} 
return G__259312__delegate.call(this,args);};
G__259312.cljs$lang$maxFixedArity = 0;
G__259312.cljs$lang$applyTo = (function (arglist__259314){
var args = cljs.core.seq(arglist__259314);
return G__259312__delegate(args);
});
G__259312.cljs$core$IFn$_invoke$arity$variadic = G__259312__delegate;
return G__259312;
})()
;

return null;
});
