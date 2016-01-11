goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__333073__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__333073 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__333074__i = 0, G__333074__a = new Array(arguments.length -  0);
while (G__333074__i < G__333074__a.length) {G__333074__a[G__333074__i] = arguments[G__333074__i + 0]; ++G__333074__i;}
  args = new cljs.core.IndexedSeq(G__333074__a,0);
} 
return G__333073__delegate.call(this,args);};
G__333073.cljs$lang$maxFixedArity = 0;
G__333073.cljs$lang$applyTo = (function (arglist__333075){
var args = cljs.core.seq(arglist__333075);
return G__333073__delegate(args);
});
G__333073.cljs$core$IFn$_invoke$arity$variadic = G__333073__delegate;
return G__333073;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__333076__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__333076 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__333077__i = 0, G__333077__a = new Array(arguments.length -  0);
while (G__333077__i < G__333077__a.length) {G__333077__a[G__333077__i] = arguments[G__333077__i + 0]; ++G__333077__i;}
  args = new cljs.core.IndexedSeq(G__333077__a,0);
} 
return G__333076__delegate.call(this,args);};
G__333076.cljs$lang$maxFixedArity = 0;
G__333076.cljs$lang$applyTo = (function (arglist__333078){
var args = cljs.core.seq(arglist__333078);
return G__333076__delegate(args);
});
G__333076.cljs$core$IFn$_invoke$arity$variadic = G__333076__delegate;
return G__333076;
})()
;

return null;
});
