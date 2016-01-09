goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__60231__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__60231 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60232__i = 0, G__60232__a = new Array(arguments.length -  0);
while (G__60232__i < G__60232__a.length) {G__60232__a[G__60232__i] = arguments[G__60232__i + 0]; ++G__60232__i;}
  args = new cljs.core.IndexedSeq(G__60232__a,0);
} 
return G__60231__delegate.call(this,args);};
G__60231.cljs$lang$maxFixedArity = 0;
G__60231.cljs$lang$applyTo = (function (arglist__60233){
var args = cljs.core.seq(arglist__60233);
return G__60231__delegate(args);
});
G__60231.cljs$core$IFn$_invoke$arity$variadic = G__60231__delegate;
return G__60231;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__60234__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__60234 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60235__i = 0, G__60235__a = new Array(arguments.length -  0);
while (G__60235__i < G__60235__a.length) {G__60235__a[G__60235__i] = arguments[G__60235__i + 0]; ++G__60235__i;}
  args = new cljs.core.IndexedSeq(G__60235__a,0);
} 
return G__60234__delegate.call(this,args);};
G__60234.cljs$lang$maxFixedArity = 0;
G__60234.cljs$lang$applyTo = (function (arglist__60236){
var args = cljs.core.seq(arglist__60236);
return G__60234__delegate(args);
});
G__60234.cljs$core$IFn$_invoke$arity$variadic = G__60234__delegate;
return G__60234;
})()
;

return null;
});
