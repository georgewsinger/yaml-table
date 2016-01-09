goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__159409__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__159409 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__159410__i = 0, G__159410__a = new Array(arguments.length -  0);
while (G__159410__i < G__159410__a.length) {G__159410__a[G__159410__i] = arguments[G__159410__i + 0]; ++G__159410__i;}
  args = new cljs.core.IndexedSeq(G__159410__a,0);
} 
return G__159409__delegate.call(this,args);};
G__159409.cljs$lang$maxFixedArity = 0;
G__159409.cljs$lang$applyTo = (function (arglist__159411){
var args = cljs.core.seq(arglist__159411);
return G__159409__delegate(args);
});
G__159409.cljs$core$IFn$_invoke$arity$variadic = G__159409__delegate;
return G__159409;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__159412__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__159412 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__159413__i = 0, G__159413__a = new Array(arguments.length -  0);
while (G__159413__i < G__159413__a.length) {G__159413__a[G__159413__i] = arguments[G__159413__i + 0]; ++G__159413__i;}
  args = new cljs.core.IndexedSeq(G__159413__a,0);
} 
return G__159412__delegate.call(this,args);};
G__159412.cljs$lang$maxFixedArity = 0;
G__159412.cljs$lang$applyTo = (function (arglist__159414){
var args = cljs.core.seq(arglist__159414);
return G__159412__delegate(args);
});
G__159412.cljs$core$IFn$_invoke$arity$variadic = G__159412__delegate;
return G__159412;
})()
;

return null;
});
