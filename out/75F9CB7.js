goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__168542__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__168542 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__168543__i = 0, G__168543__a = new Array(arguments.length -  0);
while (G__168543__i < G__168543__a.length) {G__168543__a[G__168543__i] = arguments[G__168543__i + 0]; ++G__168543__i;}
  args = new cljs.core.IndexedSeq(G__168543__a,0);
} 
return G__168542__delegate.call(this,args);};
G__168542.cljs$lang$maxFixedArity = 0;
G__168542.cljs$lang$applyTo = (function (arglist__168544){
var args = cljs.core.seq(arglist__168544);
return G__168542__delegate(args);
});
G__168542.cljs$core$IFn$_invoke$arity$variadic = G__168542__delegate;
return G__168542;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__168545__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__168545 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__168546__i = 0, G__168546__a = new Array(arguments.length -  0);
while (G__168546__i < G__168546__a.length) {G__168546__a[G__168546__i] = arguments[G__168546__i + 0]; ++G__168546__i;}
  args = new cljs.core.IndexedSeq(G__168546__a,0);
} 
return G__168545__delegate.call(this,args);};
G__168545.cljs$lang$maxFixedArity = 0;
G__168545.cljs$lang$applyTo = (function (arglist__168547){
var args = cljs.core.seq(arglist__168547);
return G__168545__delegate(args);
});
G__168545.cljs$core$IFn$_invoke$arity$variadic = G__168545__delegate;
return G__168545;
})()
;

return null;
});
