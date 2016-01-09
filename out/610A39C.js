goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__60083__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__60083 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60084__i = 0, G__60084__a = new Array(arguments.length -  0);
while (G__60084__i < G__60084__a.length) {G__60084__a[G__60084__i] = arguments[G__60084__i + 0]; ++G__60084__i;}
  args = new cljs.core.IndexedSeq(G__60084__a,0);
} 
return G__60083__delegate.call(this,args);};
G__60083.cljs$lang$maxFixedArity = 0;
G__60083.cljs$lang$applyTo = (function (arglist__60085){
var args = cljs.core.seq(arglist__60085);
return G__60083__delegate(args);
});
G__60083.cljs$core$IFn$_invoke$arity$variadic = G__60083__delegate;
return G__60083;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__60086__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__60086 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60087__i = 0, G__60087__a = new Array(arguments.length -  0);
while (G__60087__i < G__60087__a.length) {G__60087__a[G__60087__i] = arguments[G__60087__i + 0]; ++G__60087__i;}
  args = new cljs.core.IndexedSeq(G__60087__a,0);
} 
return G__60086__delegate.call(this,args);};
G__60086.cljs$lang$maxFixedArity = 0;
G__60086.cljs$lang$applyTo = (function (arglist__60088){
var args = cljs.core.seq(arglist__60088);
return G__60086__delegate(args);
});
G__60086.cljs$core$IFn$_invoke$arity$variadic = G__60086__delegate;
return G__60086;
})()
;

return null;
});
