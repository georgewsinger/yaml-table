goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__110309__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__110309 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__110310__i = 0, G__110310__a = new Array(arguments.length -  0);
while (G__110310__i < G__110310__a.length) {G__110310__a[G__110310__i] = arguments[G__110310__i + 0]; ++G__110310__i;}
  args = new cljs.core.IndexedSeq(G__110310__a,0);
} 
return G__110309__delegate.call(this,args);};
G__110309.cljs$lang$maxFixedArity = 0;
G__110309.cljs$lang$applyTo = (function (arglist__110311){
var args = cljs.core.seq(arglist__110311);
return G__110309__delegate(args);
});
G__110309.cljs$core$IFn$_invoke$arity$variadic = G__110309__delegate;
return G__110309;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__110312__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__110312 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__110313__i = 0, G__110313__a = new Array(arguments.length -  0);
while (G__110313__i < G__110313__a.length) {G__110313__a[G__110313__i] = arguments[G__110313__i + 0]; ++G__110313__i;}
  args = new cljs.core.IndexedSeq(G__110313__a,0);
} 
return G__110312__delegate.call(this,args);};
G__110312.cljs$lang$maxFixedArity = 0;
G__110312.cljs$lang$applyTo = (function (arglist__110314){
var args = cljs.core.seq(arglist__110314);
return G__110312__delegate(args);
});
G__110312.cljs$core$IFn$_invoke$arity$variadic = G__110312__delegate;
return G__110312;
})()
;

return null;
});
