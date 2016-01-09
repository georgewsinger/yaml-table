goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__142862__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__142862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__142863__i = 0, G__142863__a = new Array(arguments.length -  0);
while (G__142863__i < G__142863__a.length) {G__142863__a[G__142863__i] = arguments[G__142863__i + 0]; ++G__142863__i;}
  args = new cljs.core.IndexedSeq(G__142863__a,0);
} 
return G__142862__delegate.call(this,args);};
G__142862.cljs$lang$maxFixedArity = 0;
G__142862.cljs$lang$applyTo = (function (arglist__142864){
var args = cljs.core.seq(arglist__142864);
return G__142862__delegate(args);
});
G__142862.cljs$core$IFn$_invoke$arity$variadic = G__142862__delegate;
return G__142862;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__142865__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__142865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__142866__i = 0, G__142866__a = new Array(arguments.length -  0);
while (G__142866__i < G__142866__a.length) {G__142866__a[G__142866__i] = arguments[G__142866__i + 0]; ++G__142866__i;}
  args = new cljs.core.IndexedSeq(G__142866__a,0);
} 
return G__142865__delegate.call(this,args);};
G__142865.cljs$lang$maxFixedArity = 0;
G__142865.cljs$lang$applyTo = (function (arglist__142867){
var args = cljs.core.seq(arglist__142867);
return G__142865__delegate(args);
});
G__142865.cljs$core$IFn$_invoke$arity$variadic = G__142865__delegate;
return G__142865;
})()
;

return null;
});
