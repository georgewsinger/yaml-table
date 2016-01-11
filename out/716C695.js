goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__221723__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__221723 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__221724__i = 0, G__221724__a = new Array(arguments.length -  0);
while (G__221724__i < G__221724__a.length) {G__221724__a[G__221724__i] = arguments[G__221724__i + 0]; ++G__221724__i;}
  args = new cljs.core.IndexedSeq(G__221724__a,0);
} 
return G__221723__delegate.call(this,args);};
G__221723.cljs$lang$maxFixedArity = 0;
G__221723.cljs$lang$applyTo = (function (arglist__221725){
var args = cljs.core.seq(arglist__221725);
return G__221723__delegate(args);
});
G__221723.cljs$core$IFn$_invoke$arity$variadic = G__221723__delegate;
return G__221723;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__221726__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__221726 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__221727__i = 0, G__221727__a = new Array(arguments.length -  0);
while (G__221727__i < G__221727__a.length) {G__221727__a[G__221727__i] = arguments[G__221727__i + 0]; ++G__221727__i;}
  args = new cljs.core.IndexedSeq(G__221727__a,0);
} 
return G__221726__delegate.call(this,args);};
G__221726.cljs$lang$maxFixedArity = 0;
G__221726.cljs$lang$applyTo = (function (arglist__221728){
var args = cljs.core.seq(arglist__221728);
return G__221726__delegate(args);
});
G__221726.cljs$core$IFn$_invoke$arity$variadic = G__221726__delegate;
return G__221726;
})()
;

return null;
});
