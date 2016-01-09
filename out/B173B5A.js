goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__81504__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__81504 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81505__i = 0, G__81505__a = new Array(arguments.length -  0);
while (G__81505__i < G__81505__a.length) {G__81505__a[G__81505__i] = arguments[G__81505__i + 0]; ++G__81505__i;}
  args = new cljs.core.IndexedSeq(G__81505__a,0);
} 
return G__81504__delegate.call(this,args);};
G__81504.cljs$lang$maxFixedArity = 0;
G__81504.cljs$lang$applyTo = (function (arglist__81506){
var args = cljs.core.seq(arglist__81506);
return G__81504__delegate(args);
});
G__81504.cljs$core$IFn$_invoke$arity$variadic = G__81504__delegate;
return G__81504;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__81507__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__81507 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81508__i = 0, G__81508__a = new Array(arguments.length -  0);
while (G__81508__i < G__81508__a.length) {G__81508__a[G__81508__i] = arguments[G__81508__i + 0]; ++G__81508__i;}
  args = new cljs.core.IndexedSeq(G__81508__a,0);
} 
return G__81507__delegate.call(this,args);};
G__81507.cljs$lang$maxFixedArity = 0;
G__81507.cljs$lang$applyTo = (function (arglist__81509){
var args = cljs.core.seq(arglist__81509);
return G__81507__delegate(args);
});
G__81507.cljs$core$IFn$_invoke$arity$variadic = G__81507__delegate;
return G__81507;
})()
;

return null;
});
