goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__71088__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__71088 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71089__i = 0, G__71089__a = new Array(arguments.length -  0);
while (G__71089__i < G__71089__a.length) {G__71089__a[G__71089__i] = arguments[G__71089__i + 0]; ++G__71089__i;}
  args = new cljs.core.IndexedSeq(G__71089__a,0);
} 
return G__71088__delegate.call(this,args);};
G__71088.cljs$lang$maxFixedArity = 0;
G__71088.cljs$lang$applyTo = (function (arglist__71090){
var args = cljs.core.seq(arglist__71090);
return G__71088__delegate(args);
});
G__71088.cljs$core$IFn$_invoke$arity$variadic = G__71088__delegate;
return G__71088;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__71091__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__71091 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71092__i = 0, G__71092__a = new Array(arguments.length -  0);
while (G__71092__i < G__71092__a.length) {G__71092__a[G__71092__i] = arguments[G__71092__i + 0]; ++G__71092__i;}
  args = new cljs.core.IndexedSeq(G__71092__a,0);
} 
return G__71091__delegate.call(this,args);};
G__71091.cljs$lang$maxFixedArity = 0;
G__71091.cljs$lang$applyTo = (function (arglist__71093){
var args = cljs.core.seq(arglist__71093);
return G__71091__delegate(args);
});
G__71091.cljs$core$IFn$_invoke$arity$variadic = G__71091__delegate;
return G__71091;
})()
;

return null;
});
