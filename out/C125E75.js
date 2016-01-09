goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__110298__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__110298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__110299__i = 0, G__110299__a = new Array(arguments.length -  0);
while (G__110299__i < G__110299__a.length) {G__110299__a[G__110299__i] = arguments[G__110299__i + 0]; ++G__110299__i;}
  args = new cljs.core.IndexedSeq(G__110299__a,0);
} 
return G__110298__delegate.call(this,args);};
G__110298.cljs$lang$maxFixedArity = 0;
G__110298.cljs$lang$applyTo = (function (arglist__110300){
var args = cljs.core.seq(arglist__110300);
return G__110298__delegate(args);
});
G__110298.cljs$core$IFn$_invoke$arity$variadic = G__110298__delegate;
return G__110298;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__110301__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__110301 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__110302__i = 0, G__110302__a = new Array(arguments.length -  0);
while (G__110302__i < G__110302__a.length) {G__110302__a[G__110302__i] = arguments[G__110302__i + 0]; ++G__110302__i;}
  args = new cljs.core.IndexedSeq(G__110302__a,0);
} 
return G__110301__delegate.call(this,args);};
G__110301.cljs$lang$maxFixedArity = 0;
G__110301.cljs$lang$applyTo = (function (arglist__110303){
var args = cljs.core.seq(arglist__110303);
return G__110301__delegate(args);
});
G__110301.cljs$core$IFn$_invoke$arity$variadic = G__110301__delegate;
return G__110301;
})()
;

return null;
});
