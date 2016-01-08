goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38676__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38677__i = 0, G__38677__a = new Array(arguments.length -  0);
while (G__38677__i < G__38677__a.length) {G__38677__a[G__38677__i] = arguments[G__38677__i + 0]; ++G__38677__i;}
  args = new cljs.core.IndexedSeq(G__38677__a,0);
} 
return G__38676__delegate.call(this,args);};
G__38676.cljs$lang$maxFixedArity = 0;
G__38676.cljs$lang$applyTo = (function (arglist__38678){
var args = cljs.core.seq(arglist__38678);
return G__38676__delegate(args);
});
G__38676.cljs$core$IFn$_invoke$arity$variadic = G__38676__delegate;
return G__38676;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38679__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38679 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38680__i = 0, G__38680__a = new Array(arguments.length -  0);
while (G__38680__i < G__38680__a.length) {G__38680__a[G__38680__i] = arguments[G__38680__i + 0]; ++G__38680__i;}
  args = new cljs.core.IndexedSeq(G__38680__a,0);
} 
return G__38679__delegate.call(this,args);};
G__38679.cljs$lang$maxFixedArity = 0;
G__38679.cljs$lang$applyTo = (function (arglist__38681){
var args = cljs.core.seq(arglist__38681);
return G__38679__delegate(args);
});
G__38679.cljs$core$IFn$_invoke$arity$variadic = G__38679__delegate;
return G__38679;
})()
;

return null;
});
