goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__105290__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__105290 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__105291__i = 0, G__105291__a = new Array(arguments.length -  0);
while (G__105291__i < G__105291__a.length) {G__105291__a[G__105291__i] = arguments[G__105291__i + 0]; ++G__105291__i;}
  args = new cljs.core.IndexedSeq(G__105291__a,0);
} 
return G__105290__delegate.call(this,args);};
G__105290.cljs$lang$maxFixedArity = 0;
G__105290.cljs$lang$applyTo = (function (arglist__105292){
var args = cljs.core.seq(arglist__105292);
return G__105290__delegate(args);
});
G__105290.cljs$core$IFn$_invoke$arity$variadic = G__105290__delegate;
return G__105290;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__105293__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__105293 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__105294__i = 0, G__105294__a = new Array(arguments.length -  0);
while (G__105294__i < G__105294__a.length) {G__105294__a[G__105294__i] = arguments[G__105294__i + 0]; ++G__105294__i;}
  args = new cljs.core.IndexedSeq(G__105294__a,0);
} 
return G__105293__delegate.call(this,args);};
G__105293.cljs$lang$maxFixedArity = 0;
G__105293.cljs$lang$applyTo = (function (arglist__105295){
var args = cljs.core.seq(arglist__105295);
return G__105293__delegate(args);
});
G__105293.cljs$core$IFn$_invoke$arity$variadic = G__105293__delegate;
return G__105293;
})()
;

return null;
});
