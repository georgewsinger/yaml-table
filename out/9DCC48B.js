goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__156946__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__156946 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__156947__i = 0, G__156947__a = new Array(arguments.length -  0);
while (G__156947__i < G__156947__a.length) {G__156947__a[G__156947__i] = arguments[G__156947__i + 0]; ++G__156947__i;}
  args = new cljs.core.IndexedSeq(G__156947__a,0);
} 
return G__156946__delegate.call(this,args);};
G__156946.cljs$lang$maxFixedArity = 0;
G__156946.cljs$lang$applyTo = (function (arglist__156948){
var args = cljs.core.seq(arglist__156948);
return G__156946__delegate(args);
});
G__156946.cljs$core$IFn$_invoke$arity$variadic = G__156946__delegate;
return G__156946;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__156949__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__156949 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__156950__i = 0, G__156950__a = new Array(arguments.length -  0);
while (G__156950__i < G__156950__a.length) {G__156950__a[G__156950__i] = arguments[G__156950__i + 0]; ++G__156950__i;}
  args = new cljs.core.IndexedSeq(G__156950__a,0);
} 
return G__156949__delegate.call(this,args);};
G__156949.cljs$lang$maxFixedArity = 0;
G__156949.cljs$lang$applyTo = (function (arglist__156951){
var args = cljs.core.seq(arglist__156951);
return G__156949__delegate(args);
});
G__156949.cljs$core$IFn$_invoke$arity$variadic = G__156949__delegate;
return G__156949;
})()
;

return null;
});
