goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__157881__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__157881 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__157882__i = 0, G__157882__a = new Array(arguments.length -  0);
while (G__157882__i < G__157882__a.length) {G__157882__a[G__157882__i] = arguments[G__157882__i + 0]; ++G__157882__i;}
  args = new cljs.core.IndexedSeq(G__157882__a,0);
} 
return G__157881__delegate.call(this,args);};
G__157881.cljs$lang$maxFixedArity = 0;
G__157881.cljs$lang$applyTo = (function (arglist__157883){
var args = cljs.core.seq(arglist__157883);
return G__157881__delegate(args);
});
G__157881.cljs$core$IFn$_invoke$arity$variadic = G__157881__delegate;
return G__157881;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__157884__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__157884 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__157885__i = 0, G__157885__a = new Array(arguments.length -  0);
while (G__157885__i < G__157885__a.length) {G__157885__a[G__157885__i] = arguments[G__157885__i + 0]; ++G__157885__i;}
  args = new cljs.core.IndexedSeq(G__157885__a,0);
} 
return G__157884__delegate.call(this,args);};
G__157884.cljs$lang$maxFixedArity = 0;
G__157884.cljs$lang$applyTo = (function (arglist__157886){
var args = cljs.core.seq(arglist__157886);
return G__157884__delegate(args);
});
G__157884.cljs$core$IFn$_invoke$arity$variadic = G__157884__delegate;
return G__157884;
})()
;

return null;
});
