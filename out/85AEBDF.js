goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__267079__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__267079 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__267080__i = 0, G__267080__a = new Array(arguments.length -  0);
while (G__267080__i < G__267080__a.length) {G__267080__a[G__267080__i] = arguments[G__267080__i + 0]; ++G__267080__i;}
  args = new cljs.core.IndexedSeq(G__267080__a,0);
} 
return G__267079__delegate.call(this,args);};
G__267079.cljs$lang$maxFixedArity = 0;
G__267079.cljs$lang$applyTo = (function (arglist__267081){
var args = cljs.core.seq(arglist__267081);
return G__267079__delegate(args);
});
G__267079.cljs$core$IFn$_invoke$arity$variadic = G__267079__delegate;
return G__267079;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__267082__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__267082 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__267083__i = 0, G__267083__a = new Array(arguments.length -  0);
while (G__267083__i < G__267083__a.length) {G__267083__a[G__267083__i] = arguments[G__267083__i + 0]; ++G__267083__i;}
  args = new cljs.core.IndexedSeq(G__267083__a,0);
} 
return G__267082__delegate.call(this,args);};
G__267082.cljs$lang$maxFixedArity = 0;
G__267082.cljs$lang$applyTo = (function (arglist__267084){
var args = cljs.core.seq(arglist__267084);
return G__267082__delegate(args);
});
G__267082.cljs$core$IFn$_invoke$arity$variadic = G__267082__delegate;
return G__267082;
})()
;

return null;
});
