goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__183960__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__183960 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__183961__i = 0, G__183961__a = new Array(arguments.length -  0);
while (G__183961__i < G__183961__a.length) {G__183961__a[G__183961__i] = arguments[G__183961__i + 0]; ++G__183961__i;}
  args = new cljs.core.IndexedSeq(G__183961__a,0);
} 
return G__183960__delegate.call(this,args);};
G__183960.cljs$lang$maxFixedArity = 0;
G__183960.cljs$lang$applyTo = (function (arglist__183962){
var args = cljs.core.seq(arglist__183962);
return G__183960__delegate(args);
});
G__183960.cljs$core$IFn$_invoke$arity$variadic = G__183960__delegate;
return G__183960;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__183963__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__183963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__183964__i = 0, G__183964__a = new Array(arguments.length -  0);
while (G__183964__i < G__183964__a.length) {G__183964__a[G__183964__i] = arguments[G__183964__i + 0]; ++G__183964__i;}
  args = new cljs.core.IndexedSeq(G__183964__a,0);
} 
return G__183963__delegate.call(this,args);};
G__183963.cljs$lang$maxFixedArity = 0;
G__183963.cljs$lang$applyTo = (function (arglist__183965){
var args = cljs.core.seq(arglist__183965);
return G__183963__delegate(args);
});
G__183963.cljs$core$IFn$_invoke$arity$variadic = G__183963__delegate;
return G__183963;
})()
;

return null;
});
