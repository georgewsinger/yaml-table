goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__59560__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__59560 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59561__i = 0, G__59561__a = new Array(arguments.length -  0);
while (G__59561__i < G__59561__a.length) {G__59561__a[G__59561__i] = arguments[G__59561__i + 0]; ++G__59561__i;}
  args = new cljs.core.IndexedSeq(G__59561__a,0);
} 
return G__59560__delegate.call(this,args);};
G__59560.cljs$lang$maxFixedArity = 0;
G__59560.cljs$lang$applyTo = (function (arglist__59562){
var args = cljs.core.seq(arglist__59562);
return G__59560__delegate(args);
});
G__59560.cljs$core$IFn$_invoke$arity$variadic = G__59560__delegate;
return G__59560;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__59563__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__59563 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59564__i = 0, G__59564__a = new Array(arguments.length -  0);
while (G__59564__i < G__59564__a.length) {G__59564__a[G__59564__i] = arguments[G__59564__i + 0]; ++G__59564__i;}
  args = new cljs.core.IndexedSeq(G__59564__a,0);
} 
return G__59563__delegate.call(this,args);};
G__59563.cljs$lang$maxFixedArity = 0;
G__59563.cljs$lang$applyTo = (function (arglist__59565){
var args = cljs.core.seq(arglist__59565);
return G__59563__delegate(args);
});
G__59563.cljs$core$IFn$_invoke$arity$variadic = G__59563__delegate;
return G__59563;
})()
;

return null;
});
