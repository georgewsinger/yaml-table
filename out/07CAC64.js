goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__250993__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__250993 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__250994__i = 0, G__250994__a = new Array(arguments.length -  0);
while (G__250994__i < G__250994__a.length) {G__250994__a[G__250994__i] = arguments[G__250994__i + 0]; ++G__250994__i;}
  args = new cljs.core.IndexedSeq(G__250994__a,0);
} 
return G__250993__delegate.call(this,args);};
G__250993.cljs$lang$maxFixedArity = 0;
G__250993.cljs$lang$applyTo = (function (arglist__250995){
var args = cljs.core.seq(arglist__250995);
return G__250993__delegate(args);
});
G__250993.cljs$core$IFn$_invoke$arity$variadic = G__250993__delegate;
return G__250993;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__250996__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__250996 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__250997__i = 0, G__250997__a = new Array(arguments.length -  0);
while (G__250997__i < G__250997__a.length) {G__250997__a[G__250997__i] = arguments[G__250997__i + 0]; ++G__250997__i;}
  args = new cljs.core.IndexedSeq(G__250997__a,0);
} 
return G__250996__delegate.call(this,args);};
G__250996.cljs$lang$maxFixedArity = 0;
G__250996.cljs$lang$applyTo = (function (arglist__250998){
var args = cljs.core.seq(arglist__250998);
return G__250996__delegate(args);
});
G__250996.cljs$core$IFn$_invoke$arity$variadic = G__250996__delegate;
return G__250996;
})()
;

return null;
});
