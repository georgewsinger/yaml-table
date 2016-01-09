goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__143248__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__143248 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__143249__i = 0, G__143249__a = new Array(arguments.length -  0);
while (G__143249__i < G__143249__a.length) {G__143249__a[G__143249__i] = arguments[G__143249__i + 0]; ++G__143249__i;}
  args = new cljs.core.IndexedSeq(G__143249__a,0);
} 
return G__143248__delegate.call(this,args);};
G__143248.cljs$lang$maxFixedArity = 0;
G__143248.cljs$lang$applyTo = (function (arglist__143250){
var args = cljs.core.seq(arglist__143250);
return G__143248__delegate(args);
});
G__143248.cljs$core$IFn$_invoke$arity$variadic = G__143248__delegate;
return G__143248;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__143251__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__143251 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__143252__i = 0, G__143252__a = new Array(arguments.length -  0);
while (G__143252__i < G__143252__a.length) {G__143252__a[G__143252__i] = arguments[G__143252__i + 0]; ++G__143252__i;}
  args = new cljs.core.IndexedSeq(G__143252__a,0);
} 
return G__143251__delegate.call(this,args);};
G__143251.cljs$lang$maxFixedArity = 0;
G__143251.cljs$lang$applyTo = (function (arglist__143253){
var args = cljs.core.seq(arglist__143253);
return G__143251__delegate(args);
});
G__143251.cljs$core$IFn$_invoke$arity$variadic = G__143251__delegate;
return G__143251;
})()
;

return null;
});
