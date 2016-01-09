goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__186059__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__186059 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__186060__i = 0, G__186060__a = new Array(arguments.length -  0);
while (G__186060__i < G__186060__a.length) {G__186060__a[G__186060__i] = arguments[G__186060__i + 0]; ++G__186060__i;}
  args = new cljs.core.IndexedSeq(G__186060__a,0);
} 
return G__186059__delegate.call(this,args);};
G__186059.cljs$lang$maxFixedArity = 0;
G__186059.cljs$lang$applyTo = (function (arglist__186061){
var args = cljs.core.seq(arglist__186061);
return G__186059__delegate(args);
});
G__186059.cljs$core$IFn$_invoke$arity$variadic = G__186059__delegate;
return G__186059;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__186062__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__186062 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__186063__i = 0, G__186063__a = new Array(arguments.length -  0);
while (G__186063__i < G__186063__a.length) {G__186063__a[G__186063__i] = arguments[G__186063__i + 0]; ++G__186063__i;}
  args = new cljs.core.IndexedSeq(G__186063__a,0);
} 
return G__186062__delegate.call(this,args);};
G__186062.cljs$lang$maxFixedArity = 0;
G__186062.cljs$lang$applyTo = (function (arglist__186064){
var args = cljs.core.seq(arglist__186064);
return G__186062__delegate(args);
});
G__186062.cljs$core$IFn$_invoke$arity$variadic = G__186062__delegate;
return G__186062;
})()
;

return null;
});
