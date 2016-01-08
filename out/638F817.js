goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27276__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27276 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27277__i = 0, G__27277__a = new Array(arguments.length -  0);
while (G__27277__i < G__27277__a.length) {G__27277__a[G__27277__i] = arguments[G__27277__i + 0]; ++G__27277__i;}
  args = new cljs.core.IndexedSeq(G__27277__a,0);
} 
return G__27276__delegate.call(this,args);};
G__27276.cljs$lang$maxFixedArity = 0;
G__27276.cljs$lang$applyTo = (function (arglist__27278){
var args = cljs.core.seq(arglist__27278);
return G__27276__delegate(args);
});
G__27276.cljs$core$IFn$_invoke$arity$variadic = G__27276__delegate;
return G__27276;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27279__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27280__i = 0, G__27280__a = new Array(arguments.length -  0);
while (G__27280__i < G__27280__a.length) {G__27280__a[G__27280__i] = arguments[G__27280__i + 0]; ++G__27280__i;}
  args = new cljs.core.IndexedSeq(G__27280__a,0);
} 
return G__27279__delegate.call(this,args);};
G__27279.cljs$lang$maxFixedArity = 0;
G__27279.cljs$lang$applyTo = (function (arglist__27281){
var args = cljs.core.seq(arglist__27281);
return G__27279__delegate(args);
});
G__27279.cljs$core$IFn$_invoke$arity$variadic = G__27279__delegate;
return G__27279;
})()
;

return null;
});
