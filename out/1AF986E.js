goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__163236__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__163236 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__163237__i = 0, G__163237__a = new Array(arguments.length -  0);
while (G__163237__i < G__163237__a.length) {G__163237__a[G__163237__i] = arguments[G__163237__i + 0]; ++G__163237__i;}
  args = new cljs.core.IndexedSeq(G__163237__a,0);
} 
return G__163236__delegate.call(this,args);};
G__163236.cljs$lang$maxFixedArity = 0;
G__163236.cljs$lang$applyTo = (function (arglist__163238){
var args = cljs.core.seq(arglist__163238);
return G__163236__delegate(args);
});
G__163236.cljs$core$IFn$_invoke$arity$variadic = G__163236__delegate;
return G__163236;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__163239__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__163239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__163240__i = 0, G__163240__a = new Array(arguments.length -  0);
while (G__163240__i < G__163240__a.length) {G__163240__a[G__163240__i] = arguments[G__163240__i + 0]; ++G__163240__i;}
  args = new cljs.core.IndexedSeq(G__163240__a,0);
} 
return G__163239__delegate.call(this,args);};
G__163239.cljs$lang$maxFixedArity = 0;
G__163239.cljs$lang$applyTo = (function (arglist__163241){
var args = cljs.core.seq(arglist__163241);
return G__163239__delegate(args);
});
G__163239.cljs$core$IFn$_invoke$arity$variadic = G__163239__delegate;
return G__163239;
})()
;

return null;
});
