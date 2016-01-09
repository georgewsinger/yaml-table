goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__162894__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__162894 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__162895__i = 0, G__162895__a = new Array(arguments.length -  0);
while (G__162895__i < G__162895__a.length) {G__162895__a[G__162895__i] = arguments[G__162895__i + 0]; ++G__162895__i;}
  args = new cljs.core.IndexedSeq(G__162895__a,0);
} 
return G__162894__delegate.call(this,args);};
G__162894.cljs$lang$maxFixedArity = 0;
G__162894.cljs$lang$applyTo = (function (arglist__162896){
var args = cljs.core.seq(arglist__162896);
return G__162894__delegate(args);
});
G__162894.cljs$core$IFn$_invoke$arity$variadic = G__162894__delegate;
return G__162894;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__162897__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__162897 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__162898__i = 0, G__162898__a = new Array(arguments.length -  0);
while (G__162898__i < G__162898__a.length) {G__162898__a[G__162898__i] = arguments[G__162898__i + 0]; ++G__162898__i;}
  args = new cljs.core.IndexedSeq(G__162898__a,0);
} 
return G__162897__delegate.call(this,args);};
G__162897.cljs$lang$maxFixedArity = 0;
G__162897.cljs$lang$applyTo = (function (arglist__162899){
var args = cljs.core.seq(arglist__162899);
return G__162897__delegate(args);
});
G__162897.cljs$core$IFn$_invoke$arity$variadic = G__162897__delegate;
return G__162897;
})()
;

return null;
});
