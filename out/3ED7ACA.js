goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__307155__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__307155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__307156__i = 0, G__307156__a = new Array(arguments.length -  0);
while (G__307156__i < G__307156__a.length) {G__307156__a[G__307156__i] = arguments[G__307156__i + 0]; ++G__307156__i;}
  args = new cljs.core.IndexedSeq(G__307156__a,0);
} 
return G__307155__delegate.call(this,args);};
G__307155.cljs$lang$maxFixedArity = 0;
G__307155.cljs$lang$applyTo = (function (arglist__307157){
var args = cljs.core.seq(arglist__307157);
return G__307155__delegate(args);
});
G__307155.cljs$core$IFn$_invoke$arity$variadic = G__307155__delegate;
return G__307155;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__307158__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__307158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__307159__i = 0, G__307159__a = new Array(arguments.length -  0);
while (G__307159__i < G__307159__a.length) {G__307159__a[G__307159__i] = arguments[G__307159__i + 0]; ++G__307159__i;}
  args = new cljs.core.IndexedSeq(G__307159__a,0);
} 
return G__307158__delegate.call(this,args);};
G__307158.cljs$lang$maxFixedArity = 0;
G__307158.cljs$lang$applyTo = (function (arglist__307160){
var args = cljs.core.seq(arglist__307160);
return G__307158__delegate(args);
});
G__307158.cljs$core$IFn$_invoke$arity$variadic = G__307158__delegate;
return G__307158;
})()
;

return null;
});
