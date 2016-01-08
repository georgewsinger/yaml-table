goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22409__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22409 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22410__i = 0, G__22410__a = new Array(arguments.length -  0);
while (G__22410__i < G__22410__a.length) {G__22410__a[G__22410__i] = arguments[G__22410__i + 0]; ++G__22410__i;}
  args = new cljs.core.IndexedSeq(G__22410__a,0);
} 
return G__22409__delegate.call(this,args);};
G__22409.cljs$lang$maxFixedArity = 0;
G__22409.cljs$lang$applyTo = (function (arglist__22411){
var args = cljs.core.seq(arglist__22411);
return G__22409__delegate(args);
});
G__22409.cljs$core$IFn$_invoke$arity$variadic = G__22409__delegate;
return G__22409;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22412__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22412 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22413__i = 0, G__22413__a = new Array(arguments.length -  0);
while (G__22413__i < G__22413__a.length) {G__22413__a[G__22413__i] = arguments[G__22413__i + 0]; ++G__22413__i;}
  args = new cljs.core.IndexedSeq(G__22413__a,0);
} 
return G__22412__delegate.call(this,args);};
G__22412.cljs$lang$maxFixedArity = 0;
G__22412.cljs$lang$applyTo = (function (arglist__22414){
var args = cljs.core.seq(arglist__22414);
return G__22412__delegate(args);
});
G__22412.cljs$core$IFn$_invoke$arity$variadic = G__22412__delegate;
return G__22412;
})()
;

return null;
});
