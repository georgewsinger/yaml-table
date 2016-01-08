goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38290__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38290 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38291__i = 0, G__38291__a = new Array(arguments.length -  0);
while (G__38291__i < G__38291__a.length) {G__38291__a[G__38291__i] = arguments[G__38291__i + 0]; ++G__38291__i;}
  args = new cljs.core.IndexedSeq(G__38291__a,0);
} 
return G__38290__delegate.call(this,args);};
G__38290.cljs$lang$maxFixedArity = 0;
G__38290.cljs$lang$applyTo = (function (arglist__38292){
var args = cljs.core.seq(arglist__38292);
return G__38290__delegate(args);
});
G__38290.cljs$core$IFn$_invoke$arity$variadic = G__38290__delegate;
return G__38290;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38293__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38293 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38294__i = 0, G__38294__a = new Array(arguments.length -  0);
while (G__38294__i < G__38294__a.length) {G__38294__a[G__38294__i] = arguments[G__38294__i + 0]; ++G__38294__i;}
  args = new cljs.core.IndexedSeq(G__38294__a,0);
} 
return G__38293__delegate.call(this,args);};
G__38293.cljs$lang$maxFixedArity = 0;
G__38293.cljs$lang$applyTo = (function (arglist__38295){
var args = cljs.core.seq(arglist__38295);
return G__38293__delegate(args);
});
G__38293.cljs$core$IFn$_invoke$arity$variadic = G__38293__delegate;
return G__38293;
})()
;

return null;
});
