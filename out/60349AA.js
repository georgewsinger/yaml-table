goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__328516__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__328516 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__328517__i = 0, G__328517__a = new Array(arguments.length -  0);
while (G__328517__i < G__328517__a.length) {G__328517__a[G__328517__i] = arguments[G__328517__i + 0]; ++G__328517__i;}
  args = new cljs.core.IndexedSeq(G__328517__a,0);
} 
return G__328516__delegate.call(this,args);};
G__328516.cljs$lang$maxFixedArity = 0;
G__328516.cljs$lang$applyTo = (function (arglist__328518){
var args = cljs.core.seq(arglist__328518);
return G__328516__delegate(args);
});
G__328516.cljs$core$IFn$_invoke$arity$variadic = G__328516__delegate;
return G__328516;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__328519__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__328519 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__328520__i = 0, G__328520__a = new Array(arguments.length -  0);
while (G__328520__i < G__328520__a.length) {G__328520__a[G__328520__i] = arguments[G__328520__i + 0]; ++G__328520__i;}
  args = new cljs.core.IndexedSeq(G__328520__a,0);
} 
return G__328519__delegate.call(this,args);};
G__328519.cljs$lang$maxFixedArity = 0;
G__328519.cljs$lang$applyTo = (function (arglist__328521){
var args = cljs.core.seq(arglist__328521);
return G__328519__delegate(args);
});
G__328519.cljs$core$IFn$_invoke$arity$variadic = G__328519__delegate;
return G__328519;
})()
;

return null;
});
