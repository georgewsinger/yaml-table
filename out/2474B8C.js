goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__186435__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__186435 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__186436__i = 0, G__186436__a = new Array(arguments.length -  0);
while (G__186436__i < G__186436__a.length) {G__186436__a[G__186436__i] = arguments[G__186436__i + 0]; ++G__186436__i;}
  args = new cljs.core.IndexedSeq(G__186436__a,0);
} 
return G__186435__delegate.call(this,args);};
G__186435.cljs$lang$maxFixedArity = 0;
G__186435.cljs$lang$applyTo = (function (arglist__186437){
var args = cljs.core.seq(arglist__186437);
return G__186435__delegate(args);
});
G__186435.cljs$core$IFn$_invoke$arity$variadic = G__186435__delegate;
return G__186435;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__186438__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__186438 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__186439__i = 0, G__186439__a = new Array(arguments.length -  0);
while (G__186439__i < G__186439__a.length) {G__186439__a[G__186439__i] = arguments[G__186439__i + 0]; ++G__186439__i;}
  args = new cljs.core.IndexedSeq(G__186439__a,0);
} 
return G__186438__delegate.call(this,args);};
G__186438.cljs$lang$maxFixedArity = 0;
G__186438.cljs$lang$applyTo = (function (arglist__186440){
var args = cljs.core.seq(arglist__186440);
return G__186438__delegate(args);
});
G__186438.cljs$core$IFn$_invoke$arity$variadic = G__186438__delegate;
return G__186438;
})()
;

return null;
});
