goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__167321__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__167321 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__167322__i = 0, G__167322__a = new Array(arguments.length -  0);
while (G__167322__i < G__167322__a.length) {G__167322__a[G__167322__i] = arguments[G__167322__i + 0]; ++G__167322__i;}
  args = new cljs.core.IndexedSeq(G__167322__a,0);
} 
return G__167321__delegate.call(this,args);};
G__167321.cljs$lang$maxFixedArity = 0;
G__167321.cljs$lang$applyTo = (function (arglist__167323){
var args = cljs.core.seq(arglist__167323);
return G__167321__delegate(args);
});
G__167321.cljs$core$IFn$_invoke$arity$variadic = G__167321__delegate;
return G__167321;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__167324__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__167324 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__167325__i = 0, G__167325__a = new Array(arguments.length -  0);
while (G__167325__i < G__167325__a.length) {G__167325__a[G__167325__i] = arguments[G__167325__i + 0]; ++G__167325__i;}
  args = new cljs.core.IndexedSeq(G__167325__a,0);
} 
return G__167324__delegate.call(this,args);};
G__167324.cljs$lang$maxFixedArity = 0;
G__167324.cljs$lang$applyTo = (function (arglist__167326){
var args = cljs.core.seq(arglist__167326);
return G__167324__delegate(args);
});
G__167324.cljs$core$IFn$_invoke$arity$variadic = G__167324__delegate;
return G__167324;
})()
;

return null;
});
