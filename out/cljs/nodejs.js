// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__154221__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__154221 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__154222__i = 0, G__154222__a = new Array(arguments.length -  0);
while (G__154222__i < G__154222__a.length) {G__154222__a[G__154222__i] = arguments[G__154222__i + 0]; ++G__154222__i;}
  args = new cljs.core.IndexedSeq(G__154222__a,0);
} 
return G__154221__delegate.call(this,args);};
G__154221.cljs$lang$maxFixedArity = 0;
G__154221.cljs$lang$applyTo = (function (arglist__154223){
var args = cljs.core.seq(arglist__154223);
return G__154221__delegate(args);
});
G__154221.cljs$core$IFn$_invoke$arity$variadic = G__154221__delegate;
return G__154221;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__154224__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__154224 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__154225__i = 0, G__154225__a = new Array(arguments.length -  0);
while (G__154225__i < G__154225__a.length) {G__154225__a[G__154225__i] = arguments[G__154225__i + 0]; ++G__154225__i;}
  args = new cljs.core.IndexedSeq(G__154225__a,0);
} 
return G__154224__delegate.call(this,args);};
G__154224.cljs$lang$maxFixedArity = 0;
G__154224.cljs$lang$applyTo = (function (arglist__154226){
var args = cljs.core.seq(arglist__154226);
return G__154224__delegate(args);
});
G__154224.cljs$core$IFn$_invoke$arity$variadic = G__154224__delegate;
return G__154224;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map