goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__135347__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__135347 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__135348__i = 0, G__135348__a = new Array(arguments.length -  0);
while (G__135348__i < G__135348__a.length) {G__135348__a[G__135348__i] = arguments[G__135348__i + 0]; ++G__135348__i;}
  args = new cljs.core.IndexedSeq(G__135348__a,0);
} 
return G__135347__delegate.call(this,args);};
G__135347.cljs$lang$maxFixedArity = 0;
G__135347.cljs$lang$applyTo = (function (arglist__135349){
var args = cljs.core.seq(arglist__135349);
return G__135347__delegate(args);
});
G__135347.cljs$core$IFn$_invoke$arity$variadic = G__135347__delegate;
return G__135347;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__135350__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__135350 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__135351__i = 0, G__135351__a = new Array(arguments.length -  0);
while (G__135351__i < G__135351__a.length) {G__135351__a[G__135351__i] = arguments[G__135351__i + 0]; ++G__135351__i;}
  args = new cljs.core.IndexedSeq(G__135351__a,0);
} 
return G__135350__delegate.call(this,args);};
G__135350.cljs$lang$maxFixedArity = 0;
G__135350.cljs$lang$applyTo = (function (arglist__135352){
var args = cljs.core.seq(arglist__135352);
return G__135350__delegate(args);
});
G__135350.cljs$core$IFn$_invoke$arity$variadic = G__135350__delegate;
return G__135350;
})()
;

return null;
});
