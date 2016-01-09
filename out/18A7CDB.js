goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__165404__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__165404 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__165405__i = 0, G__165405__a = new Array(arguments.length -  0);
while (G__165405__i < G__165405__a.length) {G__165405__a[G__165405__i] = arguments[G__165405__i + 0]; ++G__165405__i;}
  args = new cljs.core.IndexedSeq(G__165405__a,0);
} 
return G__165404__delegate.call(this,args);};
G__165404.cljs$lang$maxFixedArity = 0;
G__165404.cljs$lang$applyTo = (function (arglist__165406){
var args = cljs.core.seq(arglist__165406);
return G__165404__delegate(args);
});
G__165404.cljs$core$IFn$_invoke$arity$variadic = G__165404__delegate;
return G__165404;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__165407__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__165407 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__165408__i = 0, G__165408__a = new Array(arguments.length -  0);
while (G__165408__i < G__165408__a.length) {G__165408__a[G__165408__i] = arguments[G__165408__i + 0]; ++G__165408__i;}
  args = new cljs.core.IndexedSeq(G__165408__a,0);
} 
return G__165407__delegate.call(this,args);};
G__165407.cljs$lang$maxFixedArity = 0;
G__165407.cljs$lang$applyTo = (function (arglist__165409){
var args = cljs.core.seq(arglist__165409);
return G__165407__delegate(args);
});
G__165407.cljs$core$IFn$_invoke$arity$variadic = G__165407__delegate;
return G__165407;
})()
;

return null;
});
