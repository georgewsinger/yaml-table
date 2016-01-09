goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63845__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63845 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63846__i = 0, G__63846__a = new Array(arguments.length -  0);
while (G__63846__i < G__63846__a.length) {G__63846__a[G__63846__i] = arguments[G__63846__i + 0]; ++G__63846__i;}
  args = new cljs.core.IndexedSeq(G__63846__a,0);
} 
return G__63845__delegate.call(this,args);};
G__63845.cljs$lang$maxFixedArity = 0;
G__63845.cljs$lang$applyTo = (function (arglist__63847){
var args = cljs.core.seq(arglist__63847);
return G__63845__delegate(args);
});
G__63845.cljs$core$IFn$_invoke$arity$variadic = G__63845__delegate;
return G__63845;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63848__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63848 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63849__i = 0, G__63849__a = new Array(arguments.length -  0);
while (G__63849__i < G__63849__a.length) {G__63849__a[G__63849__i] = arguments[G__63849__i + 0]; ++G__63849__i;}
  args = new cljs.core.IndexedSeq(G__63849__a,0);
} 
return G__63848__delegate.call(this,args);};
G__63848.cljs$lang$maxFixedArity = 0;
G__63848.cljs$lang$applyTo = (function (arglist__63850){
var args = cljs.core.seq(arglist__63850);
return G__63848__delegate(args);
});
G__63848.cljs$core$IFn$_invoke$arity$variadic = G__63848__delegate;
return G__63848;
})()
;

return null;
});
