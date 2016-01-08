goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36504__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36504 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36505__i = 0, G__36505__a = new Array(arguments.length -  0);
while (G__36505__i < G__36505__a.length) {G__36505__a[G__36505__i] = arguments[G__36505__i + 0]; ++G__36505__i;}
  args = new cljs.core.IndexedSeq(G__36505__a,0);
} 
return G__36504__delegate.call(this,args);};
G__36504.cljs$lang$maxFixedArity = 0;
G__36504.cljs$lang$applyTo = (function (arglist__36506){
var args = cljs.core.seq(arglist__36506);
return G__36504__delegate(args);
});
G__36504.cljs$core$IFn$_invoke$arity$variadic = G__36504__delegate;
return G__36504;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36507__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36507 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36508__i = 0, G__36508__a = new Array(arguments.length -  0);
while (G__36508__i < G__36508__a.length) {G__36508__a[G__36508__i] = arguments[G__36508__i + 0]; ++G__36508__i;}
  args = new cljs.core.IndexedSeq(G__36508__a,0);
} 
return G__36507__delegate.call(this,args);};
G__36507.cljs$lang$maxFixedArity = 0;
G__36507.cljs$lang$applyTo = (function (arglist__36509){
var args = cljs.core.seq(arglist__36509);
return G__36507__delegate(args);
});
G__36507.cljs$core$IFn$_invoke$arity$variadic = G__36507__delegate;
return G__36507;
})()
;

return null;
});
