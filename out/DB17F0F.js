goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__88266__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__88266 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__88267__i = 0, G__88267__a = new Array(arguments.length -  0);
while (G__88267__i < G__88267__a.length) {G__88267__a[G__88267__i] = arguments[G__88267__i + 0]; ++G__88267__i;}
  args = new cljs.core.IndexedSeq(G__88267__a,0);
} 
return G__88266__delegate.call(this,args);};
G__88266.cljs$lang$maxFixedArity = 0;
G__88266.cljs$lang$applyTo = (function (arglist__88268){
var args = cljs.core.seq(arglist__88268);
return G__88266__delegate(args);
});
G__88266.cljs$core$IFn$_invoke$arity$variadic = G__88266__delegate;
return G__88266;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__88269__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__88269 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__88270__i = 0, G__88270__a = new Array(arguments.length -  0);
while (G__88270__i < G__88270__a.length) {G__88270__a[G__88270__i] = arguments[G__88270__i + 0]; ++G__88270__i;}
  args = new cljs.core.IndexedSeq(G__88270__a,0);
} 
return G__88269__delegate.call(this,args);};
G__88269.cljs$lang$maxFixedArity = 0;
G__88269.cljs$lang$applyTo = (function (arglist__88271){
var args = cljs.core.seq(arglist__88271);
return G__88269__delegate(args);
});
G__88269.cljs$core$IFn$_invoke$arity$variadic = G__88269__delegate;
return G__88269;
})()
;

return null;
});
