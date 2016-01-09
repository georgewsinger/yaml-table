goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__109162__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__109162 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__109163__i = 0, G__109163__a = new Array(arguments.length -  0);
while (G__109163__i < G__109163__a.length) {G__109163__a[G__109163__i] = arguments[G__109163__i + 0]; ++G__109163__i;}
  args = new cljs.core.IndexedSeq(G__109163__a,0);
} 
return G__109162__delegate.call(this,args);};
G__109162.cljs$lang$maxFixedArity = 0;
G__109162.cljs$lang$applyTo = (function (arglist__109164){
var args = cljs.core.seq(arglist__109164);
return G__109162__delegate(args);
});
G__109162.cljs$core$IFn$_invoke$arity$variadic = G__109162__delegate;
return G__109162;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__109165__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__109165 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__109166__i = 0, G__109166__a = new Array(arguments.length -  0);
while (G__109166__i < G__109166__a.length) {G__109166__a[G__109166__i] = arguments[G__109166__i + 0]; ++G__109166__i;}
  args = new cljs.core.IndexedSeq(G__109166__a,0);
} 
return G__109165__delegate.call(this,args);};
G__109165.cljs$lang$maxFixedArity = 0;
G__109165.cljs$lang$applyTo = (function (arglist__109167){
var args = cljs.core.seq(arglist__109167);
return G__109165__delegate(args);
});
G__109165.cljs$core$IFn$_invoke$arity$variadic = G__109165__delegate;
return G__109165;
})()
;

return null;
});
