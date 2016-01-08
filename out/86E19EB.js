goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27664__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27664 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27665__i = 0, G__27665__a = new Array(arguments.length -  0);
while (G__27665__i < G__27665__a.length) {G__27665__a[G__27665__i] = arguments[G__27665__i + 0]; ++G__27665__i;}
  args = new cljs.core.IndexedSeq(G__27665__a,0);
} 
return G__27664__delegate.call(this,args);};
G__27664.cljs$lang$maxFixedArity = 0;
G__27664.cljs$lang$applyTo = (function (arglist__27666){
var args = cljs.core.seq(arglist__27666);
return G__27664__delegate(args);
});
G__27664.cljs$core$IFn$_invoke$arity$variadic = G__27664__delegate;
return G__27664;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27667__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27667 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27668__i = 0, G__27668__a = new Array(arguments.length -  0);
while (G__27668__i < G__27668__a.length) {G__27668__a[G__27668__i] = arguments[G__27668__i + 0]; ++G__27668__i;}
  args = new cljs.core.IndexedSeq(G__27668__a,0);
} 
return G__27667__delegate.call(this,args);};
G__27667.cljs$lang$maxFixedArity = 0;
G__27667.cljs$lang$applyTo = (function (arglist__27669){
var args = cljs.core.seq(arglist__27669);
return G__27667__delegate(args);
});
G__27667.cljs$core$IFn$_invoke$arity$variadic = G__27667__delegate;
return G__27667;
})()
;

return null;
});
