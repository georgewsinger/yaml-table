goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__169905__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__169905 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__169906__i = 0, G__169906__a = new Array(arguments.length -  0);
while (G__169906__i < G__169906__a.length) {G__169906__a[G__169906__i] = arguments[G__169906__i + 0]; ++G__169906__i;}
  args = new cljs.core.IndexedSeq(G__169906__a,0);
} 
return G__169905__delegate.call(this,args);};
G__169905.cljs$lang$maxFixedArity = 0;
G__169905.cljs$lang$applyTo = (function (arglist__169907){
var args = cljs.core.seq(arglist__169907);
return G__169905__delegate(args);
});
G__169905.cljs$core$IFn$_invoke$arity$variadic = G__169905__delegate;
return G__169905;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__169908__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__169908 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__169909__i = 0, G__169909__a = new Array(arguments.length -  0);
while (G__169909__i < G__169909__a.length) {G__169909__a[G__169909__i] = arguments[G__169909__i + 0]; ++G__169909__i;}
  args = new cljs.core.IndexedSeq(G__169909__a,0);
} 
return G__169908__delegate.call(this,args);};
G__169908.cljs$lang$maxFixedArity = 0;
G__169908.cljs$lang$applyTo = (function (arglist__169910){
var args = cljs.core.seq(arglist__169910);
return G__169908__delegate(args);
});
G__169908.cljs$core$IFn$_invoke$arity$variadic = G__169908__delegate;
return G__169908;
})()
;

return null;
});
