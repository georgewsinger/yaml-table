goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38797__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38798__i = 0, G__38798__a = new Array(arguments.length -  0);
while (G__38798__i < G__38798__a.length) {G__38798__a[G__38798__i] = arguments[G__38798__i + 0]; ++G__38798__i;}
  args = new cljs.core.IndexedSeq(G__38798__a,0);
} 
return G__38797__delegate.call(this,args);};
G__38797.cljs$lang$maxFixedArity = 0;
G__38797.cljs$lang$applyTo = (function (arglist__38799){
var args = cljs.core.seq(arglist__38799);
return G__38797__delegate(args);
});
G__38797.cljs$core$IFn$_invoke$arity$variadic = G__38797__delegate;
return G__38797;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38800__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38801__i = 0, G__38801__a = new Array(arguments.length -  0);
while (G__38801__i < G__38801__a.length) {G__38801__a[G__38801__i] = arguments[G__38801__i + 0]; ++G__38801__i;}
  args = new cljs.core.IndexedSeq(G__38801__a,0);
} 
return G__38800__delegate.call(this,args);};
G__38800.cljs$lang$maxFixedArity = 0;
G__38800.cljs$lang$applyTo = (function (arglist__38802){
var args = cljs.core.seq(arglist__38802);
return G__38800__delegate(args);
});
G__38800.cljs$core$IFn$_invoke$arity$variadic = G__38800__delegate;
return G__38800;
})()
;

return null;
});
