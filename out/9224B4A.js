goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__203664__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__203664 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__203665__i = 0, G__203665__a = new Array(arguments.length -  0);
while (G__203665__i < G__203665__a.length) {G__203665__a[G__203665__i] = arguments[G__203665__i + 0]; ++G__203665__i;}
  args = new cljs.core.IndexedSeq(G__203665__a,0);
} 
return G__203664__delegate.call(this,args);};
G__203664.cljs$lang$maxFixedArity = 0;
G__203664.cljs$lang$applyTo = (function (arglist__203666){
var args = cljs.core.seq(arglist__203666);
return G__203664__delegate(args);
});
G__203664.cljs$core$IFn$_invoke$arity$variadic = G__203664__delegate;
return G__203664;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__203667__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__203667 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__203668__i = 0, G__203668__a = new Array(arguments.length -  0);
while (G__203668__i < G__203668__a.length) {G__203668__a[G__203668__i] = arguments[G__203668__i + 0]; ++G__203668__i;}
  args = new cljs.core.IndexedSeq(G__203668__a,0);
} 
return G__203667__delegate.call(this,args);};
G__203667.cljs$lang$maxFixedArity = 0;
G__203667.cljs$lang$applyTo = (function (arglist__203669){
var args = cljs.core.seq(arglist__203669);
return G__203667__delegate(args);
});
G__203667.cljs$core$IFn$_invoke$arity$variadic = G__203667__delegate;
return G__203667;
})()
;

return null;
});
