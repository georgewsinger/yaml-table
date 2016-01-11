goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__346807__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__346807 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__346808__i = 0, G__346808__a = new Array(arguments.length -  0);
while (G__346808__i < G__346808__a.length) {G__346808__a[G__346808__i] = arguments[G__346808__i + 0]; ++G__346808__i;}
  args = new cljs.core.IndexedSeq(G__346808__a,0);
} 
return G__346807__delegate.call(this,args);};
G__346807.cljs$lang$maxFixedArity = 0;
G__346807.cljs$lang$applyTo = (function (arglist__346809){
var args = cljs.core.seq(arglist__346809);
return G__346807__delegate(args);
});
G__346807.cljs$core$IFn$_invoke$arity$variadic = G__346807__delegate;
return G__346807;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__346810__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__346810 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__346811__i = 0, G__346811__a = new Array(arguments.length -  0);
while (G__346811__i < G__346811__a.length) {G__346811__a[G__346811__i] = arguments[G__346811__i + 0]; ++G__346811__i;}
  args = new cljs.core.IndexedSeq(G__346811__a,0);
} 
return G__346810__delegate.call(this,args);};
G__346810.cljs$lang$maxFixedArity = 0;
G__346810.cljs$lang$applyTo = (function (arglist__346812){
var args = cljs.core.seq(arglist__346812);
return G__346810__delegate(args);
});
G__346810.cljs$core$IFn$_invoke$arity$variadic = G__346810__delegate;
return G__346810;
})()
;

return null;
});
