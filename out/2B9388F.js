goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__226508__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__226508 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__226509__i = 0, G__226509__a = new Array(arguments.length -  0);
while (G__226509__i < G__226509__a.length) {G__226509__a[G__226509__i] = arguments[G__226509__i + 0]; ++G__226509__i;}
  args = new cljs.core.IndexedSeq(G__226509__a,0);
} 
return G__226508__delegate.call(this,args);};
G__226508.cljs$lang$maxFixedArity = 0;
G__226508.cljs$lang$applyTo = (function (arglist__226510){
var args = cljs.core.seq(arglist__226510);
return G__226508__delegate(args);
});
G__226508.cljs$core$IFn$_invoke$arity$variadic = G__226508__delegate;
return G__226508;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__226511__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__226511 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__226512__i = 0, G__226512__a = new Array(arguments.length -  0);
while (G__226512__i < G__226512__a.length) {G__226512__a[G__226512__i] = arguments[G__226512__i + 0]; ++G__226512__i;}
  args = new cljs.core.IndexedSeq(G__226512__a,0);
} 
return G__226511__delegate.call(this,args);};
G__226511.cljs$lang$maxFixedArity = 0;
G__226511.cljs$lang$applyTo = (function (arglist__226513){
var args = cljs.core.seq(arglist__226513);
return G__226511__delegate(args);
});
G__226511.cljs$core$IFn$_invoke$arity$variadic = G__226511__delegate;
return G__226511;
})()
;

return null;
});
