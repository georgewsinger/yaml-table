goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__303543__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__303543 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__303544__i = 0, G__303544__a = new Array(arguments.length -  0);
while (G__303544__i < G__303544__a.length) {G__303544__a[G__303544__i] = arguments[G__303544__i + 0]; ++G__303544__i;}
  args = new cljs.core.IndexedSeq(G__303544__a,0);
} 
return G__303543__delegate.call(this,args);};
G__303543.cljs$lang$maxFixedArity = 0;
G__303543.cljs$lang$applyTo = (function (arglist__303545){
var args = cljs.core.seq(arglist__303545);
return G__303543__delegate(args);
});
G__303543.cljs$core$IFn$_invoke$arity$variadic = G__303543__delegate;
return G__303543;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__303546__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__303546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__303547__i = 0, G__303547__a = new Array(arguments.length -  0);
while (G__303547__i < G__303547__a.length) {G__303547__a[G__303547__i] = arguments[G__303547__i + 0]; ++G__303547__i;}
  args = new cljs.core.IndexedSeq(G__303547__a,0);
} 
return G__303546__delegate.call(this,args);};
G__303546.cljs$lang$maxFixedArity = 0;
G__303546.cljs$lang$applyTo = (function (arglist__303548){
var args = cljs.core.seq(arglist__303548);
return G__303546__delegate(args);
});
G__303546.cljs$core$IFn$_invoke$arity$variadic = G__303546__delegate;
return G__303546;
})()
;

return null;
});
