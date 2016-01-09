goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__177466__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__177466 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__177467__i = 0, G__177467__a = new Array(arguments.length -  0);
while (G__177467__i < G__177467__a.length) {G__177467__a[G__177467__i] = arguments[G__177467__i + 0]; ++G__177467__i;}
  args = new cljs.core.IndexedSeq(G__177467__a,0);
} 
return G__177466__delegate.call(this,args);};
G__177466.cljs$lang$maxFixedArity = 0;
G__177466.cljs$lang$applyTo = (function (arglist__177468){
var args = cljs.core.seq(arglist__177468);
return G__177466__delegate(args);
});
G__177466.cljs$core$IFn$_invoke$arity$variadic = G__177466__delegate;
return G__177466;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__177469__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__177469 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__177470__i = 0, G__177470__a = new Array(arguments.length -  0);
while (G__177470__i < G__177470__a.length) {G__177470__a[G__177470__i] = arguments[G__177470__i + 0]; ++G__177470__i;}
  args = new cljs.core.IndexedSeq(G__177470__a,0);
} 
return G__177469__delegate.call(this,args);};
G__177469.cljs$lang$maxFixedArity = 0;
G__177469.cljs$lang$applyTo = (function (arglist__177471){
var args = cljs.core.seq(arglist__177471);
return G__177469__delegate(args);
});
G__177469.cljs$core$IFn$_invoke$arity$variadic = G__177469__delegate;
return G__177469;
})()
;

return null;
});
