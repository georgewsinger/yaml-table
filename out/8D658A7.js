goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__358841__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__358841 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__358842__i = 0, G__358842__a = new Array(arguments.length -  0);
while (G__358842__i < G__358842__a.length) {G__358842__a[G__358842__i] = arguments[G__358842__i + 0]; ++G__358842__i;}
  args = new cljs.core.IndexedSeq(G__358842__a,0);
} 
return G__358841__delegate.call(this,args);};
G__358841.cljs$lang$maxFixedArity = 0;
G__358841.cljs$lang$applyTo = (function (arglist__358843){
var args = cljs.core.seq(arglist__358843);
return G__358841__delegate(args);
});
G__358841.cljs$core$IFn$_invoke$arity$variadic = G__358841__delegate;
return G__358841;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__358844__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__358844 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__358845__i = 0, G__358845__a = new Array(arguments.length -  0);
while (G__358845__i < G__358845__a.length) {G__358845__a[G__358845__i] = arguments[G__358845__i + 0]; ++G__358845__i;}
  args = new cljs.core.IndexedSeq(G__358845__a,0);
} 
return G__358844__delegate.call(this,args);};
G__358844.cljs$lang$maxFixedArity = 0;
G__358844.cljs$lang$applyTo = (function (arglist__358846){
var args = cljs.core.seq(arglist__358846);
return G__358844__delegate(args);
});
G__358844.cljs$core$IFn$_invoke$arity$variadic = G__358844__delegate;
return G__358844;
})()
;

return null;
});
