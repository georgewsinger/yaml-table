goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__164440__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__164440 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__164441__i = 0, G__164441__a = new Array(arguments.length -  0);
while (G__164441__i < G__164441__a.length) {G__164441__a[G__164441__i] = arguments[G__164441__i + 0]; ++G__164441__i;}
  args = new cljs.core.IndexedSeq(G__164441__a,0);
} 
return G__164440__delegate.call(this,args);};
G__164440.cljs$lang$maxFixedArity = 0;
G__164440.cljs$lang$applyTo = (function (arglist__164442){
var args = cljs.core.seq(arglist__164442);
return G__164440__delegate(args);
});
G__164440.cljs$core$IFn$_invoke$arity$variadic = G__164440__delegate;
return G__164440;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__164443__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__164443 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__164444__i = 0, G__164444__a = new Array(arguments.length -  0);
while (G__164444__i < G__164444__a.length) {G__164444__a[G__164444__i] = arguments[G__164444__i + 0]; ++G__164444__i;}
  args = new cljs.core.IndexedSeq(G__164444__a,0);
} 
return G__164443__delegate.call(this,args);};
G__164443.cljs$lang$maxFixedArity = 0;
G__164443.cljs$lang$applyTo = (function (arglist__164445){
var args = cljs.core.seq(arglist__164445);
return G__164443__delegate(args);
});
G__164443.cljs$core$IFn$_invoke$arity$variadic = G__164443__delegate;
return G__164443;
})()
;

return null;
});
