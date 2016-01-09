goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__48707__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__48707 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48708__i = 0, G__48708__a = new Array(arguments.length -  0);
while (G__48708__i < G__48708__a.length) {G__48708__a[G__48708__i] = arguments[G__48708__i + 0]; ++G__48708__i;}
  args = new cljs.core.IndexedSeq(G__48708__a,0);
} 
return G__48707__delegate.call(this,args);};
G__48707.cljs$lang$maxFixedArity = 0;
G__48707.cljs$lang$applyTo = (function (arglist__48709){
var args = cljs.core.seq(arglist__48709);
return G__48707__delegate(args);
});
G__48707.cljs$core$IFn$_invoke$arity$variadic = G__48707__delegate;
return G__48707;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__48710__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__48710 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48711__i = 0, G__48711__a = new Array(arguments.length -  0);
while (G__48711__i < G__48711__a.length) {G__48711__a[G__48711__i] = arguments[G__48711__i + 0]; ++G__48711__i;}
  args = new cljs.core.IndexedSeq(G__48711__a,0);
} 
return G__48710__delegate.call(this,args);};
G__48710.cljs$lang$maxFixedArity = 0;
G__48710.cljs$lang$applyTo = (function (arglist__48712){
var args = cljs.core.seq(arglist__48712);
return G__48710__delegate(args);
});
G__48710.cljs$core$IFn$_invoke$arity$variadic = G__48710__delegate;
return G__48710;
})()
;

return null;
});
