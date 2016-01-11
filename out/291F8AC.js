goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__230096__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__230096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__230097__i = 0, G__230097__a = new Array(arguments.length -  0);
while (G__230097__i < G__230097__a.length) {G__230097__a[G__230097__i] = arguments[G__230097__i + 0]; ++G__230097__i;}
  args = new cljs.core.IndexedSeq(G__230097__a,0);
} 
return G__230096__delegate.call(this,args);};
G__230096.cljs$lang$maxFixedArity = 0;
G__230096.cljs$lang$applyTo = (function (arglist__230098){
var args = cljs.core.seq(arglist__230098);
return G__230096__delegate(args);
});
G__230096.cljs$core$IFn$_invoke$arity$variadic = G__230096__delegate;
return G__230096;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__230099__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__230099 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__230100__i = 0, G__230100__a = new Array(arguments.length -  0);
while (G__230100__i < G__230100__a.length) {G__230100__a[G__230100__i] = arguments[G__230100__i + 0]; ++G__230100__i;}
  args = new cljs.core.IndexedSeq(G__230100__a,0);
} 
return G__230099__delegate.call(this,args);};
G__230099.cljs$lang$maxFixedArity = 0;
G__230099.cljs$lang$applyTo = (function (arglist__230101){
var args = cljs.core.seq(arglist__230101);
return G__230099__delegate(args);
});
G__230099.cljs$core$IFn$_invoke$arity$variadic = G__230099__delegate;
return G__230099;
})()
;

return null;
});
