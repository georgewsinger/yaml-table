goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41463__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41463 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41464__i = 0, G__41464__a = new Array(arguments.length -  0);
while (G__41464__i < G__41464__a.length) {G__41464__a[G__41464__i] = arguments[G__41464__i + 0]; ++G__41464__i;}
  args = new cljs.core.IndexedSeq(G__41464__a,0);
} 
return G__41463__delegate.call(this,args);};
G__41463.cljs$lang$maxFixedArity = 0;
G__41463.cljs$lang$applyTo = (function (arglist__41465){
var args = cljs.core.seq(arglist__41465);
return G__41463__delegate(args);
});
G__41463.cljs$core$IFn$_invoke$arity$variadic = G__41463__delegate;
return G__41463;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41466__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41466 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41467__i = 0, G__41467__a = new Array(arguments.length -  0);
while (G__41467__i < G__41467__a.length) {G__41467__a[G__41467__i] = arguments[G__41467__i + 0]; ++G__41467__i;}
  args = new cljs.core.IndexedSeq(G__41467__a,0);
} 
return G__41466__delegate.call(this,args);};
G__41466.cljs$lang$maxFixedArity = 0;
G__41466.cljs$lang$applyTo = (function (arglist__41468){
var args = cljs.core.seq(arglist__41468);
return G__41466__delegate(args);
});
G__41466.cljs$core$IFn$_invoke$arity$variadic = G__41466__delegate;
return G__41466;
})()
;

return null;
});
