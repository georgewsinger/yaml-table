goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30742__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30742 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30743__i = 0, G__30743__a = new Array(arguments.length -  0);
while (G__30743__i < G__30743__a.length) {G__30743__a[G__30743__i] = arguments[G__30743__i + 0]; ++G__30743__i;}
  args = new cljs.core.IndexedSeq(G__30743__a,0);
} 
return G__30742__delegate.call(this,args);};
G__30742.cljs$lang$maxFixedArity = 0;
G__30742.cljs$lang$applyTo = (function (arglist__30744){
var args = cljs.core.seq(arglist__30744);
return G__30742__delegate(args);
});
G__30742.cljs$core$IFn$_invoke$arity$variadic = G__30742__delegate;
return G__30742;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30745__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30745 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30746__i = 0, G__30746__a = new Array(arguments.length -  0);
while (G__30746__i < G__30746__a.length) {G__30746__a[G__30746__i] = arguments[G__30746__i + 0]; ++G__30746__i;}
  args = new cljs.core.IndexedSeq(G__30746__a,0);
} 
return G__30745__delegate.call(this,args);};
G__30745.cljs$lang$maxFixedArity = 0;
G__30745.cljs$lang$applyTo = (function (arglist__30747){
var args = cljs.core.seq(arglist__30747);
return G__30745__delegate(args);
});
G__30745.cljs$core$IFn$_invoke$arity$variadic = G__30745__delegate;
return G__30745;
})()
;

return null;
});
