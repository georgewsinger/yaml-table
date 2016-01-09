goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__152996__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__152996 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__152997__i = 0, G__152997__a = new Array(arguments.length -  0);
while (G__152997__i < G__152997__a.length) {G__152997__a[G__152997__i] = arguments[G__152997__i + 0]; ++G__152997__i;}
  args = new cljs.core.IndexedSeq(G__152997__a,0);
} 
return G__152996__delegate.call(this,args);};
G__152996.cljs$lang$maxFixedArity = 0;
G__152996.cljs$lang$applyTo = (function (arglist__152998){
var args = cljs.core.seq(arglist__152998);
return G__152996__delegate(args);
});
G__152996.cljs$core$IFn$_invoke$arity$variadic = G__152996__delegate;
return G__152996;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__152999__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__152999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__153000__i = 0, G__153000__a = new Array(arguments.length -  0);
while (G__153000__i < G__153000__a.length) {G__153000__a[G__153000__i] = arguments[G__153000__i + 0]; ++G__153000__i;}
  args = new cljs.core.IndexedSeq(G__153000__a,0);
} 
return G__152999__delegate.call(this,args);};
G__152999.cljs$lang$maxFixedArity = 0;
G__152999.cljs$lang$applyTo = (function (arglist__153001){
var args = cljs.core.seq(arglist__153001);
return G__152999__delegate(args);
});
G__152999.cljs$core$IFn$_invoke$arity$variadic = G__152999__delegate;
return G__152999;
})()
;

return null;
});
