goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__255322__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__255322 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__255323__i = 0, G__255323__a = new Array(arguments.length -  0);
while (G__255323__i < G__255323__a.length) {G__255323__a[G__255323__i] = arguments[G__255323__i + 0]; ++G__255323__i;}
  args = new cljs.core.IndexedSeq(G__255323__a,0);
} 
return G__255322__delegate.call(this,args);};
G__255322.cljs$lang$maxFixedArity = 0;
G__255322.cljs$lang$applyTo = (function (arglist__255324){
var args = cljs.core.seq(arglist__255324);
return G__255322__delegate(args);
});
G__255322.cljs$core$IFn$_invoke$arity$variadic = G__255322__delegate;
return G__255322;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__255325__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__255325 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__255326__i = 0, G__255326__a = new Array(arguments.length -  0);
while (G__255326__i < G__255326__a.length) {G__255326__a[G__255326__i] = arguments[G__255326__i + 0]; ++G__255326__i;}
  args = new cljs.core.IndexedSeq(G__255326__a,0);
} 
return G__255325__delegate.call(this,args);};
G__255325.cljs$lang$maxFixedArity = 0;
G__255325.cljs$lang$applyTo = (function (arglist__255327){
var args = cljs.core.seq(arglist__255327);
return G__255325__delegate(args);
});
G__255325.cljs$core$IFn$_invoke$arity$variadic = G__255325__delegate;
return G__255325;
})()
;

return null;
});
