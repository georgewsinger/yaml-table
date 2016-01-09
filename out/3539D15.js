goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__158474__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__158474 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__158475__i = 0, G__158475__a = new Array(arguments.length -  0);
while (G__158475__i < G__158475__a.length) {G__158475__a[G__158475__i] = arguments[G__158475__i + 0]; ++G__158475__i;}
  args = new cljs.core.IndexedSeq(G__158475__a,0);
} 
return G__158474__delegate.call(this,args);};
G__158474.cljs$lang$maxFixedArity = 0;
G__158474.cljs$lang$applyTo = (function (arglist__158476){
var args = cljs.core.seq(arglist__158476);
return G__158474__delegate(args);
});
G__158474.cljs$core$IFn$_invoke$arity$variadic = G__158474__delegate;
return G__158474;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__158477__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__158477 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__158478__i = 0, G__158478__a = new Array(arguments.length -  0);
while (G__158478__i < G__158478__a.length) {G__158478__a[G__158478__i] = arguments[G__158478__i + 0]; ++G__158478__i;}
  args = new cljs.core.IndexedSeq(G__158478__a,0);
} 
return G__158477__delegate.call(this,args);};
G__158477.cljs$lang$maxFixedArity = 0;
G__158477.cljs$lang$applyTo = (function (arglist__158479){
var args = cljs.core.seq(arglist__158479);
return G__158477__delegate(args);
});
G__158477.cljs$core$IFn$_invoke$arity$variadic = G__158477__delegate;
return G__158477;
})()
;

return null;
});
