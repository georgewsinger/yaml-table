goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__310778__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__310778 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__310779__i = 0, G__310779__a = new Array(arguments.length -  0);
while (G__310779__i < G__310779__a.length) {G__310779__a[G__310779__i] = arguments[G__310779__i + 0]; ++G__310779__i;}
  args = new cljs.core.IndexedSeq(G__310779__a,0);
} 
return G__310778__delegate.call(this,args);};
G__310778.cljs$lang$maxFixedArity = 0;
G__310778.cljs$lang$applyTo = (function (arglist__310780){
var args = cljs.core.seq(arglist__310780);
return G__310778__delegate(args);
});
G__310778.cljs$core$IFn$_invoke$arity$variadic = G__310778__delegate;
return G__310778;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__310781__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__310781 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__310782__i = 0, G__310782__a = new Array(arguments.length -  0);
while (G__310782__i < G__310782__a.length) {G__310782__a[G__310782__i] = arguments[G__310782__i + 0]; ++G__310782__i;}
  args = new cljs.core.IndexedSeq(G__310782__a,0);
} 
return G__310781__delegate.call(this,args);};
G__310781.cljs$lang$maxFixedArity = 0;
G__310781.cljs$lang$applyTo = (function (arglist__310783){
var args = cljs.core.seq(arglist__310783);
return G__310781__delegate(args);
});
G__310781.cljs$core$IFn$_invoke$arity$variadic = G__310781__delegate;
return G__310781;
})()
;

return null;
});
