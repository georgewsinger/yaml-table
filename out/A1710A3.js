goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__222004__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__222004 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__222005__i = 0, G__222005__a = new Array(arguments.length -  0);
while (G__222005__i < G__222005__a.length) {G__222005__a[G__222005__i] = arguments[G__222005__i + 0]; ++G__222005__i;}
  args = new cljs.core.IndexedSeq(G__222005__a,0);
} 
return G__222004__delegate.call(this,args);};
G__222004.cljs$lang$maxFixedArity = 0;
G__222004.cljs$lang$applyTo = (function (arglist__222006){
var args = cljs.core.seq(arglist__222006);
return G__222004__delegate(args);
});
G__222004.cljs$core$IFn$_invoke$arity$variadic = G__222004__delegate;
return G__222004;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__222007__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__222007 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__222008__i = 0, G__222008__a = new Array(arguments.length -  0);
while (G__222008__i < G__222008__a.length) {G__222008__a[G__222008__i] = arguments[G__222008__i + 0]; ++G__222008__i;}
  args = new cljs.core.IndexedSeq(G__222008__a,0);
} 
return G__222007__delegate.call(this,args);};
G__222007.cljs$lang$maxFixedArity = 0;
G__222007.cljs$lang$applyTo = (function (arglist__222009){
var args = cljs.core.seq(arglist__222009);
return G__222007__delegate(args);
});
G__222007.cljs$core$IFn$_invoke$arity$variadic = G__222007__delegate;
return G__222007;
})()
;

return null;
});
