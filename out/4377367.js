goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__217289__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__217289 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__217290__i = 0, G__217290__a = new Array(arguments.length -  0);
while (G__217290__i < G__217290__a.length) {G__217290__a[G__217290__i] = arguments[G__217290__i + 0]; ++G__217290__i;}
  args = new cljs.core.IndexedSeq(G__217290__a,0);
} 
return G__217289__delegate.call(this,args);};
G__217289.cljs$lang$maxFixedArity = 0;
G__217289.cljs$lang$applyTo = (function (arglist__217291){
var args = cljs.core.seq(arglist__217291);
return G__217289__delegate(args);
});
G__217289.cljs$core$IFn$_invoke$arity$variadic = G__217289__delegate;
return G__217289;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__217292__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__217292 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__217293__i = 0, G__217293__a = new Array(arguments.length -  0);
while (G__217293__i < G__217293__a.length) {G__217293__a[G__217293__i] = arguments[G__217293__i + 0]; ++G__217293__i;}
  args = new cljs.core.IndexedSeq(G__217293__a,0);
} 
return G__217292__delegate.call(this,args);};
G__217292.cljs$lang$maxFixedArity = 0;
G__217292.cljs$lang$applyTo = (function (arglist__217294){
var args = cljs.core.seq(arglist__217294);
return G__217292__delegate(args);
});
G__217292.cljs$core$IFn$_invoke$arity$variadic = G__217292__delegate;
return G__217292;
})()
;

return null;
});
