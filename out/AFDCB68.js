goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__149779__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__149779 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__149780__i = 0, G__149780__a = new Array(arguments.length -  0);
while (G__149780__i < G__149780__a.length) {G__149780__a[G__149780__i] = arguments[G__149780__i + 0]; ++G__149780__i;}
  args = new cljs.core.IndexedSeq(G__149780__a,0);
} 
return G__149779__delegate.call(this,args);};
G__149779.cljs$lang$maxFixedArity = 0;
G__149779.cljs$lang$applyTo = (function (arglist__149781){
var args = cljs.core.seq(arglist__149781);
return G__149779__delegate(args);
});
G__149779.cljs$core$IFn$_invoke$arity$variadic = G__149779__delegate;
return G__149779;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__149782__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__149782 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__149783__i = 0, G__149783__a = new Array(arguments.length -  0);
while (G__149783__i < G__149783__a.length) {G__149783__a[G__149783__i] = arguments[G__149783__i + 0]; ++G__149783__i;}
  args = new cljs.core.IndexedSeq(G__149783__a,0);
} 
return G__149782__delegate.call(this,args);};
G__149782.cljs$lang$maxFixedArity = 0;
G__149782.cljs$lang$applyTo = (function (arglist__149784){
var args = cljs.core.seq(arglist__149784);
return G__149782__delegate(args);
});
G__149782.cljs$core$IFn$_invoke$arity$variadic = G__149782__delegate;
return G__149782;
})()
;

return null;
});
