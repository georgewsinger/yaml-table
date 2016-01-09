goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__127209__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__127209 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__127210__i = 0, G__127210__a = new Array(arguments.length -  0);
while (G__127210__i < G__127210__a.length) {G__127210__a[G__127210__i] = arguments[G__127210__i + 0]; ++G__127210__i;}
  args = new cljs.core.IndexedSeq(G__127210__a,0);
} 
return G__127209__delegate.call(this,args);};
G__127209.cljs$lang$maxFixedArity = 0;
G__127209.cljs$lang$applyTo = (function (arglist__127211){
var args = cljs.core.seq(arglist__127211);
return G__127209__delegate(args);
});
G__127209.cljs$core$IFn$_invoke$arity$variadic = G__127209__delegate;
return G__127209;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__127212__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__127212 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__127213__i = 0, G__127213__a = new Array(arguments.length -  0);
while (G__127213__i < G__127213__a.length) {G__127213__a[G__127213__i] = arguments[G__127213__i + 0]; ++G__127213__i;}
  args = new cljs.core.IndexedSeq(G__127213__a,0);
} 
return G__127212__delegate.call(this,args);};
G__127212.cljs$lang$maxFixedArity = 0;
G__127212.cljs$lang$applyTo = (function (arglist__127214){
var args = cljs.core.seq(arglist__127214);
return G__127212__delegate(args);
});
G__127212.cljs$core$IFn$_invoke$arity$variadic = G__127212__delegate;
return G__127212;
})()
;

return null;
});
