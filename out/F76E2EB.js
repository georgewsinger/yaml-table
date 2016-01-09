goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__60825__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__60825 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60826__i = 0, G__60826__a = new Array(arguments.length -  0);
while (G__60826__i < G__60826__a.length) {G__60826__a[G__60826__i] = arguments[G__60826__i + 0]; ++G__60826__i;}
  args = new cljs.core.IndexedSeq(G__60826__a,0);
} 
return G__60825__delegate.call(this,args);};
G__60825.cljs$lang$maxFixedArity = 0;
G__60825.cljs$lang$applyTo = (function (arglist__60827){
var args = cljs.core.seq(arglist__60827);
return G__60825__delegate(args);
});
G__60825.cljs$core$IFn$_invoke$arity$variadic = G__60825__delegate;
return G__60825;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__60828__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__60828 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60829__i = 0, G__60829__a = new Array(arguments.length -  0);
while (G__60829__i < G__60829__a.length) {G__60829__a[G__60829__i] = arguments[G__60829__i + 0]; ++G__60829__i;}
  args = new cljs.core.IndexedSeq(G__60829__a,0);
} 
return G__60828__delegate.call(this,args);};
G__60828.cljs$lang$maxFixedArity = 0;
G__60828.cljs$lang$applyTo = (function (arglist__60830){
var args = cljs.core.seq(arglist__60830);
return G__60828__delegate(args);
});
G__60828.cljs$core$IFn$_invoke$arity$variadic = G__60828__delegate;
return G__60828;
})()
;

return null;
});
