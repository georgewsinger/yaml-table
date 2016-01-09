goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__131464__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__131464 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__131465__i = 0, G__131465__a = new Array(arguments.length -  0);
while (G__131465__i < G__131465__a.length) {G__131465__a[G__131465__i] = arguments[G__131465__i + 0]; ++G__131465__i;}
  args = new cljs.core.IndexedSeq(G__131465__a,0);
} 
return G__131464__delegate.call(this,args);};
G__131464.cljs$lang$maxFixedArity = 0;
G__131464.cljs$lang$applyTo = (function (arglist__131466){
var args = cljs.core.seq(arglist__131466);
return G__131464__delegate(args);
});
G__131464.cljs$core$IFn$_invoke$arity$variadic = G__131464__delegate;
return G__131464;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__131467__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__131467 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__131468__i = 0, G__131468__a = new Array(arguments.length -  0);
while (G__131468__i < G__131468__a.length) {G__131468__a[G__131468__i] = arguments[G__131468__i + 0]; ++G__131468__i;}
  args = new cljs.core.IndexedSeq(G__131468__a,0);
} 
return G__131467__delegate.call(this,args);};
G__131467.cljs$lang$maxFixedArity = 0;
G__131467.cljs$lang$applyTo = (function (arglist__131469){
var args = cljs.core.seq(arglist__131469);
return G__131467__delegate(args);
});
G__131467.cljs$core$IFn$_invoke$arity$variadic = G__131467__delegate;
return G__131467;
})()
;

return null;
});
