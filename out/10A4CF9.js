goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__254948__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__254948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__254949__i = 0, G__254949__a = new Array(arguments.length -  0);
while (G__254949__i < G__254949__a.length) {G__254949__a[G__254949__i] = arguments[G__254949__i + 0]; ++G__254949__i;}
  args = new cljs.core.IndexedSeq(G__254949__a,0);
} 
return G__254948__delegate.call(this,args);};
G__254948.cljs$lang$maxFixedArity = 0;
G__254948.cljs$lang$applyTo = (function (arglist__254950){
var args = cljs.core.seq(arglist__254950);
return G__254948__delegate(args);
});
G__254948.cljs$core$IFn$_invoke$arity$variadic = G__254948__delegate;
return G__254948;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__254951__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__254951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__254952__i = 0, G__254952__a = new Array(arguments.length -  0);
while (G__254952__i < G__254952__a.length) {G__254952__a[G__254952__i] = arguments[G__254952__i + 0]; ++G__254952__i;}
  args = new cljs.core.IndexedSeq(G__254952__a,0);
} 
return G__254951__delegate.call(this,args);};
G__254951.cljs$lang$maxFixedArity = 0;
G__254951.cljs$lang$applyTo = (function (arglist__254953){
var args = cljs.core.seq(arglist__254953);
return G__254951__delegate(args);
});
G__254951.cljs$core$IFn$_invoke$arity$variadic = G__254951__delegate;
return G__254951;
})()
;

return null;
});
