goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__168890__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__168890 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__168891__i = 0, G__168891__a = new Array(arguments.length -  0);
while (G__168891__i < G__168891__a.length) {G__168891__a[G__168891__i] = arguments[G__168891__i + 0]; ++G__168891__i;}
  args = new cljs.core.IndexedSeq(G__168891__a,0);
} 
return G__168890__delegate.call(this,args);};
G__168890.cljs$lang$maxFixedArity = 0;
G__168890.cljs$lang$applyTo = (function (arglist__168892){
var args = cljs.core.seq(arglist__168892);
return G__168890__delegate(args);
});
G__168890.cljs$core$IFn$_invoke$arity$variadic = G__168890__delegate;
return G__168890;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__168893__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__168893 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__168894__i = 0, G__168894__a = new Array(arguments.length -  0);
while (G__168894__i < G__168894__a.length) {G__168894__a[G__168894__i] = arguments[G__168894__i + 0]; ++G__168894__i;}
  args = new cljs.core.IndexedSeq(G__168894__a,0);
} 
return G__168893__delegate.call(this,args);};
G__168893.cljs$lang$maxFixedArity = 0;
G__168893.cljs$lang$applyTo = (function (arglist__168895){
var args = cljs.core.seq(arglist__168895);
return G__168893__delegate(args);
});
G__168893.cljs$core$IFn$_invoke$arity$variadic = G__168893__delegate;
return G__168893;
})()
;

return null;
});
