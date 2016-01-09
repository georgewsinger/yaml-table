goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__52490__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__52490 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52491__i = 0, G__52491__a = new Array(arguments.length -  0);
while (G__52491__i < G__52491__a.length) {G__52491__a[G__52491__i] = arguments[G__52491__i + 0]; ++G__52491__i;}
  args = new cljs.core.IndexedSeq(G__52491__a,0);
} 
return G__52490__delegate.call(this,args);};
G__52490.cljs$lang$maxFixedArity = 0;
G__52490.cljs$lang$applyTo = (function (arglist__52492){
var args = cljs.core.seq(arglist__52492);
return G__52490__delegate(args);
});
G__52490.cljs$core$IFn$_invoke$arity$variadic = G__52490__delegate;
return G__52490;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__52493__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__52493 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52494__i = 0, G__52494__a = new Array(arguments.length -  0);
while (G__52494__i < G__52494__a.length) {G__52494__a[G__52494__i] = arguments[G__52494__i + 0]; ++G__52494__i;}
  args = new cljs.core.IndexedSeq(G__52494__a,0);
} 
return G__52493__delegate.call(this,args);};
G__52493.cljs$lang$maxFixedArity = 0;
G__52493.cljs$lang$applyTo = (function (arglist__52495){
var args = cljs.core.seq(arglist__52495);
return G__52493__delegate(args);
});
G__52493.cljs$core$IFn$_invoke$arity$variadic = G__52493__delegate;
return G__52493;
})()
;

return null;
});
