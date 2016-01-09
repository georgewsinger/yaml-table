goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__62228__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__62228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62229__i = 0, G__62229__a = new Array(arguments.length -  0);
while (G__62229__i < G__62229__a.length) {G__62229__a[G__62229__i] = arguments[G__62229__i + 0]; ++G__62229__i;}
  args = new cljs.core.IndexedSeq(G__62229__a,0);
} 
return G__62228__delegate.call(this,args);};
G__62228.cljs$lang$maxFixedArity = 0;
G__62228.cljs$lang$applyTo = (function (arglist__62230){
var args = cljs.core.seq(arglist__62230);
return G__62228__delegate(args);
});
G__62228.cljs$core$IFn$_invoke$arity$variadic = G__62228__delegate;
return G__62228;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__62231__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__62231 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62232__i = 0, G__62232__a = new Array(arguments.length -  0);
while (G__62232__i < G__62232__a.length) {G__62232__a[G__62232__i] = arguments[G__62232__i + 0]; ++G__62232__i;}
  args = new cljs.core.IndexedSeq(G__62232__a,0);
} 
return G__62231__delegate.call(this,args);};
G__62231.cljs$lang$maxFixedArity = 0;
G__62231.cljs$lang$applyTo = (function (arglist__62233){
var args = cljs.core.seq(arglist__62233);
return G__62231__delegate(args);
});
G__62231.cljs$core$IFn$_invoke$arity$variadic = G__62231__delegate;
return G__62231;
})()
;

return null;
});
