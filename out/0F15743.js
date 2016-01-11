goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__328887__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__328887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__328888__i = 0, G__328888__a = new Array(arguments.length -  0);
while (G__328888__i < G__328888__a.length) {G__328888__a[G__328888__i] = arguments[G__328888__i + 0]; ++G__328888__i;}
  args = new cljs.core.IndexedSeq(G__328888__a,0);
} 
return G__328887__delegate.call(this,args);};
G__328887.cljs$lang$maxFixedArity = 0;
G__328887.cljs$lang$applyTo = (function (arglist__328889){
var args = cljs.core.seq(arglist__328889);
return G__328887__delegate(args);
});
G__328887.cljs$core$IFn$_invoke$arity$variadic = G__328887__delegate;
return G__328887;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__328890__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__328890 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__328891__i = 0, G__328891__a = new Array(arguments.length -  0);
while (G__328891__i < G__328891__a.length) {G__328891__a[G__328891__i] = arguments[G__328891__i + 0]; ++G__328891__i;}
  args = new cljs.core.IndexedSeq(G__328891__a,0);
} 
return G__328890__delegate.call(this,args);};
G__328890.cljs$lang$maxFixedArity = 0;
G__328890.cljs$lang$applyTo = (function (arglist__328892){
var args = cljs.core.seq(arglist__328892);
return G__328890__delegate(args);
});
G__328890.cljs$core$IFn$_invoke$arity$variadic = G__328890__delegate;
return G__328890;
})()
;

return null;
});
