goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22286__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22287__i = 0, G__22287__a = new Array(arguments.length -  0);
while (G__22287__i < G__22287__a.length) {G__22287__a[G__22287__i] = arguments[G__22287__i + 0]; ++G__22287__i;}
  args = new cljs.core.IndexedSeq(G__22287__a,0);
} 
return G__22286__delegate.call(this,args);};
G__22286.cljs$lang$maxFixedArity = 0;
G__22286.cljs$lang$applyTo = (function (arglist__22288){
var args = cljs.core.seq(arglist__22288);
return G__22286__delegate(args);
});
G__22286.cljs$core$IFn$_invoke$arity$variadic = G__22286__delegate;
return G__22286;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22289__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22289 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22290__i = 0, G__22290__a = new Array(arguments.length -  0);
while (G__22290__i < G__22290__a.length) {G__22290__a[G__22290__i] = arguments[G__22290__i + 0]; ++G__22290__i;}
  args = new cljs.core.IndexedSeq(G__22290__a,0);
} 
return G__22289__delegate.call(this,args);};
G__22289.cljs$lang$maxFixedArity = 0;
G__22289.cljs$lang$applyTo = (function (arglist__22291){
var args = cljs.core.seq(arglist__22291);
return G__22289__delegate(args);
});
G__22289.cljs$core$IFn$_invoke$arity$variadic = G__22289__delegate;
return G__22289;
})()
;

return null;
});
