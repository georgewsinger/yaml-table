goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__278171__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__278171 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__278172__i = 0, G__278172__a = new Array(arguments.length -  0);
while (G__278172__i < G__278172__a.length) {G__278172__a[G__278172__i] = arguments[G__278172__i + 0]; ++G__278172__i;}
  args = new cljs.core.IndexedSeq(G__278172__a,0);
} 
return G__278171__delegate.call(this,args);};
G__278171.cljs$lang$maxFixedArity = 0;
G__278171.cljs$lang$applyTo = (function (arglist__278173){
var args = cljs.core.seq(arglist__278173);
return G__278171__delegate(args);
});
G__278171.cljs$core$IFn$_invoke$arity$variadic = G__278171__delegate;
return G__278171;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__278174__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__278174 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__278175__i = 0, G__278175__a = new Array(arguments.length -  0);
while (G__278175__i < G__278175__a.length) {G__278175__a[G__278175__i] = arguments[G__278175__i + 0]; ++G__278175__i;}
  args = new cljs.core.IndexedSeq(G__278175__a,0);
} 
return G__278174__delegate.call(this,args);};
G__278174.cljs$lang$maxFixedArity = 0;
G__278174.cljs$lang$applyTo = (function (arglist__278176){
var args = cljs.core.seq(arglist__278176);
return G__278174__delegate(args);
});
G__278174.cljs$core$IFn$_invoke$arity$variadic = G__278174__delegate;
return G__278174;
})()
;

return null;
});
