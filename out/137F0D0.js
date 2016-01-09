goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__65317__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__65317 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65318__i = 0, G__65318__a = new Array(arguments.length -  0);
while (G__65318__i < G__65318__a.length) {G__65318__a[G__65318__i] = arguments[G__65318__i + 0]; ++G__65318__i;}
  args = new cljs.core.IndexedSeq(G__65318__a,0);
} 
return G__65317__delegate.call(this,args);};
G__65317.cljs$lang$maxFixedArity = 0;
G__65317.cljs$lang$applyTo = (function (arglist__65319){
var args = cljs.core.seq(arglist__65319);
return G__65317__delegate(args);
});
G__65317.cljs$core$IFn$_invoke$arity$variadic = G__65317__delegate;
return G__65317;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__65320__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__65320 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65321__i = 0, G__65321__a = new Array(arguments.length -  0);
while (G__65321__i < G__65321__a.length) {G__65321__a[G__65321__i] = arguments[G__65321__i + 0]; ++G__65321__i;}
  args = new cljs.core.IndexedSeq(G__65321__a,0);
} 
return G__65320__delegate.call(this,args);};
G__65320.cljs$lang$maxFixedArity = 0;
G__65320.cljs$lang$applyTo = (function (arglist__65322){
var args = cljs.core.seq(arglist__65322);
return G__65320__delegate(args);
});
G__65320.cljs$core$IFn$_invoke$arity$variadic = G__65320__delegate;
return G__65320;
})()
;

return null;
});
