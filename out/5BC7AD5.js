goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__169894__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__169894 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__169895__i = 0, G__169895__a = new Array(arguments.length -  0);
while (G__169895__i < G__169895__a.length) {G__169895__a[G__169895__i] = arguments[G__169895__i + 0]; ++G__169895__i;}
  args = new cljs.core.IndexedSeq(G__169895__a,0);
} 
return G__169894__delegate.call(this,args);};
G__169894.cljs$lang$maxFixedArity = 0;
G__169894.cljs$lang$applyTo = (function (arglist__169896){
var args = cljs.core.seq(arglist__169896);
return G__169894__delegate(args);
});
G__169894.cljs$core$IFn$_invoke$arity$variadic = G__169894__delegate;
return G__169894;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__169897__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__169897 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__169898__i = 0, G__169898__a = new Array(arguments.length -  0);
while (G__169898__i < G__169898__a.length) {G__169898__a[G__169898__i] = arguments[G__169898__i + 0]; ++G__169898__i;}
  args = new cljs.core.IndexedSeq(G__169898__a,0);
} 
return G__169897__delegate.call(this,args);};
G__169897.cljs$lang$maxFixedArity = 0;
G__169897.cljs$lang$applyTo = (function (arglist__169899){
var args = cljs.core.seq(arglist__169899);
return G__169897__delegate(args);
});
G__169897.cljs$core$IFn$_invoke$arity$variadic = G__169897__delegate;
return G__169897;
})()
;

return null;
});
