goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__47885__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__47885 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47886__i = 0, G__47886__a = new Array(arguments.length -  0);
while (G__47886__i < G__47886__a.length) {G__47886__a[G__47886__i] = arguments[G__47886__i + 0]; ++G__47886__i;}
  args = new cljs.core.IndexedSeq(G__47886__a,0);
} 
return G__47885__delegate.call(this,args);};
G__47885.cljs$lang$maxFixedArity = 0;
G__47885.cljs$lang$applyTo = (function (arglist__47887){
var args = cljs.core.seq(arglist__47887);
return G__47885__delegate(args);
});
G__47885.cljs$core$IFn$_invoke$arity$variadic = G__47885__delegate;
return G__47885;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__47888__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__47888 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47889__i = 0, G__47889__a = new Array(arguments.length -  0);
while (G__47889__i < G__47889__a.length) {G__47889__a[G__47889__i] = arguments[G__47889__i + 0]; ++G__47889__i;}
  args = new cljs.core.IndexedSeq(G__47889__a,0);
} 
return G__47888__delegate.call(this,args);};
G__47888.cljs$lang$maxFixedArity = 0;
G__47888.cljs$lang$applyTo = (function (arglist__47890){
var args = cljs.core.seq(arglist__47890);
return G__47888__delegate(args);
});
G__47888.cljs$core$IFn$_invoke$arity$variadic = G__47888__delegate;
return G__47888;
})()
;

return null;
});
