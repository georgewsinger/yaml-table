goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__210442__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__210442 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__210443__i = 0, G__210443__a = new Array(arguments.length -  0);
while (G__210443__i < G__210443__a.length) {G__210443__a[G__210443__i] = arguments[G__210443__i + 0]; ++G__210443__i;}
  args = new cljs.core.IndexedSeq(G__210443__a,0);
} 
return G__210442__delegate.call(this,args);};
G__210442.cljs$lang$maxFixedArity = 0;
G__210442.cljs$lang$applyTo = (function (arglist__210444){
var args = cljs.core.seq(arglist__210444);
return G__210442__delegate(args);
});
G__210442.cljs$core$IFn$_invoke$arity$variadic = G__210442__delegate;
return G__210442;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__210445__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__210445 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__210446__i = 0, G__210446__a = new Array(arguments.length -  0);
while (G__210446__i < G__210446__a.length) {G__210446__a[G__210446__i] = arguments[G__210446__i + 0]; ++G__210446__i;}
  args = new cljs.core.IndexedSeq(G__210446__a,0);
} 
return G__210445__delegate.call(this,args);};
G__210445.cljs$lang$maxFixedArity = 0;
G__210445.cljs$lang$applyTo = (function (arglist__210447){
var args = cljs.core.seq(arglist__210447);
return G__210445__delegate(args);
});
G__210445.cljs$core$IFn$_invoke$arity$variadic = G__210445__delegate;
return G__210445;
})()
;

return null;
});
