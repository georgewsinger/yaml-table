goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__152218__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__152218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__152219__i = 0, G__152219__a = new Array(arguments.length -  0);
while (G__152219__i < G__152219__a.length) {G__152219__a[G__152219__i] = arguments[G__152219__i + 0]; ++G__152219__i;}
  args = new cljs.core.IndexedSeq(G__152219__a,0);
} 
return G__152218__delegate.call(this,args);};
G__152218.cljs$lang$maxFixedArity = 0;
G__152218.cljs$lang$applyTo = (function (arglist__152220){
var args = cljs.core.seq(arglist__152220);
return G__152218__delegate(args);
});
G__152218.cljs$core$IFn$_invoke$arity$variadic = G__152218__delegate;
return G__152218;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__152221__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__152221 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__152222__i = 0, G__152222__a = new Array(arguments.length -  0);
while (G__152222__i < G__152222__a.length) {G__152222__a[G__152222__i] = arguments[G__152222__i + 0]; ++G__152222__i;}
  args = new cljs.core.IndexedSeq(G__152222__a,0);
} 
return G__152221__delegate.call(this,args);};
G__152221.cljs$lang$maxFixedArity = 0;
G__152221.cljs$lang$applyTo = (function (arglist__152223){
var args = cljs.core.seq(arglist__152223);
return G__152221__delegate(args);
});
G__152221.cljs$core$IFn$_invoke$arity$variadic = G__152221__delegate;
return G__152221;
})()
;

return null;
});
