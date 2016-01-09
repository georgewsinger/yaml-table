goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__60644__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__60644 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60645__i = 0, G__60645__a = new Array(arguments.length -  0);
while (G__60645__i < G__60645__a.length) {G__60645__a[G__60645__i] = arguments[G__60645__i + 0]; ++G__60645__i;}
  args = new cljs.core.IndexedSeq(G__60645__a,0);
} 
return G__60644__delegate.call(this,args);};
G__60644.cljs$lang$maxFixedArity = 0;
G__60644.cljs$lang$applyTo = (function (arglist__60646){
var args = cljs.core.seq(arglist__60646);
return G__60644__delegate(args);
});
G__60644.cljs$core$IFn$_invoke$arity$variadic = G__60644__delegate;
return G__60644;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__60647__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__60647 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60648__i = 0, G__60648__a = new Array(arguments.length -  0);
while (G__60648__i < G__60648__a.length) {G__60648__a[G__60648__i] = arguments[G__60648__i + 0]; ++G__60648__i;}
  args = new cljs.core.IndexedSeq(G__60648__a,0);
} 
return G__60647__delegate.call(this,args);};
G__60647.cljs$lang$maxFixedArity = 0;
G__60647.cljs$lang$applyTo = (function (arglist__60649){
var args = cljs.core.seq(arglist__60649);
return G__60647__delegate(args);
});
G__60647.cljs$core$IFn$_invoke$arity$variadic = G__60647__delegate;
return G__60647;
})()
;

return null;
});
