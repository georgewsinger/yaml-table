goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__225616__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__225616 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__225617__i = 0, G__225617__a = new Array(arguments.length -  0);
while (G__225617__i < G__225617__a.length) {G__225617__a[G__225617__i] = arguments[G__225617__i + 0]; ++G__225617__i;}
  args = new cljs.core.IndexedSeq(G__225617__a,0);
} 
return G__225616__delegate.call(this,args);};
G__225616.cljs$lang$maxFixedArity = 0;
G__225616.cljs$lang$applyTo = (function (arglist__225618){
var args = cljs.core.seq(arglist__225618);
return G__225616__delegate(args);
});
G__225616.cljs$core$IFn$_invoke$arity$variadic = G__225616__delegate;
return G__225616;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__225619__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__225619 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__225620__i = 0, G__225620__a = new Array(arguments.length -  0);
while (G__225620__i < G__225620__a.length) {G__225620__a[G__225620__i] = arguments[G__225620__i + 0]; ++G__225620__i;}
  args = new cljs.core.IndexedSeq(G__225620__a,0);
} 
return G__225619__delegate.call(this,args);};
G__225619.cljs$lang$maxFixedArity = 0;
G__225619.cljs$lang$applyTo = (function (arglist__225621){
var args = cljs.core.seq(arglist__225621);
return G__225619__delegate(args);
});
G__225619.cljs$core$IFn$_invoke$arity$variadic = G__225619__delegate;
return G__225619;
})()
;

return null;
});
