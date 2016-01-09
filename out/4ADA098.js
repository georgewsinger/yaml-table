goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__185694__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__185694 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__185695__i = 0, G__185695__a = new Array(arguments.length -  0);
while (G__185695__i < G__185695__a.length) {G__185695__a[G__185695__i] = arguments[G__185695__i + 0]; ++G__185695__i;}
  args = new cljs.core.IndexedSeq(G__185695__a,0);
} 
return G__185694__delegate.call(this,args);};
G__185694.cljs$lang$maxFixedArity = 0;
G__185694.cljs$lang$applyTo = (function (arglist__185696){
var args = cljs.core.seq(arglist__185696);
return G__185694__delegate(args);
});
G__185694.cljs$core$IFn$_invoke$arity$variadic = G__185694__delegate;
return G__185694;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__185697__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__185697 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__185698__i = 0, G__185698__a = new Array(arguments.length -  0);
while (G__185698__i < G__185698__a.length) {G__185698__a[G__185698__i] = arguments[G__185698__i + 0]; ++G__185698__i;}
  args = new cljs.core.IndexedSeq(G__185698__a,0);
} 
return G__185697__delegate.call(this,args);};
G__185697.cljs$lang$maxFixedArity = 0;
G__185697.cljs$lang$applyTo = (function (arglist__185699){
var args = cljs.core.seq(arglist__185699);
return G__185697__delegate(args);
});
G__185697.cljs$core$IFn$_invoke$arity$variadic = G__185697__delegate;
return G__185697;
})()
;

return null;
});
