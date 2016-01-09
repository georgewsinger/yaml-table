goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__141850__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__141850 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__141851__i = 0, G__141851__a = new Array(arguments.length -  0);
while (G__141851__i < G__141851__a.length) {G__141851__a[G__141851__i] = arguments[G__141851__i + 0]; ++G__141851__i;}
  args = new cljs.core.IndexedSeq(G__141851__a,0);
} 
return G__141850__delegate.call(this,args);};
G__141850.cljs$lang$maxFixedArity = 0;
G__141850.cljs$lang$applyTo = (function (arglist__141852){
var args = cljs.core.seq(arglist__141852);
return G__141850__delegate(args);
});
G__141850.cljs$core$IFn$_invoke$arity$variadic = G__141850__delegate;
return G__141850;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__141853__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__141853 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__141854__i = 0, G__141854__a = new Array(arguments.length -  0);
while (G__141854__i < G__141854__a.length) {G__141854__a[G__141854__i] = arguments[G__141854__i + 0]; ++G__141854__i;}
  args = new cljs.core.IndexedSeq(G__141854__a,0);
} 
return G__141853__delegate.call(this,args);};
G__141853.cljs$lang$maxFixedArity = 0;
G__141853.cljs$lang$applyTo = (function (arglist__141855){
var args = cljs.core.seq(arglist__141855);
return G__141853__delegate(args);
});
G__141853.cljs$core$IFn$_invoke$arity$variadic = G__141853__delegate;
return G__141853;
})()
;

return null;
});
