goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__62086__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__62086 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62087__i = 0, G__62087__a = new Array(arguments.length -  0);
while (G__62087__i < G__62087__a.length) {G__62087__a[G__62087__i] = arguments[G__62087__i + 0]; ++G__62087__i;}
  args = new cljs.core.IndexedSeq(G__62087__a,0);
} 
return G__62086__delegate.call(this,args);};
G__62086.cljs$lang$maxFixedArity = 0;
G__62086.cljs$lang$applyTo = (function (arglist__62088){
var args = cljs.core.seq(arglist__62088);
return G__62086__delegate(args);
});
G__62086.cljs$core$IFn$_invoke$arity$variadic = G__62086__delegate;
return G__62086;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__62089__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__62089 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62090__i = 0, G__62090__a = new Array(arguments.length -  0);
while (G__62090__i < G__62090__a.length) {G__62090__a[G__62090__i] = arguments[G__62090__i + 0]; ++G__62090__i;}
  args = new cljs.core.IndexedSeq(G__62090__a,0);
} 
return G__62089__delegate.call(this,args);};
G__62089.cljs$lang$maxFixedArity = 0;
G__62089.cljs$lang$applyTo = (function (arglist__62091){
var args = cljs.core.seq(arglist__62091);
return G__62089__delegate(args);
});
G__62089.cljs$core$IFn$_invoke$arity$variadic = G__62089__delegate;
return G__62089;
})()
;

return null;
});
