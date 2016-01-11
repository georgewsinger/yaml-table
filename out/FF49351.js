goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__284988__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__284988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__284989__i = 0, G__284989__a = new Array(arguments.length -  0);
while (G__284989__i < G__284989__a.length) {G__284989__a[G__284989__i] = arguments[G__284989__i + 0]; ++G__284989__i;}
  args = new cljs.core.IndexedSeq(G__284989__a,0);
} 
return G__284988__delegate.call(this,args);};
G__284988.cljs$lang$maxFixedArity = 0;
G__284988.cljs$lang$applyTo = (function (arglist__284990){
var args = cljs.core.seq(arglist__284990);
return G__284988__delegate(args);
});
G__284988.cljs$core$IFn$_invoke$arity$variadic = G__284988__delegate;
return G__284988;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__284991__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__284991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__284992__i = 0, G__284992__a = new Array(arguments.length -  0);
while (G__284992__i < G__284992__a.length) {G__284992__a[G__284992__i] = arguments[G__284992__i + 0]; ++G__284992__i;}
  args = new cljs.core.IndexedSeq(G__284992__a,0);
} 
return G__284991__delegate.call(this,args);};
G__284991.cljs$lang$maxFixedArity = 0;
G__284991.cljs$lang$applyTo = (function (arglist__284993){
var args = cljs.core.seq(arglist__284993);
return G__284991__delegate(args);
});
G__284991.cljs$core$IFn$_invoke$arity$variadic = G__284991__delegate;
return G__284991;
})()
;

return null;
});
