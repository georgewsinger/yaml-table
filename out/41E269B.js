goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28899__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28900__i = 0, G__28900__a = new Array(arguments.length -  0);
while (G__28900__i < G__28900__a.length) {G__28900__a[G__28900__i] = arguments[G__28900__i + 0]; ++G__28900__i;}
  args = new cljs.core.IndexedSeq(G__28900__a,0);
} 
return G__28899__delegate.call(this,args);};
G__28899.cljs$lang$maxFixedArity = 0;
G__28899.cljs$lang$applyTo = (function (arglist__28901){
var args = cljs.core.seq(arglist__28901);
return G__28899__delegate(args);
});
G__28899.cljs$core$IFn$_invoke$arity$variadic = G__28899__delegate;
return G__28899;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28902__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28902 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28903__i = 0, G__28903__a = new Array(arguments.length -  0);
while (G__28903__i < G__28903__a.length) {G__28903__a[G__28903__i] = arguments[G__28903__i + 0]; ++G__28903__i;}
  args = new cljs.core.IndexedSeq(G__28903__a,0);
} 
return G__28902__delegate.call(this,args);};
G__28902.cljs$lang$maxFixedArity = 0;
G__28902.cljs$lang$applyTo = (function (arglist__28904){
var args = cljs.core.seq(arglist__28904);
return G__28902__delegate(args);
});
G__28902.cljs$core$IFn$_invoke$arity$variadic = G__28902__delegate;
return G__28902;
})()
;

return null;
});
