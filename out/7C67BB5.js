goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61673__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61673 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61674__i = 0, G__61674__a = new Array(arguments.length -  0);
while (G__61674__i < G__61674__a.length) {G__61674__a[G__61674__i] = arguments[G__61674__i + 0]; ++G__61674__i;}
  args = new cljs.core.IndexedSeq(G__61674__a,0);
} 
return G__61673__delegate.call(this,args);};
G__61673.cljs$lang$maxFixedArity = 0;
G__61673.cljs$lang$applyTo = (function (arglist__61675){
var args = cljs.core.seq(arglist__61675);
return G__61673__delegate(args);
});
G__61673.cljs$core$IFn$_invoke$arity$variadic = G__61673__delegate;
return G__61673;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61676__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61677__i = 0, G__61677__a = new Array(arguments.length -  0);
while (G__61677__i < G__61677__a.length) {G__61677__a[G__61677__i] = arguments[G__61677__i + 0]; ++G__61677__i;}
  args = new cljs.core.IndexedSeq(G__61677__a,0);
} 
return G__61676__delegate.call(this,args);};
G__61676.cljs$lang$maxFixedArity = 0;
G__61676.cljs$lang$applyTo = (function (arglist__61678){
var args = cljs.core.seq(arglist__61678);
return G__61676__delegate(args);
});
G__61676.cljs$core$IFn$_invoke$arity$variadic = G__61676__delegate;
return G__61676;
})()
;

return null;
});
