goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__132090__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__132090 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__132091__i = 0, G__132091__a = new Array(arguments.length -  0);
while (G__132091__i < G__132091__a.length) {G__132091__a[G__132091__i] = arguments[G__132091__i + 0]; ++G__132091__i;}
  args = new cljs.core.IndexedSeq(G__132091__a,0);
} 
return G__132090__delegate.call(this,args);};
G__132090.cljs$lang$maxFixedArity = 0;
G__132090.cljs$lang$applyTo = (function (arglist__132092){
var args = cljs.core.seq(arglist__132092);
return G__132090__delegate(args);
});
G__132090.cljs$core$IFn$_invoke$arity$variadic = G__132090__delegate;
return G__132090;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__132093__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__132093 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__132094__i = 0, G__132094__a = new Array(arguments.length -  0);
while (G__132094__i < G__132094__a.length) {G__132094__a[G__132094__i] = arguments[G__132094__i + 0]; ++G__132094__i;}
  args = new cljs.core.IndexedSeq(G__132094__a,0);
} 
return G__132093__delegate.call(this,args);};
G__132093.cljs$lang$maxFixedArity = 0;
G__132093.cljs$lang$applyTo = (function (arglist__132095){
var args = cljs.core.seq(arglist__132095);
return G__132093__delegate(args);
});
G__132093.cljs$core$IFn$_invoke$arity$variadic = G__132093__delegate;
return G__132093;
})()
;

return null;
});
