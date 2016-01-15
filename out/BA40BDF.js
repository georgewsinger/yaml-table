goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15790__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15790 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15791__i = 0, G__15791__a = new Array(arguments.length -  0);
while (G__15791__i < G__15791__a.length) {G__15791__a[G__15791__i] = arguments[G__15791__i + 0]; ++G__15791__i;}
  args = new cljs.core.IndexedSeq(G__15791__a,0);
} 
return G__15790__delegate.call(this,args);};
G__15790.cljs$lang$maxFixedArity = 0;
G__15790.cljs$lang$applyTo = (function (arglist__15792){
var args = cljs.core.seq(arglist__15792);
return G__15790__delegate(args);
});
G__15790.cljs$core$IFn$_invoke$arity$variadic = G__15790__delegate;
return G__15790;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15793__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15793 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15794__i = 0, G__15794__a = new Array(arguments.length -  0);
while (G__15794__i < G__15794__a.length) {G__15794__a[G__15794__i] = arguments[G__15794__i + 0]; ++G__15794__i;}
  args = new cljs.core.IndexedSeq(G__15794__a,0);
} 
return G__15793__delegate.call(this,args);};
G__15793.cljs$lang$maxFixedArity = 0;
G__15793.cljs$lang$applyTo = (function (arglist__15795){
var args = cljs.core.seq(arglist__15795);
return G__15793__delegate(args);
});
G__15793.cljs$core$IFn$_invoke$arity$variadic = G__15793__delegate;
return G__15793;
})()
;

return null;
});
