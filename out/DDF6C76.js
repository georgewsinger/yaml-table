goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45431__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45431 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45432__i = 0, G__45432__a = new Array(arguments.length -  0);
while (G__45432__i < G__45432__a.length) {G__45432__a[G__45432__i] = arguments[G__45432__i + 0]; ++G__45432__i;}
  args = new cljs.core.IndexedSeq(G__45432__a,0);
} 
return G__45431__delegate.call(this,args);};
G__45431.cljs$lang$maxFixedArity = 0;
G__45431.cljs$lang$applyTo = (function (arglist__45433){
var args = cljs.core.seq(arglist__45433);
return G__45431__delegate(args);
});
G__45431.cljs$core$IFn$_invoke$arity$variadic = G__45431__delegate;
return G__45431;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45434__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45434 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45435__i = 0, G__45435__a = new Array(arguments.length -  0);
while (G__45435__i < G__45435__a.length) {G__45435__a[G__45435__i] = arguments[G__45435__i + 0]; ++G__45435__i;}
  args = new cljs.core.IndexedSeq(G__45435__a,0);
} 
return G__45434__delegate.call(this,args);};
G__45434.cljs$lang$maxFixedArity = 0;
G__45434.cljs$lang$applyTo = (function (arglist__45436){
var args = cljs.core.seq(arglist__45436);
return G__45434__delegate(args);
});
G__45434.cljs$core$IFn$_invoke$arity$variadic = G__45434__delegate;
return G__45434;
})()
;

return null;
});
