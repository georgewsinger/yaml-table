goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__65444__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__65444 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65445__i = 0, G__65445__a = new Array(arguments.length -  0);
while (G__65445__i < G__65445__a.length) {G__65445__a[G__65445__i] = arguments[G__65445__i + 0]; ++G__65445__i;}
  args = new cljs.core.IndexedSeq(G__65445__a,0);
} 
return G__65444__delegate.call(this,args);};
G__65444.cljs$lang$maxFixedArity = 0;
G__65444.cljs$lang$applyTo = (function (arglist__65446){
var args = cljs.core.seq(arglist__65446);
return G__65444__delegate(args);
});
G__65444.cljs$core$IFn$_invoke$arity$variadic = G__65444__delegate;
return G__65444;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__65447__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__65447 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65448__i = 0, G__65448__a = new Array(arguments.length -  0);
while (G__65448__i < G__65448__a.length) {G__65448__a[G__65448__i] = arguments[G__65448__i + 0]; ++G__65448__i;}
  args = new cljs.core.IndexedSeq(G__65448__a,0);
} 
return G__65447__delegate.call(this,args);};
G__65447.cljs$lang$maxFixedArity = 0;
G__65447.cljs$lang$applyTo = (function (arglist__65449){
var args = cljs.core.seq(arglist__65449);
return G__65447__delegate(args);
});
G__65447.cljs$core$IFn$_invoke$arity$variadic = G__65447__delegate;
return G__65447;
})()
;

return null;
});
