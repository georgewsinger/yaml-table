goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__221734__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__221734 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__221735__i = 0, G__221735__a = new Array(arguments.length -  0);
while (G__221735__i < G__221735__a.length) {G__221735__a[G__221735__i] = arguments[G__221735__i + 0]; ++G__221735__i;}
  args = new cljs.core.IndexedSeq(G__221735__a,0);
} 
return G__221734__delegate.call(this,args);};
G__221734.cljs$lang$maxFixedArity = 0;
G__221734.cljs$lang$applyTo = (function (arglist__221736){
var args = cljs.core.seq(arglist__221736);
return G__221734__delegate(args);
});
G__221734.cljs$core$IFn$_invoke$arity$variadic = G__221734__delegate;
return G__221734;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__221737__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__221737 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__221738__i = 0, G__221738__a = new Array(arguments.length -  0);
while (G__221738__i < G__221738__a.length) {G__221738__a[G__221738__i] = arguments[G__221738__i + 0]; ++G__221738__i;}
  args = new cljs.core.IndexedSeq(G__221738__a,0);
} 
return G__221737__delegate.call(this,args);};
G__221737.cljs$lang$maxFixedArity = 0;
G__221737.cljs$lang$applyTo = (function (arglist__221739){
var args = cljs.core.seq(arglist__221739);
return G__221737__delegate(args);
});
G__221737.cljs$core$IFn$_invoke$arity$variadic = G__221737__delegate;
return G__221737;
})()
;

return null;
});
