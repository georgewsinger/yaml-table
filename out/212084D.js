goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__109537__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__109537 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__109538__i = 0, G__109538__a = new Array(arguments.length -  0);
while (G__109538__i < G__109538__a.length) {G__109538__a[G__109538__i] = arguments[G__109538__i + 0]; ++G__109538__i;}
  args = new cljs.core.IndexedSeq(G__109538__a,0);
} 
return G__109537__delegate.call(this,args);};
G__109537.cljs$lang$maxFixedArity = 0;
G__109537.cljs$lang$applyTo = (function (arglist__109539){
var args = cljs.core.seq(arglist__109539);
return G__109537__delegate(args);
});
G__109537.cljs$core$IFn$_invoke$arity$variadic = G__109537__delegate;
return G__109537;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__109540__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__109540 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__109541__i = 0, G__109541__a = new Array(arguments.length -  0);
while (G__109541__i < G__109541__a.length) {G__109541__a[G__109541__i] = arguments[G__109541__i + 0]; ++G__109541__i;}
  args = new cljs.core.IndexedSeq(G__109541__a,0);
} 
return G__109540__delegate.call(this,args);};
G__109540.cljs$lang$maxFixedArity = 0;
G__109540.cljs$lang$applyTo = (function (arglist__109542){
var args = cljs.core.seq(arglist__109542);
return G__109540__delegate(args);
});
G__109540.cljs$core$IFn$_invoke$arity$variadic = G__109540__delegate;
return G__109540;
})()
;

return null;
});
