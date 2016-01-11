goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__358852__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__358852 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__358853__i = 0, G__358853__a = new Array(arguments.length -  0);
while (G__358853__i < G__358853__a.length) {G__358853__a[G__358853__i] = arguments[G__358853__i + 0]; ++G__358853__i;}
  args = new cljs.core.IndexedSeq(G__358853__a,0);
} 
return G__358852__delegate.call(this,args);};
G__358852.cljs$lang$maxFixedArity = 0;
G__358852.cljs$lang$applyTo = (function (arglist__358854){
var args = cljs.core.seq(arglist__358854);
return G__358852__delegate(args);
});
G__358852.cljs$core$IFn$_invoke$arity$variadic = G__358852__delegate;
return G__358852;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__358855__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__358855 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__358856__i = 0, G__358856__a = new Array(arguments.length -  0);
while (G__358856__i < G__358856__a.length) {G__358856__a[G__358856__i] = arguments[G__358856__i + 0]; ++G__358856__i;}
  args = new cljs.core.IndexedSeq(G__358856__a,0);
} 
return G__358855__delegate.call(this,args);};
G__358855.cljs$lang$maxFixedArity = 0;
G__358855.cljs$lang$applyTo = (function (arglist__358857){
var args = cljs.core.seq(arglist__358857);
return G__358855__delegate(args);
});
G__358855.cljs$core$IFn$_invoke$arity$variadic = G__358855__delegate;
return G__358855;
})()
;

return null;
});
