goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__56740__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__56740 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56741__i = 0, G__56741__a = new Array(arguments.length -  0);
while (G__56741__i < G__56741__a.length) {G__56741__a[G__56741__i] = arguments[G__56741__i + 0]; ++G__56741__i;}
  args = new cljs.core.IndexedSeq(G__56741__a,0);
} 
return G__56740__delegate.call(this,args);};
G__56740.cljs$lang$maxFixedArity = 0;
G__56740.cljs$lang$applyTo = (function (arglist__56742){
var args = cljs.core.seq(arglist__56742);
return G__56740__delegate(args);
});
G__56740.cljs$core$IFn$_invoke$arity$variadic = G__56740__delegate;
return G__56740;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__56743__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__56743 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56744__i = 0, G__56744__a = new Array(arguments.length -  0);
while (G__56744__i < G__56744__a.length) {G__56744__a[G__56744__i] = arguments[G__56744__i + 0]; ++G__56744__i;}
  args = new cljs.core.IndexedSeq(G__56744__a,0);
} 
return G__56743__delegate.call(this,args);};
G__56743.cljs$lang$maxFixedArity = 0;
G__56743.cljs$lang$applyTo = (function (arglist__56745){
var args = cljs.core.seq(arglist__56745);
return G__56743__delegate(args);
});
G__56743.cljs$core$IFn$_invoke$arity$variadic = G__56743__delegate;
return G__56743;
})()
;

return null;
});
