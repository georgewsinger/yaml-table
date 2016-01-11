goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__331686__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__331686 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__331687__i = 0, G__331687__a = new Array(arguments.length -  0);
while (G__331687__i < G__331687__a.length) {G__331687__a[G__331687__i] = arguments[G__331687__i + 0]; ++G__331687__i;}
  args = new cljs.core.IndexedSeq(G__331687__a,0);
} 
return G__331686__delegate.call(this,args);};
G__331686.cljs$lang$maxFixedArity = 0;
G__331686.cljs$lang$applyTo = (function (arglist__331688){
var args = cljs.core.seq(arglist__331688);
return G__331686__delegate(args);
});
G__331686.cljs$core$IFn$_invoke$arity$variadic = G__331686__delegate;
return G__331686;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__331689__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__331689 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__331690__i = 0, G__331690__a = new Array(arguments.length -  0);
while (G__331690__i < G__331690__a.length) {G__331690__a[G__331690__i] = arguments[G__331690__i + 0]; ++G__331690__i;}
  args = new cljs.core.IndexedSeq(G__331690__a,0);
} 
return G__331689__delegate.call(this,args);};
G__331689.cljs$lang$maxFixedArity = 0;
G__331689.cljs$lang$applyTo = (function (arglist__331691){
var args = cljs.core.seq(arglist__331691);
return G__331689__delegate(args);
});
G__331689.cljs$core$IFn$_invoke$arity$variadic = G__331689__delegate;
return G__331689;
})()
;

return null;
});
