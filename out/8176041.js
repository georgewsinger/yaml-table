goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__307144__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__307144 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__307145__i = 0, G__307145__a = new Array(arguments.length -  0);
while (G__307145__i < G__307145__a.length) {G__307145__a[G__307145__i] = arguments[G__307145__i + 0]; ++G__307145__i;}
  args = new cljs.core.IndexedSeq(G__307145__a,0);
} 
return G__307144__delegate.call(this,args);};
G__307144.cljs$lang$maxFixedArity = 0;
G__307144.cljs$lang$applyTo = (function (arglist__307146){
var args = cljs.core.seq(arglist__307146);
return G__307144__delegate(args);
});
G__307144.cljs$core$IFn$_invoke$arity$variadic = G__307144__delegate;
return G__307144;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__307147__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__307147 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__307148__i = 0, G__307148__a = new Array(arguments.length -  0);
while (G__307148__i < G__307148__a.length) {G__307148__a[G__307148__i] = arguments[G__307148__i + 0]; ++G__307148__i;}
  args = new cljs.core.IndexedSeq(G__307148__a,0);
} 
return G__307147__delegate.call(this,args);};
G__307147.cljs$lang$maxFixedArity = 0;
G__307147.cljs$lang$applyTo = (function (arglist__307149){
var args = cljs.core.seq(arglist__307149);
return G__307147__delegate(args);
});
G__307147.cljs$core$IFn$_invoke$arity$variadic = G__307147__delegate;
return G__307147;
})()
;

return null;
});
