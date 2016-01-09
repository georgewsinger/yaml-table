goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__62624__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__62624 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62625__i = 0, G__62625__a = new Array(arguments.length -  0);
while (G__62625__i < G__62625__a.length) {G__62625__a[G__62625__i] = arguments[G__62625__i + 0]; ++G__62625__i;}
  args = new cljs.core.IndexedSeq(G__62625__a,0);
} 
return G__62624__delegate.call(this,args);};
G__62624.cljs$lang$maxFixedArity = 0;
G__62624.cljs$lang$applyTo = (function (arglist__62626){
var args = cljs.core.seq(arglist__62626);
return G__62624__delegate(args);
});
G__62624.cljs$core$IFn$_invoke$arity$variadic = G__62624__delegate;
return G__62624;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__62627__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__62627 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62628__i = 0, G__62628__a = new Array(arguments.length -  0);
while (G__62628__i < G__62628__a.length) {G__62628__a[G__62628__i] = arguments[G__62628__i + 0]; ++G__62628__i;}
  args = new cljs.core.IndexedSeq(G__62628__a,0);
} 
return G__62627__delegate.call(this,args);};
G__62627.cljs$lang$maxFixedArity = 0;
G__62627.cljs$lang$applyTo = (function (arglist__62629){
var args = cljs.core.seq(arglist__62629);
return G__62627__delegate(args);
});
G__62627.cljs$core$IFn$_invoke$arity$variadic = G__62627__delegate;
return G__62627;
})()
;

return null;
});
