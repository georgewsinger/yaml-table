goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__120706__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__120706 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__120707__i = 0, G__120707__a = new Array(arguments.length -  0);
while (G__120707__i < G__120707__a.length) {G__120707__a[G__120707__i] = arguments[G__120707__i + 0]; ++G__120707__i;}
  args = new cljs.core.IndexedSeq(G__120707__a,0);
} 
return G__120706__delegate.call(this,args);};
G__120706.cljs$lang$maxFixedArity = 0;
G__120706.cljs$lang$applyTo = (function (arglist__120708){
var args = cljs.core.seq(arglist__120708);
return G__120706__delegate(args);
});
G__120706.cljs$core$IFn$_invoke$arity$variadic = G__120706__delegate;
return G__120706;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__120709__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__120709 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__120710__i = 0, G__120710__a = new Array(arguments.length -  0);
while (G__120710__i < G__120710__a.length) {G__120710__a[G__120710__i] = arguments[G__120710__i + 0]; ++G__120710__i;}
  args = new cljs.core.IndexedSeq(G__120710__a,0);
} 
return G__120709__delegate.call(this,args);};
G__120709.cljs$lang$maxFixedArity = 0;
G__120709.cljs$lang$applyTo = (function (arglist__120711){
var args = cljs.core.seq(arglist__120711);
return G__120709__delegate(args);
});
G__120709.cljs$core$IFn$_invoke$arity$variadic = G__120709__delegate;
return G__120709;
})()
;

return null;
});
