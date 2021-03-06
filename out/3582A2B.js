goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__50536__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__50536 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50537__i = 0, G__50537__a = new Array(arguments.length -  0);
while (G__50537__i < G__50537__a.length) {G__50537__a[G__50537__i] = arguments[G__50537__i + 0]; ++G__50537__i;}
  args = new cljs.core.IndexedSeq(G__50537__a,0);
} 
return G__50536__delegate.call(this,args);};
G__50536.cljs$lang$maxFixedArity = 0;
G__50536.cljs$lang$applyTo = (function (arglist__50538){
var args = cljs.core.seq(arglist__50538);
return G__50536__delegate(args);
});
G__50536.cljs$core$IFn$_invoke$arity$variadic = G__50536__delegate;
return G__50536;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__50539__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__50539 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50540__i = 0, G__50540__a = new Array(arguments.length -  0);
while (G__50540__i < G__50540__a.length) {G__50540__a[G__50540__i] = arguments[G__50540__i + 0]; ++G__50540__i;}
  args = new cljs.core.IndexedSeq(G__50540__a,0);
} 
return G__50539__delegate.call(this,args);};
G__50539.cljs$lang$maxFixedArity = 0;
G__50539.cljs$lang$applyTo = (function (arglist__50541){
var args = cljs.core.seq(arglist__50541);
return G__50539__delegate(args);
});
G__50539.cljs$core$IFn$_invoke$arity$variadic = G__50539__delegate;
return G__50539;
})()
;

return null;
});
