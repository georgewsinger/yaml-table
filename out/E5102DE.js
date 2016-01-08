goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41071__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41071 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41072__i = 0, G__41072__a = new Array(arguments.length -  0);
while (G__41072__i < G__41072__a.length) {G__41072__a[G__41072__i] = arguments[G__41072__i + 0]; ++G__41072__i;}
  args = new cljs.core.IndexedSeq(G__41072__a,0);
} 
return G__41071__delegate.call(this,args);};
G__41071.cljs$lang$maxFixedArity = 0;
G__41071.cljs$lang$applyTo = (function (arglist__41073){
var args = cljs.core.seq(arglist__41073);
return G__41071__delegate(args);
});
G__41071.cljs$core$IFn$_invoke$arity$variadic = G__41071__delegate;
return G__41071;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41074__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41074 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41075__i = 0, G__41075__a = new Array(arguments.length -  0);
while (G__41075__i < G__41075__a.length) {G__41075__a[G__41075__i] = arguments[G__41075__i + 0]; ++G__41075__i;}
  args = new cljs.core.IndexedSeq(G__41075__a,0);
} 
return G__41074__delegate.call(this,args);};
G__41074.cljs$lang$maxFixedArity = 0;
G__41074.cljs$lang$applyTo = (function (arglist__41076){
var args = cljs.core.seq(arglist__41076);
return G__41074__delegate(args);
});
G__41074.cljs$core$IFn$_invoke$arity$variadic = G__41074__delegate;
return G__41074;
})()
;

return null;
});
