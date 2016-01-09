goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__167578__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__167578 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__167579__i = 0, G__167579__a = new Array(arguments.length -  0);
while (G__167579__i < G__167579__a.length) {G__167579__a[G__167579__i] = arguments[G__167579__i + 0]; ++G__167579__i;}
  args = new cljs.core.IndexedSeq(G__167579__a,0);
} 
return G__167578__delegate.call(this,args);};
G__167578.cljs$lang$maxFixedArity = 0;
G__167578.cljs$lang$applyTo = (function (arglist__167580){
var args = cljs.core.seq(arglist__167580);
return G__167578__delegate(args);
});
G__167578.cljs$core$IFn$_invoke$arity$variadic = G__167578__delegate;
return G__167578;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__167581__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__167581 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__167582__i = 0, G__167582__a = new Array(arguments.length -  0);
while (G__167582__i < G__167582__a.length) {G__167582__a[G__167582__i] = arguments[G__167582__i + 0]; ++G__167582__i;}
  args = new cljs.core.IndexedSeq(G__167582__a,0);
} 
return G__167581__delegate.call(this,args);};
G__167581.cljs$lang$maxFixedArity = 0;
G__167581.cljs$lang$applyTo = (function (arglist__167583){
var args = cljs.core.seq(arglist__167583);
return G__167581__delegate(args);
});
G__167581.cljs$core$IFn$_invoke$arity$variadic = G__167581__delegate;
return G__167581;
})()
;

return null;
});
