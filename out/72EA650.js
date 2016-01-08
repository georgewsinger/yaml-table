goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31951__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31952__i = 0, G__31952__a = new Array(arguments.length -  0);
while (G__31952__i < G__31952__a.length) {G__31952__a[G__31952__i] = arguments[G__31952__i + 0]; ++G__31952__i;}
  args = new cljs.core.IndexedSeq(G__31952__a,0);
} 
return G__31951__delegate.call(this,args);};
G__31951.cljs$lang$maxFixedArity = 0;
G__31951.cljs$lang$applyTo = (function (arglist__31953){
var args = cljs.core.seq(arglist__31953);
return G__31951__delegate(args);
});
G__31951.cljs$core$IFn$_invoke$arity$variadic = G__31951__delegate;
return G__31951;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31954__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31955__i = 0, G__31955__a = new Array(arguments.length -  0);
while (G__31955__i < G__31955__a.length) {G__31955__a[G__31955__i] = arguments[G__31955__i + 0]; ++G__31955__i;}
  args = new cljs.core.IndexedSeq(G__31955__a,0);
} 
return G__31954__delegate.call(this,args);};
G__31954.cljs$lang$maxFixedArity = 0;
G__31954.cljs$lang$applyTo = (function (arglist__31956){
var args = cljs.core.seq(arglist__31956);
return G__31954__delegate(args);
});
G__31954.cljs$core$IFn$_invoke$arity$variadic = G__31954__delegate;
return G__31954;
})()
;

return null;
});
