goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31460__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31460 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31461__i = 0, G__31461__a = new Array(arguments.length -  0);
while (G__31461__i < G__31461__a.length) {G__31461__a[G__31461__i] = arguments[G__31461__i + 0]; ++G__31461__i;}
  args = new cljs.core.IndexedSeq(G__31461__a,0);
} 
return G__31460__delegate.call(this,args);};
G__31460.cljs$lang$maxFixedArity = 0;
G__31460.cljs$lang$applyTo = (function (arglist__31462){
var args = cljs.core.seq(arglist__31462);
return G__31460__delegate(args);
});
G__31460.cljs$core$IFn$_invoke$arity$variadic = G__31460__delegate;
return G__31460;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31463__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31463 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31464__i = 0, G__31464__a = new Array(arguments.length -  0);
while (G__31464__i < G__31464__a.length) {G__31464__a[G__31464__i] = arguments[G__31464__i + 0]; ++G__31464__i;}
  args = new cljs.core.IndexedSeq(G__31464__a,0);
} 
return G__31463__delegate.call(this,args);};
G__31463.cljs$lang$maxFixedArity = 0;
G__31463.cljs$lang$applyTo = (function (arglist__31465){
var args = cljs.core.seq(arglist__31465);
return G__31463__delegate(args);
});
G__31463.cljs$core$IFn$_invoke$arity$variadic = G__31463__delegate;
return G__31463;
})()
;

return null;
});
