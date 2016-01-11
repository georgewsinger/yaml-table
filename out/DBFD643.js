goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__230107__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__230107 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__230108__i = 0, G__230108__a = new Array(arguments.length -  0);
while (G__230108__i < G__230108__a.length) {G__230108__a[G__230108__i] = arguments[G__230108__i + 0]; ++G__230108__i;}
  args = new cljs.core.IndexedSeq(G__230108__a,0);
} 
return G__230107__delegate.call(this,args);};
G__230107.cljs$lang$maxFixedArity = 0;
G__230107.cljs$lang$applyTo = (function (arglist__230109){
var args = cljs.core.seq(arglist__230109);
return G__230107__delegate(args);
});
G__230107.cljs$core$IFn$_invoke$arity$variadic = G__230107__delegate;
return G__230107;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__230110__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__230110 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__230111__i = 0, G__230111__a = new Array(arguments.length -  0);
while (G__230111__i < G__230111__a.length) {G__230111__a[G__230111__i] = arguments[G__230111__i + 0]; ++G__230111__i;}
  args = new cljs.core.IndexedSeq(G__230111__a,0);
} 
return G__230110__delegate.call(this,args);};
G__230110.cljs$lang$maxFixedArity = 0;
G__230110.cljs$lang$applyTo = (function (arglist__230112){
var args = cljs.core.seq(arglist__230112);
return G__230110__delegate(args);
});
G__230110.cljs$core$IFn$_invoke$arity$variadic = G__230110__delegate;
return G__230110;
})()
;

return null;
});
