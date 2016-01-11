goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__240900__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__240900 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__240901__i = 0, G__240901__a = new Array(arguments.length -  0);
while (G__240901__i < G__240901__a.length) {G__240901__a[G__240901__i] = arguments[G__240901__i + 0]; ++G__240901__i;}
  args = new cljs.core.IndexedSeq(G__240901__a,0);
} 
return G__240900__delegate.call(this,args);};
G__240900.cljs$lang$maxFixedArity = 0;
G__240900.cljs$lang$applyTo = (function (arglist__240902){
var args = cljs.core.seq(arglist__240902);
return G__240900__delegate(args);
});
G__240900.cljs$core$IFn$_invoke$arity$variadic = G__240900__delegate;
return G__240900;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__240903__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__240903 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__240904__i = 0, G__240904__a = new Array(arguments.length -  0);
while (G__240904__i < G__240904__a.length) {G__240904__a[G__240904__i] = arguments[G__240904__i + 0]; ++G__240904__i;}
  args = new cljs.core.IndexedSeq(G__240904__a,0);
} 
return G__240903__delegate.call(this,args);};
G__240903.cljs$lang$maxFixedArity = 0;
G__240903.cljs$lang$applyTo = (function (arglist__240905){
var args = cljs.core.seq(arglist__240905);
return G__240903__delegate(args);
});
G__240903.cljs$core$IFn$_invoke$arity$variadic = G__240903__delegate;
return G__240903;
})()
;

return null;
});
