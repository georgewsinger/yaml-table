goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43905__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43905 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43906__i = 0, G__43906__a = new Array(arguments.length -  0);
while (G__43906__i < G__43906__a.length) {G__43906__a[G__43906__i] = arguments[G__43906__i + 0]; ++G__43906__i;}
  args = new cljs.core.IndexedSeq(G__43906__a,0);
} 
return G__43905__delegate.call(this,args);};
G__43905.cljs$lang$maxFixedArity = 0;
G__43905.cljs$lang$applyTo = (function (arglist__43907){
var args = cljs.core.seq(arglist__43907);
return G__43905__delegate(args);
});
G__43905.cljs$core$IFn$_invoke$arity$variadic = G__43905__delegate;
return G__43905;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43908__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43908 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43909__i = 0, G__43909__a = new Array(arguments.length -  0);
while (G__43909__i < G__43909__a.length) {G__43909__a[G__43909__i] = arguments[G__43909__i + 0]; ++G__43909__i;}
  args = new cljs.core.IndexedSeq(G__43909__a,0);
} 
return G__43908__delegate.call(this,args);};
G__43908.cljs$lang$maxFixedArity = 0;
G__43908.cljs$lang$applyTo = (function (arglist__43910){
var args = cljs.core.seq(arglist__43910);
return G__43908__delegate(args);
});
G__43908.cljs$core$IFn$_invoke$arity$variadic = G__43908__delegate;
return G__43908;
})()
;

return null;
});
