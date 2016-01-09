goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__152902__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__152902 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__152903__i = 0, G__152903__a = new Array(arguments.length -  0);
while (G__152903__i < G__152903__a.length) {G__152903__a[G__152903__i] = arguments[G__152903__i + 0]; ++G__152903__i;}
  args = new cljs.core.IndexedSeq(G__152903__a,0);
} 
return G__152902__delegate.call(this,args);};
G__152902.cljs$lang$maxFixedArity = 0;
G__152902.cljs$lang$applyTo = (function (arglist__152904){
var args = cljs.core.seq(arglist__152904);
return G__152902__delegate(args);
});
G__152902.cljs$core$IFn$_invoke$arity$variadic = G__152902__delegate;
return G__152902;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__152905__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__152905 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__152906__i = 0, G__152906__a = new Array(arguments.length -  0);
while (G__152906__i < G__152906__a.length) {G__152906__a[G__152906__i] = arguments[G__152906__i + 0]; ++G__152906__i;}
  args = new cljs.core.IndexedSeq(G__152906__a,0);
} 
return G__152905__delegate.call(this,args);};
G__152905.cljs$lang$maxFixedArity = 0;
G__152905.cljs$lang$applyTo = (function (arglist__152907){
var args = cljs.core.seq(arglist__152907);
return G__152905__delegate(args);
});
G__152905.cljs$core$IFn$_invoke$arity$variadic = G__152905__delegate;
return G__152905;
})()
;

return null;
});
