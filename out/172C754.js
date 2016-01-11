goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__348323__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__348323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__348324__i = 0, G__348324__a = new Array(arguments.length -  0);
while (G__348324__i < G__348324__a.length) {G__348324__a[G__348324__i] = arguments[G__348324__i + 0]; ++G__348324__i;}
  args = new cljs.core.IndexedSeq(G__348324__a,0);
} 
return G__348323__delegate.call(this,args);};
G__348323.cljs$lang$maxFixedArity = 0;
G__348323.cljs$lang$applyTo = (function (arglist__348325){
var args = cljs.core.seq(arglist__348325);
return G__348323__delegate(args);
});
G__348323.cljs$core$IFn$_invoke$arity$variadic = G__348323__delegate;
return G__348323;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__348326__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__348326 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__348327__i = 0, G__348327__a = new Array(arguments.length -  0);
while (G__348327__i < G__348327__a.length) {G__348327__a[G__348327__i] = arguments[G__348327__i + 0]; ++G__348327__i;}
  args = new cljs.core.IndexedSeq(G__348327__a,0);
} 
return G__348326__delegate.call(this,args);};
G__348326.cljs$lang$maxFixedArity = 0;
G__348326.cljs$lang$applyTo = (function (arglist__348328){
var args = cljs.core.seq(arglist__348328);
return G__348326__delegate(args);
});
G__348326.cljs$core$IFn$_invoke$arity$variadic = G__348326__delegate;
return G__348326;
})()
;

return null;
});
