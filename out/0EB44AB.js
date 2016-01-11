goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__325229__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__325229 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__325230__i = 0, G__325230__a = new Array(arguments.length -  0);
while (G__325230__i < G__325230__a.length) {G__325230__a[G__325230__i] = arguments[G__325230__i + 0]; ++G__325230__i;}
  args = new cljs.core.IndexedSeq(G__325230__a,0);
} 
return G__325229__delegate.call(this,args);};
G__325229.cljs$lang$maxFixedArity = 0;
G__325229.cljs$lang$applyTo = (function (arglist__325231){
var args = cljs.core.seq(arglist__325231);
return G__325229__delegate(args);
});
G__325229.cljs$core$IFn$_invoke$arity$variadic = G__325229__delegate;
return G__325229;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__325232__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__325232 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__325233__i = 0, G__325233__a = new Array(arguments.length -  0);
while (G__325233__i < G__325233__a.length) {G__325233__a[G__325233__i] = arguments[G__325233__i + 0]; ++G__325233__i;}
  args = new cljs.core.IndexedSeq(G__325233__a,0);
} 
return G__325232__delegate.call(this,args);};
G__325232.cljs$lang$maxFixedArity = 0;
G__325232.cljs$lang$applyTo = (function (arglist__325234){
var args = cljs.core.seq(arglist__325234);
return G__325232__delegate(args);
});
G__325232.cljs$core$IFn$_invoke$arity$variadic = G__325232__delegate;
return G__325232;
})()
;

return null;
});
