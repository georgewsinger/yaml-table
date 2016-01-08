goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26375__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26375 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26376__i = 0, G__26376__a = new Array(arguments.length -  0);
while (G__26376__i < G__26376__a.length) {G__26376__a[G__26376__i] = arguments[G__26376__i + 0]; ++G__26376__i;}
  args = new cljs.core.IndexedSeq(G__26376__a,0);
} 
return G__26375__delegate.call(this,args);};
G__26375.cljs$lang$maxFixedArity = 0;
G__26375.cljs$lang$applyTo = (function (arglist__26377){
var args = cljs.core.seq(arglist__26377);
return G__26375__delegate(args);
});
G__26375.cljs$core$IFn$_invoke$arity$variadic = G__26375__delegate;
return G__26375;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26378__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26378 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26379__i = 0, G__26379__a = new Array(arguments.length -  0);
while (G__26379__i < G__26379__a.length) {G__26379__a[G__26379__i] = arguments[G__26379__i + 0]; ++G__26379__i;}
  args = new cljs.core.IndexedSeq(G__26379__a,0);
} 
return G__26378__delegate.call(this,args);};
G__26378.cljs$lang$maxFixedArity = 0;
G__26378.cljs$lang$applyTo = (function (arglist__26380){
var args = cljs.core.seq(arglist__26380);
return G__26378__delegate(args);
});
G__26378.cljs$core$IFn$_invoke$arity$variadic = G__26378__delegate;
return G__26378;
})()
;

return null;
});
