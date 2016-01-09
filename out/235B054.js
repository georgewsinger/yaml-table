goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__168274__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__168274 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__168275__i = 0, G__168275__a = new Array(arguments.length -  0);
while (G__168275__i < G__168275__a.length) {G__168275__a[G__168275__i] = arguments[G__168275__i + 0]; ++G__168275__i;}
  args = new cljs.core.IndexedSeq(G__168275__a,0);
} 
return G__168274__delegate.call(this,args);};
G__168274.cljs$lang$maxFixedArity = 0;
G__168274.cljs$lang$applyTo = (function (arglist__168276){
var args = cljs.core.seq(arglist__168276);
return G__168274__delegate(args);
});
G__168274.cljs$core$IFn$_invoke$arity$variadic = G__168274__delegate;
return G__168274;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__168277__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__168277 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__168278__i = 0, G__168278__a = new Array(arguments.length -  0);
while (G__168278__i < G__168278__a.length) {G__168278__a[G__168278__i] = arguments[G__168278__i + 0]; ++G__168278__i;}
  args = new cljs.core.IndexedSeq(G__168278__a,0);
} 
return G__168277__delegate.call(this,args);};
G__168277.cljs$lang$maxFixedArity = 0;
G__168277.cljs$lang$applyTo = (function (arglist__168279){
var args = cljs.core.seq(arglist__168279);
return G__168277__delegate(args);
});
G__168277.cljs$core$IFn$_invoke$arity$variadic = G__168277__delegate;
return G__168277;
})()
;

return null;
});
