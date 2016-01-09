goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__161959__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__161959 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__161960__i = 0, G__161960__a = new Array(arguments.length -  0);
while (G__161960__i < G__161960__a.length) {G__161960__a[G__161960__i] = arguments[G__161960__i + 0]; ++G__161960__i;}
  args = new cljs.core.IndexedSeq(G__161960__a,0);
} 
return G__161959__delegate.call(this,args);};
G__161959.cljs$lang$maxFixedArity = 0;
G__161959.cljs$lang$applyTo = (function (arglist__161961){
var args = cljs.core.seq(arglist__161961);
return G__161959__delegate(args);
});
G__161959.cljs$core$IFn$_invoke$arity$variadic = G__161959__delegate;
return G__161959;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__161962__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__161962 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__161963__i = 0, G__161963__a = new Array(arguments.length -  0);
while (G__161963__i < G__161963__a.length) {G__161963__a[G__161963__i] = arguments[G__161963__i + 0]; ++G__161963__i;}
  args = new cljs.core.IndexedSeq(G__161963__a,0);
} 
return G__161962__delegate.call(this,args);};
G__161962.cljs$lang$maxFixedArity = 0;
G__161962.cljs$lang$applyTo = (function (arglist__161964){
var args = cljs.core.seq(arglist__161964);
return G__161962__delegate(args);
});
G__161962.cljs$core$IFn$_invoke$arity$variadic = G__161962__delegate;
return G__161962;
})()
;

return null;
});
