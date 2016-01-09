goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__147746__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__147746 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__147747__i = 0, G__147747__a = new Array(arguments.length -  0);
while (G__147747__i < G__147747__a.length) {G__147747__a[G__147747__i] = arguments[G__147747__i + 0]; ++G__147747__i;}
  args = new cljs.core.IndexedSeq(G__147747__a,0);
} 
return G__147746__delegate.call(this,args);};
G__147746.cljs$lang$maxFixedArity = 0;
G__147746.cljs$lang$applyTo = (function (arglist__147748){
var args = cljs.core.seq(arglist__147748);
return G__147746__delegate(args);
});
G__147746.cljs$core$IFn$_invoke$arity$variadic = G__147746__delegate;
return G__147746;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__147749__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__147749 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__147750__i = 0, G__147750__a = new Array(arguments.length -  0);
while (G__147750__i < G__147750__a.length) {G__147750__a[G__147750__i] = arguments[G__147750__i + 0]; ++G__147750__i;}
  args = new cljs.core.IndexedSeq(G__147750__a,0);
} 
return G__147749__delegate.call(this,args);};
G__147749.cljs$lang$maxFixedArity = 0;
G__147749.cljs$lang$applyTo = (function (arglist__147751){
var args = cljs.core.seq(arglist__147751);
return G__147749__delegate(args);
});
G__147749.cljs$core$IFn$_invoke$arity$variadic = G__147749__delegate;
return G__147749;
})()
;

return null;
});
