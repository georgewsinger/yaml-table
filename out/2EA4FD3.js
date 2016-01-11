goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__199696__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__199696 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__199697__i = 0, G__199697__a = new Array(arguments.length -  0);
while (G__199697__i < G__199697__a.length) {G__199697__a[G__199697__i] = arguments[G__199697__i + 0]; ++G__199697__i;}
  args = new cljs.core.IndexedSeq(G__199697__a,0);
} 
return G__199696__delegate.call(this,args);};
G__199696.cljs$lang$maxFixedArity = 0;
G__199696.cljs$lang$applyTo = (function (arglist__199698){
var args = cljs.core.seq(arglist__199698);
return G__199696__delegate(args);
});
G__199696.cljs$core$IFn$_invoke$arity$variadic = G__199696__delegate;
return G__199696;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__199699__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__199699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__199700__i = 0, G__199700__a = new Array(arguments.length -  0);
while (G__199700__i < G__199700__a.length) {G__199700__a[G__199700__i] = arguments[G__199700__i + 0]; ++G__199700__i;}
  args = new cljs.core.IndexedSeq(G__199700__a,0);
} 
return G__199699__delegate.call(this,args);};
G__199699.cljs$lang$maxFixedArity = 0;
G__199699.cljs$lang$applyTo = (function (arglist__199701){
var args = cljs.core.seq(arglist__199701);
return G__199699__delegate(args);
});
G__199699.cljs$core$IFn$_invoke$arity$variadic = G__199699__delegate;
return G__199699;
})()
;

return null;
});
