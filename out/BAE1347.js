goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__180724__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__180724 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__180725__i = 0, G__180725__a = new Array(arguments.length -  0);
while (G__180725__i < G__180725__a.length) {G__180725__a[G__180725__i] = arguments[G__180725__i + 0]; ++G__180725__i;}
  args = new cljs.core.IndexedSeq(G__180725__a,0);
} 
return G__180724__delegate.call(this,args);};
G__180724.cljs$lang$maxFixedArity = 0;
G__180724.cljs$lang$applyTo = (function (arglist__180726){
var args = cljs.core.seq(arglist__180726);
return G__180724__delegate(args);
});
G__180724.cljs$core$IFn$_invoke$arity$variadic = G__180724__delegate;
return G__180724;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__180727__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__180727 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__180728__i = 0, G__180728__a = new Array(arguments.length -  0);
while (G__180728__i < G__180728__a.length) {G__180728__a[G__180728__i] = arguments[G__180728__i + 0]; ++G__180728__i;}
  args = new cljs.core.IndexedSeq(G__180728__a,0);
} 
return G__180727__delegate.call(this,args);};
G__180727.cljs$lang$maxFixedArity = 0;
G__180727.cljs$lang$applyTo = (function (arglist__180729){
var args = cljs.core.seq(arglist__180729);
return G__180727__delegate(args);
});
G__180727.cljs$core$IFn$_invoke$arity$variadic = G__180727__delegate;
return G__180727;
})()
;

return null;
});
