// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__165415__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__165415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__165416__i = 0, G__165416__a = new Array(arguments.length -  0);
while (G__165416__i < G__165416__a.length) {G__165416__a[G__165416__i] = arguments[G__165416__i + 0]; ++G__165416__i;}
  args = new cljs.core.IndexedSeq(G__165416__a,0);
} 
return G__165415__delegate.call(this,args);};
G__165415.cljs$lang$maxFixedArity = 0;
G__165415.cljs$lang$applyTo = (function (arglist__165417){
var args = cljs.core.seq(arglist__165417);
return G__165415__delegate(args);
});
G__165415.cljs$core$IFn$_invoke$arity$variadic = G__165415__delegate;
return G__165415;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__165418__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__165418 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__165419__i = 0, G__165419__a = new Array(arguments.length -  0);
while (G__165419__i < G__165419__a.length) {G__165419__a[G__165419__i] = arguments[G__165419__i + 0]; ++G__165419__i;}
  args = new cljs.core.IndexedSeq(G__165419__a,0);
} 
return G__165418__delegate.call(this,args);};
G__165418.cljs$lang$maxFixedArity = 0;
G__165418.cljs$lang$applyTo = (function (arglist__165420){
var args = cljs.core.seq(arglist__165420);
return G__165418__delegate(args);
});
G__165418.cljs$core$IFn$_invoke$arity$variadic = G__165418__delegate;
return G__165418;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map