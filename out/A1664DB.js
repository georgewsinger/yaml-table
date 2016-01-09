goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__74636__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__74636 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74637__i = 0, G__74637__a = new Array(arguments.length -  0);
while (G__74637__i < G__74637__a.length) {G__74637__a[G__74637__i] = arguments[G__74637__i + 0]; ++G__74637__i;}
  args = new cljs.core.IndexedSeq(G__74637__a,0);
} 
return G__74636__delegate.call(this,args);};
G__74636.cljs$lang$maxFixedArity = 0;
G__74636.cljs$lang$applyTo = (function (arglist__74638){
var args = cljs.core.seq(arglist__74638);
return G__74636__delegate(args);
});
G__74636.cljs$core$IFn$_invoke$arity$variadic = G__74636__delegate;
return G__74636;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__74639__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__74639 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74640__i = 0, G__74640__a = new Array(arguments.length -  0);
while (G__74640__i < G__74640__a.length) {G__74640__a[G__74640__i] = arguments[G__74640__i + 0]; ++G__74640__i;}
  args = new cljs.core.IndexedSeq(G__74640__a,0);
} 
return G__74639__delegate.call(this,args);};
G__74639.cljs$lang$maxFixedArity = 0;
G__74639.cljs$lang$applyTo = (function (arglist__74641){
var args = cljs.core.seq(arglist__74641);
return G__74639__delegate(args);
});
G__74639.cljs$core$IFn$_invoke$arity$variadic = G__74639__delegate;
return G__74639;
})()
;

return null;
});
