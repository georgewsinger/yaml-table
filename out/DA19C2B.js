goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__108536__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__108536 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__108537__i = 0, G__108537__a = new Array(arguments.length -  0);
while (G__108537__i < G__108537__a.length) {G__108537__a[G__108537__i] = arguments[G__108537__i + 0]; ++G__108537__i;}
  args = new cljs.core.IndexedSeq(G__108537__a,0);
} 
return G__108536__delegate.call(this,args);};
G__108536.cljs$lang$maxFixedArity = 0;
G__108536.cljs$lang$applyTo = (function (arglist__108538){
var args = cljs.core.seq(arglist__108538);
return G__108536__delegate(args);
});
G__108536.cljs$core$IFn$_invoke$arity$variadic = G__108536__delegate;
return G__108536;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__108539__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__108539 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__108540__i = 0, G__108540__a = new Array(arguments.length -  0);
while (G__108540__i < G__108540__a.length) {G__108540__a[G__108540__i] = arguments[G__108540__i + 0]; ++G__108540__i;}
  args = new cljs.core.IndexedSeq(G__108540__a,0);
} 
return G__108539__delegate.call(this,args);};
G__108539.cljs$lang$maxFixedArity = 0;
G__108539.cljs$lang$applyTo = (function (arglist__108541){
var args = cljs.core.seq(arglist__108541);
return G__108539__delegate(args);
});
G__108539.cljs$core$IFn$_invoke$arity$variadic = G__108539__delegate;
return G__108539;
})()
;

return null;
});
