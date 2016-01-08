goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37011__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37011 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37012__i = 0, G__37012__a = new Array(arguments.length -  0);
while (G__37012__i < G__37012__a.length) {G__37012__a[G__37012__i] = arguments[G__37012__i + 0]; ++G__37012__i;}
  args = new cljs.core.IndexedSeq(G__37012__a,0);
} 
return G__37011__delegate.call(this,args);};
G__37011.cljs$lang$maxFixedArity = 0;
G__37011.cljs$lang$applyTo = (function (arglist__37013){
var args = cljs.core.seq(arglist__37013);
return G__37011__delegate(args);
});
G__37011.cljs$core$IFn$_invoke$arity$variadic = G__37011__delegate;
return G__37011;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37014__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37014 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37015__i = 0, G__37015__a = new Array(arguments.length -  0);
while (G__37015__i < G__37015__a.length) {G__37015__a[G__37015__i] = arguments[G__37015__i + 0]; ++G__37015__i;}
  args = new cljs.core.IndexedSeq(G__37015__a,0);
} 
return G__37014__delegate.call(this,args);};
G__37014.cljs$lang$maxFixedArity = 0;
G__37014.cljs$lang$applyTo = (function (arglist__37016){
var args = cljs.core.seq(arglist__37016);
return G__37014__delegate(args);
});
G__37014.cljs$core$IFn$_invoke$arity$variadic = G__37014__delegate;
return G__37014;
})()
;

return null;
});
