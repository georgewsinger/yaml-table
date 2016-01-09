goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53825__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53825 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53826__i = 0, G__53826__a = new Array(arguments.length -  0);
while (G__53826__i < G__53826__a.length) {G__53826__a[G__53826__i] = arguments[G__53826__i + 0]; ++G__53826__i;}
  args = new cljs.core.IndexedSeq(G__53826__a,0);
} 
return G__53825__delegate.call(this,args);};
G__53825.cljs$lang$maxFixedArity = 0;
G__53825.cljs$lang$applyTo = (function (arglist__53827){
var args = cljs.core.seq(arglist__53827);
return G__53825__delegate(args);
});
G__53825.cljs$core$IFn$_invoke$arity$variadic = G__53825__delegate;
return G__53825;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53828__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53828 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53829__i = 0, G__53829__a = new Array(arguments.length -  0);
while (G__53829__i < G__53829__a.length) {G__53829__a[G__53829__i] = arguments[G__53829__i + 0]; ++G__53829__i;}
  args = new cljs.core.IndexedSeq(G__53829__a,0);
} 
return G__53828__delegate.call(this,args);};
G__53828.cljs$lang$maxFixedArity = 0;
G__53828.cljs$lang$applyTo = (function (arglist__53830){
var args = cljs.core.seq(arglist__53830);
return G__53828__delegate(args);
});
G__53828.cljs$core$IFn$_invoke$arity$variadic = G__53828__delegate;
return G__53828;
})()
;

return null;
});
