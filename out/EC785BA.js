goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__274929__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__274929 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__274930__i = 0, G__274930__a = new Array(arguments.length -  0);
while (G__274930__i < G__274930__a.length) {G__274930__a[G__274930__i] = arguments[G__274930__i + 0]; ++G__274930__i;}
  args = new cljs.core.IndexedSeq(G__274930__a,0);
} 
return G__274929__delegate.call(this,args);};
G__274929.cljs$lang$maxFixedArity = 0;
G__274929.cljs$lang$applyTo = (function (arglist__274931){
var args = cljs.core.seq(arglist__274931);
return G__274929__delegate(args);
});
G__274929.cljs$core$IFn$_invoke$arity$variadic = G__274929__delegate;
return G__274929;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__274932__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__274932 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__274933__i = 0, G__274933__a = new Array(arguments.length -  0);
while (G__274933__i < G__274933__a.length) {G__274933__a[G__274933__i] = arguments[G__274933__i + 0]; ++G__274933__i;}
  args = new cljs.core.IndexedSeq(G__274933__a,0);
} 
return G__274932__delegate.call(this,args);};
G__274932.cljs$lang$maxFixedArity = 0;
G__274932.cljs$lang$applyTo = (function (arglist__274934){
var args = cljs.core.seq(arglist__274934);
return G__274932__delegate(args);
});
G__274932.cljs$core$IFn$_invoke$arity$variadic = G__274932__delegate;
return G__274932;
})()
;

return null;
});
