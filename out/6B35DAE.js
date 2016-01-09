goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__114181__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__114181 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__114182__i = 0, G__114182__a = new Array(arguments.length -  0);
while (G__114182__i < G__114182__a.length) {G__114182__a[G__114182__i] = arguments[G__114182__i + 0]; ++G__114182__i;}
  args = new cljs.core.IndexedSeq(G__114182__a,0);
} 
return G__114181__delegate.call(this,args);};
G__114181.cljs$lang$maxFixedArity = 0;
G__114181.cljs$lang$applyTo = (function (arglist__114183){
var args = cljs.core.seq(arglist__114183);
return G__114181__delegate(args);
});
G__114181.cljs$core$IFn$_invoke$arity$variadic = G__114181__delegate;
return G__114181;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__114184__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__114184 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__114185__i = 0, G__114185__a = new Array(arguments.length -  0);
while (G__114185__i < G__114185__a.length) {G__114185__a[G__114185__i] = arguments[G__114185__i + 0]; ++G__114185__i;}
  args = new cljs.core.IndexedSeq(G__114185__a,0);
} 
return G__114184__delegate.call(this,args);};
G__114184.cljs$lang$maxFixedArity = 0;
G__114184.cljs$lang$applyTo = (function (arglist__114186){
var args = cljs.core.seq(arglist__114186);
return G__114184__delegate(args);
});
G__114184.cljs$core$IFn$_invoke$arity$variadic = G__114184__delegate;
return G__114184;
})()
;

return null;
});
