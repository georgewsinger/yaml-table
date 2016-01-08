goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24965__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24965 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24966__i = 0, G__24966__a = new Array(arguments.length -  0);
while (G__24966__i < G__24966__a.length) {G__24966__a[G__24966__i] = arguments[G__24966__i + 0]; ++G__24966__i;}
  args = new cljs.core.IndexedSeq(G__24966__a,0);
} 
return G__24965__delegate.call(this,args);};
G__24965.cljs$lang$maxFixedArity = 0;
G__24965.cljs$lang$applyTo = (function (arglist__24967){
var args = cljs.core.seq(arglist__24967);
return G__24965__delegate(args);
});
G__24965.cljs$core$IFn$_invoke$arity$variadic = G__24965__delegate;
return G__24965;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24968__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24968 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24969__i = 0, G__24969__a = new Array(arguments.length -  0);
while (G__24969__i < G__24969__a.length) {G__24969__a[G__24969__i] = arguments[G__24969__i + 0]; ++G__24969__i;}
  args = new cljs.core.IndexedSeq(G__24969__a,0);
} 
return G__24968__delegate.call(this,args);};
G__24968.cljs$lang$maxFixedArity = 0;
G__24968.cljs$lang$applyTo = (function (arglist__24970){
var args = cljs.core.seq(arglist__24970);
return G__24968__delegate(args);
});
G__24968.cljs$core$IFn$_invoke$arity$variadic = G__24968__delegate;
return G__24968;
})()
;

return null;
});
