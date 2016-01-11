goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__274300__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__274300 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__274301__i = 0, G__274301__a = new Array(arguments.length -  0);
while (G__274301__i < G__274301__a.length) {G__274301__a[G__274301__i] = arguments[G__274301__i + 0]; ++G__274301__i;}
  args = new cljs.core.IndexedSeq(G__274301__a,0);
} 
return G__274300__delegate.call(this,args);};
G__274300.cljs$lang$maxFixedArity = 0;
G__274300.cljs$lang$applyTo = (function (arglist__274302){
var args = cljs.core.seq(arglist__274302);
return G__274300__delegate(args);
});
G__274300.cljs$core$IFn$_invoke$arity$variadic = G__274300__delegate;
return G__274300;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__274303__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__274303 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__274304__i = 0, G__274304__a = new Array(arguments.length -  0);
while (G__274304__i < G__274304__a.length) {G__274304__a[G__274304__i] = arguments[G__274304__i + 0]; ++G__274304__i;}
  args = new cljs.core.IndexedSeq(G__274304__a,0);
} 
return G__274303__delegate.call(this,args);};
G__274303.cljs$lang$maxFixedArity = 0;
G__274303.cljs$lang$applyTo = (function (arglist__274305){
var args = cljs.core.seq(arglist__274305);
return G__274303__delegate(args);
});
G__274303.cljs$core$IFn$_invoke$arity$variadic = G__274303__delegate;
return G__274303;
})()
;

return null;
});
