goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__161366__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__161366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__161367__i = 0, G__161367__a = new Array(arguments.length -  0);
while (G__161367__i < G__161367__a.length) {G__161367__a[G__161367__i] = arguments[G__161367__i + 0]; ++G__161367__i;}
  args = new cljs.core.IndexedSeq(G__161367__a,0);
} 
return G__161366__delegate.call(this,args);};
G__161366.cljs$lang$maxFixedArity = 0;
G__161366.cljs$lang$applyTo = (function (arglist__161368){
var args = cljs.core.seq(arglist__161368);
return G__161366__delegate(args);
});
G__161366.cljs$core$IFn$_invoke$arity$variadic = G__161366__delegate;
return G__161366;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__161369__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__161369 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__161370__i = 0, G__161370__a = new Array(arguments.length -  0);
while (G__161370__i < G__161370__a.length) {G__161370__a[G__161370__i] = arguments[G__161370__i + 0]; ++G__161370__i;}
  args = new cljs.core.IndexedSeq(G__161370__a,0);
} 
return G__161369__delegate.call(this,args);};
G__161369.cljs$lang$maxFixedArity = 0;
G__161369.cljs$lang$applyTo = (function (arglist__161371){
var args = cljs.core.seq(arglist__161371);
return G__161369__delegate(args);
});
G__161369.cljs$core$IFn$_invoke$arity$variadic = G__161369__delegate;
return G__161369;
})()
;

return null;
});
