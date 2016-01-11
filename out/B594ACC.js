goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__196091__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__196091 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__196092__i = 0, G__196092__a = new Array(arguments.length -  0);
while (G__196092__i < G__196092__a.length) {G__196092__a[G__196092__i] = arguments[G__196092__i + 0]; ++G__196092__i;}
  args = new cljs.core.IndexedSeq(G__196092__a,0);
} 
return G__196091__delegate.call(this,args);};
G__196091.cljs$lang$maxFixedArity = 0;
G__196091.cljs$lang$applyTo = (function (arglist__196093){
var args = cljs.core.seq(arglist__196093);
return G__196091__delegate(args);
});
G__196091.cljs$core$IFn$_invoke$arity$variadic = G__196091__delegate;
return G__196091;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__196094__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__196094 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__196095__i = 0, G__196095__a = new Array(arguments.length -  0);
while (G__196095__i < G__196095__a.length) {G__196095__a[G__196095__i] = arguments[G__196095__i + 0]; ++G__196095__i;}
  args = new cljs.core.IndexedSeq(G__196095__a,0);
} 
return G__196094__delegate.call(this,args);};
G__196094.cljs$lang$maxFixedArity = 0;
G__196094.cljs$lang$applyTo = (function (arglist__196096){
var args = cljs.core.seq(arglist__196096);
return G__196094__delegate(args);
});
G__196094.cljs$core$IFn$_invoke$arity$variadic = G__196094__delegate;
return G__196094;
})()
;

return null;
});
