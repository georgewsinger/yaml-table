goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__160093__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__160093 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__160094__i = 0, G__160094__a = new Array(arguments.length -  0);
while (G__160094__i < G__160094__a.length) {G__160094__a[G__160094__i] = arguments[G__160094__i + 0]; ++G__160094__i;}
  args = new cljs.core.IndexedSeq(G__160094__a,0);
} 
return G__160093__delegate.call(this,args);};
G__160093.cljs$lang$maxFixedArity = 0;
G__160093.cljs$lang$applyTo = (function (arglist__160095){
var args = cljs.core.seq(arglist__160095);
return G__160093__delegate(args);
});
G__160093.cljs$core$IFn$_invoke$arity$variadic = G__160093__delegate;
return G__160093;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__160096__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__160096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__160097__i = 0, G__160097__a = new Array(arguments.length -  0);
while (G__160097__i < G__160097__a.length) {G__160097__a[G__160097__i] = arguments[G__160097__i + 0]; ++G__160097__i;}
  args = new cljs.core.IndexedSeq(G__160097__a,0);
} 
return G__160096__delegate.call(this,args);};
G__160096.cljs$lang$maxFixedArity = 0;
G__160096.cljs$lang$applyTo = (function (arglist__160098){
var args = cljs.core.seq(arglist__160098);
return G__160096__delegate(args);
});
G__160096.cljs$core$IFn$_invoke$arity$variadic = G__160096__delegate;
return G__160096;
})()
;

return null;
});
