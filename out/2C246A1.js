goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__74261__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__74261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74262__i = 0, G__74262__a = new Array(arguments.length -  0);
while (G__74262__i < G__74262__a.length) {G__74262__a[G__74262__i] = arguments[G__74262__i + 0]; ++G__74262__i;}
  args = new cljs.core.IndexedSeq(G__74262__a,0);
} 
return G__74261__delegate.call(this,args);};
G__74261.cljs$lang$maxFixedArity = 0;
G__74261.cljs$lang$applyTo = (function (arglist__74263){
var args = cljs.core.seq(arglist__74263);
return G__74261__delegate(args);
});
G__74261.cljs$core$IFn$_invoke$arity$variadic = G__74261__delegate;
return G__74261;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__74264__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__74264 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74265__i = 0, G__74265__a = new Array(arguments.length -  0);
while (G__74265__i < G__74265__a.length) {G__74265__a[G__74265__i] = arguments[G__74265__i + 0]; ++G__74265__i;}
  args = new cljs.core.IndexedSeq(G__74265__a,0);
} 
return G__74264__delegate.call(this,args);};
G__74264.cljs$lang$maxFixedArity = 0;
G__74264.cljs$lang$applyTo = (function (arglist__74266){
var args = cljs.core.seq(arglist__74266);
return G__74264__delegate(args);
});
G__74264.cljs$core$IFn$_invoke$arity$variadic = G__74264__delegate;
return G__74264;
})()
;

return null;
});
