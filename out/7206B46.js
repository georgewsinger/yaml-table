goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__155509__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__155509 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__155510__i = 0, G__155510__a = new Array(arguments.length -  0);
while (G__155510__i < G__155510__a.length) {G__155510__a[G__155510__i] = arguments[G__155510__i + 0]; ++G__155510__i;}
  args = new cljs.core.IndexedSeq(G__155510__a,0);
} 
return G__155509__delegate.call(this,args);};
G__155509.cljs$lang$maxFixedArity = 0;
G__155509.cljs$lang$applyTo = (function (arglist__155511){
var args = cljs.core.seq(arglist__155511);
return G__155509__delegate(args);
});
G__155509.cljs$core$IFn$_invoke$arity$variadic = G__155509__delegate;
return G__155509;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__155512__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__155512 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__155513__i = 0, G__155513__a = new Array(arguments.length -  0);
while (G__155513__i < G__155513__a.length) {G__155513__a[G__155513__i] = arguments[G__155513__i + 0]; ++G__155513__i;}
  args = new cljs.core.IndexedSeq(G__155513__a,0);
} 
return G__155512__delegate.call(this,args);};
G__155512.cljs$lang$maxFixedArity = 0;
G__155512.cljs$lang$applyTo = (function (arglist__155514){
var args = cljs.core.seq(arglist__155514);
return G__155512__delegate(args);
});
G__155512.cljs$core$IFn$_invoke$arity$variadic = G__155512__delegate;
return G__155512;
})()
;

return null;
});
