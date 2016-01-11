goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__332057__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__332057 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__332058__i = 0, G__332058__a = new Array(arguments.length -  0);
while (G__332058__i < G__332058__a.length) {G__332058__a[G__332058__i] = arguments[G__332058__i + 0]; ++G__332058__i;}
  args = new cljs.core.IndexedSeq(G__332058__a,0);
} 
return G__332057__delegate.call(this,args);};
G__332057.cljs$lang$maxFixedArity = 0;
G__332057.cljs$lang$applyTo = (function (arglist__332059){
var args = cljs.core.seq(arglist__332059);
return G__332057__delegate(args);
});
G__332057.cljs$core$IFn$_invoke$arity$variadic = G__332057__delegate;
return G__332057;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__332060__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__332060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__332061__i = 0, G__332061__a = new Array(arguments.length -  0);
while (G__332061__i < G__332061__a.length) {G__332061__a[G__332061__i] = arguments[G__332061__i + 0]; ++G__332061__i;}
  args = new cljs.core.IndexedSeq(G__332061__a,0);
} 
return G__332060__delegate.call(this,args);};
G__332060.cljs$lang$maxFixedArity = 0;
G__332060.cljs$lang$applyTo = (function (arglist__332062){
var args = cljs.core.seq(arglist__332062);
return G__332060__delegate(args);
});
G__332060.cljs$core$IFn$_invoke$arity$variadic = G__332060__delegate;
return G__332060;
})()
;

return null;
});
