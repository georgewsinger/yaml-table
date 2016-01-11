goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__364245__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__364245 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__364246__i = 0, G__364246__a = new Array(arguments.length -  0);
while (G__364246__i < G__364246__a.length) {G__364246__a[G__364246__i] = arguments[G__364246__i + 0]; ++G__364246__i;}
  args = new cljs.core.IndexedSeq(G__364246__a,0);
} 
return G__364245__delegate.call(this,args);};
G__364245.cljs$lang$maxFixedArity = 0;
G__364245.cljs$lang$applyTo = (function (arglist__364247){
var args = cljs.core.seq(arglist__364247);
return G__364245__delegate(args);
});
G__364245.cljs$core$IFn$_invoke$arity$variadic = G__364245__delegate;
return G__364245;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__364248__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__364248 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__364249__i = 0, G__364249__a = new Array(arguments.length -  0);
while (G__364249__i < G__364249__a.length) {G__364249__a[G__364249__i] = arguments[G__364249__i + 0]; ++G__364249__i;}
  args = new cljs.core.IndexedSeq(G__364249__a,0);
} 
return G__364248__delegate.call(this,args);};
G__364248.cljs$lang$maxFixedArity = 0;
G__364248.cljs$lang$applyTo = (function (arglist__364250){
var args = cljs.core.seq(arglist__364250);
return G__364248__delegate(args);
});
G__364248.cljs$core$IFn$_invoke$arity$variadic = G__364248__delegate;
return G__364248;
})()
;

return null;
});
