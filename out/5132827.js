goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__254238__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__254238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__254239__i = 0, G__254239__a = new Array(arguments.length -  0);
while (G__254239__i < G__254239__a.length) {G__254239__a[G__254239__i] = arguments[G__254239__i + 0]; ++G__254239__i;}
  args = new cljs.core.IndexedSeq(G__254239__a,0);
} 
return G__254238__delegate.call(this,args);};
G__254238.cljs$lang$maxFixedArity = 0;
G__254238.cljs$lang$applyTo = (function (arglist__254240){
var args = cljs.core.seq(arglist__254240);
return G__254238__delegate(args);
});
G__254238.cljs$core$IFn$_invoke$arity$variadic = G__254238__delegate;
return G__254238;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__254241__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__254241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__254242__i = 0, G__254242__a = new Array(arguments.length -  0);
while (G__254242__i < G__254242__a.length) {G__254242__a[G__254242__i] = arguments[G__254242__i + 0]; ++G__254242__i;}
  args = new cljs.core.IndexedSeq(G__254242__a,0);
} 
return G__254241__delegate.call(this,args);};
G__254241.cljs$lang$maxFixedArity = 0;
G__254241.cljs$lang$applyTo = (function (arglist__254243){
var args = cljs.core.seq(arglist__254243);
return G__254241__delegate(args);
});
G__254241.cljs$core$IFn$_invoke$arity$variadic = G__254241__delegate;
return G__254241;
})()
;

return null;
});
