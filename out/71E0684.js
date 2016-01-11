goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__303908__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__303908 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__303909__i = 0, G__303909__a = new Array(arguments.length -  0);
while (G__303909__i < G__303909__a.length) {G__303909__a[G__303909__i] = arguments[G__303909__i + 0]; ++G__303909__i;}
  args = new cljs.core.IndexedSeq(G__303909__a,0);
} 
return G__303908__delegate.call(this,args);};
G__303908.cljs$lang$maxFixedArity = 0;
G__303908.cljs$lang$applyTo = (function (arglist__303910){
var args = cljs.core.seq(arglist__303910);
return G__303908__delegate(args);
});
G__303908.cljs$core$IFn$_invoke$arity$variadic = G__303908__delegate;
return G__303908;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__303911__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__303911 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__303912__i = 0, G__303912__a = new Array(arguments.length -  0);
while (G__303912__i < G__303912__a.length) {G__303912__a[G__303912__i] = arguments[G__303912__i + 0]; ++G__303912__i;}
  args = new cljs.core.IndexedSeq(G__303912__a,0);
} 
return G__303911__delegate.call(this,args);};
G__303911.cljs$lang$maxFixedArity = 0;
G__303911.cljs$lang$applyTo = (function (arglist__303913){
var args = cljs.core.seq(arglist__303913);
return G__303911__delegate(args);
});
G__303911.cljs$core$IFn$_invoke$arity$variadic = G__303911__delegate;
return G__303911;
})()
;

return null;
});
